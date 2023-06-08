import { NgModule } from '@angular/core';
import { BytePipe } from './byte.pipe';
import { SafePipe } from './safe.pipe';



@NgModule({
    declarations: [
        BytePipe,
        SafePipe
    ],
    imports: [
    ],
    exports: [
        BytePipe,
        SafePipe
    ],
    providers: []
})

export class PipesModule { }
