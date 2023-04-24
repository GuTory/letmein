import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/model/application';
import { ApplicationService } from 'src/app/service/application/application.service';

@Component({
  selector: 'app-application-container',
  templateUrl: './application-container.component.html',
  styleUrls: ['./application-container.component.scss']
})
export class ApplicationContainerComponent implements OnInit {

  applications: Application[] = [];

  constructor(private applicationService: ApplicationService) { }

  ngOnInit(): void {
    this.getApplications();
  }

  updateApplication(application: Application): void {
    let index = this.applications.indexOf(application);
    this.applicationService.updateApplication(application).subscribe({
      next: (data) => {
        this.applications[index] = data;
      },
      error: (err: Error) => {
        console.log("Error updating application-container" + err);
      }
    });
  }

  deleteApplication(id: string): void {
    let index: any;
    this.applications.forEach(application => {
      if (application.id === id)
        index = this.applications.indexOf(application);
    })
    this.applicationService.deleteApplication(id);
    this.applications.splice(index, 1);
    console.log("Application deleted: " + id);
  }

  getApplications(): void {
    this.applicationService.getApplications().subscribe(
      {
        next: (data) => this.applications = data,
        error: (err: Error) => {
          console.log("Error getting applications: " + err);
        }
      });
  }

  getApplicationById(id: string): void {
    this.applicationService.getApplicationById(id).subscribe({
      next: (data) => {
        this.applications.push(data);
      },
      error: (err: Error) => {
        console.log("Error getting application by id: " + err);
      }
    });
  }

  getAllApplicationsByEvent(event: string): void {
    this.applicationService.getAllApplcationsByEvent(event).subscribe({
      next: (data) => {
        this.applications = data;
      },
      error: (err: Error) => {
        console.log("Error getting applications by event: " + err);
      }
    });
  }

  getAllApplicationsByUser(user: string): void {
    this.applicationService.getAllApplicationsByUser(user).subscribe({
      next: (data) => {
        this.applications = data;
      },
      error: (err: Error) => {
        console.log("Error getting applications by user: " + err);
      }
    });
  }

  getAllApplicationsByEventNameContains(eventName: string): void {
    this.applicationService.getAllApplicationsByEventNameContains(eventName).subscribe({
      next: (data) => {
        this.applications = data;
      },
      error: (err: Error) => {
        console.log("Error getting applications by event name: " + err);
      }
    });
  }
}
