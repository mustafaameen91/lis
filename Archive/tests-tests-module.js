(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tests-tests-module"],{

/***/ "+3ZT":
/*!***************************************!*\
  !*** ./src/app/tests/tests.module.ts ***!
  \***************************************/
/*! exports provided: TestsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestsPageModule", function() { return TestsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _tests_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tests-routing.module */ "rqqY");
/* harmony import */ var _tests_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tests.page */ "bvJE");







let TestsPageModule = class TestsPageModule {
};
TestsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tests_routing_module__WEBPACK_IMPORTED_MODULE_5__["TestsPageRoutingModule"]
        ],
        declarations: [_tests_page__WEBPACK_IMPORTED_MODULE_6__["TestsPage"]]
    })
], TestsPageModule);



/***/ }),

/***/ "Y4rh":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tests/tests.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"userinfo['idRole'] != 3\"  routerLink=\"/test/new\" color=\"success\" fill=\"solid\">\n        <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n        Add new test\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Tests</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-searchbar mode=\"ios\" placeholder=\"Search By Test Name\" (ionChange)=\"search($event)\" [debounce]=\"250\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n<ion-list>\n  <ion-item *ngFor=\"let test of tests\" lines=\"full\" button>\n    <ion-icon slot=\"start\" name=\"flask-outline\"></ion-icon>\n    <ion-label><b>{{test.testName}}</b><br></ion-label>\n    <ion-label>Price: {{test.price | number}} IQD</ion-label>\n  </ion-item>\n</ion-list>\n</ion-content>\n");

/***/ }),

/***/ "bvJE":
/*!*************************************!*\
  !*** ./src/app/tests/tests.page.ts ***!
  \*************************************/
/*! exports provided: TestsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestsPage", function() { return TestsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tests_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tests.page.html */ "Y4rh");
/* harmony import */ var _tests_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tests.page.scss */ "oAhI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../server */ "U8hz");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");







let TestsPage = class TestsPage {
    constructor(storage) {
        this.storage = storage;
        this.tests = [];
        this.userinfo = {
            idRole: 3
        };
    }
    ngOnInit() {
        this.storage.get('user').then(res => {
            this.userinfo = res.data;
            this.loadTests();
        });
    }
    loadTests() {
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(_server__WEBPACK_IMPORTED_MODULE_5__["api"] + 'tests').then(res => {
            this.tests = res.data;
        });
    }
    search(e) {
        return e;
    }
};
TestsPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__["Storage"] }
];
TestsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tests',
        template: _raw_loader_tests_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tests_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TestsPage);



/***/ }),

/***/ "oAhI":
/*!***************************************!*\
  !*** ./src/app/tests/tests.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0cy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "rqqY":
/*!***********************************************!*\
  !*** ./src/app/tests/tests-routing.module.ts ***!
  \***********************************************/
/*! exports provided: TestsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestsPageRoutingModule", function() { return TestsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tests_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tests.page */ "bvJE");




const routes = [
    {
        path: '',
        component: _tests_page__WEBPACK_IMPORTED_MODULE_3__["TestsPage"]
    }
];
let TestsPageRoutingModule = class TestsPageRoutingModule {
};
TestsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TestsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=tests-tests-module.js.map