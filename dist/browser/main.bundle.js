webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./page/page.module": [
		"../../../../../src/app/page/page.module.ts",
		"page.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export metaReducers */
/* unused harmony export CORE_PROVIDERS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_app_component__ = __webpack_require__("../../../../../src/app/core/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ultimate_ngxerrors__ = __webpack_require__("../../../../@ultimate/ngxerrors/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngrx_store_freeze__ = __webpack_require__("../../../../ngrx-store-freeze/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngrx_store_freeze___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ngrx_store_freeze__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngrx_router_store__ = __webpack_require__("../../../../@ngrx/router-store/@ngrx/router-store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngrx_store_devtools__ = __webpack_require__("../../../../@ngrx/store-devtools/@ngrx/store-devtools.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core_store__ = __webpack_require__("../../../../../src/app/core/store/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__page_guards___ = __webpack_require__("../../../../../src/app/page/guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__page_resolvers_page_resolve__ = __webpack_require__("../../../../../src/app/page/resolvers/page.resolve.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var enviorment = {
    development: false,
    production: true,
};
var metaReducers = !enviorment.production ? [__WEBPACK_IMPORTED_MODULE_9_ngrx_store_freeze__["storeFreeze"]] : [];
var CORE_PROVIDERS = [
    {
        provide: __WEBPACK_IMPORTED_MODULE_10__ngrx_router_store__["a" /* RouterStateSerializer */],
        useClass: __WEBPACK_IMPORTED_MODULE_12__core_store__["a" /* CustomRouterStateSerializer */]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__core_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__ultimate_ngxerrors__["a" /* NgxErrorsModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["i" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__core_store__["d" /* reducers */], { metaReducers: metaReducers }),
                __WEBPACK_IMPORTED_MODULE_10__ngrx_router_store__["b" /* StoreRouterConnectingModule */],
                __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["c" /* EffectsModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__core_store__["b" /* effects */]),
                enviorment.development ? __WEBPACK_IMPORTED_MODULE_11__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument() : [],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */].withServerTransition({ appId: 'my-app' }),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */].forRoot([
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
                            __WEBPACK_IMPORTED_MODULE_13__page_guards___["a" /* MenusGuard */],
                            __WEBPACK_IMPORTED_MODULE_13__page_guards___["b" /* PrivatePagesGuard */],
                        ]
                    },
                    {
                        path: ':id',
                        loadChildren: './page/page.module#PageModule',
                        canActivate: [
                            __WEBPACK_IMPORTED_MODULE_13__page_guards___["a" /* MenusGuard */],
                            __WEBPACK_IMPORTED_MODULE_13__page_guards___["b" /* PrivatePagesGuard */],
                        ],
                        resolve: {
                            content: __WEBPACK_IMPORTED_MODULE_14__page_resolvers_page_resolve__["a" /* PageResolve */]
                        }
                    },
                    {
                        path: ':parentId/:pageId',
                        loadChildren: './page/page.module#PageModule',
                        canActivate: [
                            __WEBPACK_IMPORTED_MODULE_13__page_guards___["a" /* MenusGuard */],
                            __WEBPACK_IMPORTED_MODULE_13__page_guards___["b" /* PrivatePagesGuard */],
                        ],
                        resolve: {
                            content: __WEBPACK_IMPORTED_MODULE_14__page_resolvers_page_resolve__["a" /* PageResolve */]
                        }
                    }
                ])
            ],
            providers: CORE_PROVIDERS.concat(__WEBPACK_IMPORTED_MODULE_13__page_guards___["c" /* guards */], [__WEBPACK_IMPORTED_MODULE_14__page_resolvers_page_resolve__["a" /* PageResolve */]]),
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__core_app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: "\n\n  <router-outlet></router-outlet>\n  ",
            styles: []
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/environments/api.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return api; });
var api = {
    apiUrl: 'http://ecommerce-ux.london/wp-json/',
    wp: 'wp/v2',
    acf: 'acf/v2',
    menu: 'wp-api-menus/v2',
};


/***/ }),

/***/ "../../../../../src/app/core/store/actions/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_action__ = __webpack_require__("../../../../../src/app/core/store/actions/router.action.ts");
/* unused harmony namespace reexport */



/***/ }),

