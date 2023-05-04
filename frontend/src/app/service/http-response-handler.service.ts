import {Injectable} from '@angular/core';
import {HttpResponse} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class HttpResponseHandlerService {

    constructor() {}

    handleEventDetailsResponse(response: HttpResponse<any>): string {
        var message: string = "";
        switch (response.status) {
            case 200: {
                message = "Application sent. Status: pending";
                break;
            }
            case 201: {
                message = "Application sent. Status: pending";
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
        }
        return message;
    }
}
