import {Observable} from "rxjs";
import {Application} from "src/app/model/application";

export interface ApplicationServiceInterface {

    baseUrl: string;

    saveApplication(application: Application): void;

    updateApplication(application: Application): void;

    deleteApplication(id: string): void;

    getApplications(): Observable<Application[]>;

    getApplicationById(id: string): Observable<Application>;

    getAllApplcationsByEvent(event: string): Observable<Application[]>;

    getAllApplicationsByUser(user: string): Observable<Application[]>;

    getAllApplicationsByEventNameContains(eventName: string): Observable<Application[]>;
}
