import {ApplicationDTO} from "../../dto/applicationDTO";

/**
 * This interface is implemented by components that need to be refreshed by websocket messages.
 */
export interface Refreshable{
    refresh(application: ApplicationDTO): void;
}
