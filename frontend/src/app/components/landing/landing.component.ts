import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";
import {PathMap} from "../../app-routing.module";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

    constructor(private router: Router,
                private authService: AuthService) {
        if(!authService.authorized)
            router.navigate([PathMap.loginPath]);
    }

}
