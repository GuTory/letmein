import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Application} from '../../model/application';
import {ApplicationServiceInterface} from './application';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {environment} from "../../../environments/environment.development";
import {ApplicationDTO} from "../../dto/applicationDTO";

@Injectable({
    providedIn: 'root'
})
export class ApplicationService implements ApplicationServiceInterface {

    baseUrl = environment.applicationUrl;

    constructor(private http: HttpClient) {
    }

    saveApplication(application: ApplicationDTO): Observable<HttpResponse<any>> {
        return this.http.post<HttpResponse<any>>(this.baseUrl + "/", application);
    }

    updateApplication(application: Application): Observable<Application> {
        return this.http.put<Application>(this.baseUrl + "/", application);
    }

    deleteApplication(id: string): Observable<Application> {
        return this.http.delete<Application>(this.baseUrl + "/" + id);
    }

    getApplications(): Observable<Application[]> {
        return this.http.get<Application[]>(this.baseUrl + "/");
    }

    getApplicationById(id: string): Observable<Application> {
        return this.http.get<Application>(this.baseUrl + "/" + id);
    }

    //TODO: Fix this, nem entitás kell hanem string
    getAllApplcationsByEvent(event: string): Observable<Application[]> {
        return this.http.get<Application[]>(this.baseUrl + "/event/" + event);
    }

    //TODO: Fix this, nem entitás kell hanem string
    getAllApplicationsByUser(user: string): Observable<Application[]> {
        return this.http.get<Application[]>(this.baseUrl + "/user/" + user);
    }

    getAllApplicationsByEventNameContains(eventName: string): Observable<Application[]> {
        return this.http.get<Application[]>(this.baseUrl + "/eventname/" + eventName);
    }
}
