import {User} from "./user";

/**
 * Event model.
 */
export interface Event {
    id: string | null

    name: string

    startDateTime: Date

    endDatetime: Date

    entranceStartTime: Date

    entranceEndTime: Date

    registrationEndTime: Date

    venue: string

    description: string

    attendeeLimit: number

    attendees: Array<User>

    organizers: Array<User>

    imagePath: string
}
