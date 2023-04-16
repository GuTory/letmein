import {User} from "./user";

export interface Event {
    id: string | null

    name: string

    startDateTime: Date

    endDateTime: Date

    entranceStartTime: Date

    entranceEndTime: Date

    registrationEndTime: Date

    venue: string

    description: string

    attendeeLimit: number

    attendees: Array<User>

    organizers: Array<User>
}
