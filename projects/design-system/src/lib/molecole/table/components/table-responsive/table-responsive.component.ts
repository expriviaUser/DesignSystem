import { Component, Input, TemplateRef } from "@angular/core";
import { MessageService } from "primeng/api";
import { PrimeNGConfig } from "primeng/api";
import { Cols } from "../../models/table.model";

@Component({
  selector: "lib-table-responsive",
  templateUrl: "./table-responsive.component.html",
  providers: [MessageService],
  styleUrls: ["./table-responsive.component.scss"],
})
export class TableResponsiveComponent {
  outlet!: TemplateRef<any>;

  @Input() actions?: TemplateRef<any>;

  @Input() value!: any;

  @Input() columns!: Cols[];

  @Input() totalRecords!: number;
  @Input() isSelectable!:boolean
  

  @Input() paginator: boolean = true;

  open: boolean = false;
  cardSelected: any;

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    console.log(this.value);
  }
  paginate(event: any) {
    console.log(event);
    event.first; // Index of the first record
    event.rows; //Number of rows to display in new page
    event.page; //Index of the new page
    event.pageCount; //Total number of pages
  }
  toggleOpen(card: any) {
    if (this.cardSelected != card.currentTarget) {
      document
        .querySelectorAll(".card-panel")
        .forEach((el) => el.classList.remove("open"));
    }
    this.cardSelected = card.currentTarget;
    this.cardSelected.classList.toggle("open");
  }

  getFieldValue(data: { [key: string]: any }, field: string): any {
    // esempio con --> field country.name
    if (field) {
      const props = field.split("."); //[country, name] ---> [name] ----> []
      const prop = props.shift() as string; //country----> name

      if (props.length) {
        return this.getFieldValue(data[prop], props.join("."));
      } else {
        return data[prop];
      }
    }
  }
}
