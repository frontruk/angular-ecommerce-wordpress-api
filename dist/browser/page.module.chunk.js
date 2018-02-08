webpackJsonp(["page.module"],{

/***/ "../../../../../src/app/page/components/article-anchor/article-anchor.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ }),

/***/ "../../../../../src/app/page/components/article-anchor/article-anchor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list {\n  list-style: none;\n  padding: 0px;\n  margin: 0px; }\n  .list li {\n    padding: 0px 0px 15px 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page/components/article-anchor/article-anchor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleAnchorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticleAnchorComponent = /** @class */ (function () {
    function ArticleAnchorComponent(route) {
        this.route = route;
        /**
         * Css base class.
         */
        this.addBaseCssClass = true;
    }
    ArticleAnchorComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('class.list'),
        __metadata("design:type", Object)
    ], ArticleAnchorComponent.prototype, "addBaseCssClass", void 0);
    ArticleAnchorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None,
            // tslint:disable-next-line:component-selector
            selector: 'ul[ux-articleanchor]',
            styles: [__webpack_require__("../../../../../src/app/page/components/article-anchor/article-anchor.component.scss")],
            template: __webpack_require__("../../../../../src/app/page/components/article-anchor/article-anchor.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ArticleAnchorComponent);
    return ArticleAnchorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page/components/article-blocks/article-blocks.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ }),

/***/ "../../../../../src/app/page/components/article-blocks/article-blocks.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Playfair+Display+SC:400italic,700,900|Raleway:500|Martel+Sans:400,700);\n@import url(http://fonts.googleapis.com/css?family=Playfair+Display+SC:400italic,700,900|Raleway:500|Martel+Sans:400,700);\n@import url(\"http://fonts.googleapis.com/css?family=Playfair+Display+SC:400italic,700,900|Raleway:500|Martel+Sans:400,700\");\n/* Viewport sizes based on column number and sidebar */\n/* 1 column */\n/* 2 columns */\n/* 3 columns */\n/* 4 columns */\n/* 5 columns */\n/* 6 columns */\n.article-block {\n  color: #7b7b7b;\n  padding: 45px 55px 30px;\n  position: relative;\n  background: #fff;\n  min-height: 300px;\n  cursor: pointer;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: vertical;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n.article-block:hover {\n  color: #2a2a2a; }\n/* Grid item \"border\" */\n.article-block::before {\n  position: absolute;\n  content: '';\n  top: 0px;\n  right: 55px;\n  bottom: 0px;\n  left: 55px;\n  border-bottom: 1px solid rgba(74, 74, 74, 0.075); }\n.article-block * {\n  z-index: 10; }\n@media screen and (min-width: 600px) {\n  .article-block {\n    padding: 45px 45px 30px; } }\n@media screen and (min-width: 900px) {\n  /* 2 columns */\n  .article-block {\n    width: 50%;\n    border: none; }\n  .article-block::before {\n    top: 5px;\n    right: 5px;\n    bottom: 5px;\n    left: 5px;\n    border: 1px solid rgba(74, 74, 74, 0.075);\n    -webkit-transition: opacity 0.3s;\n    transition: opacity 0.3s; }\n  .article-block:hover::before,\n  .article-block:focus::before {\n    border: 3px solid rgba(129, 196, 131, 0.5); }\n  .grid__item--loading.grid__item::before {\n    opacity: 0; } }\n@media screen and (min-width: 1200px) {\n  /* 3 columns */\n  .article-block {\n    width: 33.333%; } }\n@media screen and (min-width: 1500px) {\n  /* 4 columns */\n  .article-block {\n    width: 25%; } }\n@media screen and (min-width: 1800px) {\n  /* 5 columns */\n  .article-block {\n    width: 20%; } }\n@media screen and (min-width: 2100px) {\n  /* 6 columns */\n  .article-block {\n    width: 16.66%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page/components/article-blocks/article-blocks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleBlocksComponent; });
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

