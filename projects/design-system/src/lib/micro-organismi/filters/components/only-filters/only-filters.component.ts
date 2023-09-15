import {Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {
  CalendarComponent,
  DropdownComponent,
  TreeMenu,
  TreeSelectComponent,
  TreeSelectModel
} from '../../../../../public-api';
import {FiltersModel, OnlyFiltersChip, OnlyFiltersModel} from '../../models/filters.model';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'lib-only-filters',
  templateUrl: './only-filters.component.html',
  styleUrls: ['./only-filters.component.scss']
})
export class OnlyFiltersComponent implements OnInit {
  protected dropdownSelectedValues: { label: string, value: any, childValue: string | number }[] = [];
  protected requiredDa: boolean = false;
  protected requiredA: boolean = false;
  protected showDialog: boolean = false;

  @Input() title: string = '';
  @Input() dropdownValues: OnlyFiltersModel = {} as OnlyFiltersModel;
  @Input() chipsList: OnlyFiltersChip = {} as OnlyFiltersChip;

  @Output() chipsListChange: EventEmitter<OnlyFiltersChip> = new EventEmitter<OnlyFiltersChip>();

  @ViewChildren('calendar') calendar!: QueryList<CalendarComponent>;
  @ViewChildren('treeSelect') treeSelect!: TreeSelectComponent;

  protected getChildType(dropdownOption: FiltersModel, value: string): string {
    if (dropdownOption && dropdownOption.data && value !== '') {
      let index = dropdownOption.data.findIndex(item => item.data == value);
      if (index !== -1)
        return dropdownOption.data[index].type || '';
      else return '';
    } else
      return '';
  }

  protected getTreeSelectValue(dropdownIndex: number): string {
    if (this.chipsList.result.length > 0) {
      let value = this.chipsList.result.filter(item => item.dropdownIndex == dropdownIndex);
      if (value.length > 0)
        return value[0].chipsLabel;
      else return '';
    } else return '';
  }

  protected getChildEnum(dropdownOption: FiltersModel, value: string): TreeSelectModel[] {
    if (dropdownOption && dropdownOption.data) {
      let index = dropdownOption.data?.findIndex(item => item.data == value);
      return dropdownOption.data[index].enumValues || [];
    } else
      return [];
  }

  protected getChildConfig(dropdownOption: FiltersModel, value: string): any {
    if (dropdownOption && dropdownOption.data) {
      let index = dropdownOption.data?.findIndex(item => item.data == value);
      return dropdownOption.data[index].config;
    } else
      return null;
  }

  protected getAvailableData(data: string | number): boolean {
    return this.chipsList.result.filter(value => value.data === data).length > 0;
  }

  protected setChildValue(event: string | number, dropdownIndex: number) {
    this.dropdownSelectedValues[dropdownIndex].childValue = "";
    this.dropdownSelectedValues[dropdownIndex].value = event;
    this.dropdownSelectedValues[dropdownIndex].label = this.dropdownValues.filters[dropdownIndex].data?.filter(item => item.data == event)[0].label || '';
  }

  protected setCalendarChild(event: string | Array<object>, dropdownIndex: number) {
    if (Array.isArray(event)) {
      if (event[1]) {
        this.dropdownSelectedValues[dropdownIndex].childValue = event[0].toString().split(',')[0] + " - " + event[1].toString().split(',')[0];
      } else {
        this.dropdownSelectedValues[dropdownIndex].childValue = event[0].toString().split(',')[0];
      }
    } else {
      this.dropdownSelectedValues[dropdownIndex].childValue = event;
    }
  }

  protected setInterval(dropdownIndex: number, event: string, isMin: boolean) {
    let val = this.dropdownSelectedValues[dropdownIndex].childValue.toString().split(' - ');
    if (isMin)
      val[0] = event;

    else
      val[1] = event;

    this.dropdownSelectedValues[dropdownIndex].childValue = val.join(' - ');
  }

  constructor(private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    this.chipsList.id = this.dropdownValues.id;
    this.chipsList.result = [];
    this.chipsList.data = [];

    this.dropdownValues.filters.filter((item, index) => {
      if (item.type == 'treeselect') {

        this.chipsList.data[index] = [];
      }
      if (item.type == 'dialog') {

        this.chipsList.data[index] = {} as TreeSelectModel[];
      }
      if (item.type == 'children') {
        this.dropdownSelectedValues[index] = {label: '', value: null, childValue: ''};
      }
    });
  }

