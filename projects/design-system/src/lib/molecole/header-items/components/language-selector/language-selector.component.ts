import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'lib-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent {
  @Input() options: { name: string; code: string; }[] = [];
  @Input() selectedOption: { name: string; code: string; } = {code: 'it', name: 'it'};
  @Output() selectedOptionChange: EventEmitter<{name: string, code: string}> = new EventEmitter<{name: string, code: string}>();
  @Input() control: FormControl | undefined;
  @Input() placeholder: string = 'Label';
  @Input() optionLabel: string = 'name';
}
