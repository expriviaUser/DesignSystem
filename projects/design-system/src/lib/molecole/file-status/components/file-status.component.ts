import {Component, EventEmitter, Input, Output} from '@angular/core';
import { FileStatus } from '../models/fileStatus.model';

@Component({
  selector: 'lib-file-status',
  templateUrl: './file-status.component.html',
  styleUrls: ['./file-status.component.scss']
})
export class FileStatusComponent {
    @Input() fileList: FileStatus[] = [];

    @Output() downloadClick: EventEmitter<void> = new EventEmitter<void>();

  emitDownloadClick(): void {
    this.downloadClick.emit();
  }

}
