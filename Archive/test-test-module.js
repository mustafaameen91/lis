(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["test-test-module"],{

/***/ "9V8B":
/*!***********************************!*\
  !*** ./src/app/test/test.page.ts ***!
  \***********************************/
/*! exports provided: TestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPage", function() { return TestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_test_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./test.page.html */ "hXkP");
/* harmony import */ var _test_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test.page.scss */ "pvUL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../server */ "U8hz");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let TestPage = class TestPage {
    constructor(alertCtrl, loadingCtrl, router) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.data = {
            name: '',
            normalFrom: '',
            normalTo: '',
            price: '',
            type: 'range',
            fixedValues: ''
        };
        this.options = [
            {
                ageFrom: 0,
                ageTo: 0,
                normalFrom: 0,
                normalTo: 0
            }
        ];
    }
    ngOnInit() {
    }
    addNewOption() {
        this.options.push({
            ageFrom: 0,
            ageTo: 0,
            normalFrom: 0,
            normalTo: 0
        });
    }
    test() {
        console.log(this.data.fixedValues);
        console.log();
    }
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Please wait...'
            });
            yield loading.present();
            let fixed = 0;
            let options;
            if (this.data.type == 'fixed') {
                fixed = 1;
                options = this.data.fixedValues.split('\n');
            }
            else {
                options = this.options;
            }
            axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(_server__WEBPACK_IMPORTED_MODULE_6__["api"] + 'createTest', {
                testName: this.data.name,
                price: this.data.price,
                fixed: fixed,
                options: options
            }).then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let message = yield this.alertCtrl.create({
                    header: 'Test has been added Successfully.',
                    subHeader: 'Do you want to add a new test?',
                    buttons: [
                        {
                            text: 'Yes',
                            handler: () => {
                                this.data = {
                                    name: '',
                                    normalFrom: '',
                                    normalTo: '',
                                    price: '',
                                    type: 'range',
                                    fixedValues: ''
                                };
                                this.options = [
                                    {
                                        ageFrom: 0,
                                        ageTo: 0,
                                        normalFrom: 0,
                                        normalTo: 0
                                    }
                                ];
                            }
                        },
                        {
                            text: 'No',
                            handler: () => {
                                this.router.navigateByUrl('/tests');
                            }
                        }
                    ]
                });
                yield message.present();
            })).finally(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield loading.dismiss();
            }));
        });
    }
    segmentChanged(e) {
        return e;
    }
};
TestPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
TestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-test',
        template: _raw_loader_test_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_test_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TestPage);



/***/ }),

/***/ "FScs":
/*!*************************************!*\
  !*** ./src/app/test/test.module.ts ***!
  \*************************************/
/*! exports provided: TestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageModule", function() { return TestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _test_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-routing.module */ "NBQd");
/* harmony import */ var _test_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test.page */ "9V8B");







let TestPageModule = class TestPageModule {
};
TestPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _test_routing_module__WEBPACK_IMPORTED_MODULE_5__["TestPageRoutingModule"]
        ],
        declarations: [_test_page__WEBPACK_IMPORTED_MODULE_6__["TestPage"]]
    })
], TestPageModule);



/***/ }),

/***/ "NBQd":
/*!*********************************************!*\
  !*** ./src/app/test/test-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TestPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageRoutingModule", function() { return TestPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _test_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test.page */ "9V8B");




const routes = [
    {
        path: '',
        component: _test_page__WEBPACK_IMPORTED_MODULE_3__["TestPage"]
    }
];
let TestPageRoutingModule = class TestPageRoutingModule {
};
TestPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TestPageRoutingModule);



/***/ }),

/***/ "hXkP":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title >\n        Add new test\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-card mode=\"ios\">\n          <ion-card-content>\n            <ion-list-header>\n              <ion-label>TEST INFO</ion-label>\n            </ion-list-header>\n            <ion-list>\n              <ion-item>\n                <ion-label position=\"floating\">Name <ion-text color=\"danger\">*</ion-text></ion-label>\n                <ion-input [(ngModel)]=\"data.name\" required></ion-input>\n              </ion-item>\n              <br>\n              <ion-segment [(ngModel)]=\"data.type\" (ionChange)=\"segmentChanged($event)\">\n                <ion-segment-button value=\"range\">\n                  <ion-label>Range</ion-label>\n                </ion-segment-button>\n                <ion-segment-button value=\"fixed\">\n                  <ion-label>Fixed</ion-label>\n                </ion-segment-button>\n              </ion-segment>\n              <br>\n              <ng-container *ngIf=\"data.type == 'range'\">\n              <ion-item *ngFor=\"let option of options;let i = index\">\n                <ion-label>Age from<ion-text color=\"danger\">*</ion-text></ion-label>\n                <ion-input [(ngModel)]=\"options[i].ageFrom\" required></ion-input>\n                <ion-label>Age to <ion-text color=\"danger\">*</ion-text></ion-label>\n                <ion-input [(ngModel)]=\"options[i].ageTo\" required></ion-input>\n                <ion-label>Normal range from <ion-text color=\"danger\">*</ion-text></ion-label>\n                <ion-input [(ngModel)]=\"options[i].normalFrom\" required></ion-input>\n                <ion-label>Normal range to <ion-text color=\"danger\">*</ion-text></ion-label>\n                <ion-input [(ngModel)]=\"options[i].normalTo\" required></ion-input>\n              </ion-item>\n              <br>\n              <ion-button (click)=\"addNewOption()\" style=\"float:right\" fill=\"solid\" shape=\"round\">\n                ADD NEW FIELD\n              </ion-button>\n              <br><br>\n            </ng-container>\n              <ion-item *ngIf=\"data.type == 'fixed'\">\n                <ion-item>\n                <ion-label position=\"floating\">Separate values by new line</ion-label>\n                  <ion-textarea rows=\"6\" cols=\"20\" [(ngModel)]=\"data.fixedValues\"></ion-textarea>\n                </ion-item>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"floating\">Price (IQD)<ion-text color=\"danger\">*</ion-text></ion-label>\n                <ion-input [(ngModel)]=\"data.price\" required></ion-input>\n              </ion-item>\n             </ion-list>\n             <br>\n             <ion-button (click)=\"save()\" expand=\"block\" fill=\"solid\" color=\"success\">\n               SAVE\n             </ion-button>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n");

/***/ }),

/***/ "pvUL":
/*!*************************************!*\
  !*** ./src/app/test/test.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=test-test-module.js.map