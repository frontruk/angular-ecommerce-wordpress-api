import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';

import * as fromPage from '../reducers/';

import { api } from '../../../core/environments/api.config';
import { MenuCategory } from '../../models/menu';

@Injectable()
export class PublicPageServices {
    constructor(private http: HttpClient,
                private store: Store<fromPage.PublicState>,
    ) {}

    getPage( qty: any): Observable<Array<any>> {
        return this.http.get<Array<any>>(`${api.apiUrl + api.wp}/pages?per_page=${qty}`);
    }
    getPages(): Observable<Array<any>> {
        return this.http.get<Array<any>>(`${api.apiUrl + api.wp}/pages`);
    }
    getMenu(id): Observable<MenuCategory> {
        return this.http.get<MenuCategory>(`${api.apiUrl + api.menu}/menus/${id}`);
    }
}
