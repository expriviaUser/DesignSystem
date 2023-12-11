import { Component, Input, ViewChild } from "@angular/core";
import { Tooltip } from "primeng/tooltip";

@Component({
  selector: "lib-icon-circle",
  templateUrl: "./icon-circle.component.html",
  styleUrls: ["./icon-circle.component.scss"],
})
/*
 * for tooltip text formatting we can take the tooltipText variable in the foreign-model.component.ts as an example.
 * the "escape" property of primeNg allows the tooltip to read html tags and special characters present in the string we are going to pass
 */
export class IconCircleComponent {
  // viewChild used to read primeng tooltip component, will be used for toggle on click
  @ViewChild(Tooltip) tooltip!: Tooltip;

  // the only mandatory variable for the component to function properly, refer to the ICONS enum
  @Input() icon!: string;

  //  defines the type of icon that will be printed, use 'info' for a white circular icon with blue background, for other info see icon-circle.component
  @Input() type: string = "help";

  // defines the size of the icon, accepts the string 'big' or 'small'
  @Input() size: string = "small";

  // this variable defines the size of the tooltip container and accepts "md-tooltip" (width:300px) or "lg-tooltip" (width:500px)
  @Input() tooltipSize?: string;

  /*
   * The tooltip works you value both tooltip variables
   */
  // this optional variable defines the text that will be printed within the tooltip
  @Input() tooltipText?: string;

  // this variable defines the position of the tooltip and can be 'top', 'right', 'bottom' or 'left'
  @Input() tooltipPosition?: string;

  // tooltip toggle method
  showTooltip() {
    // I check if the tooltip is active and turn it off
    if (this.tooltip.active) {
      this.tooltip.deactivate();
    }
    // if the tooltip is deactivated it will be activated
    else {
      this.tooltip.activate();
    }
  }
}
