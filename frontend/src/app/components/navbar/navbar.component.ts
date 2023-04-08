import {Component} from '@angular/core';
import {PathMap} from 'src/app/app-routing.module';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

    imgageSource = 'assets/images/logo.png';

    references = {
        name: [
            "Explore",
            "Applications",
            "Social",
            "Create Event",
            "Apply"],
        link: [
            PathMap.basePath,
            PathMap.applicationsPath,
            PathMap.usersPath,
            PathMap.newEventPath,
            PathMap.newApplicationPath]
    }

    constructor() {
    }


    protected readonly PathMap = PathMap;
}
