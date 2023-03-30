import {Component, OnInit} from '@angular/core';
import {EventService} from "../../service/event/event.service";
import {Event} from "../../model/event";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit{

    events: Event[] = [];

    constructor(private eventService: EventService) {}

    ngOnInit(): void {
    }

    saveEvent(event: Event): void {
        this.eventService.saveEvent(event);
    }

    updateEvent(event: Event): void {
        this.eventService.updateEvent(event);
        //TODO: redirect to event page or not null return on service
    }

    deleteEvent(id: string): void {
        this.eventService.deleteEvent(id);
    }

    getEvents(): void {
        this.eventService.getEvents().subscribe(
            {
                next: (data) => this.events = data,
                error: (err: Error) => {
                    console.log("Error getting events: " + err);
                }
            });
    }

    getEventById(id: string): void {
        this.eventService.getEventById(id).subscribe({
            next: data => {
                this.events = [data];
            },
            error: (err: Error) => {
                console.log("Error getting event: " + err);
            }
        });
    }

    getEventsByOrganizer(organizer: string): void {
        this.eventService.getAllEventsByOrganizer(organizer).subscribe({
            next: data => {
                this.events = data;
            },
            error: (err: Error) => {
                console.log("Error getting events: " + err);
            }
        });
    }

    getEventsByVenue(venue: string): void {
        this.eventService.getAllEventsByVenue(venue).subscribe({
            next: data => {
                this.events = data;
            },
            error: (err: Error) => {
                console.log("Error getting events: " + err);
            }
        });
    }
}
