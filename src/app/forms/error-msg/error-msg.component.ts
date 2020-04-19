import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { FormValitions } from '../form-validations';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.scss']
})
export class ErrorMsgComponent implements OnInit {

  @Input() control: FormControl;
  @Input() label: string;

  constructor() { }

  ngOnInit(): void {
  }

  get errorMessage() {
    console.log('Erros: ', this.control.errors);
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched) {
          return FormValitions.getErrorMsg(this.label, propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }
}
