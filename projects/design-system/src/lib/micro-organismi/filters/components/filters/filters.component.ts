import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    QueryList,
    ViewChildren
} from '@angular/core';
import { FiltersChip, FiltersModel, FiltersResult } from '../../models/filters.model';
import { DropdownComponent, TreeSelectModel } from '../../../../../public-api';
import { CalendarComponent } from '../../../../../public-api';

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
    @Output() chipsValues: EventEmitter<FiltersChip[]> = new EventEmitter<FiltersChip[]>();

    chipsList: FiltersChip[] = [];
    chipsExport: any = {};

    resetCalendarValue!: Array<Date> | null;

    @ViewChildren('calendar') calendar!: QueryList<CalendarComponent>;
    @ViewChildren('dropdown') dropdown!: QueryList<DropdownComponent>;

    constructor() {
    }

    ngOnInit(): void {
        if (this.inputSelectedValues) {
            this.selectedValues = this.inputSelectedValues;
        }
        this.dropdownValues.forEach((item) => this.chipsExport[item.field] = []);
        this.dropdownValues.filter((item, index) => {
            if (item.type === 'treeselect' || item.type === 'dropdown')
                this.selectedValues[index] = []
        });
    }


    createTreeChip(event: { originalEvent: PointerEvent, node: TreeSelectModel }, dropdownIndex: number, dropdownField: string, selectionType: string): void {
        if (event.node) {
            if (selectionType === 'single') {
                let indexToRemove = this.chipsList.findIndex(item => item.field == dropdownField);
                if (indexToRemove !== -1)
                    this.chipsList.splice(indexToRemove, 1);
            }
            this.chipsList.push({ chipsLabel: event.node.label, dropdownIndex: dropdownIndex, field: dropdownField, data: event.node.data, type: "treeselect", value: event.node.label });
            this.chipsList.sort((a, b) => a.dropdownIndex - b.dropdownIndex);
            if (selectionType === 'single')
                this.chipsExport[dropdownField][0] = event.node.data;
            else
                this.chipsExport[dropdownField].push(event.node.data);
            this.filterValues.emit(this.chipsExport);
            if (selectionType == 'single') {
                this.selectedValues[dropdownIndex][0] = event.node;
            } else {
                this.selectedValues[dropdownIndex].push(event.node);
            }
        }
    }

    createDropChip(event: any, dropdownIndex: number, dropdownField: string, selectionType: string): void {
        if (event != null) {
            if (selectionType === 'single') {
                let indexToRemove = this.chipsList.findIndex(item => item.field == dropdownField);
                if (indexToRemove !== -1)
                    this.chipsList.splice(indexToRemove, 1);
            }
            const label = this.dropdownValues[dropdownIndex].data?.filter(item => item.data === event)[0].label;
            this.chipsList.push({ chipsLabel: label || '', dropdownIndex: dropdownIndex, field: dropdownField, data: event, type: "dropdown", value: label || '' });
            this.chipsList.sort((a, b) => a.dropdownIndex - b.dropdownIndex);
            if (selectionType === 'single')
                this.chipsExport[dropdownField][0] = event;
            else
                this.chipsExport[dropdownField].push(event);
            this.filterValues.emit(this.chipsExport);
            if (selectionType == 'single') {
                this.selectedValues[dropdownIndex][0] = { data: event, label: label || '' };
            } else {
                this.selectedValues[dropdownIndex].push({ data: event, label: label || '' });
            }
            this.dropdownValues[dropdownIndex].data?.forEach(item => {
                if (item.data === event)
                    item.disabled = true;
            });
        }

    }

    createCalendarChip(event: Array<object>, dropdownIndex: number, dropdownOption: FiltersModel, calendar: CalendarComponent): void {
        //verifico che non ci sia già la chip per il selettore specificato
        const EXIST = this.chipsList.some((d: any) => d.dropdownIndex == dropdownIndex);
        if (event[0] && event[1]) {
            const DATE_RANGE = `${dropdownOption.placeholder}: ${event[0].toLocaleString().split(',')[0]} - ${event[1].toLocaleString().split(',')[0]}`;
            if (EXIST) {
                //elimina quello esistente
                const C_INDEX = this.chipsList.findIndex(c => c.dropdownIndex == dropdownIndex);
                this.chipsList.splice(C_INDEX, 1);
            }
            //Crea il chip
            this.chipsList.push({ chipsLabel: DATE_RANGE, dropdownIndex: dropdownIndex, field: dropdownOption.field, data: event, type: "calendar", value: DATE_RANGE });
            this.chipsList.sort((a, b) => a.dropdownIndex - b.dropdownIndex);
            //Emette il valore
            this.chipsExport[dropdownOption.field] = event;
            this.filterValues.emit(this.chipsExport);
            //this.resetCalendarValue = null;
            calendar.pcalendar.value = null;
            //const CAL = this.calendar.toArray();
            //const CAL_INDEX = CAL.findIndex(c => c.value == event.node.label);
            //console.log(CAL);
            calendar.toggleCalendar();
        }
    }

    unselectOption(event: { originalEvent: PointerEvent, node: TreeSelectModel }, dropdownIndex: number, dropdownField: string): void {
        const C_INDEX = this.chipsList.findIndex(c => c.chipsLabel == event.node.label);
        this.chipsList.splice(C_INDEX, 1);
        const E_INDEX = this.chipsExport[dropdownField].findIndex((d: string) => d == event.node.data);
        this.chipsExport[dropdownField].splice(E_INDEX, 1);
        this.filterValues.emit(this.chipsExport);
        const N_INDEX = this.selectedValues[dropdownIndex].indexOf(event.node);
        this.selectedValues[dropdownIndex].splice(N_INDEX, 1);
    }

    resetDropdown(chipIndex: number, chipValue: FiltersChip): void {
        this.chipsList.splice(chipIndex, 1);
        const E_INDEX = this.chipsExport[chipValue.field].findIndex((d: string) => d == chipValue.data); //add data to chipValue



        if (chipValue.type == "treeselect") {
            this.chipsExport[chipValue.field].splice(E_INDEX, 1);
            const N_INDEX = this.selectedValues[chipValue.dropdownIndex].findIndex(n => n.label == chipValue.chipsLabel);
            this.selectedValues[chipValue.dropdownIndex].splice(N_INDEX, 1);
            this.selectedValues[chipValue.dropdownIndex] = [...this.selectedValues[chipValue.dropdownIndex]];
        }
        else if (chipValue.type == "calendar") {
            this.chipsExport[chipValue.field] = [];
            //this.resetCalendarValue = null;
        } else if (chipValue.type === 'dropdown') {
            const dropdownFilteredArray = this.dropdownValues.filter(item => item.type === 'dropdown');
            const index = dropdownFilteredArray.findIndex(item => item.field === chipValue.field);
            const dropdown = this.dropdown.get(index);
            if (dropdown)
                dropdown.value = null;
            this.dropdownValues[chipValue.dropdownIndex].data?.forEach(item => {
                if (item.data === chipValue.data)
                    item.disabled = false;
            });
        }
        this.filterValues.emit(this.chipsExport);
    }


}
