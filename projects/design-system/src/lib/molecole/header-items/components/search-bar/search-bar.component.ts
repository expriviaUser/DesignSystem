import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lib-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
    searchForm: FormGroup = this.fb.group({
        categorie: [''],
        text: ['']
    })

    constructor(private fb: FormBuilder) {}
}
