import { User } from "./user";

export interface Event{
    id: string

    name: string

    startDateTime: Date

    endDatetime: Date

    entranceStartTime: Date

    entranceEndTime: Date

    registrationEndTime: Date

    venue: String

    description: String

    attendeeLimit: Number

    attendees: Array<User>

    organizers: Array<User>
}
