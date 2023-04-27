import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'byte',
})
export class BytePipe implements PipeTransform {
    public transform(bytes: number, format: string = 'MB'): string {
        if (format === 'KB') {
            return (bytes / 1024).toFixed(2) + ' KB';
        } else if (format === 'MB') {
            return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
        } else if (format === 'GB') {
            return (bytes / (1024 * 1024 * 1024)).toFixed(2) + ' GB';
        } else if (format === 'TB') {
            return (bytes / (1024 * 1024 * 1024 * 1024)).toFixed(2) + ' TB';
        } else {
            return bytes.toFixed(2) + ' B';
        }
    }
}