import {ApplicationDTO} from "../../dto/applicationDTO";

/**
 * This interface is implemented by components that need to be refreshed by websocket messages.
 */
export interface Refreshable{
    refreshAdd(application: ApplicationDTO): void;

    refreshDelete(application: ApplicationDTO): void;
}
