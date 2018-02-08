import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromRouter from '../../../core/store';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from '../../models/menu';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-layout',
    styleUrls: ['./layout.component.scss'],
    template: `
    
        <div ux-sidebar [ngClass]=" {  'sidebar-hide' : pageContent  }"></div>
        <div ux-bodycontent>
            <section class="grid" *ngIf="!pageContent"> 
                <div
                        ux-articleblocks
                        *ngFor="let item of navigation$ | async"
                        class="grid__item"
                        (click)="goTo(item)"
                >
                    <h2 class="title title--preview" [innerHTML]="item.title"></h2>
                </div>
            </section>
            <section *ngIf="pageContent" [ngClass]=" {  'article-show' : pageContent  }">
                <div class="article-sidebar">
                    <img class="brand" [src]="BrandLogo" [routerLink]="['/']"/>
                    <strong *ngIf="anchorList.length > 0" class="list-title">Content summary</strong>
                    <ul ux-articleanchor>
                        <li  *ngFor="let item of anchorList" >
                            {{ item.anchor_name }}
                        </li>
                    </ul>
                    <strong *ngIf="(sidebarNav$  | async).length > 0 " class="list-title">Sub pages</strong>
                    <ul ux-articleanchor>
                        <li *ngFor="let item of sidebarNav$  | async "  [routerLink]="[ item.object_slug]">
                            {{ item.title }}
                        </li>
                    </ul>
                </div>
                <div class="scroll-wrap">
                <article ux-article [content]="pageContent" ></article>
                </div>
            </section>
        </div>
    `
})
export class LayoutComponent implements OnInit {
    BrandLogo = '/assets/ux-e-commerce.png';
    sidebarNav$: Observable<any>;
    data$: Observable<any>;
    navigation$: Observable<Array<MenuItem>>;
    pages$;
    pages;
    pageContent;
    anchorList;
    constructor(private readonly store: Store<fromStore.PublicState>,
                private readonly routerStore: Store<fromRouter.State>,
                private readonly router: Router,
                private route: ActivatedRoute) {
    }
    goTo(selected) {
        if(this.pages[selected.object_id].acf) {
            const path = this.pages[ selected.object_id ].acf.page_path
            this.router.navigate([ path ]);
        }
    }
    ngOnInit() {
        this.navigation$  =  this.store.select(fromStore.getAllMenusByIds);

        /** Article*/
        if(this.route.snapshot.data['content']){
            this.anchorList = this.route.snapshot.data['content'].acf.anchor;
            this.pageContent = this.route.snapshot.data['content'];
        }
        this.pages$ = this.store.select(fromStore.getPagesEntitiesById).subscribe( data => this.pages = data)
        this.data$ =  this.routerStore.select(fromRouter.getRouterState)
        this.sidebarNav$ = this.store.select(fromStore.getMenuChildren);
    }

}
