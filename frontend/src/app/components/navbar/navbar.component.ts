import {Component} from '@angular/core';
import {PathMap} from 'src/app/app-routing.module';
import {AuthService} from "../../auth/auth.service";

/**
 * Navigation bar component containing links to all pages.
 */
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

    /**
     * Map of links and their names.
     */
    references = {
        name: [
            "Home",
            "Events",
            "Applications",
            "Users",
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

    /**
     * Path map.
     * @protected
     */
    protected readonly PathMap = PathMap;
}
