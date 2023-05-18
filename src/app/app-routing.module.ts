import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';

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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
