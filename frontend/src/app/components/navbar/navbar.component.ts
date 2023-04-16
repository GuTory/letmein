import {Component} from '@angular/core';
import {PathMap} from 'src/app/app-routing.module';
import {AuthService} from "../../auth/auth.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

    references = {
        name: [
            "Explore",
            "Applications",
            "Social",
            "Create Event",
            "Apply"],
        link: [
            PathMap.eventsPath,
            PathMap.applicationsPath,
            PathMap.usersPath,
            PathMap.newEventPath,
            PathMap.newApplicationPath]
    }

    constructor(public authService: AuthService) {
    }


    protected readonly PathMap = PathMap;
}
