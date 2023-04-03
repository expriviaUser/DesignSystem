import { Component, Input, TemplateRef } from "@angular/core";

@Component({
  selector: "lib-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"],
})
export class DialogComponent {
  @Input() visible: boolean = false;
  @Input() title: string = "";
  @Input() subtitle: string = "";
  @Input() closable: boolean = true;
  @Input() externalHeader?: TemplateRef<any>;
}
