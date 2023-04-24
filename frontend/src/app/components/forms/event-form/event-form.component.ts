import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Event} from "../../../model/event";
import {EventDTO} from "../../../dto/eventDTO";
import {EventService} from "../../../service/event/event.service";
import {Router} from "@angular/router";
import {PathMap} from "../../../app-routing.module";

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit{

constructor(private eventService: EventService,
            private router: Router) {}

    newEvent: EventDTO;

    publishEvent(form: NgForm) {
        this.eventService.saveEvent(this.newEvent);
        this.router.navigate([PathMap.eventsPath]);
    }

    ngOnInit(): void {
        this.newEvent = {
            name: '',
            description: '',
            venue: '',
            startDateTime: new Date(),
            endDateTime: new Date(),
            entranceStartTime: new Date(),
            entranceEndTime: new Date(),
            registrationEndTime: new Date(),
            attendeeLimit: 0,
        };
    }

    now(): Date {
        return new Date();
    }
}
