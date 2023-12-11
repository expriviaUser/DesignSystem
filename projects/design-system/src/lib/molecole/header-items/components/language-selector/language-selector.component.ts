import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import { Language } from '../../models/language.model';

@Component({
  selector: 'lib-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent {
  @Input() options: { name: string; code: string; }[] = [];
  @Input() selectedOption: Language = {code: 'it', name: 'it'};
  @Output() selectedOptionChange: EventEmitter<Language> = new EventEmitter<Language>();
  @Input() placeholder: string = 'Label';
  @Input() optionLabel: string = 'name';

	public getLanguageChange(lang: Language): void {
		this.selectedOptionChange.next(lang);
	}
}
