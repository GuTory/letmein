import {Component, Input, OnInit} from '@angular/core';
import {EventService} from "../../../service/event/event.service";
import {Event} from "../../../model/event";
import {Router} from "@angular/router";
import {PathMap} from "../../../app-routing.module";
import {ApplicationService} from "../../../service/application/application.service";
import {ApplicationDTO} from "../../../dto/applicationDTO";
import {ApplicationStatus} from "../../../model/applicationstatus";
import {AuthService} from "../../../auth/auth.service";

@Component({
    selector: 'app-event-details',
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

    event: Event;

    message: string | undefined;

    constructor(private eventService: EventService,
                private applicationService: ApplicationService,
                public auth: AuthService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.eventService.getEventById(this.router.url.substring(
            this.router.url.lastIndexOf('/') + 1
        )).subscribe({
            next: (event) => {
                this.event = event;
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
            username: this.auth.email,
            eventId: this.event.id!!
        }).subscribe({
            next: (res) => {
                switch (res.status) {
                    case 201: {
                        this.message = "Application sent. Status: pending";
                        break;
                    }
                }
                console.log(this.message)
            },
            error: (error) => {
                switch (error.status) {
                    case 400: {
                        this.message = "Application failed";
                        break;
                    }
                    case 403: {
                        this.message = "Registration is closed";
                        break;
                    }
                    case 409: {
                        this.message = "You already applied for this event";
                    }
                }
            }
        });
    }

    removeMessage(){
        this.message = undefined;
    }

    deleteEvent(id: string): void {
        if(!this.isDisabled()) {
            this.eventService.deleteEvent(id).subscribe({
                next: (data) => {
                    this.router.navigate([PathMap.eventsPath]);
                }
            });
        }
    }

    isDisabled(){
        return this.event.organizers[0].email !== this.auth.email;
    }
}
