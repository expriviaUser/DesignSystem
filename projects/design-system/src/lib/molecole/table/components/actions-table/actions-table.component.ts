import { Component, Input, OnInit } from "@angular/core";
import { ActionTable } from "../../models/table.model";

@Component({
  selector: "lib-actions-table",
  templateUrl: "./actions-table.component.html",
  styleUrls: ["./actions-table.component.scss"],
})
export class ActionsTableComponent implements OnInit {
  @Input() iconsTable!: ActionTable[];
  @Input() rowData: any;

  constructor() {}

  ngOnInit() {
    // passa l'argomento rowData alle funzioni di 2° livello
    this.iconsTable = this.iconsTable.map((action) =>
      action.items
        ? {
            ...action,
            items: action.items.map((action) => ({
              ...action,
              command: (): any => action.command!(this.rowData),
            })),
          }
        : action
    );
  }
}
