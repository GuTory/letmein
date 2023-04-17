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
            "Home",
            "Explore",
            "Applications",
            "Social",
            "Create Event"],
        link: [
            PathMap.basePath,
            PathMap.eventsPath,
            PathMap.applicationsPath,
            PathMap.usersPath,
            PathMap.newEventPath]
    }

    constructor(public authService: AuthService) {
    }


    protected readonly PathMap = PathMap;
}