  protected setNumberRangeValue(dropdownIndex: number, rangeNum: number, value: string) {
    let splittedValue = this.dropdownSelectedValues[dropdownIndex].childValue.toString().split(' - ');
    if (rangeNum == 0) {
      if (splittedValue[1] && splittedValue[1].length > 0) {
        this.dropdownSelectedValues[dropdownIndex].childValue = `${value} - ${splittedValue[1]}`;
      } else {
        this.dropdownSelectedValues[dropdownIndex].childValue = `${value} - `;
      }
    } else if (rangeNum == 1) {
      if (splittedValue[0] && splittedValue[0].length > 0) {
        this.dropdownSelectedValues[dropdownIndex].childValue = `${splittedValue[0]} - ${value}`;
      } else {
        this.dropdownSelectedValues[dropdownIndex].childValue = ` - ${value}`;
      }
    }
  }

  protected setCalendarDoubleRangeChild(dropdownIndex: number, rangeNum: number, value: string | Array<object>) {
    let splittedValue = this.dropdownSelectedValues[dropdownIndex].childValue.toString().split(' - ');
    if (Array.isArray(value)) {
      if (rangeNum == 0) {
        if (splittedValue[1] && splittedValue[1].length > 0) {
          this.dropdownSelectedValues[dropdownIndex].childValue = `${value[0].toString().split(',')[0]} - ${splittedValue[1]}`;
        } else {
          this.dropdownSelectedValues[dropdownIndex].childValue = `${value[0].toString().split(',')[0]} - `;
        }
      } else if (rangeNum == 1) {
        if (splittedValue[0] && splittedValue[0].length > 0) {
          this.dropdownSelectedValues[dropdownIndex].childValue = `${splittedValue[0]} - ${value[0].toString().split(',')[0]}`;
        } else {
          this.dropdownSelectedValues[dropdownIndex].childValue = ` - ${value[0].toString().split(',')[0]}`;
        }
      }
    } else {
      if (rangeNum == 0) {
        if (splittedValue[1] && splittedValue[1].length > 0) {
          this.dropdownSelectedValues[dropdownIndex].childValue = `${value} - ${splittedValue[1]}`;
        } else {
          this.dropdownSelectedValues[dropdownIndex].childValue = `${value} - `;
        }
      } else if (rangeNum == 1) {
        if (splittedValue[0] && splittedValue[0].length > 0) {
          this.dropdownSelectedValues[dropdownIndex].childValue = `${splittedValue[0]} - ${value}`;
        } else {
          this.dropdownSelectedValues[dropdownIndex].childValue = ` - ${value}`;
        }
      }
    }
  }

  protected checkValue(dropdownIndex: number, type: string, config: any) {
    if ((type === 'number' && config && config['selection'] === 'range') || (type === 'calendar' && config && config['selection'] === 'double-range')) {
      let splittedValue = this.dropdownSelectedValues[dropdownIndex].childValue.toString().split(' - ');
      let value0 = "";
      let value1 = "";
      if (type === 'number') {
        value0 = splittedValue[0];
        value1 = splittedValue[1];
      }

      if (type === 'calendar') {
        if(splittedValue[0]?.length>0) {
          value0 = (new Date(splittedValue[0])).getTime().toString();
        }
        if(splittedValue[1]?.length>0) {
          value1 = (new Date(splittedValue[1])).getTime().toString();
        }
      }
      if (this.exist(value0, value1) && this.isMin(Number(value0), Number(value1))) {
        return false;
      } else if (this.existOnlyOne(value0, value1)) {
        return false;
      } else {
        return true;
      }
    } else if(type === 'calendar' && config && config['selection'] === 'range') {
      let splittedValue = this.dropdownSelectedValues[dropdownIndex].childValue.toString().split(' - ');
      if (splittedValue[0]?.length > 0 || splittedValue[1]?.length > 0) {
        return false
      } else {
        return true;
      }
    } else if(this.dropdownSelectedValues[dropdownIndex].childValue?.toString().length>0) {
      return false;
    } else {
      return true;
    }
  }

