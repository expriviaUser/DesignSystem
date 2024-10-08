import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { BreadcrumbFunction, BreadcrumbModel } from '../models/breadcrumb.model';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { BreadcrumbItemDirective } from '../directives/breadcrumb.directive';
import { BreadcrumbDefinition, BreadcrumbService } from '../services/breadcrumb.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lib-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  /* @Input() breadcrumbList: BreadcrumbModel[] = [];
  breadcrumbSubList1: BreadcrumbModel[] = [];
  breadcrumbSubList2: BreadcrumbModel[] = [];
  @Input() href: boolean = false;
  @Output() goTo: EventEmitter<string> = new EventEmitter<string>();
 
  constructor() { }
 
  ngOnInit(): void {
    if (this.breadcrumbList.length > 4) {
      this.breadcrumbSubList1 = [this.breadcrumbList[0], this.breadcrumbList[1]];
      this.breadcrumbSubList2 = [this.breadcrumbList[this.breadcrumbList.length - 2], this.breadcrumbList[this.breadcrumbList.length - 1]];
    }
  }
 
  ngOnChanges(): void {
    if (this.breadcrumbList.length > 4) {
      this.breadcrumbSubList1 = [this.breadcrumbList[0], this.breadcrumbList[1]];
      this.breadcrumbSubList2 = [this.breadcrumbList[this.breadcrumbList.length - 2], this.breadcrumbList[this.breadcrumbList.length - 1]];
    }
  }
 
  capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
 
  go(event: string): void {
    this.goTo.emit(event);
  } */

  breadcrumbs$!: Observable<BreadcrumbDefinition[]>;
  private _separator = '/';

  /**
 * Breadcrumb item can be customized with this template
 * Template context is provided label, additional info, first and last indexes
 * Use cases:
 * 1) Add an icon along with label
 * 2) i18n. {{breadcrumb | translate}} or {{breadcrumb | transloco}}
 * 3) Change text case {{breadcrumb | titlecase}}
 */
  @ContentChild(BreadcrumbItemDirective, { static: false, read: TemplateRef })
  itemTemplate: any;

  /**
   * If true, breadcrumb is auto generated even without any mapping label
   * Default label is same as route segment
   */
  @Input() autoGenerate = true;

  /**
   * By default query params will be preserved with breadcrumbs
   */
  @Input() preserveQueryParams = true;

  /**
   * By default query fragments will be preserved with breadcrumbs
   */
  @Input() preserveFragment = true;

  /**
   * custom class provided by consumer to increase specificity
   * This will benefit to override styles that are conflicting
   */
  @Input() class = '';

  /**
   * anchorTarget = "_blank" makes the breadcrumb link open in a new tab
   */
  @Input() anchorTarget: '_blank' | undefined;

  /**
   * separator between breadcrumbs, defaults to '/'.
   * User can customize separator either by passing a String or Template
   *
   * String --> Ex: <lib-breadcrumb separator="-"> </lib-breadcrumb>
   *
   * Template --> Ex: <lib-breadcrumb [separator]="separatorTemplate"> </lib-breadcrumb>
   */
  @Input('separator')
  set separator(value: string) {
    this._separator = value || '/';
  }
  get separator() {
    return this._separator;
  }

  setupMessage = 'not set up yet';
  someParameterValue = null;

  constructor(
    private breadcrumbService: BreadcrumbService,
    activateRoute: ActivatedRoute,
    private translate: TranslateService
  ) {
    // breadcrumb inside ngIf works only this way
    activateRoute.params.subscribe((params) => {
      this.setupComponent(params['someParam']);
    });
  }

  setupComponent(someParam: any) {
    this.setupMessage = 'set up at ' + new Date();
    this.someParameterValue = someParam;
  }

  isLabelString(breadcrumb: string | BreadcrumbFunction): string {
    const isString = typeof breadcrumb === 'string';
    if (isString) {
      return breadcrumb as string;
    } else {
      return breadcrumb() as string;
    }
  }

  ngOnInit() {
    this.breadcrumbs$ = this.breadcrumbService.breadcrumbs$.pipe(
      map((breadcrumbs: BreadcrumbDefinition[]) => {
        return breadcrumbs
          .filter((breadcrumb: BreadcrumbDefinition) => {
            // Usually, breadcrumb list can contain a combination of auto generated and user specified labels
            // this filters autogenerated labels in case of "[autoGenerate]: false"
            if (this.autoGenerate) {
              return true;
            }
            return !breadcrumb.isAutoGeneratedLabel;
          })
          .map((breadcrumb: BreadcrumbDefinition) => {
            // Do not mutate breadcrumb as its source of truth.
            // There can be scenarios where we can have multiple lib-breadcrumb instances in page
            const { routeInterceptor, routeLink } = breadcrumb;
            return {
              ...breadcrumb,
              routeLink: routeInterceptor?.(routeLink || '', breadcrumb) || routeLink,
            };
          });
      })
    );
  }
}
