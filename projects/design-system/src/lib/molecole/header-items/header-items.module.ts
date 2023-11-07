import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { HeaderActionsComponent } from './components/header-actions/header-actions.component';
import { LogoComponent } from './components/logo/logo.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { BadgeModule } from 'primeng/badge';
import { ListboxModule } from 'primeng/listbox';
import { LibButtonModule } from '../../atoms/button/lib-button.module';
import { LibIconCircleModule } from '../../atoms/icon-circle/lib-icon-circle.module';
import { DropdownModule } from 'primeng/dropdown';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderNotificationsComponent } from './components/header-notifications/header-notifications.component';
import { LibBadgeModule } from '../../atoms/badge/lib-badge.module';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { RouterModule } from '@angular/router';
import { HeaderMenuUserComponent } from './components/header-menu-user/header-menu-user.component';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { InputFormModule } from '../../atoms/input-form/input-form.module';
import { LibUploadFileModule } from '../upload-file/lib-upload-file.module';
import { HeaderItemsService } from './services/header-items.service';
import { LibDropdownModule } from '../../atoms/dropdown/lib-dropdown.module';


const primeComponents = [
  BadgeModule,
  DropdownModule,
  ListboxModule,
  OverlayPanelModule,
  ButtonModule,
  MenubarModule,
  MenuModule
];

const exportComponent = [
  CartComponent,
  HeaderActionsComponent,
  LogoComponent,
  SearchBarComponent,
  LanguageSelectorComponent,
  HeaderNotificationsComponent,
  HeaderMenuUserComponent
];

@NgModule({
  declarations: [
    ...exportComponent
  ],
  imports: [
    ...primeComponents,
    CommonModule,
    RouterModule,
    LibButtonModule,
    LibIconCircleModule,
    FormsModule,
    ReactiveFormsModule,
    LibBadgeModule,
    InputFormModule,
    LibUploadFileModule,
    LibDropdownModule
  ],
  exports: [
    ...exportComponent,
  ],
  entryComponents: [
    ...exportComponent
  ],
  providers: []
})

export class HeaderItemsModule { }
