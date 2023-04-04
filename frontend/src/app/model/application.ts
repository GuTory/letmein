import { User } from './user';
import { Event } from './event';

export interface Application {
    id: string;

    status: string;

    paymentMethod: string;

    user: User;

    event: Event;
}
