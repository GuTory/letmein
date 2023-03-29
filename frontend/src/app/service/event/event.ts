import { Observable } from "rxjs";

export interface EventServiceInterface {

    baseUrl: string;

    saveEvent(event: Event): void;

    updateEvent(event: Event): void;

    deleteEvent(id: string): void;

    getEvents(): Observable<Event[]>;

    getEventById(id: string): Observable<Event>;

    getAllEventsByOrganizer(organizer: string): Observable<Event[]>;

    getAllEventsByVenue(venue: string): Observable<Event[]>;
}
