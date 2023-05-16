import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment.development";
import {Subscriber} from "rxjs";
import {Refreshable} from "../refreshable";
import {ApplicationDTO} from "../../dto/applicationDTO";

@Injectable({
    providedIn: 'root'
})
export class WebsocketService {

    private ws: WebSocket;

    public refreshables: Refreshable[] = [];

    constructor() {
        this.ws = new WebSocket(environment.webSocketUrl);
        this.ws.onopen = (event) => {
            console.log("Websocket connection opened");
        };
        this.ws.onmessage = (event) => {
            this.refreshables.forEach((refreshable) => {
                refreshable.refresh(JSON.parse(event.data))
            });
        }
        this.ws.onclose = (event) => {
            this.refreshables = [];
        }
    }

    openConnection(refreshable: Refreshable) {
        this.refreshables.push(refreshable);
    }

    closeConnection(refreshable: Refreshable) {
        this.refreshables = this.refreshables.filter((r) => r != refreshable);
    }

    sendMessage(application: ApplicationDTO) {
        console.log("Sending message eventid: " + application.eventId);
        if (this.ws.readyState == WebSocket.OPEN)
            this.ws.send(JSON.stringify(application));
    }
}
