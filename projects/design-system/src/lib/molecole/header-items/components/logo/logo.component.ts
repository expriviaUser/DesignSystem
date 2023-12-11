import {Component, Input} from '@angular/core';

@Component({
  selector: 'lib-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  @Input() text1: string = '';
  @Input() text2: string = '';
  @Input() logoPath: string = '';
  @Input() secondLogo: boolean = false;
  @Input() secondLogoPath: string = '';
}
