import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventServiceInterface } from './interfaces/event';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class EventService implements EventServiceInterface {

  baseUrl = 'http://localhost:8080/api/events';

    constructor(private http: HttpClient) {}

    saveEvent(event: Event): void {
      this.http.post(this.baseUrl, event);
    }

    updateEvent(event: Event): void{
      this.http.put(this.baseUrl, event);
    }

    deleteEvent(id: string): void{
      this.http.delete(this.baseUrl + '/' + id);
    }

    getEvents(): Observable<Event[]>{
      return this.http.get<Event[]>(this.baseUrl);
    }

    getEventById(id: string): Observable<Event>{
      return this.http.get<Event>(this.baseUrl + '/' + id);
    }

    //TODO: hogy kell paraméterezni? body vagy path?
    getAllEventsByOrganizer(organizer: string): Observable<Event[]>{
      return this.http.get<Event[]>(this.baseUrl + '/organizer/' + organizer);
    }

    //TODO: hogy kell paraméterezni? body vagy path?
    getAllEventsByVenue(venue: string): Observable<Event[]>{
      return this.http.get<Event[]>(this.baseUrl + '/venue/' + venue);
    }
}
