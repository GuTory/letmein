import {Component, Input, OnInit} from '@angular/core';
import {EventService} from "../../../service/event/event.service";
import {Event} from "../../../model/event";
import {Router} from "@angular/router";
import {PathMap} from "../../../app-routing.module";
import {ApplicationService} from "../../../service/application/application.service";
import {ApplicationStatus} from "../../../model/applicationstatus";
import {AuthService} from "../../../auth/auth.service";
import {HttpResponseHandlerService} from "../../../service/http-response-handler/http-response-handler.service";

@Component({
    selector: 'app-event-details',
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

    event: Event;

    message: string | undefined;

    currentimage: string | undefined;

    constructor(private eventService: EventService,
                private applicationService: ApplicationService,
                public auth: AuthService,
                private HttpResponseHandlerService: HttpResponseHandlerService,
                private router: Router) {
    }

    ngOnInit(): void {
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
        this.applicationService.saveApplication({
            status: ApplicationStatus.pending,
            paymentmethod: "Cash",
            username: this.auth.getEmail()!!,
            eventId: this.event.id!!
        }).subscribe({
            next: (res) => {
                this.message = this.HttpResponseHandlerService.handleEventDetailsResponse(res);
                console.log(this.message)
            },
            error: (error) => {
                this.message = this.HttpResponseHandlerService.handleEventDetailsResponse(error);
            }
        });
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
