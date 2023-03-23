import { Component, EventEmitter, Input, Output, SimpleChanges, ViewChild, OnInit, OnChanges } from '@angular/core';

@Component({
    selector: 'lib-checkbox-button',
    templateUrl: './checkbox-button.component.html',
    styleUrls: ['./checkbox-button.component.scss']
})
export class CheckboxButtonComponent implements OnInit, OnChanges {
    //Insert in input checked status, disabled, and label
    @Input() checked: boolean = false;
    @Input() disabled: boolean = false;
    @Input() label: string = '';

    protected check: boolean = false;

    @ViewChild('checkboxInput') checkboxInput: any;

    /* ngOnChanges(changes: SimpleChanges): void {

        if (this.checkboxInput !== undefined && changes['checked']) {
            console.log(this.checkboxInput);
            this.checkboxInput.value = changes['checked'].currentValue;
        }
    } */

    ngOnChanges(changes: SimpleChanges) {
        if (changes['checked'])
            this.check = this.checked;
        console.log(this.check, this.checkboxInput);

    }

    ngOnInit() {
        this.check = this.checked;
        console.log(this.check, this.checkboxInput);

    }

    ngAfterViewInit() {
        console.log(this.check, this.checkboxInput);
    }

    //Return in output a boolean value
    @Output() emitChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    changed() {
        this.check = !this.check;
        this.emitChange.emit(this.check);
    }


}
