(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patients-patients-module"],{

/***/ "//3F":
/*!*******************************************!*\
  !*** ./src/app/patients/patients.page.ts ***!
  \*******************************************/
/*! exports provided: PatientsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsPage", function() { return PatientsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_patients_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./patients.page.html */ "/nHK");
/* harmony import */ var _patients_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patients.page.scss */ "ohuB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _patient_patient_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../patient/patient.page */ "gpqs");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../server */ "U8hz");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");











let PatientsPage = class PatientsPage {
    constructor(modalController, loadingCtrl, alertCtrl, router, storage) {
        this.modalController = modalController;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.storage = storage;
        this.page = 1;
        this.numberPerPage = 20;
        this.patients = [];
        this.api = _server__WEBPACK_IMPORTED_MODULE_7__["api"];
        this.searchbar = '';
        this.searchbarType = 'patient';
        this.userinfo = {
            idRole: 3
        };
    }
    ngOnInit() {
        this.storage.get('user').then(res => {
            this.userinfo = res.data;
            this.getPatients();
        });
    }
    getPatients() {
        axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(_server__WEBPACK_IMPORTED_MODULE_7__["api"] + 'patients?page=' + this.page + '&roleId=' + this.userinfo.idRole + '&number=' + this.numberPerPage).then(res => {
            this.patients = res.data['patients'];
        }).catch(err => {
            console.log(err);
        });
    }
    nextPage() {
        this.patients = [];
        if (this.page > 0) {
            this.page = this.page + 1;
            this.getPatients();
        }
    }
    prevPage() {
        this.patients = [];
        if (this.page > 1) {
            this.page = this.page - 1;
            this.getPatients();
        }
    }
    getGender(gender) {
        if (gender == 0) {
            return 'Male';
        }
        else {
            return 'Female';
        }
    }
    getAge(date) {
        return moment__WEBPACK_IMPORTED_MODULE_8__().diff(date, 'years', false);
    }
    showPatientProfile(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _patient_patient_page__WEBPACK_IMPORTED_MODULE_5__["PatientPage"],
                mode: 'ios',
                componentProps: {
                    id: id
                },
                cssClass: 'patientModal'
            });
            return yield modal.present();
        });
    }
    addToMuna(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Please wait...'
            });
            let message = yield this.alertCtrl.create({
                header: 'Confirm adding this pateint to MUNA system?',
                buttons: [
                    {
                        text: 'YES',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            yield loading.present();
                            let munaData = {
                                data: {
                                    type: "identity",
                                    attributes: {
                                        email: id['email'],
                                        passport: id['documentId'],
                                    },
                                },
                            };
                            axios__WEBPACK_IMPORTED_MODULE_6___default.a
                                .post(_server__WEBPACK_IMPORTED_MODULE_7__["munaApi"] + "identities", JSON.stringify(munaData))
                                .then((response) => {
                                let munaId = response.data.data.id;
                                axios__WEBPACK_IMPORTED_MODULE_6___default.a.put(_server__WEBPACK_IMPORTED_MODULE_7__["api"] + 'patientMunaId/' + id.idPatient, {
                                    munaId: munaId
                                }).finally(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    this.getPatients();
                                    yield loading.dismiss();
                                }));
                            })
                                .catch((error) => {
                                console.log(error);
                            }).finally(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                yield loading.dismiss();
                            }));
                        })
                    },
                    {
                        text: "NO"
                    }
                ]
            });
            yield message.present();
        });
    }
    search(e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(e);
            if (this.searchbarType == 'patient') {
                let loading = yield this.loadingCtrl.create({
                    message: 'Loading...'
                });
                yield loading.present();
                axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(_server__WEBPACK_IMPORTED_MODULE_7__["api"] + 'findPatient?search=' + this.searchbar).then(res => {
                    this.patients = res.data;
                }).finally(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield loading.dismiss();
                }));
            }
            else {
                axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(_server__WEBPACK_IMPORTED_MODULE_7__["api"] + 'patientResult/' + this.searchbar).then(res => {
                    let testId = res.data.patientTestId;
                    axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(_server__WEBPACK_IMPORTED_MODULE_7__["api"] + 'patientTest/ ' + testId).then(res => {
                        let patientId = res.data.patientId;
                        this.router.navigateByUrl('/patients/' + patientId + '/tests');
                    });
                });
            }
        });
    }
};
PatientsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_10__["Storage"] }
];
PatientsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-patients',
        template: _raw_loader_patients_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_patients_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PatientsPage);



/***/ }),