/***/ "../../../../../src/app/core/store/actions/router.action.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FORWARD; });
/* unused harmony export Go */
/* unused harmony export Back */
/* unused harmony export Forward */
var GO = '[Router] Go';
var BACK = '[Router] Back';
var FORWARD = '[Router] Forward';
var Go = /** @class */ (function () {
    function Go(payload) {
        this.payload = payload;
        this.type = GO;
    }
    return Go;
}());

var Back = /** @class */ (function () {
    function Back() {
        this.type = BACK;
    }
    return Back;
}());

var Forward = /** @class */ (function () {
    function Forward() {
        this.type = FORWARD;
    }
    return Forward;
}());



/***/ }),

/***/ "../../../../../src/app/core/store/effects/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return effects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_effects__ = __webpack_require__("../../../../../src/app/core/store/effects/router.effects.ts");
/* unused harmony namespace reexport */

var effects = [__WEBPACK_IMPORTED_MODULE_0__router_effects__["a" /* RouterEffects */]];



/***/ }),

/***/ "../../../../../src/app/core/store/effects/router.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_router_action__ = __webpack_require__("../../../../../src/app/core/store/actions/router.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RouterEffects = /** @class */ (function () {
    function RouterEffects(actions$, router, location) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.location = location;
        this.navigate$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__actions_router_action__["c" /* GO */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["c" /* map */])(function (action) { return action.payload; }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["f" /* tap */])(function (_a) {
            var path = _a.path, queryParams = _a.query, extras = _a.extras;
            _this.router.navigate(path, __assign({ queryParams: queryParams }, extras));
        }));
        this.navigateBack$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__actions_router_action__["a" /* BACK */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["f" /* tap */])(function () { return _this.location.back(); }));
        this.navigateForward$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__actions_router_action__["b" /* FORWARD */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["f" /* tap */])(function () { return _this.location.forward(); }));
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", Object)
    ], RouterEffects.prototype, "navigate$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", Object)
    ], RouterEffects.prototype, "navigateBack$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", Object)
    ], RouterEffects.prototype, "navigateForward$", void 0);
    RouterEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], RouterEffects);
    return RouterEffects;
}());



/***/ }),

/***/ "../../../../../src/app/core/store/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducers__ = __webpack_require__("../../../../../src/app/core/store/reducers/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__reducers__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__reducers__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__reducers__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__("../../../../../src/app/core/store/actions/index.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__effects__ = __webpack_require__("../../../../../src/app/core/store/effects/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__effects__["a"]; });





/***/ }),

/***/ "../../../../../src/app/core/store/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getRouterState; });
/* unused harmony export getPagePath */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomRouterStateSerializer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_router_store__ = __webpack_require__("../../../../@ngrx/router-store/@ngrx/router-store.es5.js");


var reducers = {
    routerReducer: __WEBPACK_IMPORTED_MODULE_1__ngrx_router_store__["c" /* routerReducer */],
};
var getRouterState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createFeatureSelector */])('routerReducer');
var getPagePath = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getRouterState, function (state) { return state.state.params.pagePath; });
//
// export class CustomRouterStateSerializer implements RouterStateSerializer<RouterStateUrl> {
var CustomRouterStateSerializer = /** @class */ (function () {
    function CustomRouterStateSerializer() {
    }
    CustomRouterStateSerializer.prototype.serialize = function (routerState) {
        var url = routerState.url;
        var queryParams = routerState.root.queryParams;
        var state = routerState.root;
        while (state.firstChild) {
            state = state.firstChild;
        }
        var params = state.params;
        return { url: url, queryParams: queryParams, params: params };
    };
    return CustomRouterStateSerializer;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.message = 'Hello';
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'home',
            template: "<h3>{{ message }}</h3>"
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page/guards/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return guards; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__private_pages_guard__ = __webpack_require__("../../../../../src/app/page/guards/private-pages.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menus_guard__ = __webpack_require__("../../../../../src/app/page/guards/menus.guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__private_pages_guard__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__menus_guard__["a"]; });


var guards = [
    __WEBPACK_IMPORTED_MODULE_0__private_pages_guard__["a" /* PrivatePagesGuard */],
    __WEBPACK_IMPORTED_MODULE_1__menus_guard__["a" /* MenusGuard */],
];




/***/ }),

