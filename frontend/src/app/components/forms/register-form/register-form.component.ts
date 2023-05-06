import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../service/user/user.service";
import {NgForm} from "@angular/forms";
import {PathMap} from "../../../app-routing.module";
import { RegistrationRequest } from 'src/app/auth/registrationrequest';
import { AuthService } from 'src/app/auth/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

    newUser: RegistrationRequest;

    error: string | undefined;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.newUser = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            company: '',
            team: '',
            roles: []
        };
        this.error = undefined;
    }

    saveUser(registerForm: NgForm) {
        this.newUser.roles = [registerForm.value.roles];
         this.authService.register(this.newUser).subscribe({
            next: data => {
                this.authService.setToken(data.token, this.newUser.email);
                this.error = undefined;
                this.router.navigate([this.PathMap.eventsPath]);
            },
            error: error => {
                this.error = "Please provide proper input!"
                this.authService.logout();
            }
        })
    }

    removeError() {
        this.error = undefined;
    }

    protected readonly PathMap = PathMap;
}
