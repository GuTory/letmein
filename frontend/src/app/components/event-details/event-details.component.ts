import {ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {EventService} from "../../service/event/event.service";
import {Event} from "../../model/event";
import {Router} from "@angular/router";
import {PathMap} from "../../app-routing.module";
import {ApplicationService} from "../../service/application/application.service";
import {AuthService} from "../../auth/auth.service";
import {HttpResponseHandlerService} from "../../service/http-response-handler/http-response-handler.service";
import {ApplicationDTO} from "../../dto/applicationDTO";
import {Refreshable} from "../../service/websocket/refreshable";
import {UserService} from "../../service/user/user.service";
import {WebsocketService} from "../../service/websocket/websocket.service";

/**
 * Component showing event details
 */
@Component({
    selector: 'app-event-details',
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit, Refreshable, OnDestroy {

    /**
     * The event to be displayed
     */
    event: Event;

    /**
     * messages from http requests
     */
    message: string | undefined;

    /**
     * saving application success flag
     */
    success = false;

    /**
     * Image of event
     */
    currentimage: string | undefined;

    /**
     * Injecting all the necessary dependencies
     * @param eventService
     * @param applicationService
     * @param userService
     * @param auth
     * @param httpResponseHandlerService
     * @param webSocketService
     * @param router
     * @param cdr
     */
    constructor(private eventService: EventService,
                private applicationService: ApplicationService,
                private userService: UserService,
                public auth: AuthService,
                private httpResponseHandlerService: HttpResponseHandlerService,
                private webSocketService: WebsocketService,
                private router: Router,
                private cdr: ChangeDetectorRef) {
    }

    /**
     * initializing component
     * - opening websocket
     * - fetching data
     */
    ngOnInit(): void {
        this.webSocketService.openConnection(this);
        this.eventService.getEventById(this.router.url.substring(
            this.router.url.lastIndexOf('/') + 1
        )).subscribe({
            next: (event) => {
                this.event = event;

                if (this.event.imagePath) {
                    this.currentimage = this.event.imagePath.split("\\backend\\src\\main\\resources\\static\\images\\")[1];
                }
            },
            error: (error) => {
                console.log(error);
            }
        });
    }

    /**
     * Refreshing UI when websocket message arrives
     * @param application
     */
    refresh(application: ApplicationDTO): void {
        if (this.event.id === application.eventId) {
            this.userService.getUserByEmail(application.username).subscribe({
                next: (user) => {
                    console.log(this.event.attendees);
                    switch (application.isCreated) {
                        case true:
                            if (!this.event.attendees.find(u => u.email === user.email)) {
                                console.log("adding user");
                                this.event.attendees.push(user);
                                this.cdr.detectChanges();
                            }
                            break;
                        case false:
                            if (this.event.attendees.find(u => u.email === user.email)) {
                                console.log("removing user");
                                this.event.attendees.splice(this.event.attendees.indexOf(user), 1);
                                this.cdr.detectChanges();
                            }
                            break;
                    }
                },
                error: (error) => {
                }
            });
        }
    }

    /**
     * Submit application
     */
    apply() {
        const newApplication: ApplicationDTO = {
            status: "pending",
            paymentmethod: "Cash",
            username: this.auth.getEmail()!!,
            eventId: this.event.id!!,
            isCreated: true
        };
        this.applicationService.saveApplication(newApplication).subscribe({
            next: (res) => {
                this.message = this.httpResponseHandlerService.handleEventDetailsResponse(res, this.auth.getEmail()!!);
                this.success = true;
                this.webSocketService.sendMessage(newApplication);
            },
            error: (error) => {
                this.message = this.httpResponseHandlerService.handleEventDetailsResponse(error, this.auth.getEmail()!!);
                this.success = false;
            }
        });
    }

    hasApplied(): boolean {
        return this.event.attendees.find(u => u.email === this.auth.getEmail()!!) !== undefined;
    }

    declineApplication() {
        const deletedApplication: ApplicationDTO = {
            status: "pending",
            paymentmethod: "Cash",
            username: this.auth.getEmail()!!,
            eventId: this.event.id!!,
            isCreated: false
        };
        this.applicationService.deleteApplication(deletedApplication).subscribe({
            next: (data) => {
                this.webSocketService.sendMessage(deletedApplication);
            },
            error: (error) => {
            }
        });
    }

    /**
     * Removing application feedback from UI
     */
    removeMessage() {
        this.message = undefined;
    }

    /**
     * deleting event
     * @param id
     */
    deleteEvent(id: string): void {
        if (!this.isAbleToDelete()) {
            this.eventService.deleteEvent(id).subscribe({
                next: (data) => {
                    this.router.navigate([PathMap.eventsPath]);
                }
            });
        }
    }

    isAbleToDelete() {
        return this.event.organizers[0].email !== this.auth.getEmail();
    }

    /**
     * when destroying component closing down websocket connection
     */
    ngOnDestroy(): void {
        this.webSocketService.closeConnection(this);
    }

}
