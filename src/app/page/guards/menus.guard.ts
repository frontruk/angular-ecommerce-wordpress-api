import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {
    tap,
    filter,
    take,
    switchMap,
    catchError
} from 'rxjs/operators';

import * as fromStore from '../store';

@Injectable()
export class MenusGuard implements CanActivate {
    constructor(private store: Store<fromStore.PublicState>) {
    }

    canActivate(): Observable<boolean> {
        return this.checkStore().pipe(
            switchMap(() => of(true)),
            catchError(() => of(false))
        );
    }

    checkStore(): Observable<boolean> {
        return this.store.select(fromStore.areMenusLoaded)
            .pipe(
                tap(loaded => {
                    console.log('loaded MenusGuard', loaded)
                    if (!loaded) {
                        this.store.dispatch(new fromStore.GetMenus(2));
                        return loaded;
                    }
                    return !loaded;
                }),
                filter(loaded => loaded),
                take(1)
            );
    }


}
