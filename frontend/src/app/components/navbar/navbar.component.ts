import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

    imgageSource = 'assets/images/logo.png';

    references = {
        name: ["Explore", "Applications", "Create Event", "Social"],
        link: ["/", "/applications", "/newevent", "/users"]
    }

    constructor(){}


}