/***/ "/nHK":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patients/patients.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"userinfo['idRole'] != 3\" routerLink=\"/patient/new\" color=\"success\" fill=\"solid\">\n        <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n        Add new patient\n      </ion-button>\n    </ion-buttons>\n    <ion-row>\n      <ion-col size=\"3\">\n        <ion-segment mode=\"ios\" [(ngModel)]=\"searchbarType\">\n          <ion-segment-button value=\"patient\">\n            <ion-label>Patient info</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"test\">\n            <ion-label>Test info</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"12\">\n    <ion-searchbar *ngIf=\"searchbarType == 'patient'\" mode=\"ios\" placeholder=\"Search By Patient Passport or Patient Name\" (keyup.enter)=\"search($event)\" [(ngModel)]=\"searchbar\" [debounce]=\"250\"></ion-searchbar>\n    <ion-searchbar *ngIf=\"searchbarType == 'test'\" mode=\"ios\" placeholder=\"Search By Test ID\" (keyup.enter)=\"search($event)\" [(ngModel)]=\"searchbar\" [debounce]=\"250\"></ion-searchbar>\n\n      </ion-col>\n      <ion-col size=\"3\">\n        \n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n<ion-list>\n  <!-- [routerLink]=\"'/patient/' + patient.idPatient\" -->\n  <ion-item *ngFor=\"let patient of patients\" lines=\"full\">\n    <ion-icon *ngIf=\"patient.image == undefined\" slot=\"start\" name=\"person-circle-outline\"></ion-icon>\n    <ion-avatar *ngIf=\"patient.image != undefined\" slot=\"start\">\n      <img [src]=\"api + patient.image.photoPath\" />\n    </ion-avatar>\n    <ion-label><b>{{patient.name}}</b><br><small>#{{patient.idPatient}}</small></ion-label>\n    <ion-label>Age: {{getAge(patient.dob)}} Years</ion-label>\n    <ion-label>Gender: {{getGender(patient.gender)}}</ion-label>\n    <ion-label>Phone: {{patient.phone}}</ion-label>\n    <ion-label>\n      <img *ngIf=\"patient.munaId != null\" src=\"assets/icon/muna.svg\" height=\"20px\" alt=\"\">\n    </ion-label>\n    <div *ngIf=\"userinfo['idRole'] != 3\"  style=\"width:100px\">\n      <ion-button color=\"danger\" [routerLink]=\"'/patients/' + patient.idPatient + '/tests'\" expand=\"block\" fill=\"clear\">\n        <ion-icon slot=\"start\" name=\"flask\"></ion-icon>\n        TESTS\n      </ion-button>\n      <ion-button color=\"secondary\" [routerLink]=\"'/patient/' + patient.idPatient\" expand=\"block\" fill=\"clear\">\n        <ion-icon slot=\"start\" name=\"create\"></ion-icon>\n        EDIT\n      </ion-button>\n      <ion-button *ngIf=\"patient.munaId == null\" color=\"secondary\" (click)=\"addToMuna(patient)\" expand=\"block\" fill=\"clear\">\n        <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n        MUNA\n      </ion-button>\n    </div>\n  </ion-item>\n</ion-list>\n\n<ion-list *ngIf=\"patients.length == 0\">\n  <ion-item *ngFor=\"let i of [1,2,3,4,5,6,7,8]\" lines=\"full\" button>\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"3\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n</ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title>Page: {{page}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"prevPage()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"nextPage()\">\n        <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "EH7E":
/*!*********************************************!*\
  !*** ./src/app/patients/patients.module.ts ***!
  \*********************************************/
/*! exports provided: PatientsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsPageModule", function() { return PatientsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _patients_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patients-routing.module */ "aUUc");
/* harmony import */ var _patients_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patients.page */ "//3F");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-print */ "m1XX");








let PatientsPageModule = class PatientsPageModule {
};
PatientsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _patients_routing_module__WEBPACK_IMPORTED_MODULE_5__["PatientsPageRoutingModule"],
            ngx_print__WEBPACK_IMPORTED_MODULE_7__["NgxPrintModule"]
        ],
        declarations: [_patients_page__WEBPACK_IMPORTED_MODULE_6__["PatientsPage"]]
    })
], PatientsPageModule);



/***/ }),

/***/ "aUUc":
/*!*****************************************************!*\
  !*** ./src/app/patients/patients-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PatientsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsPageRoutingModule", function() { return PatientsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _patients_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patients.page */ "//3F");




const routes = [
    {
        path: '',
        component: _patients_page__WEBPACK_IMPORTED_MODULE_3__["PatientsPage"]
    }
];
let PatientsPageRoutingModule = class PatientsPageRoutingModule {
};
PatientsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PatientsPageRoutingModule);



/***/ }),

/***/ "ohuB":
/*!*********************************************!*\
  !*** ./src/app/patients/patients.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXRpZW50cy5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=patients-patients-module.js.map