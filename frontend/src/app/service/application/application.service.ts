import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Application} from '../../model/application';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {environment} from "../../../environments/environment.development";
import {ApplicationDTO} from "../../dto/applicationDTO";
import {ApplicationResponse} from "../../dto/ApplicationResponse";

/**
 * This service handles the HTTP requests for the application entity.
 */
@Injectable({
    providedIn: 'root'
})
export class ApplicationService {

    /**
     * The base URL for the application entity.
     */
    baseUrl = environment.applicationUrl;

    constructor(private http: HttpClient) {
    }

    /**
     * Saves an application.
     * @param application
     */
    saveApplication(application: ApplicationDTO): Observable<HttpResponse<ApplicationResponse>> {
        return this.http.post<ApplicationResponse>(this.baseUrl + "/", application, {observe: 'response'});
    }

    /**
     * Updates an application.
     * @param application
     */
    updateApplication(application: Application): Observable<Application> {
        return this.http.put<Application>(this.baseUrl + "/", application);
    }

    /**
     * Deletes an application by id.
     * @param dto
     */
    deleteApplication(dto: ApplicationDTO): Observable<HttpResponse<any>> {
        return this.http.delete(this.baseUrl + "/", {observe: 'response', body: dto});
    }

    /**
     * Gets all applications.
     */
    getApplications(): Observable<Application[]> {
        return this.http.get<Application[]>(this.baseUrl + "/");
    }

    /**
     * Gets an application by id.
     * @param id
     */
    getApplicationById(id: string): Observable<Application> {
        return this.http.get<Application>(this.baseUrl + "/" + id);
    }

    /**
     * Gets all applications by event.
     * @param event
     */
    getAllApplcationsByEvent(event: string): Observable<Application[]> {
        return this.http.get<Application[]>(this.baseUrl + "/event/" + event);
    }

    /**
     * Gets all applications by user.
     * @param user
     */
    getAllApplicationsByUser(user: string): Observable<Application[]> {
        return this.http.get<Application[]>(this.baseUrl + "/user/" + user);
    }

    /**
     * Gets all applications by event name.
     * @param eventName
     */
    getAllApplicationsByEventNameContains(eventName: string): Observable<Application[]> {
        return this.http.get<Application[]>(this.baseUrl + "/eventname/" + eventName);
    }
}
