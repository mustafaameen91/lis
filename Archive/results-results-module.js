(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["results-results-module"],{

/***/ "/Zid":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/results/results.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>results</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <center>\n\n    <br><br><br>\n\n    <ion-input #search type=\"text\" style=\"border-radius: 20px; border: 1px rgb(90, 90, 90) solid;\" placeholder=\"SCAN BARCODE\" (keyup.enter)=\"goToPateint($event)\"></ion-input>\n\n  </center>\n\n</ion-content>\n");

/***/ }),

/***/ "4LYy":
/*!*******************************************!*\
  !*** ./src/app/results/results.module.ts ***!
  \*******************************************/
/*! exports provided: ResultsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsPageModule", function() { return ResultsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _results_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./results-routing.module */ "PoNi");
/* harmony import */ var _results_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./results.page */ "yeUw");







let ResultsPageModule = class ResultsPageModule {
};
ResultsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _results_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResultsPageRoutingModule"]
        ],
        declarations: [_results_page__WEBPACK_IMPORTED_MODULE_6__["ResultsPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
    })
], ResultsPageModule);



/***/ }),

/***/ "G8Ck":
/*!*******************************************!*\
  !*** ./src/app/results/results.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXN1bHRzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "PoNi":
/*!***************************************************!*\
  !*** ./src/app/results/results-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ResultsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsPageRoutingModule", function() { return ResultsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _results_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./results.page */ "yeUw");




const routes = [
    {
        path: '',
        component: _results_page__WEBPACK_IMPORTED_MODULE_3__["ResultsPage"]
    }
];
let ResultsPageRoutingModule = class ResultsPageRoutingModule {
};
ResultsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResultsPageRoutingModule);



/***/ }),

/***/ "yeUw":
/*!*****************************************!*\
  !*** ./src/app/results/results.page.ts ***!
  \*****************************************/
/*! exports provided: ResultsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsPage", function() { return ResultsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_results_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./results.page.html */ "/Zid");
/* harmony import */ var _results_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./results.page.scss */ "G8Ck");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let ResultsPage = class ResultsPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        setInterval(() => {
            this.searchElement.setFocus();
        }, 500);
    }
    goToPateint(e) {
        let code = e.target.value;
        let finalCode = code.split('-')[1];
        this.router.navigateByUrl('/patients/' + finalCode + '/tests');
    }
};
ResultsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ResultsPage.propDecorators = {
    searchElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['search', { static: false },] }]
};
ResultsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-results',
        template: _raw_loader_results_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_results_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ResultsPage);



/***/ })

}]);
//# sourceMappingURL=results-results-module.js.map