  protected printData(dropdownIndex: number, dropdown: DropdownComponent, type: string, config: any) {
    let splittedValue;
    let valueLabel;
    if ((config && (config['selection'] === 'range' || config['selection'] === 'double-range')) || type === 'interval') {
      splittedValue = this.dropdownSelectedValues[dropdownIndex].childValue.toString().split(' - ');
      if (type === 'interval') {
        if (!(splittedValue[0])) {
          this.requiredDa = true;
        } else {
          this.requiredDa = false;
        }
        if (!(splittedValue[1])) {
          this.requiredA = true;
        } else {
          this.requiredA = false;
        }
        if (this.requiredDa || this.requiredA) {
          return;
        }
      }
    }
    const date = this.dropdownValues.filters[dropdownIndex].data?.filter(item => item.label === this.dropdownSelectedValues[dropdownIndex].label);
    let value = this.dropdownSelectedValues[dropdownIndex].childValue;
    if (config && (config['selection'] === 'range' || config['selection'] === 'double-range')) {
      if (splittedValue) {
        if (date && date.length > 0 && date[0].type === 'calendar') {
          if (this.exist(splittedValue[0], splittedValue[1])) {
            value = `${this.datePipe.transform(new Date(splittedValue[0]), 'dd/MM/yyyy')}-${this.datePipe.transform(new Date(splittedValue[1]), 'dd/MM/yyyy')}`;
            valueLabel = `${this.datePipe.transform(new Date(splittedValue[0]), 'dd/MM/yyyy')}-${this.datePipe.transform(new Date(splittedValue[1]), 'dd/MM/yyyy')}`;
          } else if(splittedValue[0] && splittedValue[0].length>0) {
            value = `${this.datePipe.transform(new Date(splittedValue[0]), 'dd/MM/yyyy')}-`;
            valueLabel = `Dal: ${this.datePipe.transform(new Date(splittedValue[0]), 'dd/MM/yyyy')}`;
          }else if(splittedValue[1] && splittedValue[1].length>0) {
            value = `-${this.datePipe.transform(new Date(splittedValue[1]), 'dd/MM/yyyy')}`;
            valueLabel = `Fino al: ${this.datePipe.transform(new Date(splittedValue[1]), 'dd/MM/yyyy')}`;
          }
        } else {
          if(splittedValue[0].length>0 && splittedValue[1].length>0) {
            valueLabel = `${splittedValue[0]}-${splittedValue[1]}`;
          }
          else if(splittedValue[0].length>0) {
            valueLabel = `Dal: ${splittedValue[0]}`;
          }
          else if(splittedValue[1].length>0) {
            valueLabel = `Fino al: ${splittedValue[1]}`;
          }
          value = `${splittedValue[0]}-${splittedValue[1]}`;
        }
      }
    } else {
      if (date && date.length > 0 && date[0].type === 'calendar') {
        value = this.datePipe.transform(new Date(value), 'dd/MM/yyyy') || '';
      }
    }

    if (config && (config['selection'] === 'range' || config['selection'] === 'double-range')) {
      this.chipsList.result.push({
        dropdownIndex: dropdownIndex,
        data: this.dropdownSelectedValues[dropdownIndex].value,
        field: this.dropdownValues.filters[dropdownIndex].field,
        type: 'children',
        chipsLabel: `${this.dropdownSelectedValues[dropdownIndex].label}: ${valueLabel}`,
        value: this.dropdownSelectedValues[dropdownIndex].childValue.toString()
      });
    } else {
      this.chipsList.result.push({
        dropdownIndex: dropdownIndex,
        data: this.dropdownSelectedValues[dropdownIndex].value,
        field: this.dropdownValues.filters[dropdownIndex].field,
        type: 'children',
        chipsLabel: `${this.dropdownSelectedValues[dropdownIndex].label}: ${value}`,
        value: this.dropdownSelectedValues[dropdownIndex].childValue.toString()
      });
    }
    this.dropdownValues.filters[dropdownIndex].data?.forEach(item => {
      this.chipsList.result.forEach(element => {
        if (element.data === item.data)
          item.disabled = true;
      })
    })
    this.dropdownSelectedValues[dropdownIndex] = JSON.parse(JSON.stringify({
      label: '', value: null, childValue: ''
    }));
    dropdown.value = null;
    this.chipsListChange.emit(this.chipsList);
  }

  protected createTreeChip(event: {
    originalEvent: PointerEvent,
    node: TreeSelectModel
  }, dropdownIndex: number, dropdownField: string, selectionType: string): void {
    if (event.node) {
      if (selectionType === 'single') {
        let indexToRemove = this.chipsList.result.findIndex(item => item.field == dropdownField);
        if (indexToRemove !== -1)
          this.chipsList.result.splice(indexToRemove, 1);

        //this.chipsList.data[dropdownIndex] = [];
      }
      this.chipsList.result.push({
        chipsLabel: event.node.label,
        dropdownIndex: dropdownIndex,
        field: dropdownField,
        data: event.node.data,
        type: "treeselect",
        value: event.node.label
      });
      //(this.chipsList.data[dropdownIndex] as TreeSelectModel[]).push(event.node);
      this.chipsListChange.emit(this.chipsList);
    }
  }

