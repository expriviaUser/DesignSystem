import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-form-page',
    templateUrl: './form-page.component.html',
    styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent {
    form: FormGroup = this.fb.group({
        autocomplete: [''],
        autocompleteCard: [{ code: 1, name: 'Nome Sede', content: 'Via Roma 1' }],
        input: ['', [Validators.required, Validators.maxLength(4)]],
        psw: [''],
        dropdown: [''],
        calendar: [new Date('2023-05-15')],
        chooseFile: [''],
        number: [''],
        checkbox: [''],
        radio: [''],
        textarea: [''],
        static: ['Prova'],
        check: ['Prova'],
        listbox: [{ code: 2, name: 'Pippo 2' }, Validators.required]
    })

    constructor(private fb: FormBuilder) {
        this.form.get('number')?.setValue(14);
    }

    submit() {
        this.form.get('autocompleteCard')?.setValue({ code: 2, name: 'Nome Sede', content: 'Via Napoli 1' });
        console.log(this.form.value);
        console.log(this.form.get('input')?.errors)
    }
}
