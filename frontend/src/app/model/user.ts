import { Application } from "./application";
import { Event } from "./event";

export interface User{
    id: string

    email: string

    password: string | null

    firstName: string

    lastName: string

    company: string | null

    team: string | null

    roles: Array<string>

    appications: Array<Application>;

    favoriteEvents: Array<Event>;

    attendedEvents: Array<Event>;
}
