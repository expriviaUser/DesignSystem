import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { CardModule } from 'primeng/card';
import { ComponentsModule } from '../../components.module';
import { CardComponent } from './card.component';

// This exports the Stories group for this component
export default {
    title: 'Components/Atomi/Card',
    // The component related to the Stories
    component: CardComponent,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [CommonModule, CardModule, ComponentsModule],
        }),
    ]
};

// This creates a Story for the component
const Template: Story<CardComponent> = (args) => ({
    component: CardComponent,
    props: {
        title: args.cHeader,
        subtitle: args.cSubHeader,
        style: args.cStyle,
        styleClass: args.cStyleClass,
        tagLabel: 'In Attesa',
        tagSeverity: 'info',
        tagRounded: false
    },
    template: `
    <lib-card [cHeader]="title" [cSubHeader]="subtitle" [cStyle]="style" [cStyleClass]="styleClass">  
    </lib-card>
    <div class="row">
        <div class="col" style="margin-top: 15px; margin-bottom: 15px;">Custom Card with external template</div>
    </div>    
    <lib-card [cHeader]="" [cSubHeader]="" [cStyle]="style" [cStyleClass]="styleClass">     
        <div cHeaderTemplate>Questo è l'header di una card</div>
        <div cTitleTemplate>Questo è il titolo di una card</div>
        <div cSubtitleTemplate>Questo è il sotto titolo di una card</div>
        <div cContentTemplate>Questo è il contenuto di una card</div>
        <div cFooterTemplate>Questo è il footer di una card</div>
    </lib-card>
    <div class="row">
        <div class="col" style="margin-top: 15px; margin-bottom: 15px;">Custom Card for GlobalDocs</div>
    </div> 
    <div class="row">
        <div class="col-5">   
            <lib-card [cHeader]="" [cSubHeader]="" [cStyle]="style" [cStyleClass]="styleClass">
                <div cSubtitleTemplate class="row">
                    <div class="col-6">
                        <strong>Etichette Cartacee</strong>
                    </div>
                    <div class="col-6" style="text-align: right; color: #495057; font-weight: 400;">
                        Id richiesta: 55443
                    </div>
                </div>
                <div cFooterTemplate class="row">
                    <div class="row">
                        <div class="col">
                            Richiesta effettua il:
                        </div>
                    </div>
                    <div class="col-6">
                        <strong>15 Febbraio 2023</strong>
                    </div>
                    <div class="col-6" style="text-align: right;">
                        <lib-tag [tagLabel]="tagLabel" [tagSeverity]="tagSeverity" [tagRounded]="tagRounded">
                        </lib-tag> 
                    </div>
                </div>
            </lib-card>
        </div>        
    </div>`,
});

export const Base = Template.bind({});
Base.args = {
    cHeader: 'Titolo card',
    cSubHeader: 'Questo è il sottotitolo di una card',
    cStyle: '',
    cStyleClass: ''
};
