import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
    HTTP_INTERCEPTORS,
    HttpClientModule
} from '@angular/common/http';
import { AppComponent } from './core/app.component';
import { HomeComponent } from './home/home.component';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { storeFreeze } from 'ngrx-store-freeze';
import {
    RouterStateSerializer,
    StoreRouterConnectingModule
} from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
    effects,
    CustomRouterStateSerializer,
    reducers
} from './core/store';

import * as fromGuards from './page/guards/';
import { PageResolve } from './page/resolvers/page.resolve';
import { TokenInterceptor } from './core/services/interceptors';

const enviorment = {
    development:  false,
    production:  true,
};
export const metaReducers: MetaReducer<any>[] = !enviorment.production ? [ storeFreeze ] : [];
export const CORE_PROVIDERS: Array<any> = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor, multi: true
    },
    {
        provide: RouterStateSerializer,
        useClass: CustomRouterStateSerializer
    }
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        HttpClientModule,
        NgxErrorsModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        StoreRouterConnectingModule,
        EffectsModule.forRoot(effects),
        enviorment.development ? StoreDevtoolsModule.instrument() : [],

        BrowserModule.withServerTransition({ appId: 'my-app' }),
        RouterModule.forRoot([
            // {
            //     path: '',
            //     component: HomeComponent,
            //     pathMatch: 'full',
            //
            // },
            {
                path: '',
                pathMatch: 'full',
                loadChildren: './page/page.module#PageModule',
                canActivate: [
                    fromGuards.MenusGuard,
                    fromGuards.PrivatePagesGuard,
                ]
            },
            {
                path: ':id',
                loadChildren: './page/page.module#PageModule',
                canActivate: [
                    fromGuards.MenusGuard,
                    fromGuards.PrivatePagesGuard,
                ],
                resolve: {
                    content: PageResolve
                }
            },
            {
                path: ':parentId/:pageId',
                loadChildren: './page/page.module#PageModule',
                canActivate: [
                    fromGuards.MenusGuard,
                    fromGuards.PrivatePagesGuard,
                ],
                resolve: {
                    content: PageResolve
                }
            }
        ])
    ],
    providers: [ ...CORE_PROVIDERS, ...fromGuards.guards, PageResolve ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
