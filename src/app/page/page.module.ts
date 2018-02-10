import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './containers/layout/layout.component';
import { ArticlesComponent } from './containers/articles/articles.component'
import { effects, reducers } from './store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PublicPageServices } from './store/services/public-page.services';
import { ArticleBlocksComponent } from './components/article-blocks/article-blocks.component';
import { SidebarComponent } from './components/sidebar/sidebar.componet';
import { BodyContentComponent } from './components/body-content/body-content.component';
import { ArticleComponent } from './components/article/article.component';
import { SectionsComponent } from './components/sections/sections.component';
import { ArticleAnchorComponent } from './components/article-anchor/article-anchor.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../core/services/interceptors';

@NgModule({
    declarations: [
        LayoutComponent,
        ArticlesComponent,
        ArticleBlocksComponent,
        SidebarComponent,
        BodyContentComponent,
        ArticleComponent,
        SectionsComponent,
        ArticleAnchorComponent,
    ],
    imports: [
        CommonModule,
        StoreModule.forFeature('public', reducers),
        EffectsModule.forRoot(effects),
        RouterModule.forChild([
            {
                path: '',
                component: LayoutComponent,
                pathMatch: 'full',

            }
        ])
    ],
    providers:
        [
            PublicPageServices,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor, multi: true
        }
    ]
})
export class PageModule {

}