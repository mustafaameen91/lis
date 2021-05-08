(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patient-test-patient-test-module"],{

/***/ "+tPD":
/*!*****************************************************!*\
  !*** ./src/app/patient-test/patient-test.module.ts ***!
  \*****************************************************/
/*! exports provided: PatientTestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientTestPageModule", function() { return PatientTestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _patient_test_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patient-test-routing.module */ "jOSw");
/* harmony import */ var _patient_test_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patient-test.page */ "rz01");
/* harmony import */ var ngx_barcode6__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-barcode6 */ "j3iO");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-print */ "m1XX");









let PatientTestPageModule = class PatientTestPageModule {
};
PatientTestPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _patient_test_routing_module__WEBPACK_IMPORTED_MODULE_5__["PatientTestPageRoutingModule"],
            ngx_barcode6__WEBPACK_IMPORTED_MODULE_7__["NgxBarcode6Module"],
            ngx_print__WEBPACK_IMPORTED_MODULE_8__["NgxPrintModule"]
        ],
        declarations: [_patient_test_page__WEBPACK_IMPORTED_MODULE_6__["PatientTestPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
    })
], PatientTestPageModule);



/***/ }),

/***/ "INH2":
/*!*****************************************************!*\
  !*** ./src/app/patient-test/patient-test.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.md-stepper-horizontal {\n  display: table;\n  width: 100%;\n  margin: 0 auto;\n  background-color: #FFFFFF;\n  box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.5);\n}\n.md-stepper-horizontal .md-step {\n  display: table-cell;\n  position: relative;\n  padding: 24px;\n}\n.md-stepper-horizontal .md-step:hover,\n.md-stepper-horizontal .md-step:active {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n.md-stepper-horizontal .md-step:active {\n  border-radius: 15%/75%;\n}\n.md-stepper-horizontal .md-step:first-child:active {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.md-stepper-horizontal .md-step:last-child:active {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.md-stepper-horizontal .md-step:hover .md-step-circle {\n  background-color: #757575;\n}\n.md-stepper-horizontal .md-step:first-child .md-step-bar-left,\n.md-stepper-horizontal .md-step:last-child .md-step-bar-right {\n  display: none;\n}\n.md-stepper-horizontal .md-step .md-step-circle {\n  width: 30px;\n  height: 30px;\n  margin: 0 auto;\n  background-color: #999999;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 30px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #FFFFFF;\n}\n.md-stepper-horizontal.green .md-step.active .md-step-circle {\n  background-color: #00AE4D;\n}\n.md-stepper-horizontal.orange .md-step.active .md-step-circle {\n  background-color: #F96302;\n}\n.md-stepper-horizontal .md-step.active .md-step-circle {\n  background-color: #2196f3;\n}\n.md-stepper-horizontal .md-step.done .md-step-circle:before {\n  font-family: \"FontAwesome\";\n  font-weight: 100;\n  content: \"\";\n}\n.md-stepper-horizontal .md-step.done .md-step-circle *,\n.md-stepper-horizontal .md-step.editable .md-step-circle * {\n  display: none;\n}\n.md-stepper-horizontal .md-step.editable .md-step-circle {\n  transform: scaleX(-1);\n}\n.md-stepper-horizontal .md-step.editable .md-step-circle:before {\n  font-family: \"FontAwesome\";\n  font-weight: 100;\n  content: \"\";\n}\n.md-stepper-horizontal .md-step .md-step-title {\n  margin-top: 16px;\n  font-size: 16px;\n  font-weight: 600;\n}\n.md-stepper-horizontal .md-step .md-step-title,\n.md-stepper-horizontal .md-step .md-step-optional {\n  text-align: center;\n  color: rgba(0, 0, 0, 0.26);\n}\n.md-stepper-horizontal .md-step.active .md-step-title {\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.87);\n}\n.md-stepper-horizontal .md-step.active.done .md-step-title,\n.md-stepper-horizontal .md-step.active.editable .md-step-title {\n  font-weight: 600;\n}\n.md-stepper-horizontal .md-step .md-step-optional {\n  font-size: 12px;\n}\n.md-stepper-horizontal .md-step.active .md-step-optional {\n  color: rgba(0, 0, 0, 0.54);\n}\n.md-stepper-horizontal .md-step .md-step-bar-left,\n.md-stepper-horizontal .md-step .md-step-bar-right {\n  position: absolute;\n  top: 36px;\n  height: 1px;\n  border-top: 1px solid #DDDDDD;\n}\n.md-stepper-horizontal .md-step .md-step-bar-right {\n  right: 0;\n  left: 50%;\n  margin-left: 20px;\n}\n.md-stepper-horizontal .md-step .md-step-bar-left {\n  left: 0;\n  right: 50%;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhdGllbnQtdGVzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0MsY0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSw2Q0FBQTtBQUVEO0FBQUE7RUFDQyxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUdEO0FBREE7O0VBRUMscUNBQUE7QUFJRDtBQUZBO0VBQ0Msc0JBQUE7QUFLRDtBQUhBO0VBQ0MseUJBQUE7RUFDQSw0QkFBQTtBQU1EO0FBSkE7RUFDQywwQkFBQTtFQUNBLDZCQUFBO0FBT0Q7QUFMQTtFQUNDLHlCQUFBO0FBUUQ7QUFOQTs7RUFFQyxhQUFBO0FBU0Q7QUFQQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVVEO0FBUkE7RUFDQyx5QkFBQTtBQVdEO0FBVEE7RUFDQyx5QkFBQTtBQVlEO0FBVkE7RUFDQyx5QkFBQTtBQWFEO0FBWEE7RUFDQywwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQWNEO0FBWkE7O0VBRUMsYUFBQTtBQWVEO0FBYkE7RUFJQyxxQkFBQTtBQWdCRDtBQWRBO0VBQ0MsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFpQkQ7QUFmQTtFQUNDLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBa0JEO0FBaEJBOztFQUVDLGtCQUFBO0VBQ0EsMEJBQUE7QUFtQkQ7QUFqQkE7RUFDQyxnQkFBQTtFQUNBLDBCQUFBO0FBb0JEO0FBbEJBOztFQUVDLGdCQUFBO0FBcUJEO0FBbkJBO0VBQ0MsZUFBQTtBQXNCRDtBQXBCQTtFQUNDLDBCQUFBO0FBdUJEO0FBckJBOztFQUVDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBQXdCRDtBQXRCQTtFQUNDLFFBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUF5QkQ7QUF2QkE7RUFDQyxPQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBMEJEIiwiZmlsZSI6InBhdGllbnQtdGVzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWQtc3RlcHBlci1ob3Jpem9udGFsIHtcblx0ZGlzcGxheTp0YWJsZTtcblx0d2lkdGg6MTAwJTtcblx0bWFyZ2luOjAgYXV0bztcblx0YmFja2dyb3VuZC1jb2xvcjojRkZGRkZGO1xuXHRib3gtc2hhZG93OiAwIDNweCA4cHggLTZweCByZ2JhKDAsMCwwLC41MCk7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwIHtcblx0ZGlzcGxheTp0YWJsZS1jZWxsO1xuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcblx0cGFkZGluZzoyNHB4O1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcDpob3Zlcixcbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXA6YWN0aXZlIHtcblx0YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDAuMDQpO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcDphY3RpdmUge1xuXHRib3JkZXItcmFkaXVzOiAxNSUgLyA3NSU7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwOmZpcnN0LWNoaWxkOmFjdGl2ZSB7XG5cdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG5cdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwOmxhc3QtY2hpbGQ6YWN0aXZlIHtcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG5cdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcDpob3ZlciAubWQtc3RlcC1jaXJjbGUge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiM3NTc1NzU7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwOmZpcnN0LWNoaWxkIC5tZC1zdGVwLWJhci1sZWZ0LFxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcDpsYXN0LWNoaWxkIC5tZC1zdGVwLWJhci1yaWdodCB7XG5cdGRpc3BsYXk6bm9uZTtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAgLm1kLXN0ZXAtY2lyY2xlIHtcblx0d2lkdGg6MzBweDtcblx0aGVpZ2h0OjMwcHg7XG5cdG1hcmdpbjowIGF1dG87XG5cdGJhY2tncm91bmQtY29sb3I6Izk5OTk5OTtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGxpbmUtaGVpZ2h0OjMwcHg7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0Y29sb3I6I0ZGRkZGRjtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwuZ3JlZW4gLm1kLXN0ZXAuYWN0aXZlIC5tZC1zdGVwLWNpcmNsZSB7XG5cdGJhY2tncm91bmQtY29sb3I6IzAwQUU0RDtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwub3JhbmdlIC5tZC1zdGVwLmFjdGl2ZSAubWQtc3RlcC1jaXJjbGUge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiNGOTYzMDI7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwLmFjdGl2ZSAubWQtc3RlcC1jaXJjbGUge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzMsMTUwLDI0Myk7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwLmRvbmUgLm1kLXN0ZXAtY2lyY2xlOmJlZm9yZSB7XG5cdGZvbnQtZmFtaWx5OidGb250QXdlc29tZSc7XG5cdGZvbnQtd2VpZ2h0OjEwMDtcblx0Y29udGVudDogXCJcXGYwMGNcIjtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAuZG9uZSAubWQtc3RlcC1jaXJjbGUgKixcbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAuZWRpdGFibGUgLm1kLXN0ZXAtY2lyY2xlICoge1xuXHRkaXNwbGF5Om5vbmU7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwLmVkaXRhYmxlIC5tZC1zdGVwLWNpcmNsZSB7XG5cdC1tb3otdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuXHQtby10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuXHR0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwLmVkaXRhYmxlIC5tZC1zdGVwLWNpcmNsZTpiZWZvcmUge1xuXHRmb250LWZhbWlseTonRm9udEF3ZXNvbWUnO1xuXHRmb250LXdlaWdodDoxMDA7XG5cdGNvbnRlbnQ6IFwiXFxmMDQwXCI7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwIC5tZC1zdGVwLXRpdGxlIHtcblx0bWFyZ2luLXRvcDoxNnB4O1xuXHRmb250LXNpemU6MTZweDtcblx0Zm9udC13ZWlnaHQ6NjAwO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcCAubWQtc3RlcC10aXRsZSxcbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAgLm1kLXN0ZXAtb3B0aW9uYWwge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGNvbG9yOnJnYmEoMCwwLDAsLjI2KTtcbn1cbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAuYWN0aXZlIC5tZC1zdGVwLXRpdGxlIHtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0Y29sb3I6cmdiYSgwLDAsMCwuODcpO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcC5hY3RpdmUuZG9uZSAubWQtc3RlcC10aXRsZSxcbi5tZC1zdGVwcGVyLWhvcml6b250YWwgLm1kLXN0ZXAuYWN0aXZlLmVkaXRhYmxlIC5tZC1zdGVwLXRpdGxlIHtcblx0Zm9udC13ZWlnaHQ6NjAwO1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcCAubWQtc3RlcC1vcHRpb25hbCB7XG5cdGZvbnQtc2l6ZToxMnB4O1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcC5hY3RpdmUgLm1kLXN0ZXAtb3B0aW9uYWwge1xuXHRjb2xvcjpyZ2JhKDAsMCwwLC41NCk7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwIC5tZC1zdGVwLWJhci1sZWZ0LFxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcCAubWQtc3RlcC1iYXItcmlnaHQge1xuXHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0dG9wOjM2cHg7XG5cdGhlaWdodDoxcHg7XG5cdGJvcmRlci10b3A6MXB4IHNvbGlkICNEREREREQ7XG59XG4ubWQtc3RlcHBlci1ob3Jpem9udGFsIC5tZC1zdGVwIC5tZC1zdGVwLWJhci1yaWdodCB7XG5cdHJpZ2h0OjA7XG5cdGxlZnQ6NTAlO1xuXHRtYXJnaW4tbGVmdDoyMHB4O1xufVxuLm1kLXN0ZXBwZXItaG9yaXpvbnRhbCAubWQtc3RlcCAubWQtc3RlcC1iYXItbGVmdCB7XG5cdGxlZnQ6MDtcblx0cmlnaHQ6NTAlO1xuXHRtYXJnaW4tcmlnaHQ6MjBweDtcbn1cblxuIl19 */");

