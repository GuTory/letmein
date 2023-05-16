import { Component, Input } from '@angular/core';
import {Application} from "../../model/application";

/**
 * Component showing application, no code behind
 */
@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent {

    /**
     * The application to be displayed
     */
    @Input("application") application: Application;
}