/***/ "../../../../../src/app/page/guards/menus.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenusGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store__ = __webpack_require__("../../../../../src/app/page/store/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenusGuard = /** @class */ (function () {
    function MenusGuard(store) {
        this.store = store;
    }
    MenusGuard.prototype.canActivate = function () {
        return this.checkStore().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["d" /* switchMap */])(function () { return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(true); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function () { return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(false); }));
    };
    MenusGuard.prototype.checkStore = function () {
        var _this = this;
        return this.store.select(__WEBPACK_IMPORTED_MODULE_4__store__["c" /* areMenusLoaded */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["f" /* tap */])(function (loaded) {
            if (!loaded) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store__["a" /* GetMenus */](2));
                return loaded;
            }
            return loaded;
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* filter */])(function (loaded) { return loaded; }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["e" /* take */])(1));
    };
    MenusGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]])
    ], MenusGuard);
    return MenusGuard;
}());



/***/ }),

/***/ "../../../../../src/app/page/guards/private-pages.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivatePagesGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store__ = __webpack_require__("../../../../../src/app/page/store/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PrivatePagesGuard = /** @class */ (function () {
    function PrivatePagesGuard(store) {
        this.store = store;
    }
    PrivatePagesGuard.prototype.canActivate = function () {
        return this.checkStore().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["d" /* switchMap */])(function () { return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(true); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function () { return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(false); }));
    };
    PrivatePagesGuard.prototype.checkStore = function () {
        var _this = this;
        return this.store.select(__WEBPACK_IMPORTED_MODULE_4__store__["d" /* arePagesLoaded */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["f" /* tap */])(function (loaded) {
            if (!loaded) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store__["b" /* GetPages */]());
                return loaded;
            }
            return loaded;
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* filter */])(function (loaded) { return loaded; }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["e" /* take */])(1));
    };
    PrivatePagesGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]])
    ], PrivatePagesGuard);
    return PrivatePagesGuard;
}());



/***/ }),

/***/ "../../../../../src/app/page/resolvers/page.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageResolve; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_environments_api_config__ = __webpack_require__("../../../../../src/app/core/environments/api.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__("../../../../../src/app/page/store/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageResolve = /** @class */ (function () {
    function PageResolve(http, store, routerStore) {
        this.http = http;
        this.store = store;
        this.routerStore = routerStore;
    }
    PageResolve.prototype.resolve = function (route, state) {
        //  const path = this.routerStore.select(fromRoot.getPagePath).subscribe( url => this.url = url)
        var url = state.url;
        var id;
        console.log('path', url);
        this.store.select(__WEBPACK_IMPORTED_MODULE_3__store__["i" /* getSelectedPagebyId */]).subscribe(function (pageId) {
            console.log('READY data', 'url', pageId);
            console.log('page', __WEBPACK_IMPORTED_MODULE_2__core_environments_api_config__["a" /* api */].apiUrl + __WEBPACK_IMPORTED_MODULE_2__core_environments_api_config__["a" /* api */].wp + "/pages/" + pageId);
            id = pageId;
        });
        console.log('id', id, __WEBPACK_IMPORTED_MODULE_2__core_environments_api_config__["a" /* api */].apiUrl + __WEBPACK_IMPORTED_MODULE_2__core_environments_api_config__["a" /* api */].wp + "/pages/" + id);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__core_environments_api_config__["a" /* api */].apiUrl + __WEBPACK_IMPORTED_MODULE_2__core_environments_api_config__["a" /* api */].wp + "/pages/" + id);
    };
    PageResolve = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["h" /* Store */]])
    ], PageResolve);
    return PageResolve;
}());



/***/ }),

/***/ "../../../../../src/app/page/store/actions/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_page_actions__ = __webpack_require__("../../../../../src/app/page/store/actions/public-page.actions.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__public_page_actions__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menus_actions__ = __webpack_require__("../../../../../src/app/page/store/actions/menus.actions.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__menus_actions__["c"]; });




/***/ }),

/***/ "../../../../../src/app/page/store/actions/menus.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_MENUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_MENUS_SUCCESS; });
/* unused harmony export GET_MENUS_FAIL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GetMenus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GetMenusSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GetMenusFailure; });
var GET_MENUS = '[Menu] Get menu ';
var GET_MENUS_SUCCESS = '[Menu] Get menu success';
var GET_MENUS_FAIL = '[Menu] Get menu hostname fail';
var GetMenus = /** @class */ (function () {
    function GetMenus(payload) {
        this.payload = payload;
        this.type = GET_MENUS;
    }
    return GetMenus;
}());

var GetMenusSuccess = /** @class */ (function () {
    function GetMenusSuccess(payload) {
        this.payload = payload;
        this.type = GET_MENUS_SUCCESS;
    }
    return GetMenusSuccess;
}());

