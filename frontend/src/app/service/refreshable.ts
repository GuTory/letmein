import {ApplicationDTO} from "../dto/applicationDTO";

export interface Refreshable{
    refresh(application: ApplicationDTO): void;
}