var ArticleBlocksComponent = /** @class */ (function () {
    function ArticleBlocksComponent() {
        /**
         * Css base class.
         */
        this.addBaseCssClass = true;
    }
    ArticleBlocksComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('class.article-block'),
        __metadata("design:type", Object)
    ], ArticleBlocksComponent.prototype, "addBaseCssClass", void 0);
    ArticleBlocksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None,
            // tslint:disable-next-line:component-selector
            selector: 'div[ux-articleblocks]',
            styles: [__webpack_require__("../../../../../src/app/page/components/article-blocks/article-blocks.component.scss")],
            template: __webpack_require__("../../../../../src/app/page/components/article-blocks/article-blocks.component.html")
        })
    ], ArticleBlocksComponent);
    return ArticleBlocksComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page/components/article/article.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h1 class=\"title article-title\">{{ content.acf.page_title }}</h1>\n<div [innerHTML]=\"content.content.rendered\"></div>\n<sections ux-sections  *ngFor=\"let block of sectionsList\" [sections]=\"block\"  [attr.id]=\"block.anchor_link\"></sections>\n"

/***/ }),

/***/ "../../../../../src/app/page/components/article/article.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Playfair+Display+SC:400italic,700,900|Raleway:500|Martel+Sans:400,700);\n/* Viewport sizes based on column number and sidebar */\n/* 1 column */\n/* 2 columns */\n/* 3 columns */\n/* 4 columns */\n/* 5 columns */\n/* 6 columns */\narticle.article-page {\n  height: auto;\n  min-height: 100vh;\n  opacity: 1;\n  pointer-events: auto;\n  -webkit-transition: opacity 0.6s;\n  transition: opacity 0.6s;\n  padding-top: 60px; }\narticle.article-page .article-title {\n    -webkit-transition-delay: 0.15s;\n    transition-delay: 0.15s;\n    font-size: 3.25em; }\n@media screen and (min-width: 600px) {\n  .article-page {\n    right: 0;\n    padding-left: 340px;\n    padding-right: 60px; }\n  .article-sidebar {\n    position: fixed;\n    width: 280px;\n    height: 100%;\n    background: #fff;\n    top: 0;\n    left: 0;\n    font-size: 0.85em;\n    padding: 32px 50px;\n    z-index: 500; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page/components/article/article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticleComponent = /** @class */ (function () {
    function ArticleComponent(router) {
        this.router = router;
        /**
         * Css base class.
         */
        this.addBaseCssClass = true;
    }
    ArticleComponent.prototype.ngOnInit = function () {
        if (this.content.acf) {
            this.sectionsList = this.content.acf.anchor;
        }
    };
    ArticleComponent.prototype.goHome = function () {
        this.router.navigate(['']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ArticleComponent.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('class.article-page'),
        __metadata("design:type", Object)
    ], ArticleComponent.prototype, "addBaseCssClass", void 0);
    ArticleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None,
            // tslint:disable-next-line:component-selector
            selector: 'article[ux-article]',
            styles: [__webpack_require__("../../../../../src/app/page/components/article/article.component.scss")],
            template: __webpack_require__("../../../../../src/app/page/components/article/article.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page/components/body-content/body-content.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <ng-content></ng-content>\n"

/***/ }),

/***/ "../../../../../src/app/page/components/body-content/body-content.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Playfair+Display+SC:400italic,700,900|Raleway:500|Martel+Sans:400,700);\n@import url(http://fonts.googleapis.com/css?family=Playfair+Display+SC:400italic,700,900|Raleway:500|Martel+Sans:400,700);\n/* Viewport sizes based on column number and sidebar */\n/* 1 column */\n/* 2 columns */\n/* 3 columns */\n/* 4 columns */\n/* 5 columns */\n/* 6 columns */\n/* Main content */\n.body-content {\n  position: relative;\n  z-index: 50; }\n@media screen and (min-width: 600px) {\n  .body-content {\n    height: 100vh; }\n  .body-content {\n    height: 100%;\n    margin-left: 300px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page/components/body-content/body-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyContentComponent; });
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