var GetMenusFailure = /** @class */ (function () {
    function GetMenusFailure(payload) {
        this.payload = payload;
        this.type = GET_MENUS_FAIL;
    }
    return GetMenusFailure;
}());



/***/ }),

/***/ "../../../../../src/app/page/store/actions/public-page.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GET_PAGE */
/* unused harmony export GET_PAGE_SUCCESS */
/* unused harmony export GET_PAGE_FAIL */
/* unused harmony export GetPage */
/* unused harmony export GetPageSuccess */
/* unused harmony export GetPageFailure */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_PAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_PAGES_SUCCESS; });
/* unused harmony export GET_PAGES_FAIL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GetPages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GetPagesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GetPagesFailure; });
var GET_PAGE = '[Page] Get public page by hostname';
var GET_PAGE_SUCCESS = '[Page] Get public page  by hostname success';
var GET_PAGE_FAIL = '[Page] Get public page  by hostname fail';
var GetPage = /** @class */ (function () {
    function GetPage(payload) {
        this.payload = payload;
        this.type = GET_PAGE;
    }
    return GetPage;
}());

var GetPageSuccess = /** @class */ (function () {
    function GetPageSuccess(payload) {
        this.payload = payload;
        this.type = GET_PAGE_SUCCESS;
    }
    return GetPageSuccess;
}());

var GetPageFailure = /** @class */ (function () {
    function GetPageFailure(payload) {
        this.payload = payload;
        this.type = GET_PAGE_FAIL;
    }
    return GetPageFailure;
}());

var GET_PAGES = '[Pages] Get public page by hostname';
var GET_PAGES_SUCCESS = '[Pages] Get public page  by hostname success';
var GET_PAGES_FAIL = '[Pages] Get public page  by hostname fail';
var GetPages = /** @class */ (function () {
    function GetPages() {
        this.type = GET_PAGES;
        // constructor(public payload: any) {}
    }
    return GetPages;
}());

var GetPagesSuccess = /** @class */ (function () {
    function GetPagesSuccess(payload) {
        this.payload = payload;
        this.type = GET_PAGES_SUCCESS;
    }
    return GetPagesSuccess;
}());

var GetPagesFailure = /** @class */ (function () {
    function GetPagesFailure(payload) {
        this.payload = payload;
        this.type = GET_PAGES_FAIL;
    }
    return GetPagesFailure;
}());



/***/ }),

/***/ "../../../../../src/app/page/store/effects/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return effects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_page_effects__ = __webpack_require__("../../../../../src/app/page/store/effects/public-page.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menus_effects__ = __webpack_require__("../../../../../src/app/page/store/effects/menus.effects.ts");
/* unused harmony namespace reexport */


var effects = [
    __WEBPACK_IMPORTED_MODULE_0__public_page_effects__["a" /* PublicPageEffects */],
    __WEBPACK_IMPORTED_MODULE_1__menus_effects__["a" /* MenusEffects */],
];



/***/ }),

/***/ "../../../../../src/app/page/store/effects/menus.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenusEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_menus_actions__ = __webpack_require__("../../../../../src/app/page/store/actions/menus.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_public_page_services__ = __webpack_require__("../../../../../src/app/page/store/services/public-page.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Services
 */



var MenusEffects = /** @class */ (function () {
    function MenusEffects(actions$, publicPageServices) {
        var _this = this;
        this.actions$ = actions$;
        this.publicPageServices = publicPageServices;
        this.GetMenus$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_4__actions_menus_actions__["a" /* GET_MENUS */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["d" /* switchMap */])(function (request) {
            return _this.publicPageServices
                .getMenu(request.payload)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* map */])(function (results) {
                return new __WEBPACK_IMPORTED_MODULE_4__actions_menus_actions__["e" /* GetMenusSuccess */](results.items);
            }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function (error) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_4__actions_menus_actions__["d" /* GetMenusFailure */](error));
            }));
        }));
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])({ dispatch: true }),
        __metadata("design:type", Object)
    ], MenusEffects.prototype, "GetMenus$", void 0);
    MenusEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_5__services_public_page_services__["a" /* PublicPageServices */]])
    ], MenusEffects);
    return MenusEffects;
}());



/***/ }),

