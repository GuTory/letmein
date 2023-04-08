import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {PathMap} from "../../app-routing.module";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

    logincredentials = {
        email: '',
        password: ''
    }

    constructor() { }

    login(loginFrom: NgForm) {
        console.log(loginFrom.value);
        console.log(this.logincredentials);
    }

    protected readonly PathMap = PathMap;
}
