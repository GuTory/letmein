import { Component } from '@angular/core';
import {ApplicationService} from "../../service/application/application.service";
import {Application} from "../../model/application";

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent {

    applications: Application[] = [];

    constructor(private applicationService: ApplicationService) {
    }

    saveApplication(application: Application): void {
        this.applicationService.saveApplication(application);
    }

    updateApplication(application: Application): void {
        this.applicationService.updateApplication(application);
    }

    deleteApplication(id: string): void {
        this.applicationService.deleteApplication(id);
    }

    getApplications(): void {
        this.applicationService.getApplications().subscribe(
            {
                next: (data) => this.applications = data,
                error: (err: Error) => {
                    console.log("Error getting applications: " + err);
                }
            }
        );
    }

    getApplicationById(id: string): void {
        this.applicationService.getApplicationById(id).subscribe({
            next: data => {
                this.applications = [data];
            },
            error: (err: Error) => {
                console.log("Error getting application by id: " + err);
            }
        });
    }

    getAllApplicationsByEvent(event: string): void {
        this.applicationService.getAllApplcationsByEvent(event).subscribe({
            next: data => {
                this.applications = data;
            },
            error: (err: Error) => {
                console.log("Error getting applications by Event: " + err);
            }
        });
    }

    getAllApplicationsByUser(user: string): void {
        this.applicationService.getAllApplicationsByUser(user).subscribe({
            next: data => {
                this.applications = data;
            },
            error: (err: Error) => {
                console.log("Error getting applications by User: " + err);
            }
        });
    }

    getAllApplicationsByEventNameContains(eventName: string): void {
        this.applicationService.getAllApplicationsByEventNameContains(eventName).subscribe({
            next: data => {
                this.applications = data;
            },
            error: (err: Error) => {
                console.log("Error getting applications by Event Name: " + err);
            }
        });
    }
}
