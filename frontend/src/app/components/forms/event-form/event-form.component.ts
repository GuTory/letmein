import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Event} from "../../../model/event";
import {EventDTO} from "../../../dto/eventDTO";
import {EventService} from "../../../service/event/event.service";

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit{

constructor(private eventService: EventService) {}

    newEvent: EventDTO;

    publishEvent(form: NgForm) {
        console.log(this.newEvent);
        this.eventService.saveEvent(this.newEvent);
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
