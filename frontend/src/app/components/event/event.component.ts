import {Component, Input, OnInit} from '@angular/core';
import {Event} from "../../model/event";
import {PathMap} from "../../app-routing.module";

/**
 * Component showing event
 */
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent{

    /**
     * The event to be displayed
     */
    @Input("event") event: Event;

    constructor() {}

    /**
     * PathMap for html
     * @protected
     */
    protected readonly PathMap = PathMap;
}
