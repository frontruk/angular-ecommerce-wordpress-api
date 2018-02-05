import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromRouter from '../../../core/store';
import { Observable } from 'rxjs/Observable';
import { PageApiResponse } from "../../models/page";

@Component({
    selector: 'app-layout',
    template: `
        <pre>
            {{data$ | async | json}}
        </pre>
        <div 
            ux-articleblocks
            *ngFor="let item of pages$ | async"
            class="grid__item"
            [routerLink]="['/best-practices-checklist/desktop/']"
        >
            {{ item.title.rendered }}
            {{ item.link }}
            
        </div>
        
    `,
    styles: []
})
export class LayoutComponent implements OnInit {
    data$: Observable<any>;
    pages$: Observable<Array<PageApiResponse>>;

    constructor(private readonly store: Store<fromStore.PublicState>,
                private readonly routerStore: Store<fromRouter.State>) {
    }

    ngOnInit() {
        this.pages$ = this.store.select(fromStore.getAllPagesByIds)
        this.data$ =  this.routerStore.select(fromRouter.getRouterState)
    }

}
