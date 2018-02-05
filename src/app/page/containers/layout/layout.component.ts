import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromRouter from '../../../core/store';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-layout',
    template: `
        <p>
            layout works!
        </p>
        <pre>
            {{data$ | async | json}}
        </pre>
    `,
    styles: []
})
export class LayoutComponent implements OnInit {
    data$: Observable<any>;

    constructor(private readonly store: Store<fromStore.PublicState>,
                private readonly routerStore: Store<fromRouter.State>) {
    }

    ngOnInit() {
        this.data$ =  this.routerStore.select(fromRouter.getRouterState)
    }

}
