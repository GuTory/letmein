import {Component, Input, OnInit} from '@angular/core';
import {Event} from "../../model/event";
import {PathMap} from "../../app-routing.module";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent{

    @Input("event") event: Event;

    constructor() {}

    protected readonly PathMap = PathMap;
}
