import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {
    private loading$: Subject<boolean> = new BehaviorSubject(true);

    get loading(): Observable<boolean> {
        return this.loading$.asObservable();
    }

    constructor() { }

    showHide(loading: boolean) {
        this.loading$.next(loading);
    }
}
