import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BytePipe } from './byte.pipe';



@NgModule({
    declarations: [
        BytePipe,
    ],
    imports: [
    ],
    exports: [
        BytePipe,
    ],
    providers: []
})

export class PipesModule { }
