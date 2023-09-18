import { Component, EventEmitter, Input, Output } from '@angular/core';
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

    @Input() categories: string[] = [];
    @Input() dropdownPlaceholder: string = 'Categorie';
    @Input() buttonLabel: string = 'Cerca';

    @Output() onSearch = new EventEmitter<{ category: string, text: string }>();

    constructor(private fb: FormBuilder) { }

    search() {
        this.onSearch.emit({ category: this.searchForm.get('categorie')?.value, text: this.searchForm.get('text')?.value });
    }
}
