import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'lib-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
  @Input() activeIndex: number = 0;
  @Input() items: MenuItem[] = [];
  @Input() readonly: boolean = false;

  @Output() activeIndexChange = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges) {
    if (this.readonly) {
      if ((changes['activeIndex'].currentValue > changes['activeIndex'].previousValue) || changes['activeIndex'].previousValue == undefined)
        this.recursiveStepMajor(this.activeIndex);
      else
        this.recursiveStepMinor(this.activeIndex);
  
      this.activeIndexChange.emit(this.activeIndex);
    }
  }

  recursiveStepMajor(index: number) {
    if (this.items[index].disabled) {
      this.items[index].styleClass = '';
      this.recursiveStepMajor(index + 1);
    } else {
      this.activeIndex = index;
      this.items[index].styleClass = 'success';
    }
  }

  recursiveStepMinor(index: number) {
    if (this.items[index].disabled) {
      this.items[index].styleClass = '';
      this.recursiveStepMajor(index - 1);
    } else {
      this.activeIndex = index;
      this.items[index].styleClass = 'success';
    }
  }
}