/***/ "../../../../../src/app/page/store/effects/public-page.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicPageEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_public_page_actions__ = __webpack_require__("../../../../../src/app/page/store/actions/public-page.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_public_page_services__ = __webpack_require__("../../../../../src/app/page/store/services/public-page.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Services
 */


var PublicPageEffects = /** @class */ (function () {
    function PublicPageEffects(actions$, publicPageServices) {
        var _this = this;
        this.actions$ = actions$;
        this.publicPageServices = publicPageServices;
        this.GetPages$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_4__actions_public_page_actions__["a" /* GET_PAGES */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["d" /* switchMap */])(function (request) {
            return _this.publicPageServices
                .getPages()
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* map */])(function (filteredResult) {
                console.log('effects works');
                return new __WEBPACK_IMPORTED_MODULE_4__actions_public_page_actions__["e" /* GetPagesSuccess */](filteredResult);
            }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function (error) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_4__actions_public_page_actions__["d" /* GetPagesFailure */](error));
            }));
        }));
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])({ dispatch: true }),
        __metadata("design:type", Object)
    ], PublicPageEffects.prototype, "GetPages$", void 0);
    PublicPageEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_5__services_public_page_services__["a" /* PublicPageServices */]])
    ], PublicPageEffects);
    return PublicPageEffects;
}());



/***/ }),

/***/ "../../../../../src/app/page/store/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducers__ = __webpack_require__("../../../../../src/app/page/store/reducers/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_0__reducers__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__("../../../../../src/app/page/store/actions/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__actions__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__actions__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__effects__ = __webpack_require__("../../../../../src/app/page/store/effects/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__effects__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectors__ = __webpack_require__("../../../../../src/app/page/store/selectors/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__selectors__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__selectors__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__selectors__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__selectors__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_3__selectors__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_3__selectors__["f"]; });






/***/ }),

/***/ "../../../../../src/app/page/store/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getFeaturState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_page_reducer__ = __webpack_require__("../../../../../src/app/page/store/reducers/public-page.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__public_pages_reducer__ = __webpack_require__("../../../../../src/app/page/store/reducers/public-pages.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_reducer__ = __webpack_require__("../../../../../src/app/page/store/reducers/menu.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
// libs




var reducers = {
    page: __WEBPACK_IMPORTED_MODULE_0__public_page_reducer__["a" /* reducer */],
    pages: __WEBPACK_IMPORTED_MODULE_1__public_pages_reducer__["f" /* reducer */],
    menus: __WEBPACK_IMPORTED_MODULE_2__menu_reducer__["e" /* reducer */],
};
var getFeaturState = Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_store__["l" /* createFeatureSelector */])('public');


/***/ }),

/***/ "../../../../../src/app/page/store/reducers/menu.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return menusEntitiesById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return menusEntitiesByPath; });
/* unused harmony export menus */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return areMenusLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return areMenusLoaded; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_menus_actions__ = __webpack_require__("../../../../../src/app/page/store/actions/menus.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    loading: false,
    loaded: false,
    data: [],
    entities: {},
    entitiesbyPath: {}
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        // case fromMenu.GET_MENUS_SUCCESS: {
        //     console.log('calling')
        //     return Object.assign({}, state, {
        //         loading: false,
        //         loaded: true,
        //         data: action.payload
        //     });
        // }
        case __WEBPACK_IMPORTED_MODULE_0__actions_menus_actions__["b" /* GET_MENUS_SUCCESS */]: {
            var pages = action.payload;
            var entities = pages.reduce(function (entitiesList, item) {
                return __assign({}, entitiesList, (_a = {}, _a[item.id] = item, _a));
                var _a;
            }, __assign({}, state.entities));
            var entitiesbyPath = pages.reduce(function (entitiesList, item) {
                return __assign({}, entitiesList, (_a = {}, _a[item.object_slug] = item, _a));
                var _a;
            }, __assign({}, state.entities));
            return __assign({}, state, { loading: false, loaded: true, entities: entities,
                entitiesbyPath: entitiesbyPath });
        }
        default:
            return state;
    }
}
var menusEntitiesById = function (state) { return state.entities; };
var menusEntitiesByPath = function (state) { return state.entitiesbyPath; };
var menus = function (state) { return state.data; };
var areMenusLoading = function (state) { return state.loading; };
var areMenusLoaded = function (state) { return state.loaded; };


/***/ }),

