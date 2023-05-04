import { Observable } from "rxjs";
import { Event } from "../../model/event";
import {EventDTO} from "../../dto/eventDTO";
import {HttpResponse} from "@angular/common/http";

export interface EventServiceInterface {

    baseUrl: string;

    saveEvent(event: EventDTO): Observable<Observable<HttpResponse<any>>>;

    updateEvent(event: Event): Observable<Event>;

    deleteEvent(id: string): void;

    getEvents(): Observable<Event[]>;

    getEventById(id: string): Observable<Event>;

    getAllEventsByOrganizer(organizer: string): Observable<Event[]>;

    getAllEventsByVenue(venue: string): Observable<Event[]>;
}
