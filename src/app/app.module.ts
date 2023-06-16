import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DesignSystemModule } from 'projects/design-system/src/public-api';


import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { FiltersService } from 'projects/design-system/src/lib/micro-organismi/filters/services/filters.service';
import { TreeModule } from 'primeng/tree';
import { DropdownModule } from 'primeng/dropdown';
import { FormPageComponent } from './components/form-page/form-page.component';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        FormPageComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        DesignSystemModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BreadcrumbModule,
        TreeModule,
        DropdownModule
    ],
    providers: [DatePipe, FiltersService],
    bootstrap: [AppComponent]
})
export class AppModule { }
