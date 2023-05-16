import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {PathMap} from "../../app-routing.module";
import {LoginRequest} from 'src/app/auth/loginrequest';
import {AuthService} from 'src/app/auth/auth.service';
import {Router} from '@angular/router';

/**
 * Login form component.
 */
@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

    /**
     * Login credentials.
     */
    logincredentials: LoginRequest;

    /**
     * Error message.
     */
    error: string | undefined;

    /**
     * Constructor for login form component. Injecting necessary services and initializing login credentials.
     */
    constructor(
        private authService: AuthService,
        private router: Router
    ) {
        this.logincredentials = {
            email: '',
            password: ''
        };
        this.error = undefined;
    }

    /**
     * Login method. Submits login credentials to the server.
     * @param loginFrom
     */
    login(loginFrom: NgForm) {
        console.log(loginFrom.value);
        if (loginFrom.valid && !this.authService.isAuthenticated()) {
            this.authService.login(this.logincredentials).subscribe({
                next: data => {
                    this.authService.setToken(data.token, this.logincredentials.email)
                    this.error = undefined;
                    this.router.navigate([this.PathMap.basePath]);
                },
                error: error => {
                    this.error = "The username and password does not match.";
                    this.authService.logout();
                }
            });
        }
    }

    /**
     * Removes error message.
     */
    public removeError() {
        this.error = undefined;
    }

    /**
     * Path map.
     * @protected
     */
    protected readonly PathMap = PathMap;
}
