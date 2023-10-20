import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild, forwardRef } from '@angular/core';
import { AbstractControl, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FileUpload } from 'primeng/fileupload';

@Component({
  selector: 'lib-choose-file',
  templateUrl: './choose-file.component.html',
  styleUrls: ['./choose-file.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ChooseFileComponent),
    multi: true
  }]
})
export class ChooseFileComponent implements OnChanges {
  @Input() label!: string;
  @Input() acceptExtensions: string = 'image/*';
  @Input() maxFileSize!: number;
  @Input() icon!: string;
  @Input() disabled = false;
  @Input() control: AbstractControl = new FormControl();
  @Input() value: any;
  @Input() multiple: boolean = true;
  @Output() onLoadFile: EventEmitter<any> = new EventEmitter<any>();
  protected arrayFiles: File[] = [];

  @ViewChild('uploader', { static: false }) protected uploader!: FileUpload;

  onChange: any = () => { }
  onTouch: any = () => { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value']?.currentValue?.length === 0) {
      this.clearFile();
    }
  }

  // get control() {
  //     return this.controlContainer.control?.get(this.formControlName);
  // }

  get inputValue(): string {
    return this.returnFileName();
  };
  get haveError() {
    return this.control && this.control.errors && (!this.control.pristine || this.control.touched);
  }

  // this method sets the value programmatically
  writeValue(value: string) {
    this.value = value;
  }

  // set UI element value changes emit function
  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  // set touching element emit function
  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  // upon disabled statu change, this method gets triggered
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onSelect(event: any) {
    let filesName: string[] = [];
    event.currentFiles.forEach((file: File) => {
      this.arrayFiles.push(file);
      filesName.push(file.name);
    })
    this.uploader.clear();
    this.onLoadFile.emit(event.currentFiles);
  }

  clearFile() {
    this.uploader.clear();
    this.arrayFiles = [];
    this.onLoadFile.emit('');
  }

  returnFileName() {
    let initValue: string = '';
    let filesNames = this.arrayFiles.reduce((accumulator, currentValue, index) => accumulator + currentValue.name + (this.arrayFiles.length - 1 > index ? ', ' : ''), initValue);

    return filesNames;
  }

  uploadFiles() {
    this.uploader.upload();
  }



}
