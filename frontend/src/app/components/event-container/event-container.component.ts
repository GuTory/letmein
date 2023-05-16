import {Component, OnInit} from '@angular/core';
import {EventService} from "../../service/event/event.service";
import {Event} from "../../model/event";

/**
 * Component showing event list
 */
@Component({
    selector: 'app-event-container',
    templateUrl: './event-container.component.html',
    styleUrls: ['./event-container.component.scss']
})
export class EventContainerComponent implements OnInit {

    /**
     * List of events
     */
    events: Event[] = [];

    /**
     * Injecting all the necessary dependencies
     * @param eventService
     */
    constructor(private eventService: EventService) {
    }

    /**
     * fetching events from backend when initializing component
     */
    ngOnInit(): void {
        this.getEvents();
    }

    /**
     * fetching events from backend
     */
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
}
