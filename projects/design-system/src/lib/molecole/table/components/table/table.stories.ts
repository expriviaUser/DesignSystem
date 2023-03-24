
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { Icons } from 'src/app/constants/icons.constants';
import { ComponentsModule } from '../../components.module';
import { TableComponent } from './table.component';

// This exports the Stories group for this component
export default {
    title: 'Components/Molecole/Table',
    // The component related to the Stories
    component: TableComponent,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, ComponentsModule],
        }),
    ],
    argTypes: {
      columns: {
        type: {header: 'string', field: 'string'}
      },
    },
};

// This creates a Story for the component
const Template: Story<TableComponent> = (args) => ({
    component: TableComponent,
    props: {
        value: args.value,
        actions: args.actions,
        columns: args.columns,
        isSelectable: args.isSelectable,
        pageNumberBe: args.pageNumberBe,
        paginator: args.paginator,
        iconsTable: [
            {
                label: Icons.VIEW,
                command: (event: any) => {

                },
            },
            {
                label: Icons.EDIT,
                command: (event: any) => {

                },
            }
        ]
    },
    template: `
    <lib-table [value]="value"  [(pageNumberBe)]="pageNumberBe" [isSelectable]="isSelectable" [columns]="columns" [actions]="actions">
            <!-- se non voglio le azioni, eliminare l'unput  [actions]="actions" e <ng-template #actions ></ng-template>-->
            <ng-template #actions let-item="data">
                <lib-actions-table [rowData]="item" [iconsTable]="iconsTable || []"></lib-actions-table>
            </ng-template>
        </lib-table>`,
});


export const Base = Template.bind({});
Base.args = {
    value: [
        { nome: 'Lorem ipsum dolor sit amet', cognome: 'Lorem ipsum dolor sit amet', dataNascita: '1980-02-09' },
        { nome: 'Lorem ipsum dolor sit amet', cognome: 'Lorem ipsum dolor sit amet', dataNascita: '1980-02-09' },
        { nome: 'Lorem ipsum dolor sit amet', cognome: 'Lorem ipsum dolor sit amet', dataNascita: '1965-12-09' },
        { nome: 'Lorem ipsum dolor sit amet', cognome: 'Lorem ipsum dolor sit amet', dataNascita: '1965-12-09' },
    ],
    columns: [
        { header: "Nome", field: "nome" },
        { header: "Cognome", field: "cognome" },
        { header: "Nato il", field: "dataNascita" },
    ],
    isSelectable: false,
    pageNumberBe: 0,
    paginator: true,
};
