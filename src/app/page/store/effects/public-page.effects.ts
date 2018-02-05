import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {
    reduce,
    map,
    switchMap,
    catchError,
    withLatestFrom
} from 'rxjs/operators';
import { of } from 'rxjs/observable/of';


/**
 * Services
 */
import * as fromPublicPage from '../actions/public-page.actions';
import { PublicPageServices } from '../services/public-page.services';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class PublicPageEffects {
    constructor(private actions$: Actions,
                private publicPageServices: PublicPageServices) {
    }

    // @Effect({ dispatch: true })
    // GetPages$ = this.actions$.ofType(fromPublicPage.GET_PAGES)
    //     .pipe(
    //         switchMap((request: any) => {
    //             return this.publicPageServices
    //                 .getPages(120)
    //                 .pipe(
    //                     map((filteredResult: Array<any>) => {
    //                         return new fromPublicPage.GetPageSuccess(filteredResult);
    //                     }),
    //                     catchError((error: HttpErrorResponse) => {
    //                         return of(new fromPublicPage.GetPageFailure(error));
    //                     })
    //                 );
    //         })
    //     );


}
