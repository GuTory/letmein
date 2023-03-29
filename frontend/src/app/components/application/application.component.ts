import { Component } from '@angular/core';
import {ApplicationService} from "../../service/application/application.service";

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent {

    constructor(private applicationService: ApplicationService) {
    }


}