/***/ }),

/***/ "TJHP":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patient-test/patient-test.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title *ngIf=\"patient != null\">{{patient.name}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"solid\" color=\"success\" (click)=\"addNewCard()\">\n        <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n        ADD NEW CARD\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n<div style=\"text-align: center; padding: 30px;\" *ngIf=\"patientTests.length == 0\">\n  <br><br><br>\n  <img src=\"assets/icon/undraw_empty_xct9.svg\" width=\"200px\" alt=\"\">\n  <ion-text color=\"primary\">\n    <h1>No cards for this patient.</h1>\n  </ion-text>\n  <ion-text color=\"dark\">\n    <p>You can add a new card by clicking \"<b>ADD NEW CARD</b>\" button on the right top corner.</p>\n  </ion-text>\n</div>\n<ion-grid>\n  <ion-row>\n    <ion-col size=\"2\"></ion-col>\n    <ion-col size=\"8\">\n      <ion-card mode=\"ios\" *ngFor=\"let patientTest of patientTests\">\n        <ion-card-header>\n          <ion-card-subtitle>CARD NO: #{{patientTest.idPatientTest}} - Created By: {{patientTest.userName}}\n          </ion-card-subtitle>\n          <ion-card-subtitle><ion-icon name=\"time-outline\"></ion-icon> {{fixDate(patientTest.createdAt)}}\n            <ion-button fill=\"clear\" style=\"float: right; z-index: 10000;\" mode=\"md\" color=\"danger\" (click)=\"deleteCard(patientTest.idPatientTest)\">\n              <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n            </ion-button>\n            \n          </ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-item *ngFor=\"let test of patientTest.results; let i = index\">\n            <ion-grid fixed>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-label><b>{{getTestName(test.testId)}}</b></ion-label>\n                </ion-col>\n                <ion-col size=\"1\">\n                  <ion-label><b>{{i + 1}}</b></ion-label>\n                </ion-col>\n                <ion-col size=\"4\">\n                  <ion-label><b>{{test.price | number}} IQD</b></ion-label>\n                </ion-col>\n                <ion-col size=\"7\">\n              <ion-input (ionChange)=\"setResult($event,test.idPatientResult,test)\" mode=\"md\" placeholder=\"Result\" type=\"text\" *ngIf=\"!isTestFixed(test.testId)\"></ion-input>\n              <ion-select [value]=\"test.result\" (ionChange)=\"setResult($event,test.idPatientResult,test)\" style=\"float: right;\" *ngIf=\"isTestFixed(test.testId)\" interface=\"popover\"  mode=\"md\" placeholder=\"Result\">\n                <ion-select-option *ngFor=\"let option of getTestOptions(test.testId)\">\n                  {{option.optionName}}\n                </ion-select-option>\n              </ion-select>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                  Sample tracker\n                </ion-col>\n                <ion-col size=\"12\">\n                  <div class=\"md-stepper-horizontal orange\">\n                    <div class=\"md-step\" [ngClass]=\"{'active': test.requested != null}\">\n                      <div class=\"md-step-circle\"><span>1</span></div>\n                      <div class=\"md-step-title\">Requested</div>\n                      <div *ngIf=\"test.requested != null\" class=\"md-step-optional\">{{fixDate(test.requested)}}</div>\n                      <div class=\"md-step-bar-left\"></div>\n                      <div class=\"md-step-bar-right\"></div>\n                    </div>\n                    <div class=\"md-step\" [ngClass]=\"{'active': test.collected != null}\">\n                      <div class=\"md-step-circle\"><span>2</span></div>\n                      <div class=\"md-step-title\">Collected</div>\n                      <div *ngIf=\"test.collected != null\" class=\"md-step-optional\">{{fixDate(test.collected)}}</div>\n                      <div class=\"md-step-bar-left\"></div>\n                      <div class=\"md-step-bar-right\"></div>\n                    </div>\n                    <div class=\"md-step\" [ngClass]=\"{'active': test.received != null}\">\n                      <div class=\"md-step-circle\"><span>3</span></div>\n                      <div class=\"md-step-title\">Receive on</div>\n                      <div *ngIf=\"test.received != null\" class=\"md-step-optional\">{{fixDate(test.received)}}</div>\n                      <div class=\"md-step-bar-left\"></div>\n                      <div class=\"md-step-bar-right\"></div>\n                    </div>\n                    <div class=\"md-step\" [ngClass]=\"{'active': test.perform != null}\">\n                      <div class=\"md-step-circle\"><span>4</span></div>\n                      <div class=\"md-step-title\">Perform</div>\n                      <div *ngIf=\"test.perform != null\" class=\"md-step-optional\">{{fixDate(test.perform)}}</div>\n                      <div class=\"md-step-bar-left\"></div>\n                      <div class=\"md-step-bar-right\"></div>\n                    </div>\n                  </div>\n                </ion-col>\n                <ion-col size=\"12\">\n                  <ion-item>\n                    <ion-icon slot=\"start\" name=\"calendar-outline\"></ion-icon>\n                    <ion-label>Set Recieve date</ion-label>\n                    <ion-datetime (ionChange)=\"setRecieveDate(test.idPatientResult,test,$event)\" display-format=\"YYYY-MM-DD\"></ion-datetime>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-button fill=\"clear\"(click)=\"print(test.result,test.requested,test.perform,test.idPatientResult,0)\">\n                    <ion-icon slot=\"start\" name=\"print\"></ion-icon>\n                    CERTIFICATE\n                  </ion-button>\n                  <ion-button *ngIf=\"patient.munaId != null\" color=\"secondary\" fill=\"clear\" (click)=\"print(test.result,test.requested,test.perform,test.idPatientResult,1)\">\n                    <ion-icon slot=\"start\" name=\"print\"></ion-icon>\n                    MUNA CERTIFICATE\n                  </ion-button>\n                  <ion-button color=\"success\" fill=\"clear\" (click)=\"printInvoice(test)\">\n                    <ion-icon slot=\"start\" name=\"print\"></ion-icon>\n                    PRINT INVOICE\n                  </ion-button>\n                  <ion-button (click)=\"printbarcode.click()\" color=\"warning\" fill=\"clear\">\n                    <ion-icon slot=\"start\" name=\"print\"></ion-icon>\n                    BARCODE\n                  </ion-button>\n                  <ion-button (click)=\"genQR(test.idPatientResult)\" color=\"dark\" fill=\"clear\">\n                    <ion-icon slot=\"start\" name=\"qr-code-outline\"></ion-icon>\n                    UPLOAD QR\n                  </ion-button>\n                </ion-col>\n                <ion-col size=\"12\">\n                  <div id=\"print-section\"> \n                  <center>\n                    <div *ngIf=\"patient['munaId'] != null\">مسافرين &nbsp;&nbsp;&nbsp; COVID-19</div>\n                  <div *ngIf=\"patient['munaId'] == null\">راغبين &nbsp;&nbsp;&nbsp; COVID-19</div>\n                  <ngx-barcode6\n                  [bc-format]=\"'CODE128'\"\n                  [bc-value]=\"'RESULT-' + patient.idPatient\"\n                  [bc-display-value]=\"false\"\n                  [bc-height]=\"40\"\n                >\n                </ngx-barcode6>\n                <small>{{fixDate(test.requested)}}\n                  ––\n                  PATIENT ID: {{patient['idPatient']}}\n                  <br>\n                  {{patient['enName']}}\n                </small>\n                  </center>\n                  </div>\n                  <button style=\"display: none;\" #printbarcode printSectionId=\"print-section\" ngxPrint>print</button> \n\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n              \n          </ion-item>\n\n          <ion-item>\n            <ion-label>Add new test</ion-label>\n            <ion-select interface=\"alert\" mode=\"md\" #testid placeholder=\"Select test\">\n              <ion-select-option *ngFor=\"let test of tests\" [value]=\"test\">{{test.testName}}</ion-select-option>\n            </ion-select>\n            <ion-button (click)=\"addNewTest(patientTest.idPatientTest,testid.value)\" slot=\"end\">\n              ADD\n            </ion-button>\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n    \n    </ion-col>\n    <ion-col size=\"2\"></ion-col>\n  </ion-row>\n</ion-grid>  \n\n</ion-content>\n");

