import { Component, Input, OnInit } from '@angular/core';

import { Subject, takeUntil } from 'rxjs';

import { MenuItem } from 'primeng/api';


@Component({
    selector: 'lib-header-menu-user',
    templateUrl: './header-menu-user.component.html',
    styleUrls: ['./header-menu-user.component.scss']
})
export class HeaderMenuUserComponent implements OnInit {

    isMobile?: boolean
    destroySub$ = new Subject<void>()
    @Input() menuNavbar?: MenuItem[]

    constructor() { }

    ngOnDestroy() {
        this.destroySub$.next()
        this.destroySub$.complete()
    }
    ngOnInit() {

    }

}
