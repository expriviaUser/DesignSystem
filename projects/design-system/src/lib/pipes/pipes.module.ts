import { NgModule } from '@angular/core';
import { BytePipe } from './byte.pipe';
import { SafePipe } from './safe.pipe';
import { NowDatePipe } from './now-date.pipe';



@NgModule({
    declarations: [
        BytePipe,
        SafePipe,
        NowDatePipe
    ],
    imports: [
    ],
    exports: [
        BytePipe,
        SafePipe,
        NowDatePipe
    ],
    providers: []
})

export class PipesModule { }
