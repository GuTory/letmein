import { User } from "./user";

export interface Event{
    Id: string

    Name: string

    StartDateTime: Date

    EndDatetime: Date

    EntranceStartTime: Date

    EntranceEndTime: Date

    RegistrationEndTime: Date

    Venue: String

    Description: String

    AttendeeLimit: Number

    Attendees: Array<User>

    Organizers: Array<User>
}