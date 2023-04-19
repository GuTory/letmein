import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../auth/auth.service";
import {PathMap} from "../../../app-routing.module";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit{

    constructor(private router: Router,
                private authService: AuthService) {

    }

    ngOnInit(): void {
        if(!this.authService.authorized)
            this.router.navigate([PathMap.loginPath]);
    }

}
