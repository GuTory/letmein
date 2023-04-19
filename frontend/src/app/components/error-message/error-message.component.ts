import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent {

  @Input("error") error: string | undefined;

  constructor() { }

  removeError() {
    this.error = undefined;
  }
}
