import {Component, OnInit} from '@angular/core';
import {AuthGuardService} from "../../auth/auth-guard.service";

/**
 * App component - root component
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    /**
     * Title of the app
     */
    title = 'letmein';

    /**
     * Injecting all the necessary dependencies
     * @param authGuardService - service for checking if user is logged in
     */
    constructor(private authGuardService: AuthGuardService) {
    }

    /**
     * checking if user is logged in when initializing component
     */
    ngOnInit(): void {
        this.authGuardService.canActivate();
    }
}
