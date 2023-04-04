import {Component, Input} from '@angular/core';
import {User} from "../../model/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

    @Input("user") user: User;

    constructor() {}

}
