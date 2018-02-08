import { Injectable } from "@angular/core";

import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { api } from '../../core/environments/api.config';
import * as fromStore from '../store';
import * as fromRoot from '../../core/store';
import { Store } from '@ngrx/store';

@Injectable()
export class PageResolve implements Resolve<any> {
    url: string;
    constructor(private http: HttpClient, private readonly store: Store<fromStore.PublicState>,
                private readonly routerStore: Store<fromRoot.State>,

                ) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
      //  const path = this.routerStore.select(fromRoot.getPagePath).subscribe( url => this.url = url)
        const url: string = state.url;
        let id: number;
        console.log('path', url)

        this.store.select(fromStore.getSelectedPagebyId).subscribe(pageId =>{

            console.log('READY data', 'url',  pageId)
            console.log('page', `${api.apiUrl + api.wp}/pages/${pageId}`)
            id = pageId;

        })
        console.log('id', id, `${api.apiUrl + api.wp}/pages/${id}`)
        return this.http.get<Array<any>>(`${api.apiUrl + api.wp}/pages/${id}`);


    }
}