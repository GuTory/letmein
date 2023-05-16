import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user/user.service";
import {NgForm} from "@angular/forms";
import {PathMap} from "../../app-routing.module";
import { RegistrationRequest } from 'src/app/auth/registrationrequest';
import { AuthService } from 'src/app/auth/auth.service';
import {Router} from "@angular/router";

/**
 * Registration form component.
 */
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

    /**
     * New user to be registered.
     */
    newUser: RegistrationRequest;

    /**
     * Error message.
     */
    error: string | undefined;

    /**
     * Constructor for register form component. Injecting necessary services.
     * @param authService
     * @param router
     */
    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    /**
     * init method.
     */
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

    /**
     * Saving user.
     * @param registerForm
     */
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

    /**
     * Removing error message from ui.
     */
    removeError() {
        this.error = undefined;
    }

    protected readonly PathMap = PathMap;
}
