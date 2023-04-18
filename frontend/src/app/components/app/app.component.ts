import {Component, OnInit} from '@angular/core';
import {AuthGuardService} from "../../auth/auth-guard.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'letmein';

    constructor(private authGuardService: AuthGuardService) {
    }

    ngOnInit(): void {
        this.authGuardService.canActivate();
    }
}
