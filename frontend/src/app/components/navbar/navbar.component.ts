import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

    imgageSource = 'assets/images/logo.png';

    references = {
        name: ["Explore", "Applications", "Create Event", "Social"],
        link: ["/events", "/applications", "/newevent", "/users"]
    }

    constructor(){}


}
