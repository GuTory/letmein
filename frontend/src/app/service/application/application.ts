import {Observable} from "rxjs";
import {Application} from "src/app/model/application";
import {ApplicationDTO} from "../../dto/applicationDTO";
import {HttpResponse} from "@angular/common/http";

export interface ApplicationServiceInterface {

    baseUrl: string;

    saveApplication(application: ApplicationDTO): Observable<HttpResponse<any>>;

    updateApplication(application: Application): Observable<Application>;

    deleteApplication(id: string): Observable<Application>;

    getApplications(): Observable<Application[]>;

    getApplicationById(id: string): Observable<Application>;

    getAllApplcationsByEvent(event: string): Observable<Application[]>;

    getAllApplicationsByUser(user: string): Observable<Application[]>;

    getAllApplicationsByEventNameContains(eventName: string): Observable<Application[]>;
}
