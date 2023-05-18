import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {environment} from "../../../environments/environment.development";
import {Event} from "../../model/event";
import {EventDTO} from "../../dto/eventDTO";

/**
 * This service handles the HTTP requests for events.
 */
@Injectable({
    providedIn: 'root',
})
export class EventService {

    /**
     * The base URL for the HTTP requests.
     */
    baseUrl = environment.eventUrl;

    constructor(private http: HttpClient) {
    }

    /**
     * Saves an event.
     * @param event
     */
    saveEvent(event: EventDTO): Observable<Observable<HttpResponse<any>>> {
        return this.http.post<Observable<HttpResponse<any>>>(this.baseUrl + '/', event);
    }

    /**
     * Updates an event.
     * @param event
     */
    updateEvent(event: Event): Observable<Event> {
        return this.http.put<Event>(this.baseUrl + '/', event);
    }

    /**
     * Deletes an event.
     * @param id
     */
    deleteEvent(id: string): Observable<HttpResponse<any>> {
        return this.http.delete(this.baseUrl + '/' + id, {observe: 'response'});
    }

    /**
     * Gets all events.
     */
    getEvents(): Observable<Event[]> {
        return this.http.get<Event[]>(this.baseUrl + '/');
    }

    /**
     * Gets an event by its ID.
     * @param id
     */
    getEventById(id: string): Observable<Event> {
        return this.http.get<Event>(this.baseUrl + '/' + id);
    }

    /**
     * Gets all events by their name.
     * @param organizer
     */
    getAllEventsByOrganizer(organizer: string): Observable<Event[]> {
        return this.http.get<Event[]>(this.baseUrl + '/organizer/' + organizer);
    }

    /**
     * Gets all events by their name.
     * @param venue
     */
    getAllEventsByVenue(venue: string): Observable<Event[]> {
        return this.http.get<Event[]>(this.baseUrl + '/venue/' + venue);
    }
}
