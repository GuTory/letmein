import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";
import {PathMap} from "../../app-routing.module";

/**
 * Landing page component. This is the first page that the user sees after logging in.
 */
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit{

    /**
     * injects router and auth service.
     * @param router
     * @param authService
     */
    constructor(private router: Router,
                private authService: AuthService) {

    }

    /**
     * init method.
     */
    ngOnInit(): void {
        if(!this.authService.isAuthenticated())
            this.router.navigate([PathMap.loginPath]);
    }

}
