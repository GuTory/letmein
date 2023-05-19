/**
 * Application data transfer object for sending via HTTP request
 */
export class ApplicationDTO{
    status: string;
    paymentmethod: string;
    username: string;
    eventId: string;
    isCreated: boolean;
}
