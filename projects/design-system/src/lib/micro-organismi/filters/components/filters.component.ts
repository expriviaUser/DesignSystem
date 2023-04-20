import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    QueryList,
    ViewChildren
} from '@angular/core';
import { TreeSelectModel } from "../../../atoms/tree-select/models/tree-select.model";
import { FiltersModel, FiltersResult } from "../models/filters.model";
import {CalendarComponent} from "../../../atoms/calendar/components/calendar.component";

@Component({
    selector: 'lib-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

    @Input() dropdownValues: FiltersModel[] = [];
    @Input() inputSelectedValues: TreeSelectModel[][] = [];

    selectedValues: TreeSelectModel[][] = [];
    @Output() filterValues: EventEmitter<FiltersResult> = new EventEmitter<FiltersResult>();

    chipsList: { value: string, dropdownIndex: number, field: string, data: string | number | Array<object>, type: "treeselect" | "calendar" }[] = [];
    chipsExport: any = {};

    resetCalendarValue: Array<Date> = [];

    @ViewChildren('calendar') calendar!: QueryList<CalendarComponent>;

    constructor() {
    }

    ngOnInit(): void {
        if (this.inputSelectedValues) {
            this.selectedValues = this.inputSelectedValues;
        }
        this.dropdownValues.forEach((item) => this.chipsExport[item.field] = []);
    }


    createTreeChip(event: { originalEvent: PointerEvent, node: TreeSelectModel }, dropdownIndex: number, dropdownField: string): void {
        if (event.node) {
            this.chipsList.push({ value: event.node.label, dropdownIndex: dropdownIndex, field: dropdownField, data: event.node.data, type: "treeselect" });
            this.chipsList.sort((a, b) => a.dropdownIndex - b.dropdownIndex);
            this.chipsExport[dropdownField].push(event.node.data);
            this.filterValues.emit(this.chipsExport);
            if (this.selectedValues[dropdownIndex] == undefined || this.selectedValues[dropdownIndex].length == 0) {
                this.selectedValues[dropdownIndex] = [];
            }
            this.selectedValues[dropdownIndex].push(event.node);
        }
    }

  createCalendarChip(event: Array<object>, dropdownIndex: number, dropdownOption: FiltersModel, calendar: CalendarComponent): void {
      //verifico che non ci sia già la chip per il selettore specificato
      const EXIST = this.chipsList.some((d: any) => d.dropdownIndex == dropdownIndex);
      if (event[0] && event[1]) {
      const DATE_RANGE = `${dropdownOption.placeholder}: ${event[0].toLocaleString().split(',')[0]} - ${event[1].toLocaleString().split(',')[0]}`;
      if(EXIST) {
        //elimina quello esistente
        const C_INDEX = this.chipsList.findIndex(c => c.dropdownIndex == dropdownIndex);
        this.chipsList.splice(C_INDEX, 1);
      }
      //Crea il chip
      this.chipsList.push({ value: DATE_RANGE, dropdownIndex: dropdownIndex, field: dropdownOption.field, data: event, type: "calendar" });
      this.chipsList.sort((a, b) => a.dropdownIndex - b.dropdownIndex);
      //Emette il valore
      this.chipsExport[dropdownOption.field] = event;
      this.filterValues.emit(this.chipsExport);
      this.resetCalendarValue = [];
      //const CAL = this.calendar.toArray();
      //const CAL_INDEX = CAL.findIndex(c => c.value == event.node.label);
        //console.log(CAL);
      calendar.toggleCalendar();
      }
  }

    unselectOption(event: { originalEvent: PointerEvent, node: TreeSelectModel }, dropdownIndex: number, dropdownField: string): void {
        const C_INDEX = this.chipsList.findIndex(c => c.value == event.node.label);
        this.chipsList.splice(C_INDEX, 1);
        const E_INDEX = this.chipsExport[dropdownField].findIndex((d: string) => d == event.node.data);
        this.chipsExport[dropdownField].splice(E_INDEX, 1);
        this.filterValues.emit(this.chipsExport);
        const N_INDEX = this.selectedValues[dropdownIndex].indexOf(event.node);
        this.selectedValues[dropdownIndex].splice(N_INDEX, 1);
    }

    resetDropdown( chipIndex: number, chipValue: { value: string, dropdownIndex: number, field: string, data: string | number | Array<object>, type: "treeselect" | "calendar" }): void {
        this.chipsList.splice(chipIndex, 1);
        const E_INDEX = this.chipsExport[chipValue.field].findIndex((d: string) => d == chipValue.data); //add data to chipValue


      if(chipValue.type == "treeselect") {
        this.chipsExport[chipValue.field].splice(E_INDEX, 1);
        const N_INDEX = this.selectedValues[chipValue.dropdownIndex].findIndex(n => n.label == chipValue.value);
        this.selectedValues[chipValue.dropdownIndex].splice(N_INDEX, 1);
        this.selectedValues[chipValue.dropdownIndex] = [...this.selectedValues[chipValue.dropdownIndex]];
      }
      else if(chipValue.type == "calendar") {
        this.chipsExport[chipValue.field] = [];
        this.resetCalendarValue = [];
      }
      this.filterValues.emit(this.chipsExport);
    }


}
