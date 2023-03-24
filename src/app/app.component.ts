import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BreadcrumbModel } from 'projects/design-system/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dSystem';
  form = this.fb.group({
    name: ['', Validators.required],
    age: ['', Validators.maxLength(4)],
    sex: ['']
  })
  breadcrumbList: BreadcrumbModel[] = [
    {active: false,link: '',name: 'Prova'},
    {active: false,link: '',name: 'Prova2'},
    {active: true,link: '',name: 'Prova3'},
  ];
  tabsList = [
    {header: 'Prova1', isDisabled: false, content: '1', isSelected: false},
    {header: 'Prova2', isDisabled: false, content: '2', isSelected: false},
    {header: 'Prova3', isDisabled: false, content: '3', isSelected: false},
  
];

  constructor(private fb: FormBuilder) {}

  goTo(event:any) {

  }

  submit() {
    if (this.form.valid) {

    } else {
        this.form.markAsTouched();
    }
  }
}
