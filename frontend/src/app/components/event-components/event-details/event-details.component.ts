import {Component, Input, OnInit} from '@angular/core';
import {EventService} from "../../../service/event/event.service";
import {Event} from "../../../model/event";
import {Router} from "@angular/router";
import {PathMap} from "../../../app-routing.module";

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

    event: Event;

    constructor(private eventService: EventService,
                private router: Router) { }

    ngOnInit(): void {
        this.eventService.getEventById(this.router.url.substring(
            this.router.url.lastIndexOf('/') + 1
        )).subscribe({
            next: (event) => {
                this.event = event;
                console.log(this.event);
            },
            error: (error) => {
                console.log(error);
            }
        });
    }

    deleteEvent(id: string): void {
        this.eventService.deleteEvent(id).subscribe({
            next: (data) => {
                this.router.navigate([PathMap.eventsPath]);
            }
        });
    }
}