var BodyContentComponent = /** @class */ (function () {
    function BodyContentComponent() {
        /**
         * Css base class.
         */
        this.addBaseCssClass = true;
    }
    BodyContentComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('class.body-content'),
        __metadata("design:type", Object)
    ], BodyContentComponent.prototype, "addBaseCssClass", void 0);
    BodyContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None,
            // tslint:disable-next-line:component-selector
            selector: 'div[ux-bodycontent]',
            styles: [__webpack_require__("../../../../../src/app/page/components/body-content/body-content.component.scss")],
            template: __webpack_require__("../../../../../src/app/page/components/body-content/body-content.component.html")
        })
    ], BodyContentComponent);
    return BodyContentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page/components/sections/sections.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"image\">\n   <div class=\"image-block\"><img [src]=\"image\" [alt]=\"sections.section_image.title\"></div>\n</ng-container>\n\n<h3>{{ sections.section_title }}</h3>\n<div [innerHTML]=\"sections.section_content\"></div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/page/components/sections/sections.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Playfair+Display+SC:400italic,700,900|Raleway:500|Martel+Sans:400,700);\n.section-title {\n  margin: 0;\n  font-size: 1.475em;\n  font-family: \"Playfair Display\", serif;\n  text-align: center; }\n.image-block {\n  width: 100%;\n  background-color: #fff; }\n.image-block img {\n    text-align: center;\n    display: block;\n    margin: 15px auto;\n    padding: 15px 0px; }\nul {\n  padding-left: 42px; }\nh3 {\n  padding-bottom: 0px;\n  margin-bottom: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page/components/sections/sections.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionsComponent; });
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

var SectionsComponent = /** @class */ (function () {
    function SectionsComponent() {
        /**
         * Css base class.
         */
        this.addBaseCssClass = true;
    }
    SectionsComponent.prototype.ngOnInit = function () {
        if (this.sections.section_image) {
            console.log('TESTING IMG');
            console.log('img', this.sections.section_image.sizes);
            this.image = this.sections.section_image.sizes.large;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SectionsComponent.prototype, "sections", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('class.sections'),
        __metadata("design:type", Object)
    ], SectionsComponent.prototype, "addBaseCssClass", void 0);
    SectionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None,
            // tslint:disable-next-line:component-selector
            selector: 'sections[ux-sections]',
            styles: [__webpack_require__("../../../../../src/app/page/components/sections/sections.component.scss")],
            template: __webpack_require__("../../../../../src/app/page/components/sections/sections.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], SectionsComponent);
    return SectionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<img class=\"brand\" [src]=\"BrandLogo\" [routerLink]=\"['/']\" />\n\n<ul class=\"avatar-small\">\n    <li><img [src]=\"BrandUx\"></li>\n    <li><img [src]=\"BrandCarl\"></li>\n    <li><img [src]=\"BrancChris\"></li>\n</ul>\n\n\n<div class=\"authors\">\n    <div class=\"avatar\">\n        <img [src]=\"BrandCarl\">\n        <span class=\"avatar-block\">\n            <strong>Carl Worricker</strong>\n            <p>5yrs expert in UX</p>\n        </span>\n    </div>\n    <div class=\"avatar\">\n        <img [src]=\"BrancChris\">\n        <span class=\"avatar-block\">\n            <strong>Chris Tarasovs</strong>\n             <p>11yrs expert in UX & CX</p>\n        </span>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/page/components/sidebar/sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Playfair+Display+SC:400italic,700,900|Raleway:500|Martel+Sans:400,700);\n.brand {\n  display: block;\n  text-align: center;\n  margin: 0px 0px 24px 0px; }\nul {\n  padding: 4px; }\n/* Sidebar */\n.sidebar {\n  text-align: center;\n  background: #f5f5f5;\n  z-index: 1000;\n  position: fixed;\n  width: 300px;\n  max-width: 100%;\n  height: 100%;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  padding: 32px 45px; }\n.sidebar h1 {\n  margin: 0.75em 0 0;\n  font-size: 2em;\n  line-height: 1;\n  font-family: \"Playfair Display\", serif; }\n.sidebar h1 span {\n  display: block; }\n.avatar {\n  position: relative;\n  margin-bottom: 20px; }\n.avatar img {\n    border-radius: 50%;\n    width: 60px;\n    display: block; }\n.avatar p {\n    padding: 0px;\n    margin: 0px;\n    line-height: 18px; }\n.avatar .avatar-block {\n    color: #2a2a2a;\n    position: absolute;\n    padding-left: 71px;\n    padding-top: 0px;\n    text-align: left;\n    left: 0;\n    top: 0; }\n.avatar-small {\n  list-style: none;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n.avatar-small img {\n    border-radius: 50%;\n    width: 100%; }\n.avatar-small li {\n    width: 30%;\n    padding: 0px 1%;\n    display: inline-block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page/components/sidebar/sidebar.componet.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
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

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.BrandLogo = '/assets/ux-e-commerce.png';
        this.BrandCarl = '/assets/carl-worricker.jpg';
        this.BrancChris = '/assets/chris-tarasovs.jpg';
        this.BrandUx = '/assets/ux-small.png';
        /**
         * Css base class.
         */
        this.addBaseCssClass = true;
    }
    SidebarComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('class.sidebar'),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "addBaseCssClass", void 0);
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None,
            // tslint:disable-next-line:component-selector
            selector: 'div[ux-sidebar]',
            styles: [__webpack_require__("../../../../../src/app/page/components/sidebar/sidebar.component.scss")],
            template: __webpack_require__("../../../../../src/app/page/components/sidebar/sidebar.component.html")
        })
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page/containers/articles/articles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesComponent; });
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

