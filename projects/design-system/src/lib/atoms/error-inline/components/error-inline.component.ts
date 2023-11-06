import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'lib-error-inline',
  templateUrl: './error-inline.component.html',
  styleUrls: ['./error-inline.component.scss']
})
export class ErrorInlineComponent {
  @Input() control: FormControl = new FormControl();

  @Input('controlName') formControlName: string = '';

  get errorVal(): string {
    if (this.control?.errors) {
      if ('maxlength' in (this.control.errors)) {
        return 'Lunghezza massima ' + this.control.errors['maxlength']['requiredLength'] + ' caratteri';
      } else if ('required' in (this.control.errors)) {
        return 'Campo obbligatorio';
      } else if ('minlength' in (this.control.errors)) {
        return 'Lunghezza minima ' + this.control.errors['minlength']['requiredLength'] + ' caratteri';
      } else if ('min' in (this.control.errors)) {
        return 'Valore minimo ' + this.control.errors['min']['min'];
      } else if ('max' in (this.control.errors)) {
        return 'Valore massimo ' + this.control.errors['max']['max'];
      } else if ('email' in (this.control.errors)) {
        return 'Indirizzo email non valido';
      } else if ('email' in (this.control.errors)) {
        return 'Indirizzo email non valido';
      } else if ('fiscalCodeInvalid' in (this.control.errors)) {
        return 'Codice fiscale non valido';
      }
    }
    return '';
  }

}
