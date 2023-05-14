import {Injectable} from '@angular/core';
import {HttpResponse} from "@angular/common/http";
import {WebsocketService} from "../websocket/websocket.service";

@Injectable({
    providedIn: 'root'
})
export class HttpResponseHandlerService {

    constructor() {}

    handleEventDetailsResponse(response: HttpResponse<any>, username: string): string {
        var message: string = "";
        var newApplication: boolean = false;
        switch (response.status) {
            case 200: {
                message = "Application sent";
                newApplication = true;
                break;
            }
            case 201: {
                message = "Application sent";
                newApplication = true;
                break;
            }
            case 400: {
                message = "Application failed";
                break;
            }
            case 403: {
                message = "Registration is closed";
                break;
            }
            case 409: {
                message = "You already applied for this event";
                break;
            }
            default: {
                message = "Other HTTP response code received: " + response.status;
            }
        }
        return message;
    }
}
