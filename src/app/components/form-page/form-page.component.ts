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
        autocompleteCard: [''],
        input: ['', Validators.required],
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
    })

    constructor(private fb: FormBuilder) { }

    submit() {
        console.log(this.form.value);
    }
}
