import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'projects/design-system/src/lib/atoms/input-form/custom-validators/custom-validators';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent {
  form: FormGroup = this.fb.group({
    autocomplete: [''],
    autocompleteCard: [{ code: 1, name: 'Nome Sede', content: 'Via Roma 1' }],
    input: ['', [Validators.required, CustomValidators.fiscalCode]],
    psw: [''],
    dropdown: [''],
    calendar: [new Date('2023-05-15')],
    chooseFile: [''],
    number: [''],
    checkbox: [true],
    radio: [''],
    textarea: [''],
    static: ['Prova'],
    textbutton: ['Prova2'],
    texticon: ['Prova3'],
    check: ['Prova'],
    listbox: [{ code: 2, name: 'Pippo 2' }, Validators.required]
  })

  constructor(private fb: FormBuilder) {
    this.form.get('number')?.setValue(14);

    this.form.valueChanges.subscribe(val => {
      console.log(val);
    })
  }
  dropdownValues = [{name:'Ciao', code: 3, content: '- PROVA'}, {name: 'Ciao2', code: 1, content: '- PROVA'}];

  get dropdownValue() {
    return this.dropdownValues.find(el => el.code === this.form.get('dropdown')?.value);
  }

  submit() {
    const input = this.form.get('input');
    const validator = input?.validator as any;
    console.log("Validators", validator);
    console.log("Errors", input?.errors);
    this.form.get('autocompleteCard')?.setValue({ code: 2, name: 'Nome Sede', content: 'Via Napoli 1' });
    console.log(this.form.value);
    console.log(this.form.get('input')?.errors)
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    }
  }

  tryNgModel(event) {
    console.log(event);
  }

  iconClick() {
    alert('icon cliccata');
  }
}
