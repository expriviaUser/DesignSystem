
import { CommonModule } from '@angular/common';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar.component';
import { SidebarModule } from '../sidebar.module';


const meta: Meta<SidebarComponent> = {
  title: 'Components/Atomi/Sidebar',
  // The component related to the Stories
  component: SidebarComponent,
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, SidebarModule, BrowserAnimationsModule],
    }),
  ],
  argTypes: {
  },
};
export default meta;

type Story = StoryObj<SidebarComponent>;

export const Base: Story = {
  name: 'Default',
  args: {
    items: [
      { "label": "Tipologia documento", "icon": "pi pi-search", disabled: true },
      { "label": "Impostazioni" },
      { "label": "Titolario" },
      { "label": "Flusso" },
      {
        "label": "Anagrafiche società", "items": [
          { "label": "Società", "routerLink": "/configurazione-di-base/societa" },
          { "label": "Profilo di contratto" },
          { "label": "Contratti" },
          { "label": "Profili utente " },
          { "label": "Centro di costo" }

        ]
      },
      { "label": "Mista", "items": [{ "label": "Interfacce" }] },
      {
        "label": "Anagrafiche impianti", "items": [
          { "label": "Impianto" },
          { "label": "Tipologia impianto" },
          { "label": "DPI" },
          { "label": "Varchi" },
          { "label": "Associazioni" }
        ]
      },
      { "label": "Operatori" }, 
      { "label": "Supporto utente" }, 
      { "label": "Fatturazione", "items": [
        { "label": "Gestori" }, 
        { "label": "Fornitori" }, 
        { "label": "Servizi a richiesta" }, 
        { "label": "Materiali d'uso" }, 
        { "label": "Listini SAP" }, 
        { "label": "Listini GD" }] }, 
      { "label": "Tipologia documento" }]

  }
}