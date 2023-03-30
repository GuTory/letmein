import { User } from './user';

export interface Application {
    id: string;

    status: string;

    paymentMethod: string;

    user: User;

    event: Event;
}
