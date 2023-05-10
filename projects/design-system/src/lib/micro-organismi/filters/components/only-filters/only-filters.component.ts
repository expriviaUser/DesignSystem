import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    QueryList,
    SimpleChanges,
    ViewChildren
} from '@angular/core';
import { FiltersChip, FiltersModel, FiltersResult, OnlyFiltersChip, OnlyFiltersModel } from '../../models/filters.model';
import { TreeSelectModel } from 'projects/design-system/src/lib/atoms/tree-select/models/tree-select.model';
import { CalendarComponent } from 'projects/design-system/src/lib/atoms/calendar/components/calendar.component';


@Component({
    selector: 'lib-only-filters',
    templateUrl: './only-filters.component.html',
    styleUrls: ['./only-filters.component.scss']
})
export class OnlyFiltersComponent implements OnInit, OnChanges {
    @Input() dropdownValues: OnlyFiltersModel = {} as OnlyFiltersModel;
    @Input() data!: TreeSelectModel[][];

    @Output() chipsListChange: EventEmitter<OnlyFiltersChip> = new EventEmitter<OnlyFiltersChip>();

    chipsList: OnlyFiltersChip = {} as OnlyFiltersChip;

    resetCalendarValue!: Array<Date> | null;

    selectedValues(index: number): TreeSelectModel[] {
        return (this.chipsList && this.chipsList.data && this.chipsList.data[index] ? this.chipsList.data[index] : []);
    }

    @ViewChildren('calendar') calendar!: QueryList<CalendarComponent>;

    constructor() {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes && changes['data'].currentValue) {
            this.chipsList.data = changes['data'].currentValue;
        }
    }

    ngOnInit(): void {
        this.chipsList.id = this.dropdownValues.id;
        this.chipsList.result = [];
        this.chipsList.data = [];

        this.dropdownValues.filters.filter((item, index) => {
            if (item.type == 'treeselect')
                this.chipsList.data[index] = []
        });

        this.chipsListChange.emit(this.chipsList);

    }


    createTreeChip(event: { originalEvent: PointerEvent, node: TreeSelectModel }, dropdownIndex: number, dropdownField: string, selectionType: string): void {
        if (event.node) {
            if (selectionType === 'single') {
                let indexToRemove = this.chipsList.result.findIndex(item => item.field == dropdownField);
                if (indexToRemove !== -1)
                    this.chipsList.result.splice(indexToRemove, 1);
            }
            this.chipsList.result.push({ value: event.node.label, dropdownIndex: dropdownIndex, field: dropdownField, data: event.node.data, type: "treeselect" });
            // this.chipsList.result.sort((a, b) => a.dropdownIndex - b.dropdownIndex);
            this.chipsList.data[dropdownIndex].push(event.node);
            this.chipsListChange.emit(this.chipsList);
            console.log(this.chipsList);
        }
    }

    singleSelected(event: any) {
        console.log(event);
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