var ArticlesComponent = /** @class */ (function () {
    function ArticlesComponent() {
    }
    ArticlesComponent.prototype.ngOnInit = function () {
    };
    ArticlesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-articles',
            template: "\n    <p>\n      articles works!\n    </p>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], ArticlesComponent);
    return ArticlesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page/containers/layout/layout.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Playfair+Display+SC:400italic,700,900|Raleway:500|Martel+Sans:400,700);\n@import url(http://fonts.googleapis.com/css?family=Playfair+Display+SC:400italic,700,900|Raleway:500|Martel+Sans:400,700);\n/* Viewport sizes based on column number and sidebar */\n/* 1 column */\n/* 2 columns */\n/* 3 columns */\n/* 4 columns */\n/* 5 columns */\n/* 6 columns */\n/* Grid container */\n.grid {\n  position: relative; }\n/* Overlay */\n.grid::after {\n  content: '';\n  background: rgba(202, 202, 202, 0.4);\n  opacity: 0;\n  position: absolute;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-transition: opacity 0.5s;\n  transition: opacity 0.5s; }\n.view-single .grid::after {\n  opacity: 1; }\n.article-sidebar .list-title {\n  display: block;\n  font-size: 1.175em;\n  padding: 15px 0px 0px 0px; }\n@media screen and (min-width: 900px) {\n  .grid {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap; } }\n/* scroll helper wrap */\n.scroll-wrap {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch; }\n.article-show {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  pointer-events: none;\n  height: 0;\n  visibility: hidden;\n  z-index: 400;\n  overflow: hidden; }\n.article-show {\n  left: auto;\n  right: 0;\n  width: 100vw; }\n.article-show {\n  height: 100vh;\n  pointer-events: auto;\n  visibility: visible; }\n.sidebar-hide {\n  z-index: -1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page/containers/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__("../../../../../src/app/page/store/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_store__ = __webpack_require__("../../../../../src/app/core/store/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(store, routerStore, router, route) {
        this.store = store;
        this.routerStore = routerStore;
        this.router = router;
        this.route = route;
        this.BrandLogo = '/assets/ux-e-commerce.png';
    }
    LayoutComponent.prototype.goTo = function (selected) {
        if (this.pages[selected.object_id].acf) {
            var path = this.pages[selected.object_id].acf.page_path;
            this.router.navigate([path]);
        }
    };
    LayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navigation$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__store__["f" /* getAllMenusByIds */]);
        /** Article*/
        if (this.route.snapshot.data['content']) {
            this.anchorList = this.route.snapshot.data['content'].acf.anchor;
            this.pageContent = this.route.snapshot.data['content'];
        }
        this.pages$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__store__["h" /* getPagesEntitiesById */]).subscribe(function (data) { return _this.pages = data; });
        this.data$ = this.routerStore.select(__WEBPACK_IMPORTED_MODULE_3__core_store__["c" /* getRouterState */]);
        this.sidebarNav$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__store__["g" /* getMenuChildren */]);
    };
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-layout',
            styles: [__webpack_require__("../../../../../src/app/page/containers/layout/layout.component.scss")],
            template: "\n    \n        <div ux-sidebar [ngClass]=\" {  'sidebar-hide' : pageContent  }\"></div>\n        <div ux-bodycontent>\n            <section class=\"grid\" *ngIf=\"!pageContent\"> \n                <div\n                        ux-articleblocks\n                        *ngFor=\"let item of navigation$ | async\"\n                        class=\"grid__item\"\n                        (click)=\"goTo(item)\"\n                >\n                    <h2 class=\"title title--preview\" [innerHTML]=\"item.title\"></h2>\n                </div>\n            </section>\n            <section *ngIf=\"pageContent\" [ngClass]=\" {  'article-show' : pageContent  }\">\n                <div class=\"article-sidebar\">\n                    <img class=\"brand\" [src]=\"BrandLogo\" [routerLink]=\"['/']\"/>\n                    <strong *ngIf=\"anchorList.length > 0\" class=\"list-title\">Content summary</strong>\n                    <ul ux-articleanchor>\n                        <li  *ngFor=\"let item of anchorList\" >\n                            {{ item.anchor_name }}\n                        </li>\n                    </ul>\n                    <strong *ngIf=\"(sidebarNav$  | async).length > 0 \" class=\"list-title\">Sub pages</strong>\n                    <ul ux-articleanchor>\n                        <li *ngFor=\"let item of sidebarNav$  | async \"  [routerLink]=\"[ item.object_slug]\">\n                            {{ item.title }}\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"scroll-wrap\">\n                <article ux-article [content]=\"pageContent\" ></article>\n                </div>\n            </section>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page/page.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageModule", function() { return PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_layout_layout_component__ = __webpack_require__("../../../../../src/app/page/containers/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_articles_articles_component__ = __webpack_require__("../../../../../src/app/page/containers/articles/articles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store__ = __webpack_require__("../../../../../src/app/page/store/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store_services_public_page_services__ = __webpack_require__("../../../../../src/app/page/store/services/public-page.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_article_blocks_article_blocks_component__ = __webpack_require__("../../../../../src/app/page/components/article-blocks/article-blocks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_sidebar_sidebar_componet__ = __webpack_require__("../../../../../src/app/page/components/sidebar/sidebar.componet.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_body_content_body_content_component__ = __webpack_require__("../../../../../src/app/page/components/body-content/body-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_article_article_component__ = __webpack_require__("../../../../../src/app/page/components/article/article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_sections_sections_component__ = __webpack_require__("../../../../../src/app/page/components/sections/sections.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_article_anchor_article_anchor_component__ = __webpack_require__("../../../../../src/app/page/components/article-anchor/article-anchor.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var PageModule = /** @class */ (function () {
    function PageModule() {
    }
    PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__containers_layout_layout_component__["a" /* LayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_4__containers_articles_articles_component__["a" /* ArticlesComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_article_blocks_article_blocks_component__["a" /* ArticleBlocksComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_sidebar_sidebar_componet__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_body_content_body_content_component__["a" /* BodyContentComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_article_article_component__["a" /* ArticleComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_sections_sections_component__["a" /* SectionsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_article_anchor_article_anchor_component__["a" /* ArticleAnchorComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["i" /* StoreModule */].forFeature('public', __WEBPACK_IMPORTED_MODULE_5__store__["j" /* reducers */]),
                __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["c" /* EffectsModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__store__["e" /* effects */]),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_3__containers_layout_layout_component__["a" /* LayoutComponent */],
                        pathMatch: 'full',
                    }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__store_services_public_page_services__["a" /* PublicPageServices */]]
        })
    ], PageModule);
    return PageModule;
}());



/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ })

});
//# sourceMappingURL=page.module.chunk.js.map