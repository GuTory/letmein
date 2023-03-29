import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

    imgageSource = 'assets/images/logo.png';

    refs = [
        'Explore', 'Applications', 'Create Event'
    ];

    constructor(){}


}
