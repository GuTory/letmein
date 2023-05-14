import {ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {EventService} from "../../../service/event/event.service";
import {Event} from "../../../model/event";
import {Router} from "@angular/router";
import {PathMap} from "../../../app-routing.module";
import {ApplicationService} from "../../../service/application/application.service";
import {AuthService} from "../../../auth/auth.service";
import {HttpResponseHandlerService} from "../../../service/http-response-handler/http-response-handler.service";
import {ApplicationDTO} from "../../../dto/applicationDTO";
import {Refreshable} from "../../../service/refreshable";
import {UserService} from "../../../service/user/user.service";
import {WebsocketService} from "../../../service/websocket/websocket.service";

@Component({
    selector: 'app-event-details',
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit, Refreshable {

    event: Event;

    message: string | undefined;

    currentimage: string | undefined;

    constructor(private eventService: EventService,
                private applicationService: ApplicationService,
                private userService: UserService,
                public auth: AuthService,
                private httpResponseHandlerService: HttpResponseHandlerService,
                private webSocketService: WebsocketService,
                private router: Router,
                private cdr: ChangeDetectorRef) {
    }


    refresh(application: ApplicationDTO): void {
        console.log("Received message username: " + application.username);
        if (this.event.id === application.eventId) {
            this.userService.getUserByEmail(application.username).subscribe({
                next: (user) => {
                    if (!this.event.attendees.find(u => u.email === user.email)){
                        this.event.attendees.push(user);
                        this.cdr.detectChanges();
                    }
                },
                error: (error) => {
                    //console.log(error);
                }
            });
        }
    }

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

    apply() {
        const newApplication: ApplicationDTO = {
            status: "pending",
            paymentmethod: "Cash",
            username: this.auth.getEmail()!!,
            eventId: this.event.id!!
        };
        this.applicationService.saveApplication(newApplication).subscribe({
            next: (res) => {
                this.message = this.httpResponseHandlerService.handleEventDetailsResponse(res, newApplication.username);
                console.log("next")
            },
            error: (error) => {
                this.message = this.httpResponseHandlerService.handleEventDetailsResponse(error, newApplication.username);
            }
        });
        this.webSocketService.sendMessage(newApplication);
    }

    removeMessage() {
        this.message = undefined;
    }

    deleteEvent(id: string): void {
        if (!this.isDisabled()) {
            this.eventService.deleteEvent(id).subscribe({
                next: (data) => {
                    this.router.navigate([PathMap.eventsPath]);
                }
            });
        }
    }

    isDisabled() {
        return this.event.organizers[0].email !== this.auth.getEmail();
    }
}