/***/ }),

/***/ "jOSw":
/*!*************************************************************!*\
  !*** ./src/app/patient-test/patient-test-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: PatientTestPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientTestPageRoutingModule", function() { return PatientTestPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _patient_test_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patient-test.page */ "rz01");




const routes = [
    {
        path: '',
        component: _patient_test_page__WEBPACK_IMPORTED_MODULE_3__["PatientTestPage"]
    }
];
let PatientTestPageRoutingModule = class PatientTestPageRoutingModule {
};
PatientTestPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PatientTestPageRoutingModule);



/***/ }),

/***/ "rz01":
/*!***************************************************!*\
  !*** ./src/app/patient-test/patient-test.page.ts ***!
  \***************************************************/
/*! exports provided: PatientTestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientTestPage", function() { return PatientTestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_patient_test_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./patient-test.page.html */ "TJHP");
/* harmony import */ var _patient_test_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patient-test.page.scss */ "INH2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../server */ "U8hz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");










let PatientTestPage = class PatientTestPage {
    constructor(route, storage, alertCtrl, loadingCtrl) {
        this.route = route;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.patientId = 0;
        this.patient = {
            munaId: null,
            name: '',
            idPatient: 0
        };
        this.tests = [];
        this.user = null;
        this.patientTests = [];
    }
    ngOnInit() {
        this.storage.get('user').then(data => {
            this.user = data;
            console.log(this.user);
        });
        this.route.paramMap.subscribe(param => {
            this.patientId = param['params']['id'];
            axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(_server__WEBPACK_IMPORTED_MODULE_5__["api"] + 'patient/' + this.patientId).then(res => {
                this.patient = res.data;
                console.log(this.patient);
            });
            axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(_server__WEBPACK_IMPORTED_MODULE_5__["api"] + 'tests').then(res => {
                this.tests = res.data;
                console.log(this.tests);
            });
            this.loadPatientTest();
        });
    }
    addNewCard() {
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(_server__WEBPACK_IMPORTED_MODULE_5__["api"] + 'addPatientTest', {
            patientId: this.patientId,
            createdBy: this.user['data']['idUser']
        }).then(res => {
            axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(_server__WEBPACK_IMPORTED_MODULE_5__["api"] + 'patientTestId/' + this.patientId).then(res => {
                this.patientTests = res.data;
                console.log(this.tests);
            });
        });
    }
    fixDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_8__(date).format('YYYY-MM-DD –– hh:mm A');
    }
    addNewTest(id, test) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Please wait...'
            });
            yield loading.present();
            if (test == undefined)
                return false;
            axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(_server__WEBPACK_IMPORTED_MODULE_5__["api"] + 'addPatientResult', {
                testId: test['idTest'],
                patientTestId: id,
                requested: moment__WEBPACK_IMPORTED_MODULE_8__().format('YYYY-MM-DD HH:mm:ss'),
                collected: moment__WEBPACK_IMPORTED_MODULE_8__().format('YYYY-MM-DD HH:mm:ss'),
                result: '',
                quantity: 1,
                price: test['price'],
            }).then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.loadPatientTest();
            })).finally(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield loading.dismiss();
            }));
        });
    }
    loadPatientTest() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Please wait...'
            });
            yield loading.present();
            axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(_server__WEBPACK_IMPORTED_MODULE_5__["api"] + 'patientTestId/' + this.patientId).then(res => {
                this.patientTests = res.data;
            }).finally(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield loading.dismiss();
            }));
        });
    }
    getTestName(testId) {
        let test = this.tests.filter(x => x.idTest == testId)[0];
        return test['testName'];
    }
    getTestOptions(testId) {
        let test = this.tests.filter(x => x.idTest == testId)[0];
        return test['options'];
    }
    isTestFixed(testId) {
        let test = this.tests.filter(x => x.idTest == testId)[0];
        return test['fixed'];
    }
    setResult(option, testId, test) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Loading...'
            });
            yield loading.present();
            test.result = option.detail.value;
            test.perform = moment__WEBPACK_IMPORTED_MODULE_8__().format('YYYY-MM-DD HH:mm:ss');
            axios__WEBPACK_IMPORTED_MODULE_4___default.a.put(_server__WEBPACK_IMPORTED_MODULE_5__["api"] + 'patientResult/' + testId, test).then((res) => {
                console.log('done');
                location.reload();
            });
        });
    }
    deleteCard(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let message = yield this.alertCtrl.create({
                header: 'Are you sure?',
                subHeader: 'you cannot undo this action.',
                buttons: [
                    {
                        text: "DELETE",
                        role: "cancel",
                        handler: () => {
                            axios__WEBPACK_IMPORTED_MODULE_4___default.a.delete(_server__WEBPACK_IMPORTED_MODULE_5__["api"] + 'patientTest/' + id).then(res => {
                                this.loadPatientTest();
                            });
                        }
                    },
                    {
                        text: "Cancel"
                    }
                ]
            });
            yield message.present();
        });
    }
    print(result, celDate, testDate, resultId, muna = 0) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(celDate, testDate);
            celDate = new Date(celDate);
            celDate.setHours(0);
            celDate.setMinutes(0);
            celDate.setSeconds(0);
            celDate = celDate.toISOString();
            testDate = new Date(testDate);
            testDate.setHours(0);
            testDate.setMinutes(0);
            testDate.setSeconds(0);
            testDate = testDate.toISOString();
            console.log(testDate);
            let loading = yield this.loadingCtrl.create({
                message: 'Please wait...'
            });
            yield loading.present();
            // PREPARE PDF
            let gender = 'Male';
            if (this.patient['gender'] == 1) {
                gender = "Female";
            }
            let age = moment__WEBPACK_IMPORTED_MODULE_8__().diff(this.patient['dob'], 'years', false);
            axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(_server__WEBPACK_IMPORTED_MODULE_5__["api"] + 'certificateResult', {
                "name": this.patient['name'],
                "enName": this.patient['enName'],
                "gender": gender,
                "age": age,
                "patientResultId": resultId,
                "documentId": this.patient['documentId'],
                "date": moment__WEBPACK_IMPORTED_MODULE_8__(testDate).format('YYYY-MMMM-DD'),
                "nationality": this.patient['nationalName'],
                "result": result.replace(/ /g, ''),
                "patientPhoto": this.patient['image']['photoPath']
            }).then(res => {
                let pdf = res.data;
                if (muna == 0) {
                    window.open(_server__WEBPACK_IMPORTED_MODULE_5__["api"] + pdf.certificatePath);
                    loading.dismiss();
                }
                else {
                    // CHECK IF PATIENT ALREADY HAD A CERTIFICATE;
                    let munaId = this.patient['munaId'];
                    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('https://api.munahealth.com/integrations/test-results?filter[participant]=' + munaId).then(res => {
                        // TOTAL CERTIFICATES
                        if (res.data.data.length != 10019200991) {
                            // NO CERT
                            loading.message = 'Creating MUNA blobs...';
                            let sex = 'Male';
                            if (this.patient['gender'] == 1) {
                                sex = 'Female';
                            }
                            axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(_server__WEBPACK_IMPORTED_MODULE_5__["munaApi"] + 'blobs', {
                                "data": {
                                    "type": "kyc_form",
                                    "attributes": {
                                        "value": `{\"first_name\": \"${this.patient['enName']}\",\"last_name\": \"\",\"birthday_date\": \"${this.patient['dob']}\",\"gender\": \"${sex}\",\"phone_number\": \"${this.patient['phone']}\",\"address\": \"-\",   \"documents\": {\"kyc_avatar\": { \"mime_type\": \"\",      \"name\": \"\",      \"key\": \"\" }}}`
                                    },
                                    "relationships": {
                                        "owner": {
                                            "data": {
                                                "id": _server__WEBPACK_IMPORTED_MODULE_5__["munaPublicKey"]
                                            }
                                        }
                                    }
                                }
                            }).then(res => {
                                let blobId = res.data.data.id;
                                console.log(res.data);
                                loading.message = 'MUNA account role updating...';
                                axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(_server__WEBPACK_IMPORTED_MODULE_5__["munaApi"] + 'integrations/hgate/change_role_requests', {
                                    "data": {
                                        "destination": munaId,
                                        "account_role": "participant",
                                        "creator_details": {
                                            "blob_id": blobId
                                        }
                                    }
                                }, {
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                }).finally(() => {
                                    // SUBMIT RESULT
                                    loading.message = 'UPLOADING...';
                                    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(_server__WEBPACK_IMPORTED_MODULE_5__["munaApi"] + 'integrations/hgate/tests', {
                                        "data": {
                                            "participant": munaId,
                                            "manufacturer_of_prc_device": "COP",
                                            "serial_number_of_device": "31433",
                                            "manufacturer_of_reagent": "regat",
                                            "calibration_date": celDate,
                                            "technician_or_physician_name": "Dr Wissam",
                                            "number_of_cycles": "50",
                                            "test_result": result.replace(/ /g, ''),
                                            "test_name": "COVID PCR",
                                            "test_subtype_id": "test1",
                                            "custom_patient_id": this.patient['idPatient'].toString(),
                                            "test_type_id": "test0",
                                            "test_date": testDate,
                                            "documents": {
                                                "patient_photo": {
                                                    "content": pdf.photo,
                                                    "name": pdf.photoName,
                                                    "mime_type": pdf.photo_mime
                                                },
                                                "additional_files": {
                                                    "content": pdf.pdf,
                                                    "name": pdf.fileName,
                                                    "mime_type": pdf.mime_type
                                                },
                                                "pcr_raw_machine_data": {
                                                    "content": "",
                                                    "name": "",
                                                    "mime_type": ""
                                                }
                                            },
                                            "comments": "no comment"
                                        }
                                    }).catch(err => {
                                        console.log(err);
                                        console.log({
                                            "data": {
                                                "participant": munaId,
                                                "manufacturer_of_prc_device": "COP",
                                                "serial_number_of_device": "31433",
                                                "manufacturer_of_reagent": "regat",
                                                "calibration_date": celDate,
                                                "technician_or_physician_name": "Dr Wissam",
                                                "number_of_cycles": "50",
                                                "test_result": result.replace(/ /g, ''),
                                                "test_name": "COVID PCR",
                                                "test_subtype_id": "test1",
                                                "custom_patient_id": this.patient['idPatient'].toString(),
                                                "test_type_id": "test0",
                                                "test_date": testDate,
                                                "documents": {
                                                    "patient_photo": {
                                                        "content": pdf.photo,
                                                        "name": pdf.photoName,
                                                        "mime_type": pdf.photo_mime
                                                    },
                                                    "additional_files": {
                                                        "content": pdf.pdf,
                                                        "name": pdf.fileName,
                                                        "mime_type": pdf.mime_type
                                                    },
                                                    "pcr_raw_machine_data": {
                                                        "content": "",
                                                        "name": "",
                                                        "mime_type": ""
                                                    }
                                                },
                                                "comments": "no comment"
                                            }
                                        });
                                    }).finally(() => {
                                        // CHECK
                                        axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('https://api.munahealth.com/integrations/test-results?filter[participant]=' + munaId).then(res => {
                                            if (res.data.data.length > 0) {
                                                let certId = res.data.data[0].id; // GET LAST RESULT
                                                loading.message = 'Downloading MUNA certificate...';
                                                axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(`https://api.munahealth.com/integrations/test-results/${certId}/certificate`).then(res => {
                                                    console.log(res.data);
                                                    window.open(`https://api.munahealth.com/integrations/test-results/${certId}/certificate`);
                                                    loading.dismiss();
                                                });
                                            }
                                        });
                                    });
                                });
                            }).catch((err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                yield loading.dismiss();
                                console.log(err);
                            }));
                        }
                        else {
                            // CERT FOUND
                            // JUST PRINT IT
                            let certId = res.data.data[res.data.data.length - 1].id; // GET LAST RESULT
                            loading.message = 'Downloading MUNA certificate...';
                            axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(`https://api.munahealth.com/integrations/test-results/${certId}/certificate`).then(res => {
                                console.log(res.data);
                                window.open(`https://api.munahealth.com/integrations/test-results/${certId}/certificate`);
                                loading.dismiss();
                            });
                        }
                    });
                }
            });
        });
    }
    setRecieveDate(id, test, e) {
        let date = new Date(e.detail.value);
        date.setDate(date.getDate());
        test.received = moment__WEBPACK_IMPORTED_MODULE_8__(date).format('YYYY-MM-DD HH:mm:ss');
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.put(_server__WEBPACK_IMPORTED_MODULE_5__["api"] + 'patientResult/' + id, test).then((res) => {
            console.log('done');
            test.received = moment__WEBPACK_IMPORTED_MODULE_8__(e.detail.value).format('YYYY-MM-DD HH:mm:ss');
        });
    }
    printInvoice(test) {
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(_server__WEBPACK_IMPORTED_MODULE_5__["api"] + 'createBill', {
            "name": this.patient['name'],
            "age": moment__WEBPACK_IMPORTED_MODULE_8__().diff(this.patient['dob'], 'years', false) + 'Years – ' + this.patient['gender'],
            "received": moment__WEBPACK_IMPORTED_MODULE_8__(test.received).format('YYYY-MM-DD'),
            "phone": this.patient['phone'],
            "patientId": this.patient['idPatient'],
            "billId": test['idPatientResult'],
            "billDate": moment__WEBPACK_IMPORTED_MODULE_8__().format('YYYY-MMMM-DD'),
            "totalPrice": test.price,
            "tests": [
                { "testName": this.getTestName(test.testId), "charge": test.price }
            ]
        }).then(res => {
            console.log(res.data.url);
            setTimeout(() => {
                window.open(_server__WEBPACK_IMPORTED_MODULE_5__["api"] + res.data.url + '?' + Math.random());
            }, 1000);
        });
    }
    getBarcode(id) {
        let num = 13;
        let idNum = id;
        idNum = idNum.toString().length;
        let remain = num - idNum;
        let x = '';
        for (let i = 0; i < remain; i++) {
            x = x + '0';
        }
        return x + id.toString();
    }
    genQR(result) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Wait...'
            });
            yield loading.present();
            axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(_server__WEBPACK_IMPORTED_MODULE_5__["api"] + 'uploadCertificate/' + result).then(res => {
                console.log(res.data);
            }).finally(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield loading.dismiss();
            }));
        });
    }
};
PatientTestPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"] }
];
PatientTestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-patient-test',
        template: _raw_loader_patient_test_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_patient_test_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PatientTestPage);



/***/ })

}]);
//# sourceMappingURL=patient-test-patient-test-module.js.map