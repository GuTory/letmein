import {Component, Input} from '@angular/core';
import {User} from "../../model/user";

/**
 * This component is used to display a user.
 */
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

    /**
     * User got from the parent component.
     */
    @Input("user") user: User;

    constructor() {}

}
