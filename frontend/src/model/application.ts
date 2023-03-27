import { User } from './user';

export interface Application {
    Id: string;

    Status: string;

    PaymentMethod: string;

    User: User;

    Event: Event;
}
