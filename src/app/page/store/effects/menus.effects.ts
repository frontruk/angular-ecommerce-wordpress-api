import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {
    reduce,
    map,
    filter,
    switchMap,
    catchError,
    withLatestFrom
} from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

/**
 * Services
 */
import * as fromMenus from '../actions/menus.actions';
import { PublicPageServices } from '../services/public-page.services';
import { HttpErrorResponse } from '@angular/common/http';
import { MenuCategory } from '../../models/menu';
import 'rxjs/add/operator/filter';

@Injectable()
export class MenusEffects {
    constructor(private actions$: Actions,
                private publicPageServices: PublicPageServices) {
    }

    @Effect({ dispatch: true })
    GetMenus$ = this.actions$.ofType(fromMenus.GET_MENUS)
        .pipe(
            switchMap((request: any) => {
                return this.publicPageServices
                    .getMenu(request.payload)
                    .pipe(
                        map((results: MenuCategory) => {
                            console.log('Menulist', results.items)
                            return new fromMenus.GetMenusSuccess(results.items);
                        }),
                        catchError((error: HttpErrorResponse) => {
                            return of(new fromMenus.GetMenusFailure(error));
                        })
                    );
            })
        );


}
