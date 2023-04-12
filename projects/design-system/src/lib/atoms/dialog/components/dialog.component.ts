import { Component, EventEmitter, Input, Output, TemplateRef } from "@angular/core";

@Component({
    selector: "lib-dialog",
    templateUrl: "./dialog.component.html",
    styleUrls: ["./dialog.component.scss"],
})
export class DialogComponent {
    @Input() visible: boolean = false;
    @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Input() title: string = "";
    @Input() subtitle: string = "";
    @Input() closable: boolean = true;
    @Input() externalHeader?: TemplateRef<any>;

    hideDialog() {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    }
}
