import {Component, OnInit} from '@angular/core';
import {Application} from 'src/app/model/application';
import {ApplicationService} from 'src/app/service/application/application.service';

/**
 * Component showing application list
 */
@Component({
    selector: 'app-application-container',
    templateUrl: './application-container.component.html',
    styleUrls: ['./application-container.component.scss']
})
export class ApplicationContainerComponent implements OnInit {

    /**
     * List of applications
     */
    applications: Application[] = [];

    /**
     * Injecting all the necessary dependencies
     * @param applicationService
     */
    constructor(private applicationService: ApplicationService) {
    }

    /**
     * fetching applications from backend when initializing component
     */
    ngOnInit(): void {
        this.getApplications();
    }

    /**
     * fetching applications from backend
     */
    getApplications(): void {
        this.applicationService.getApplications().subscribe(
            {
                next: (data) => this.applications = data,
                error: (err: Error) => {
                    console.log("Error getting applications: " + err);
                }
            });
    }
}
