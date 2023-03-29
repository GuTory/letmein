import { Application } from "./application";
import { Event } from "./event";

export interface User{
    Id: string

    email: string

    Password: string | null

    FirstName: string

    LastName: string

    Company: string | null

    Team: string | null

    Roles: Array<string>

    Appications: Array<Application>;

    FavoriteEvents: Array<Event>;

    AttendedEvents: Array<Event>;
}
