import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {
  static fiscalCode = (control: AbstractControl): ValidationErrors | null => {
    const regex = new RegExp('^[a-zA-Z]{6}[0-9]{2}[a-zA-Z]{1}[0-9]{2}[a-zA-Z]{1}[0-9]{3}[a-zA-Z]{1}$');
    const cf = control.value as string;

    if (cf && regex.test(cf)) {
      return null;
    } else {
      return { 'fiscalCodeInvalid': true };
    }

  }
}