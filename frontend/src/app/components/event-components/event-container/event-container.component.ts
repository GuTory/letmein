import { Component } from '@angular/core';
import {EventService} from "../../../service/event/event.service";
import {Event} from "../../../model/event";

@Component({
  selector: 'app-event-container',
  templateUrl: './event-container.component.html',
  styleUrls: ['./event-container.component.scss']
})
export class EventContainerComponent {

    columns = 0;

    events: Event[] = [];

    constructor(private eventService: EventService) { }

    ngOnInit(): void {
        this.getEvents();
    }

    saveEvent(event: Event): void {
        this.eventService.saveEvent(event);
    }

    updateEvent(event: Event): void {
        let index = this.events.indexOf(event);
        this.eventService.updateEvent(event).subscribe({
            next: (data) => {
                this.events[index] = data;
            },
            error: (err: Error) => {
                console.log("Error updating Event: " + err);
            }
        });
    }

    deleteEvent(id: string): void {
        let index: number;
        this.events.forEach(event => {
            if (event.id === id)
                index = this.events.indexOf(event);
        })
        this.eventService.deleteEvent(id).subscribe({
            next: (data) => {
                this.events.splice(index, 1);
            },
            error: (err: Error) => {
                console.log("Error deleting Event: " + err);
            }
        });
    }

    getEvents(): void {
        this.eventService.getEvents().subscribe({
            next: (data) => {
                this.events = data;
            },
            error: (err: Error) => {
                console.log("Error getting Events: " + err);
            }
        });
    }

    getEventById(id: string): void {
        this.eventService.getEventById(id).subscribe({
            next: (data) => {
                this.events = [data];
            },
            error: (err: Error) => {
                console.log("Error getting Event by id: " + err);
            }
        });
    }

    getAllEventsByOrganizer(organizer: string): void {
        this.eventService.getAllEventsByOrganizer(organizer).subscribe({
            next: (data) => {
                this.events = data;
            },
            error: (err: Error) => {
                console.log("Error getting Events by organizer: " + err);
            }
        });
    }

    getAllEventsByVenue(venue: string): void {
        this.eventService.getAllEventsByVenue(venue).subscribe({
            next: (data) => {
                this.events = data;
            },
            error: (err: Error) => {
                console.log("Error getting Events by venue: " + err);
            }
        });
    }
}
