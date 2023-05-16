import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Application} from '../../model/application';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {environment} from "../../../environments/environment.development";
import {ApplicationDTO} from "../../dto/applicationDTO";
import {ApplicationResponse} from "../../dto/ApplicationResponse";

@Injectable({
    providedIn: 'root'
})
export class ApplicationService {

    baseUrl = environment.applicationUrl;

    constructor(private http: HttpClient) {
    }

    saveApplication(application: ApplicationDTO): Observable<HttpResponse<ApplicationResponse>> {
        return this.http.post<ApplicationResponse>(this.baseUrl + "/", application, {observe: 'response'});
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
