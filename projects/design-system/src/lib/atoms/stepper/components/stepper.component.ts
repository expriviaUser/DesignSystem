import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'lib-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnChanges {
  @Input() activeIndex: number = 0;
  @Input() items: MenuItem[] = [];
  @Input() readonly: boolean = false;
  @Input() previousLabel: string = 'Indietro';
  @Input() nextLabel: string = 'Avanti';
  @Input() saveLabel: string = 'Salva';
  @Input() disablePrevious: boolean = false;
  @Input() showSave: boolean = true;
  @Input() disableNext: boolean = false;
  @Input() disableSave: boolean = false;
  @Input() showButtons: boolean = true;


  @Output() activeIndexChange = new EventEmitter<number>();
  @Output() saveStep = new EventEmitter<void>();

  protected index: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['activeIndex'].previousValue >= 0 && changes['activeIndex'].previousValue < changes['activeIndex'].currentValue) {
      this.items[changes['activeIndex'].previousValue].styleClass = 'success';
    }
    this.index = this.activeIndex;
    this.items[this.index].styleClass = '';
  }

  public changeStep(step: string) {
    if (step === 'next') {
      this.recursiveStepMajor(this.index);
    } else if (step === 'previous') {
      this.recursiveStepMinor(this.index);
    }

    this.activeIndexChange.emit(this.index);
  }

  private recursiveStepMajor(index: number) {
    if (this.items[index + 1]?.disabled) {
      this.recursiveStepMajor(index + 1);
    } else {
      this.items[this.index].styleClass = 'success';
      this.index = index + 1;
    }
  }

  private recursiveStepMinor(index: number) {
    if (this.items[index - 1]?.disabled) {
      this.recursiveStepMinor(index - 1);
    } else {
      this.index = index - 1;
      this.items[this.index].styleClass = '';
    }
  }

  protected saveStepper() {
    this.saveStep.emit();
  }




}
