import { Component, EventEmitter, Input, Output, SimpleChanges } from "@angular/core";
// import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: "lib-button",
    templateUrl: "./button.component.html",
    styleUrls: ["./button.component.scss"],
})
export class ButtonComponent {
    class: string = "";

    @Input() type: string = ""; //secondary, secondary-rounded, rounded, link, link-icon
    @Input() size: string = ""; //big, small or empty
    @Input() label: string = ""; //this is the label in the button
    @Input() ariaLabel: string = this.label; //this is the label in the button
    @Input() icon: string = ""; //require css class for primeng icons
    @Input() disabled: boolean = false; //boolean to disable button events
    @Input() iconPosition: any = 'right'; //string to position the icon

    @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

    ngOnChanges(changes: SimpleChanges) {
        if (changes) {
            this.initButtonAttributes();
        }
    }

    ngOnInit() {
        this.initButtonAttributes();
    }

    // constructor(private primeNgConfig: PrimeNGConfig) {}

    clickEvt() {
        this.onClick.emit();
    }

    /**
     * Inizializza i bottoni in base alla documentazione di PrimeNG.
     */
    initButtonAttributes(): void {
        this.class = '';
        // Gestione del tipo di bottone da mostrare in pagina
        switch (this.type) {
            case "":
                break;
            case "secondary":
                this.class += " p-button-secondary";
                break;
            case "secondary-rounded":
                this.class += " p-button-secondary p-button-rounded";
                break;
            case "secondary-outlined":
                this.class += " p-button-secondary p-button-outlined";
                break;
            case "rounded":
                this.class += " p-button-rounded";
                break;
            case "link":
            case "link-icon":
                this.class += " p-button-link";
                break;
            case "link-secondary":
                this.class += " p-button-link p-button-secondary";
                break;
            case "secondary-raised":
                this.class += " p-button-raised p-button-secondary";
                break;
        }

        // Gestione della dimensione del button
        switch (this.size) {
            case "":
                break;
            case "small":
                this.class += " p-button-sm";
                break;
            case "big":
                this.class += " p-button-lg";
                break;
        }
    }

}
