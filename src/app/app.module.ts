import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { FiltersService } from 'projects/design-system/src/lib/micro-organismi/filters/services/filters.service';
import { TreeModule } from 'primeng/tree';
import { DropdownModule } from 'primeng/dropdown';
import { FormPageComponent } from './components/form-page/form-page.component';
import { TablePageComponent } from './components/table-page/table-page.component';
import { MessagesModule } from 'primeng/messages';
import { ListboxPageComponent } from './components/listbox-page/listbox-page.component';
import { ButtonPageComponent } from './components/button-page/button-page.component';
import { RadioTilePageComponent } from './components/radio-tile-page/radio-tile-page.component';
import { FiltersPageComponent } from './components/filters-page/filters-page.component';
import { LibCircleStatusModule } from 'projects/design-system/src/lib/atoms/circle-status/lib-circle-status.module';
import { DesignSystemModule } from 'projects/design-system/src/lib/design-system.module';
import { LibStepperModule } from 'projects/design-system/src/lib/atoms/stepper/lib-stepper.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FormPageComponent,
    TablePageComponent,
    ListboxPageComponent,
    ButtonPageComponent,
    RadioTilePageComponent,
    FiltersPageComponent
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
    DropdownModule,
    MessagesModule,
    LibCircleStatusModule,
    LibStepperModule
  ],
  providers: [DatePipe, FiltersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
