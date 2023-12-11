import { Component, Input, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader.service';

@Component({
    selector: 'lib-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
    protected loading = true;

    @Input() fillColor: string = '';
    @Input() animation: string = '.3s';

    constructor(protected loaderService: LoaderService) { }

    ngOnInit(): void {
        this.loaderService.loading.subscribe(load => {
            this.loading = load;
        })
    }

}
