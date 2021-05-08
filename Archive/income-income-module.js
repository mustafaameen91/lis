(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["income-income-module"],{

/***/ "2A+z":
/*!***************************************!*\
  !*** ./src/app/income/income.page.ts ***!
  \***************************************/
/*! exports provided: IncomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomePage", function() { return IncomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_income_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./income.page.html */ "VnNy");
/* harmony import */ var _income_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./income.page.scss */ "gE79");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../server */ "U8hz");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");








let IncomePage = class IncomePage {
    constructor(storage) {
        this.storage = storage;
        this.tests = [];
        this.search = {
            from: moment__WEBPACK_IMPORTED_MODULE_6__(new Date()).format('YYYY-MM-DD'),
            to: moment__WEBPACK_IMPORTED_MODULE_6__(new Date()).format('YYYY-MM-DD'),
            testId: 0
        };
        this.results = [];
    }
    ngOnInit() {
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(_server__WEBPACK_IMPORTED_MODULE_5__["api"] + 'tests').then(res => {
            this.tests = res.data;
        });
        this.storage.get("user").then(res => {
            this.userinfo = res.data;
        });
    }
    searchTests() {
        let date1 = moment__WEBPACK_IMPORTED_MODULE_6__(this.search.from).format('YYYY-MM-DD');
        let date2 = moment__WEBPACK_IMPORTED_MODULE_6__(this.search.to).format('YYYY-MM-DD');
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(_server__WEBPACK_IMPORTED_MODULE_5__["api"] + `income?dateOne=${date1}&dateTwo=${date2}&testId=${this.search.testId}`).then(res => {
            this.results = res.data;
            console.log(this.results);
        });
    }
    sum() {
        let sum = 0;
        for (let i = 0; i < this.results.length; i++) {
            sum = sum + this.results[i].price;
        }
        return sum;
    }
    exportToExcel() {
        let excel = [];
        for (let i = 0; i < this.results.length; i++) {
            excel.push({
                patientName: this.results[i].name,
                age: moment__WEBPACK_IMPORTED_MODULE_6__().diff(this.results[i].dob, 'years', false),
                gender: (this.results[i].gender == 0) ? 'Male' : 'Female',
                address: this.results[i].address,
                testName: this.results[i].testName,
                result: this.results[i].result,
                phone: this.results[i].phone,
                date: moment__WEBPACK_IMPORTED_MODULE_6__(this.results[i].requested).format('YYYY-MM-DD HH:mm:ss'),
                price: this.results[i].price,
                testId: this.results[i].idPatientResult,
                userName: this.results[i].userName
            });
        }
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(_server__WEBPACK_IMPORTED_MODULE_5__["api"] + 'createExcel', excel).then(res => {
            console.log(res.data);
            window.open(_server__WEBPACK_IMPORTED_MODULE_5__["api"] + res.data.url);
        });
    }
    fixDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_6__(date).format('YYYY-MM-DD –– hh:mm A');
    }
};
IncomePage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"] }
];
IncomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-income',
        template: _raw_loader_income_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_income_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], IncomePage);



/***/ }),

/***/ "9399":
/*!*****************************************!*\
  !*** ./src/app/income/income.module.ts ***!
  \*****************************************/
/*! exports provided: IncomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomePageModule", function() { return IncomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _income_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./income-routing.module */ "Bew9");
/* harmony import */ var _income_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./income.page */ "2A+z");







let IncomePageModule = class IncomePageModule {
};
IncomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _income_routing_module__WEBPACK_IMPORTED_MODULE_5__["IncomePageRoutingModule"],
        ],
        declarations: [_income_page__WEBPACK_IMPORTED_MODULE_6__["IncomePage"]]
    })
], IncomePageModule);



/***/ }),

/***/ "Bew9":
/*!*************************************************!*\
  !*** ./src/app/income/income-routing.module.ts ***!
  \*************************************************/
