import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ButtonPageComponent } from './components/button-page/button-page.component';
import { FormPageComponent } from './components/form-page/form-page.component';
import { ListboxPageComponent } from './components/listbox-page/listbox-page.component';
import { RadioTilePageComponent } from './components/radio-tile-page/radio-tile-page.component';
import { TablePageComponent } from './components/table-page/table-page.component';

const routes: Routes = [
    {
        path: '', component: AboutComponent, data: {
            breadcrumb: {
                label: 'my home',
                info: 'home',

            },
        }
    },
    {
        path: 'about-due',
        loadChildren: () => import('./components/about-2/about-2.module').then(m => m.About2Module),
        data: {
            breadcrumb: {
                label: 'about-2',
                info: 'about-2',
                routeInterceptor: (routeLink: any) => {
                    return routeLink;
                },
            },
        }
    },
    {
        path: 'form',
        component: FormPageComponent,
    },
    {
        path: 'table',
        component: TablePageComponent,
    },
    {
        path: 'listbox',
        component: ListboxPageComponent,
    },
    {
        path: 'button',
        component: ButtonPageComponent,
    },
    {
        path: 'radio-tile',
        component: RadioTilePageComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
