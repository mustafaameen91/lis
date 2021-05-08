(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["import-import-module"],{

/***/ "9TgR":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/import/import.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>import</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "AcXa":
/*!*****************************************!*\
  !*** ./src/app/import/import.module.ts ***!
  \*****************************************/
/*! exports provided: ImportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportPageModule", function() { return ImportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _import_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./import-routing.module */ "NjIl");
/* harmony import */ var _import_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./import.page */ "N5u2");







let ImportPageModule = class ImportPageModule {
};
ImportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _import_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImportPageRoutingModule"]
        ],
        declarations: [_import_page__WEBPACK_IMPORTED_MODULE_6__["ImportPage"]]
    })
], ImportPageModule);



/***/ }),

/***/ "KPZw":
/*!*****************************************!*\
  !*** ./src/app/import/import.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbXBvcnQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "N5u2":
/*!***************************************!*\
  !*** ./src/app/import/import.page.ts ***!
  \***************************************/
/*! exports provided: ImportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportPage", function() { return ImportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_import_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./import.page.html */ "9TgR");
/* harmony import */ var _import_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import.page.scss */ "KPZw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ImportPage = class ImportPage {
    constructor() { }
    ngOnInit() {
    }
};
ImportPage.ctorParameters = () => [];
ImportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-import',
        template: _raw_loader_import_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_import_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ImportPage);



/***/ }),

/***/ "NjIl":
/*!*************************************************!*\
  !*** ./src/app/import/import-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ImportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportPageRoutingModule", function() { return ImportPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _import_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./import.page */ "N5u2");




const routes = [
    {
        path: '',
        component: _import_page__WEBPACK_IMPORTED_MODULE_3__["ImportPage"]
    }
];
let ImportPageRoutingModule = class ImportPageRoutingModule {
};
ImportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ImportPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=import-import-module.js.map