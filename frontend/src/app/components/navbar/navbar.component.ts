import { Component } from '@angular/core';
import { PathMap } from 'src/app/app-routing.module';

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
          "Create Event", 
          "Social"],
        link: [ 
          PathMap.basePath, 
          PathMap.applicationsPath, 
          PathMap.newEventPath, 
          PathMap.usersPath]
    }

    constructor(){}


}
