import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment.development";
import {Refreshable} from "./refreshable";
import {ApplicationDTO} from "../../dto/applicationDTO";

/**
 * This service is responsible for the websocket connection.
 */
@Injectable({
    providedIn: 'root'
})
export class WebsocketService {

    /**
     * The websocket connection.
     * @private
     */
    private ws: WebSocket;

    /**
     * Refreshable objects that get the data from sockets.
     */
    public refreshables: Refreshable[] = [];

    /**
     * Constructor that creates the websocket connection.
     * Defines the onopen, onmessage and onclose events.
     */
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

    /**
     * Adds a refreshable object to the refreshables array when component is created.
     * @param refreshable
     */
    openConnection(refreshable: Refreshable) {
        this.refreshables.push(refreshable);
    }

    /**
     * Removes a refreshable object from the refreshables array when component is destroyed.
     * @param refreshable
     */
    closeConnection(refreshable: Refreshable) {
        this.refreshables = this.refreshables.filter((r) => r != refreshable);
    }

    /**
     * Sends a message to the websocket.
     * @param application The application that is created.
     */
    sendMessage(application: ApplicationDTO) {
        console.log("Sending message eventid: " + application.eventId);
        if (this.ws.readyState == WebSocket.OPEN)
            this.ws.send(JSON.stringify(application));
    }
}