/*! exports provided: IncomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomePageRoutingModule", function() { return IncomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _income_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./income.page */ "2A+z");




const routes = [
    {
        path: '',
        component: _income_page__WEBPACK_IMPORTED_MODULE_3__["IncomePage"]
    }
];
let IncomePageRoutingModule = class IncomePageRoutingModule {
};
IncomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IncomePageRoutingModule);



/***/ }),

/***/ "VnNy":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/income/income.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-item>\n            <ion-icon slot=\"start\" name=\"calendar\"></ion-icon>\n            <ion-label>From</ion-label>\n            <ion-datetime [(ngModel)]=\"search.from\" display-format=\"YYYY-MM-DD\"></ion-datetime>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-item>\n            <ion-icon slot=\"start\" name=\"calendar\"></ion-icon>\n            <ion-label>To</ion-label>\n            <ion-datetime [(ngModel)]=\"search.to\" display-format=\"YYYY-MM-DD\"></ion-datetime>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"4\">\n            <ion-item>\n              <ion-icon slot=\"start\" name=\"flask\"></ion-icon>\n              <ion-label>TEST</ion-label>\n              <ion-select [(ngModel)]=\"search.testId\">\n                <ion-select-option value=\"0\">ALL</ion-select-option>\n                <ion-select-option *ngFor=\"let test of tests\" [value]=\"test.idTest\">{{test.testName}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"solid\" color=\"warning\" (click)=\"searchTests()\">\n        <ion-icon slot=\"start\" name=\"search\"></ion-icon>\n        SEARCH\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\">\n        <ion-card *ngFor=\"let r of results\" mode=\"ios\">\n          <ion-card-content>\n            <ion-grid fixed>\n              <ion-row>\n                <ion-col size=\"6\">\n\n                  <ion-list>\n                    <ion-item lines=\"full\">\n                      <ion-icon name=\"flask-outline\" slot=\"start\"></ion-icon>\n                      <ion-label>\n                        Test name: <b>{{r.testName}}</b>\n                      </ion-label>\n                    </ion-item>\n                    <ion-item lines=\"full\">\n                      <ion-icon name=\"person-circle-outline\" slot=\"start\"></ion-icon>\n                      <ion-label>\n                        Patient name: <b>{{r.name}}</b>\n                      </ion-label>\n                    </ion-item>\n                    <ion-item lines=\"full\">\n                      <ion-icon name=\"cash-outline\" slot=\"start\"></ion-icon>\n                      <ion-label>\n                        Price: <b>{{r.price | number}}</b>\n                      </ion-label>\n                    </ion-item>\n                  </ion-list>\n\n\n                </ion-col>\n                <ion-col size=\"6\">\n\n                  <ion-list>\n                    <ion-item lines=\"full\">\n                      <ion-icon name=\"calendar-outline\" slot=\"start\"></ion-icon>\n                      <ion-label>\n                        Requested: <b>{{fixDate(r.requested)}}</b>\n                      </ion-label>\n                    </ion-item>\n                    <ion-item lines=\"full\">\n                      <ion-icon name=\"calendar-outline\" slot=\"start\"></ion-icon>\n                      <ion-label>\n                        Collected: <b>{{fixDate(r.collected)}}</b>\n                      </ion-label>\n                    </ion-item>\n                    <ion-item lines=\"full\">\n                      <ion-icon name=\"calendar-outline\" slot=\"start\"></ion-icon>\n                      <ion-label>\n                        Perform: <b>{{fixDate(r.perform)}}</b>\n                      </ion-label>\n                    </ion-item>\n                  </ion-list>\n\n\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title>Total: {{sum() | number}} ({{results.length}} Tests)</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"solid\" color=\"success\" (click)=\"exportToExcel()\">\n        <ion-icon slot=\"start\" name=\"attach-outline\"></ion-icon>\n        EXPORT TO EXCEL\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "gE79":
/*!*****************************************!*\
  !*** ./src/app/income/income.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmNvbWUucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=income-income-module.js.map