/***/ "../../../../../src/app/page/store/reducers/public-page.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* unused harmony export getPage */
/* unused harmony export isPageLoading */
/* unused harmony export isPageLoaded */
var initialState = {
    loading: false,
    loaded: false,
    data: false,
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        //
        // case fromPage.GET_PAGE_SUCCESS: {
        //     return Object.assign({}, state, {
        //         loading: false,
        //         loaded: true,
        //         data: action.payload
        //     });
        // }
        default:
            return state;
    }
}
var getPage = function (state) { return state.data; };
var isPageLoading = function (state) { return state.loading; };
var isPageLoaded = function (state) { return state.loaded; };


/***/ }),

/***/ "../../../../../src/app/page/store/reducers/public-pages.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["f"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PagesEntitiesByPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PagesEntitiesById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return arePagesLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return arePagesLoaded; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_public_page_actions__ = __webpack_require__("../../../../../src/app/page/store/actions/public-page.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    loading: false,
    loaded: false,
    data: [],
    entities: {},
    entitiesbyPath: {}
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        // case fromPage.GET_PAGES_SUCCESS: {
        //     return Object.assign({}, state, {
        //         loading: false,
        //         loaded: true,
        //         data: action.payload
        //     });
        // }
        case __WEBPACK_IMPORTED_MODULE_0__actions_public_page_actions__["b" /* GET_PAGES_SUCCESS */]: {
            var pages = action.payload;
            var entities = pages.reduce(function (entitiesList, page) {
                return __assign({}, entitiesList, (_a = {}, _a[page.id] = page, _a));
                var _a;
            }, __assign({}, state.entities));
            var entitiesbyPath = pages.reduce(function (entitiesList, page) {
                return __assign({}, entitiesList, (_a = {}, _a[page.link] = page, _a));
                var _a;
            }, __assign({}, state.entities));
            return __assign({}, state, { loading: false, loaded: true, entities: entities,
                entitiesbyPath: entitiesbyPath });
        }
        default:
            return state;
    }
}
var PagesEntitiesByPaths = function (state) { return state.entitiesbyPath; };
var PagesEntitiesById = function (state) { return state.entities; };
var Pages = function (state) { return state.data; };
var arePagesLoading = function (state) { return state.loading; };
var arePagesLoaded = function (state) { return state.loaded; };


/***/ }),

/***/ "../../../../../src/app/page/store/selectors/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_selectors__ = __webpack_require__("../../../../../src/app/page/store/selectors/pages.selectors.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__pages_selectors__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__pages_selectors__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__pages_selectors__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_selectors__ = __webpack_require__("../../../../../src/app/page/store/selectors/menu.selectors.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__menu_selectors__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__menu_selectors__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__menu_selectors__["c"]; });




/***/ }),

/***/ "../../../../../src/app/page/store/selectors/menu.selectors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getMenuState */
/* unused harmony export getMenusEntitiesById */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAllMenusByIds; });
/* unused harmony export getMenuEntitiesByPaths */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getMenuChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return areMenusLoaded; });
/* unused harmony export areMenusLoading */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_store__ = __webpack_require__("../../../../../src/app/core/store/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__("../../../../../src/app/page/store/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_menu_reducer__ = __webpack_require__("../../../../../src/app/page/store/reducers/menu.reducer.ts");




var getMenuState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(__WEBPACK_IMPORTED_MODULE_2__reducers__["a" /* getFeaturState */], function (state) { return state.menus; });
var getMenusEntitiesById = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getMenuState, __WEBPACK_IMPORTED_MODULE_3__reducers_menu_reducer__["c" /* menusEntitiesById */]);
var getAllMenusByIds = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getMenusEntitiesById, function (entities) {
    return Object.keys(entities).map(function (object_id) { return entities[object_id]; });
});
var getMenuEntitiesByPaths = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getMenuState, __WEBPACK_IMPORTED_MODULE_3__reducers_menu_reducer__["d" /* menusEntitiesByPath */]);
var getMenuChildren = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(__WEBPACK_IMPORTED_MODULE_1__core_store__["c" /* getRouterState */], getMenuEntitiesByPaths, function (router, entities) {
    if (router.state.url != '/') {
        console.log('testingwwww ::::::', entities);
        console.log('url');
        var test = router.state.url.replace('/', '');
        console.log('test', test);
        console.log('ddd ::::::', entities[router.state.url.replace('/', '')]);
        if (entities[router.state.url.replace('/', '')]) {
            return entities[router.state.url.replace('/', '')].children;
        }
        else {
            return [];
        }
    }
});
// export const getMenuChildren = createSelector(
//     fromPage.PagesEntitiesById,
//     getAllMenusByIds, (router, entities) => {
//         console.log('testing', entities)
//         console.log('zzz', router)
//        // console.log('ddd' ,  entities['http://ecommerce-ux.london' + router.state.url + '/'] )
//        // return entities['http://ecommerce-ux.london' + router.state.url + '/'].id ;
//         return true;
//     }
// )
var areMenusLoaded = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getMenuState, __WEBPACK_IMPORTED_MODULE_3__reducers_menu_reducer__["a" /* areMenusLoaded */]);
var areMenusLoading = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getMenuState, __WEBPACK_IMPORTED_MODULE_3__reducers_menu_reducer__["b" /* areMenusLoading */]);


