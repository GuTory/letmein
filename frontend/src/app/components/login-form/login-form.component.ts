import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {PathMap} from "../../app-routing.module";
import { LoginRequest } from 'src/app/auth/loginrequest';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

    logincredentials: LoginRequest;

    constructor(
        private authService: AuthService
    ) {
        this.logincredentials = {
            email: '',
            password: ''
        };
     }

    login(loginFrom: NgForm) {
        console.log(loginFrom.value);
        if (loginFrom.valid && !this.authService.authorized) {
            this.authService.login(this.logincredentials).subscribe({
                next: data => {
                    this.authService.token = data;
                    this.authService.authorized = true;

                    console.log(this.authService.token);
                },
                error: error => {
                    console.error('There was an error!', error);
                    this.authService.logout();
                }
            });
        }
    }

    protected readonly PathMap = PathMap;
}
