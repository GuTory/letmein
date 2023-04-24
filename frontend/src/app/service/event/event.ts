import { Observable } from "rxjs";
import { Event } from "../../model/event";
import {EventDTO} from "../../dto/eventDTO";

export interface EventServiceInterface {

    baseUrl: string;

    saveEvent(event: EventDTO): void;

    updateEvent(event: Event): Observable<Event>;

    deleteEvent(id: string): void;

    getEvents(): Observable<Event[]>;

    getEventById(id: string): Observable<Event>;

    getAllEventsByOrganizer(organizer: string): Observable<Event[]>;

    getAllEventsByVenue(venue: string): Observable<Event[]>;
}
