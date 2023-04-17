import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";
import {PathMap} from "../../app-routing.module";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit{

    constructor(private router: Router,
                private authService: AuthService) {

    }

    ngOnInit(): void {
        if(!this.authService.authorized)
            this.router.navigate([PathMap.loginPath]);
    }

}
