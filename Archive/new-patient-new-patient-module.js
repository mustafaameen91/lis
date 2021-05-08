(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-patient-new-patient-module"],{

/***/ "3IJf":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-patient/new-patient.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>new-patient</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "7jWV":
/*!*************************************************!*\
  !*** ./src/app/new-patient/new-patient.page.ts ***!
  \*************************************************/
/*! exports provided: NewPatientPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPatientPage", function() { return NewPatientPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_new_patient_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./new-patient.page.html */ "3IJf");
/* harmony import */ var _new_patient_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-patient.page.scss */ "Yifp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let NewPatientPage = class NewPatientPage {
    constructor() { }
    ngOnInit() {
    }
};
NewPatientPage.ctorParameters = () => [];
NewPatientPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-new-patient',
        template: _raw_loader_new_patient_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_new_patient_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NewPatientPage);



/***/ }),

/***/ "Yifp":
/*!***************************************************!*\
  !*** ./src/app/new-patient/new-patient.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctcGF0aWVudC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "cS/v":
/*!***********************************************************!*\
  !*** ./src/app/new-patient/new-patient-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: NewPatientPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPatientPageRoutingModule", function() { return NewPatientPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _new_patient_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-patient.page */ "7jWV");




const routes = [
    {
        path: '',
        component: _new_patient_page__WEBPACK_IMPORTED_MODULE_3__["NewPatientPage"]
    }
];
let NewPatientPageRoutingModule = class NewPatientPageRoutingModule {
};
NewPatientPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewPatientPageRoutingModule);



/***/ }),

/***/ "deOV":
/*!***************************************************!*\
  !*** ./src/app/new-patient/new-patient.module.ts ***!
  \***************************************************/
/*! exports provided: NewPatientPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPatientPageModule", function() { return NewPatientPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _new_patient_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-patient-routing.module */ "cS/v");
/* harmony import */ var _new_patient_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-patient.page */ "7jWV");







let NewPatientPageModule = class NewPatientPageModule {
};
NewPatientPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _new_patient_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewPatientPageRoutingModule"]
        ],
        declarations: [_new_patient_page__WEBPACK_IMPORTED_MODULE_6__["NewPatientPage"]]
    })
], NewPatientPageModule);



/***/ })

}]);
//# sourceMappingURL=new-patient-new-patient-module.js.map