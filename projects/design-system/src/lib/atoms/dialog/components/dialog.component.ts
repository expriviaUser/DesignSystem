import { Component, Input } from "@angular/core";

@Component({
  selector: "lib-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"],
})
export class DialogComponent {
  @Input() visible: boolean = false;
  @Input() title: string = "";
  @Input() closable: boolean = true;
}
