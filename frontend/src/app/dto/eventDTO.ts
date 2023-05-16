/**
 * Event Data transfer object for sending via HTTP request
 */
export class EventDTO{
    name: string;
    description: string;
    venue: string;
    startDateTime: Date;
    endDateTime: Date;
    entranceStartTime: Date;
    entranceEndTime: Date;
    registrationEndTime: Date;
    attendeeLimit: number;
    image: File | null;
}
