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

const enviorment = {
    development:   false,
    production: true,
};
export const metaReducers: MetaReducer<any>[] = !enviorment.production ? [ storeFreeze ] : [];
export const CORE_PROVIDERS: Array<any> = [
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
            {
                path: '',
                component: HomeComponent,
                pathMatch: 'full',

            },
            {
                path: 'page',
                loadChildren: './page/page.module#PageModule',
                canActivate: [
                    fromGuards.PrivatePagesGuard,
                ]
            },
            {
                path: 'page/nested',
                loadChildren: './page/page.module#PageModule',
                canActivate: [
                    fromGuards.PrivatePagesGuard,
                ]
            }
        ])
    ],
    providers: [ ...CORE_PROVIDERS, ...fromGuards.guards ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
