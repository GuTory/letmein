import { Component, Input } from '@angular/core';
import {ApplicationService} from "../../../service/application/application.service";
import {Application} from "../../../model/application";

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent {

    @Input("application") application: Application;
}