/***/ }),

/***/ "../../../../../src/app/page/store/selectors/pages.selectors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getPagesState */
/* unused harmony export getPagesEntitiesByPaths */
/* unused harmony export getAllPagesByPath */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPagesEntitiesById; });
/* unused harmony export getAllPagesByIds */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getSelectedPagebyId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return arePagesLoaded; });
/* unused harmony export arePagesLoading */
/* unused harmony export getActivePage */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_store__ = __webpack_require__("../../../../../src/app/core/store/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__("../../../../../src/app/page/store/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_public_pages_reducer__ = __webpack_require__("../../../../../src/app/page/store/reducers/public-pages.reducer.ts");




var getPagesState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(__WEBPACK_IMPORTED_MODULE_2__reducers__["a" /* getFeaturState */], function (state) { return state.pages; });
var getPagesEntitiesByPaths = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getPagesState, __WEBPACK_IMPORTED_MODULE_3__reducers_public_pages_reducer__["c" /* PagesEntitiesByPaths */]);
var getAllPagesByPath = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getPagesEntitiesByPaths, function (entities) {
    console.log('entitiesentities', entities);
    return Object.keys(entities).map(function (path) { return entities[path]; });
});
var getPagesEntitiesById = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getPagesState, __WEBPACK_IMPORTED_MODULE_3__reducers_public_pages_reducer__["b" /* PagesEntitiesById */]);
var getAllPagesByIds = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getPagesEntitiesById, function (entities) {
    return Object.keys(entities).map(function (id) { return entities[id]; });
});
var getSelectedPagebyId = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(__WEBPACK_IMPORTED_MODULE_1__core_store__["c" /* getRouterState */], getPagesEntitiesByPaths, function (router, entities) {
    if (router.state.url != '/') {
        console.log('testing', entities);
        console.log('ddd', entities['http://ecommerce-ux.london' + router.state.url + '/']);
        return entities['http://ecommerce-ux.london' + router.state.url + '/'].id;
    }
});
var arePagesLoaded = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getPagesState, __WEBPACK_IMPORTED_MODULE_3__reducers_public_pages_reducer__["d" /* arePagesLoaded */]);
var arePagesLoading = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getPagesState, __WEBPACK_IMPORTED_MODULE_3__reducers_public_pages_reducer__["e" /* arePagesLoading */]);
var getActivePage = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getPagesState, __WEBPACK_IMPORTED_MODULE_3__reducers_public_pages_reducer__["a" /* Pages */]);


/***/ }),

/***/ "../../../../../src/app/page/store/services/public-page.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicPageServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_environments_api_config__ = __webpack_require__("../../../../../src/app/core/environments/api.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PublicPageServices = /** @class */ (function () {
    function PublicPageServices(http, store) {
        this.http = http;
        this.store = store;
    }
    PublicPageServices.prototype.getPage = function (qty) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__core_environments_api_config__["a" /* api */].apiUrl + __WEBPACK_IMPORTED_MODULE_3__core_environments_api_config__["a" /* api */].wp + "/pages?per_page=" + qty);
    };
    PublicPageServices.prototype.getPages = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__core_environments_api_config__["a" /* api */].apiUrl + __WEBPACK_IMPORTED_MODULE_3__core_environments_api_config__["a" /* api */].wp + "/pages");
    };
    PublicPageServices.prototype.getMenu = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__core_environments_api_config__["a" /* api */].apiUrl + __WEBPACK_IMPORTED_MODULE_3__core_environments_api_config__["a" /* api */].menu + "/menus/" + id);
    };
    PublicPageServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]])
    ], PublicPageServices);
    return PublicPageServices;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
document.addEventListener('DOMContentLoaded', function () {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
});


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map