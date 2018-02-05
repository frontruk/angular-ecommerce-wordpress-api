import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromRouter from '../../../core/store';
import { Observable } from 'rxjs/Observable';
import { PageApiResponse } from "../../models/page";
import { MenuItem } from '../../models/menu';

@Component({
    selector: 'app-layout',
    styleUrls: ['./layout.component.scss'],
    template: `
        <div ux-sidebar></div>
        <div ux-bodycontent>

            
            <div
                    ux-articleblocks
                    *ngFor="let item of navigation$ | async"
                    class="grid__item"
                    [routerLink]="['/best-practices-checklist/desktop/']"
            >
                <h2>{{ item.title }}</h2> 
                {{ item.url }} <Br /><Br /> 
                {{ item.id}} | {{ item.object_id}}  <Br /><Br />
                {{ item.object_slug }}
            </div>
            <div
                    ux-articleblocks
                    *ngFor="let item of pages$ | async"
                    class="grid__item"
                    [routerLink]="['/best-practices-checklist/desktop/']"
            >
                <h2>{{ item.title.rendered }}</h2>
                
                {{ item.link }} | {{ item.id }}
                    <!--<pre>-->
                        <!--{{ item | json}}-->
                    <!--</pre>-->
            </div>
        </div>
        <!--<pre>-->
            <!--{{data$ | async | json}}-->
        <!--</pre>-->
       
        
    `
})
export class LayoutComponent implements OnInit {
    data$: Observable<any>;
    navigation$ : Observable<Array<MenuItem>>;
    pages$: Observable<Array<PageApiResponse>>;

    constructor(private readonly store: Store<fromStore.PublicState>,
                private readonly routerStore: Store<fromRouter.State>) {
    }

    ngOnInit() {
        this.pages$ = this.store.select(fromStore.getAllPagesByIds)
        this.data$ =  this.routerStore.select(fromRouter.getRouterState)
        this.navigation$  =  this.store.select(fromStore.getAllMenusByIds)
    }

}
