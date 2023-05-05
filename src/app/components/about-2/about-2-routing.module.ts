import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutDueComponent } from './about-due/about-due.component';
import { CaricamentoComponent } from './caricamento/caricamento.component';

const routes: Routes = [
    {
        path: '', component: AboutDueComponent, children: [
            {
                path: 'caricamento', component: CaricamentoComponent, data: {
                    breadcrumb: {
                        label: 'caricamento',
                        info: 'caricamento',

                    },
                }
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class About2RoutingModule { }