  expandNode(event: any) {
    console.log(event);
  }

  protected createCalendarChip(event: Array<object>, dropdownIndex: number, dropdownOption: FiltersModel, calendar: CalendarComponent): void {
    //verifico che non ci sia già la chip per il selettore specificato
    const EXIST = this.chipsList.result.some((d: any) => d.dropdownIndex == dropdownIndex);
    if (event[0] && event[1]) {
      const DATE_RANGE = `${dropdownOption.placeholder}: ${event[0].toLocaleString().split(',')[0]} - ${event[1].toLocaleString().split(',')[0]}`;
      if (EXIST) {
        //elimina quello esistente
        const C_INDEX = this.chipsList.result.findIndex(c => c.dropdownIndex == dropdownIndex);
        this.chipsList.result.splice(C_INDEX, 1);
      }
      //Crea il chip
      this.chipsList.result.push({
        chipsLabel: DATE_RANGE,
        dropdownIndex: dropdownIndex,
        field: dropdownOption.field,
        data: event,
        type: "calendar",
        value: DATE_RANGE
      });
      this.chipsListChange.emit(this.chipsList);
      calendar.pcalendar.value = null;
      calendar.toggleCalendar();
    }
  }

  protected unselectOption(event: { originalEvent: PointerEvent, node: TreeSelectModel }, dropdownIndex: number): void {
    const C_INDEX = this.chipsList.result.findIndex(c => c.chipsLabel == event.node.label && c.dropdownIndex == dropdownIndex);
    this.chipsList.result.splice(C_INDEX, 1);
    const N_INDEX = (this.chipsList.data[dropdownIndex] as TreeSelectModel[]).indexOf(event.node);
    (this.chipsList.data[dropdownIndex] as TreeSelectModel[]).splice(N_INDEX, 1);
    this.chipsListChange.emit(this.chipsList);
  }

  protected selectedDialog(event: any, dropdownIndex: number, dropdownField: string, selectionType: string) {
    if (event) {
      if (event) {
        /* if (selectionType === 'single') {
            let indexToRemove = this.chipsList.result.findIndex(item => item.field == dropdownField);
            if (indexToRemove !== -1)
                this.chipsList.result.splice(indexToRemove, 1);

            //this.chipsList.data[dropdownIndex] = [];
        } */
        let indexToRemove = this.chipsList.result.findIndex(item => item.field == dropdownField);
        this.chipsList.result.splice(indexToRemove, 1);
        this.chipsList.result.push({
          chipsLabel: event.label || '',
          dropdownIndex: dropdownIndex,
          field: dropdownField,
          data: event.data,
          type: "dialog",
          value: event.label || ''
        });
        (this.chipsList.data[dropdownIndex]) = {label: event.label || '', data: event.data};
        this.chipsListChange.emit(this.chipsList);
      }
      this.chipsListChange.emit(this.chipsList);
    }
  }

  protected setDropdownValue(event: any, dropdownField: string, dropdownIndex: number) {
    let indexToRemove = this.chipsList.result.findIndex(item => item.field == dropdownField);
    if (indexToRemove !== -1)
      this.chipsList.result.splice(indexToRemove, 1);

    let value = this.dropdownValues.filters.filter(item => item.field == dropdownField)[0].data?.filter(element => element.data == event)[0];
    (this.chipsList.data[dropdownIndex]) = {label: value?.label || '', data: value?.data};
    this.chipsList.result.push({
      chipsLabel: value?.label || '',
      dropdownIndex: dropdownIndex,
      field: dropdownField,
      data: value?.data || '',
      type: "dialog",
      value: value?.label || ''
    });
    this.chipsListChange.emit(this.chipsList);
    //(this.chipsList.data[dropdownIndex]) = { label: value?.label || '', data: value?.data };
  }

  protected getTreeValue(indexDropdown: number, field: string) {
    return this.dropdownValues.filters[indexDropdown].children?.filter((element: any) => element.data === this.chipsList.data[indexDropdown].data);
  }

  private exist(val0: string, val1: string) {
    return val0?.length > 0 && val1?.length > 0
  }

  private existOnlyOne(val0: string, val1: string) {
    return (val0?.length > 0 || val1?.length > 0) && !this.exist(val0, val1);
  }

  private isMin(val0: number, val1: number) {
    return val0 < val1;
  }


}
