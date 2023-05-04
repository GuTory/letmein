import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {EventServiceInterface} from './event';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {environment} from "../../../environments/environment.development";
import {Event} from "../../model/event";
import {EventDTO} from "../../dto/eventDTO";

@Injectable({
    providedIn: 'root',
})
export class EventService implements EventServiceInterface {

    baseUrl = environment.eventUrl;

    constructor(private http: HttpClient) {
    }

    saveEvent(event: EventDTO): Observable<Observable<HttpResponse<any>>> {
        const file: File = event.image!!;

        return this.http.post<Observable<HttpResponse<any>>>(this.baseUrl + '/', event);
    }

    updateEvent(event: Event): Observable<Event> {
        return this.http.put<Event>(this.baseUrl + '/', event);
    }

    deleteEvent(id: string): Observable<Event> {
        return this.http.delete<Event>(this.baseUrl + '/' + id);
    }

    getEvents(): Observable<Event[]> {
        return this.http.get<Event[]>(this.baseUrl + '/');
    }

    getEventById(id: string): Observable<Event> {
        return this.http.get<Event>(this.baseUrl + '/' + id);
    }

    //TODO: hogy kell paraméterezni? body vagy path?
    getAllEventsByOrganizer(organizer: string): Observable<Event[]> {
        return this.http.get<Event[]>(this.baseUrl + '/organizer/' + organizer);
    }

    //TODO: hogy kell paraméterezni? body vagy path?
    getAllEventsByVenue(venue: string): Observable<Event[]> {
        return this.http.get<Event[]>(this.baseUrl + '/venue/' + venue);
    }
}
