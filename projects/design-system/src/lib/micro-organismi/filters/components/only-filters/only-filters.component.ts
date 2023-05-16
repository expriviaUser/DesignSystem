import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    QueryList,
    ViewChildren
} from '@angular/core';
import { CalendarComponent, DropdownComponent } from '../../../../../public-api';
import { TreeSelectComponent } from '../../../../../public-api';
import { TreeSelectModel } from '../../../../../public-api';
import { FiltersData, FiltersModel, OnlyFiltersChip, OnlyFiltersModel } from '../../models/filters.model';


@Component({
    selector: 'lib-only-filters',
    templateUrl: './only-filters.component.html',
    styleUrls: ['./only-filters.component.scss']
})
export class OnlyFiltersComponent implements OnInit {
    @Input() dropdownValues: OnlyFiltersModel = {} as OnlyFiltersModel;
    @Input() title: string = '';
    data: TreeSelectModel[][] = [];
    dropdownSelectedValues: { label: string, value: any, childValue: string | number }[] = [];
    @Output() chipsListChange: EventEmitter<OnlyFiltersChip> = new EventEmitter<OnlyFiltersChip>();

    @Input() chipsList: OnlyFiltersChip = {} as OnlyFiltersChip;

    resetCalendarValue!: Array<Date> | null;

    get selectedValues(): TreeSelectModel[][] {
        return [...this.chipsList.data];
    }

    getChildType(dropdownOption: FiltersModel, value: string): string {
        if (dropdownOption && dropdownOption.data && value !== '') {
            let index = dropdownOption.data.findIndex(item => item.data == value);
            if (index !== -1)
                return dropdownOption.data[index].type || '';
            else return '';
        } else
            return '';
    }

    getTreeSelectValue(dropdownIndex: number): string {
        if (this.chipsList.result.length > 0) {
            let value = this.chipsList.result.filter(item => item.dropdownIndex == dropdownIndex);
            if (value.length > 0)
                return value[0].value;
            else return '';
        }
        else return '';
    }

    getChildEnum(dropdownOption: FiltersModel, value: string): TreeSelectModel[] {
        if (dropdownOption && dropdownOption.data) {
            let index = dropdownOption.data?.findIndex(item => item.data == value);
            console.log(dropdownOption.data[index].type);
            return dropdownOption.data[index].enumValues || [];
        } else
            return [];
    }
    getChildConfig(dropdownOption: FiltersModel, value: string): any {
        if (dropdownOption && dropdownOption.data) {
            let index = dropdownOption.data?.findIndex(item => item.data == value);
            console.log(dropdownOption.data[index].type);
            return dropdownOption.data[index].config;
        } else
            return null;
    }

    getAvailableData(data: string | number): boolean {
        //let tempData: FiltersData[] = [];
        return this.chipsList.result.filter(value => value.data === data).length > 0;
    }




    @ViewChildren('calendar') calendar!: QueryList<CalendarComponent>;
    @ViewChildren('treeSelect') treeSelect!: TreeSelectComponent;

    constructor() {
    }

    ngOnInit(): void {
        this.chipsList.id = this.dropdownValues.id;
        this.chipsList.result = [];
        this.chipsList.data = [];


        this.dropdownValues.filters.filter((item, index) => {
            if (item.type == 'treeselect') {

                this.chipsList.data[index] = item.selectionType === 'single' ? {} as TreeSelectModel[] : [];
                this.data[index] = [];
            }
            if (item.type == 'children') {
                this.dropdownSelectedValues[index] = { label: '', value: null, childValue: '' };
            }
        });


    }

    setChildValue(event: string | number, dropdownIndex: number) {
        this.dropdownSelectedValues[dropdownIndex].value = event;
        this.dropdownSelectedValues[dropdownIndex].label = this.dropdownValues.filters[dropdownIndex].data?.filter(item => item.data == event)[0].label || '';

    }

    printData(dropdownIndex: number, dropdown: DropdownComponent) {
        this.chipsList.result.push({
            dropdownIndex: dropdownIndex,
            data: this.dropdownSelectedValues[dropdownIndex].value,
            field: this.dropdownSelectedValues[dropdownIndex].label,
            type: 'children',
            value: `${this.dropdownSelectedValues[dropdownIndex].label}: ${this.dropdownSelectedValues[dropdownIndex].childValue}`
        });
        this.dropdownValues.filters[dropdownIndex].data?.forEach(item => {
            this.chipsList.result.forEach(element => {
                if (element.data == item.data)
                    item.disabled = true;
            })
        })
        this.dropdownSelectedValues[dropdownIndex] = JSON.parse(JSON.stringify({
            label: '', value: null, childValue: ''
        }));
        dropdown.value = null;
        console.log(this.chipsList);
        this.chipsListChange.emit(this.chipsList);
    }


    createTreeChip(event: { originalEvent: PointerEvent, node: TreeSelectModel }, dropdownIndex: number, dropdownField: string, selectionType: string): void {
        if (event.node) {
            if (selectionType === 'single') {
                let indexToRemove = this.chipsList.result.findIndex(item => item.field == dropdownField);
                if (indexToRemove !== -1)
                    this.chipsList.result.splice(indexToRemove, 1);

                this.chipsList.data[dropdownIndex] = [];
            }
            this.chipsList.result.push({ value: event.node.label, dropdownIndex: dropdownIndex, field: dropdownField, data: event.node.data, type: "treeselect" });
            // this.chipsList.result.sort((a, b) => a.dropdownIndex - b.dropdownIndex);
            this.chipsList.data[dropdownIndex].push(event.node);
            this.chipsListChange.emit(this.chipsList);
            console.log(this.chipsList);
        }
    }


    setCalendarChild(event: Array<object>, dropdownIndex: number) {
        this.dropdownSelectedValues[dropdownIndex].childValue = event[0].toLocaleString().split(',')[0] + " - " + event[1].toLocaleString().split(',')[0]
    }

    createCalendarChip(event: Array<object>, dropdownIndex: number, dropdownOption: FiltersModel, calendar: CalendarComponent): void {
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
            this.chipsList.result.push({ value: DATE_RANGE, dropdownIndex: dropdownIndex, field: dropdownOption.field, data: event, type: "calendar" });
            //this.chipsList.sort((a, b) => a.dropdownIndex - b.dropdownIndex);
            this.chipsListChange.emit(this.chipsList);
            //this.resetCalendarValue = null;
            calendar.pcalendar.value = null;
            //const CAL = this.calendar.toArray();
            //const CAL_INDEX = CAL.findIndex(c => c.value == event.node.label);
            //console.log(CAL);
            calendar.toggleCalendar();
            console.log(this.chipsList);

        }
    }

    unselectOption(event: { originalEvent: PointerEvent, node: TreeSelectModel }, dropdownIndex: number): void {
        const C_INDEX = this.chipsList.result.findIndex(c => c.value == event.node.label && c.dropdownIndex == dropdownIndex);
        this.chipsList.result.splice(C_INDEX, 1);
        const N_INDEX = this.chipsList.data[dropdownIndex].indexOf(event.node);
        this.chipsList.data[dropdownIndex].splice(N_INDEX, 1);
        this.chipsListChange.emit(this.chipsList);
        console.log(this.chipsList);
    }






}
