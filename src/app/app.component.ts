import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dSystem';
  form = this.fb.group({
    name: [''],
    age: ['', Validators.maxLength(4)],
    sex: ['']
  })

  constructor(private fb: FormBuilder) {}
}
