(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nations-nations-module"],{

/***/ "AwGV":
/*!***************************************************!*\
  !*** ./src/app/nations/nations-routing.module.ts ***!
  \***************************************************/
/*! exports provided: NationsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NationsPageRoutingModule", function() { return NationsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nations_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nations.page */ "K/I/");




const routes = [
    {
        path: '',
        component: _nations_page__WEBPACK_IMPORTED_MODULE_3__["NationsPage"]
    }
];
let NationsPageRoutingModule = class NationsPageRoutingModule {
};
NationsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NationsPageRoutingModule);



/***/ }),

/***/ "K/I/":
/*!*****************************************!*\
  !*** ./src/app/nations/nations.page.ts ***!
  \*****************************************/
/*! exports provided: NationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NationsPage", function() { return NationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nations_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nations.page.html */ "STfi");
/* harmony import */ var _nations_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nations.page.scss */ "nA7k");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../server */ "U8hz");






let NationsPage = class NationsPage {
    constructor() {
        this.nations = [];
        this.data = {
            nationalName: ''
        };
    }
    ngOnInit() {
        this.getNations();
    }
    getNations() {
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(_server__WEBPACK_IMPORTED_MODULE_5__["api"] + 'nationalities').then(res => {
            this.nations = res.data.reverse();
        });
    }
    addNation() {
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(_server__WEBPACK_IMPORTED_MODULE_5__["api"] + 'addNationality', {
            nationalName: this.data.nationalName
        }).then(res => {
            this.data.nationalName = '';
            this.getNations();
        });
    }
};
NationsPage.ctorParameters = () => [];
NationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nations',
        template: _raw_loader_nations_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nations_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NationsPage);



/***/ }),

/***/ "STfi":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nations/nations.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Nations</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content ion-padding>\n<ion-list>\n  <ion-item>\n    <ion-input [(ngModel)]=\"data.nationalName\" type=\"text\" placeholder=\"Add new nation\"></ion-input>\n    <ion-button (click)=\"addNation()\">\n      ADD\n    </ion-button>\n  </ion-item>\n  <ion-item *ngFor=\"let n of nations\">\n    <ion-label>{{n.nationalName}}</ion-label>\n  </ion-item>\n</ion-list>\n</ion-content>\n");

/***/ }),

/***/ "bVco":
/*!*******************************************!*\
  !*** ./src/app/nations/nations.module.ts ***!
  \*******************************************/
/*! exports provided: NationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NationsPageModule", function() { return NationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nations_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nations-routing.module */ "AwGV");
/* harmony import */ var _nations_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nations.page */ "K/I/");







let NationsPageModule = class NationsPageModule {
};
NationsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _nations_routing_module__WEBPACK_IMPORTED_MODULE_5__["NationsPageRoutingModule"]
        ],
        declarations: [_nations_page__WEBPACK_IMPORTED_MODULE_6__["NationsPage"]]
    })
], NationsPageModule);



/***/ }),

/***/ "nA7k":
/*!*******************************************!*\
  !*** ./src/app/nations/nations.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXRpb25zLnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=nations-nations-module.js.map