(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoice-invoice-module"],{

/***/ "6MpR":
/*!*****************************************!*\
  !*** ./src/app/invoice/invoice.page.ts ***!
  \*****************************************/
/*! exports provided: InvoicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicePage", function() { return InvoicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_invoice_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./invoice.page.html */ "TRUz");
/* harmony import */ var _invoice_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoice.page.scss */ "CZNA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let InvoicePage = class InvoicePage {
    constructor() { }
    ngOnInit() {
    }
};
InvoicePage.ctorParameters = () => [];
InvoicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-invoice',
        template: _raw_loader_invoice_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_invoice_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InvoicePage);



/***/ }),

/***/ "CZNA":
/*!*******************************************!*\
  !*** ./src/app/invoice/invoice.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZvaWNlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "EbbV":
/*!***************************************************!*\
  !*** ./src/app/invoice/invoice-routing.module.ts ***!
  \***************************************************/
/*! exports provided: InvoicePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicePageRoutingModule", function() { return InvoicePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _invoice_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invoice.page */ "6MpR");




const routes = [
    {
        path: '',
        component: _invoice_page__WEBPACK_IMPORTED_MODULE_3__["InvoicePage"]
    }
];
let InvoicePageRoutingModule = class InvoicePageRoutingModule {
};
InvoicePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InvoicePageRoutingModule);



/***/ }),

/***/ "TRUz":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invoice/invoice.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>invoice</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button printSectionId=\"print-section\">\n        <ion-icon slot=\"start\" name=\"print\"></ion-icon>\n        PRINT\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <table id=\"print-section\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\" class=\"fullTable\" bgcolor=\"#e1e1e1\">\n    <tr>\n      <td height=\"20\"></td>\n    </tr>\n    <tr>\n      <td>\n        <table width=\"600\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\" class=\"fullTable\" bgcolor=\"#ffffff\" style=\"border-radius: 10px 10px 0 0;\">\n          <tr class=\"hiddenMobile\">\n            <td height=\"40\"></td>\n          </tr>\n          <tr class=\"visibleMobile\">\n            <td height=\"30\"></td>\n          </tr>\n  \n          <tr>\n            <td>\n              <table width=\"480\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\" class=\"fullPadding\">\n                <tbody>\n                  <tr>\n                    <td>\n                      <table width=\"220\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" align=\"left\" class=\"col\">\n                        <tbody>\n                          <tr>\n                            <td align=\"left\"> <img src=\"assets/icon/logo.png\" width=\"32\" alt=\"logo\" border=\"0\" /></td>\n                          </tr>\n                          <tr class=\"hiddenMobile\">\n                            <td height=\"40\"></td>\n                          </tr>\n                          <tr class=\"visibleMobile\">\n                            <td height=\"20\"></td>\n                          </tr>\n                          <tr>\n                            <td style=\"font-size: 12px; color: #5b5b5b; font-family: 'Open Sans', sans-serif; line-height: 18px; vertical-align: top; text-align: left;\">\n                              Hello, Philip Brooks.\n                              <br> Thank you for shopping from our store and for your order.\n                            </td>\n                          </tr>\n                        </tbody>\n                      </table>\n                      <table width=\"220\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" align=\"right\" class=\"col\">\n                        <tbody>\n                          <tr class=\"visibleMobile\">\n                            <td height=\"20\"></td>\n                          </tr>\n                          <tr>\n                            <td height=\"5\"></td>\n                          </tr>\n                          <tr>\n                            <td style=\"font-size: 21px; color: #ff0000; letter-spacing: -1px; font-family: 'Open Sans', sans-serif; line-height: 1; vertical-align: top; text-align: right;\">\n                              Invoice\n                            </td>\n                          </tr>\n                          <tr>\n                          <tr class=\"hiddenMobile\">\n                            <td height=\"50\"></td>\n                          </tr>\n                          <tr class=\"visibleMobile\">\n                            <td height=\"20\"></td>\n                          </tr>\n                          <tr>\n                            <td style=\"font-size: 12px; color: #5b5b5b; font-family: 'Open Sans', sans-serif; line-height: 18px; vertical-align: top; text-align: right;\">\n                              <small>ORDER</small> #800000025<br />\n                              <small>MARCH 4TH 2016</small>\n                            </td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </td>\n          </tr>\n        </table>\n      </td>\n    </tr>\n  </table>\n  <!-- /Header -->\n  <!-- Order Details -->\n  <table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\" class=\"fullTable\" bgcolor=\"#e1e1e1\">\n    <tbody>\n      <tr>\n        <td>\n          <table width=\"600\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\" class=\"fullTable\" bgcolor=\"#ffffff\">\n            <tbody>\n              <tr>\n              <tr class=\"hiddenMobile\">\n                <td height=\"60\"></td>\n              </tr>\n              <tr class=\"visibleMobile\">\n                <td height=\"40\"></td>\n              </tr>\n              <tr>\n                <td>\n                  <table width=\"480\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\" class=\"fullPadding\">\n                    <tbody>\n                      <tr>\n                        <th style=\"font-size: 12px; font-family: 'Open Sans', sans-serif; color: #5b5b5b; font-weight: normal; line-height: 1; vertical-align: top; padding: 0 10px 7px 0;\" width=\"52%\" align=\"left\">\n                          Item\n                        </th>\n                        <th style=\"font-size: 12px; font-family: 'Open Sans', sans-serif; color: #5b5b5b; font-weight: normal; line-height: 1; vertical-align: top; padding: 0 0 7px;\" align=\"left\">\n                          <small>SKU</small>\n                        </th>\n                        <th style=\"font-size: 12px; font-family: 'Open Sans', sans-serif; color: #5b5b5b; font-weight: normal; line-height: 1; vertical-align: top; padding: 0 0 7px;\" align=\"center\">\n                          Quantity\n                        </th>\n                        <th style=\"font-size: 12px; font-family: 'Open Sans', sans-serif; color: #1e2b33; font-weight: normal; line-height: 1; vertical-align: top; padding: 0 0 7px;\" align=\"right\">\n                          Subtotal\n                        </th>\n                      </tr>\n                      <tr>\n                        <td height=\"1\" style=\"background: #bebebe;\" colspan=\"4\"></td>\n                      </tr>\n                      <tr>\n                        <td height=\"10\" colspan=\"4\"></td>\n                      </tr>\n                      <tr>\n                        <td style=\"font-size: 12px; font-family: 'Open Sans', sans-serif; color: #ff0000;  line-height: 18px;  vertical-align: top; padding:10px 0;\" class=\"article\">\n                          Beats Studio Over-Ear Headphones\n                        </td>\n                        <td style=\"font-size: 12px; font-family: 'Open Sans', sans-serif; color: #646a6e;  line-height: 18px;  vertical-align: top; padding:10px 0;\"><small>MH792AM/A</small></td>\n                        <td style=\"font-size: 12px; font-family: 'Open Sans', sans-serif; color: #646a6e;  line-height: 18px;  vertical-align: top; padding:10px 0;\" align=\"center\">1</td>\n                        <td style=\"font-size: 12px; font-family: 'Open Sans', sans-serif; color: #1e2b33;  line-height: 18px;  vertical-align: top; padding:10px 0;\" align=\"right\">$299.95</td>\n                      </tr>\n                      <tr>\n                        <td height=\"1\" colspan=\"4\" style=\"border-bottom:1px solid #e4e4e4\"></td>\n                      </tr>\n                      <tr>\n                        <td style=\"font-size: 12px; font-family: 'Open Sans', sans-serif; color: #ff0000;  line-height: 18px;  vertical-align: top; padding:10px 0;\" class=\"article\">Beats RemoteTalk Cable</td>\n                        <td style=\"font-size: 12px; font-family: 'Open Sans', sans-serif; color: #646a6e;  line-height: 18px;  vertical-align: top; padding:10px 0;\"><small>MHDV2G/A</small></td>\n                        <td style=\"font-size: 12px; font-family: 'Open Sans', sans-serif; color: #646a6e;  line-height: 18px;  vertical-align: top; padding:10px 0;\" align=\"center\">1</td>\n                        <td style=\"font-size: 12px; font-family: 'Open Sans', sans-serif; color: #1e2b33;  line-height: 18px;  vertical-align: top; padding:10px 0;\" align=\"right\">$29.95</td>\n                      </tr>\n                      <tr>\n                        <td height=\"1\" colspan=\"4\" style=\"border-bottom:1px solid #e4e4e4\"></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <td height=\"20\"></td>\n              </tr>\n            </tbody>\n          </table>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <!-- /Order Details -->\n  <!-- Total -->\n  <table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\" class=\"fullTable\" bgcolor=\"#e1e1e1\">\n    <tbody>\n      <tr>\n        <td>\n          <table width=\"600\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\" class=\"fullTable\" bgcolor=\"#ffffff\">\n            <tbody>\n              <tr>\n                <td>\n  \n                  <!-- Table Total -->\n                  <table width=\"480\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\" class=\"fullPadding\">\n                    <tbody>\n                      <tr>\n                        <td style=\"font-size: 12px; font-family: 'Open Sans', sans-serif; color: #646a6e; line-height: 22px; vertical-align: top; text-align:right; \">\n                          Subtotal\n                        </td>\n                        <td style=\"font-size: 12px; font-family: 'Open Sans', sans-serif; color: #646a6e; line-height: 22px; vertical-align: top; text-align:right; white-space:nowrap;\" width=\"80\">\n                          $329.90\n                        </td>\n                      </tr>\n                      <tr>\n                        <td style=\"font-size: 12px; font-family: 'Open Sans', sans-serif; color: #646a6e; line-height: 22px; vertical-align: top; text-align:right; \">\n                          Shipping &amp; Handling\n                        </td>\n                        <td style=\"font-size: 12px; font-family: 'Open Sans', sans-serif; color: #646a6e; line-height: 22px; vertical-align: top; text-align:right; \">\n                          $15.00\n                        </td>\n                      </tr>\n                      <tr>\n                        <td style=\"font-size: 12px; font-family: 'Open Sans', sans-serif; color: #000; line-height: 22px; vertical-align: top; text-align:right; \">\n                          <strong>Grand Total (Incl.Tax)</strong>\n                        </td>\n                        <td style=\"font-size: 12px; font-family: 'Open Sans', sans-serif; color: #000; line-height: 22px; vertical-align: top; text-align:right; \">\n                          <strong>$344.90</strong>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td style=\"font-size: 12px; font-family: 'Open Sans', sans-serif; color: #b0b0b0; line-height: 22px; vertical-align: top; text-align:right; \"><small>TAX</small></td>\n                        <td style=\"font-size: 12px; font-family: 'Open Sans', sans-serif; color: #b0b0b0; line-height: 22px; vertical-align: top; text-align:right; \">\n                          <small>$72.40</small>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                  <!-- /Table Total -->\n  \n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <!-- /Total -->\n  <!-- Information -->\n  <table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\" class=\"fullTable\" bgcolor=\"#e1e1e1\">\n    <tbody>\n      <tr>\n        <td>\n          <table width=\"600\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\" class=\"fullTable\" bgcolor=\"#ffffff\">\n            <tbody>\n              <tr>\n              <tr class=\"hiddenMobile\">\n                <td height=\"60\"></td>\n              </tr>\n              <tr class=\"visibleMobile\">\n                <td height=\"40\"></td>\n              </tr>\n              <tr>\n                <td>\n                  <table width=\"480\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\" class=\"fullPadding\">\n                    <tbody>\n                      <tr>\n                        <td>\n                          <table width=\"220\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" align=\"left\" class=\"col\">\n  \n                            <tbody>\n                              <tr>\n                                <td style=\"font-size: 11px; font-family: 'Open Sans', sans-serif; color: #5b5b5b; line-height: 1; vertical-align: top; \">\n                                  <strong>BILLING INFORMATION</strong>\n                                </td>\n                              </tr>\n                              <tr>\n                                <td width=\"100%\" height=\"10\"></td>\n                              </tr>\n                              <tr>\n                                <td style=\"font-size: 12px; font-family: 'Open Sans', sans-serif; color: #5b5b5b; line-height: 20px; vertical-align: top; \">\n                                  Philip Brooks<br> Public Wales, Somewhere<br> New York NY<br> 4468, United States<br> T: 202-555-0133\n                                </td>\n                              </tr>\n                            </tbody>\n                          </table>\n  \n  \n                          <table width=\"220\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" align=\"right\" class=\"col\">\n                            <tbody>\n                              <tr class=\"visibleMobile\">\n                                <td height=\"20\"></td>\n                              </tr>\n                              <tr>\n                                <td style=\"font-size: 11px; font-family: 'Open Sans', sans-serif; color: #5b5b5b; line-height: 1; vertical-align: top; \">\n                                  <strong>PAYMENT METHOD</strong>\n                                </td>\n                              </tr>\n                              <tr>\n                                <td width=\"100%\" height=\"10\"></td>\n                              </tr>\n                              <tr>\n                                <td style=\"font-size: 12px; font-family: 'Open Sans', sans-serif; color: #5b5b5b; line-height: 20px; vertical-align: top; \">\n                                  Credit Card<br> Credit Card Type: Visa<br> Worldpay Transaction ID: <a href=\"#\" style=\"color: #ff0000; text-decoration:underline;\">4185939336</a><br>\n                                  <a href=\"#\" style=\"color:#b0b0b0;\">Right of Withdrawal</a>\n                                </td>\n                              </tr>\n                            </tbody>\n                          </table>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <table width=\"480\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\" class=\"fullPadding\">\n                    <tbody>\n                      <tr>\n                        <td>\n                          <table width=\"220\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" align=\"left\" class=\"col\">\n                            <tbody>\n                              <tr class=\"hiddenMobile\">\n                                <td height=\"35\"></td>\n                              </tr>\n                              <tr class=\"visibleMobile\">\n                                <td height=\"20\"></td>\n                              </tr>\n                              <tr>\n                                <td style=\"font-size: 11px; font-family: 'Open Sans', sans-serif; color: #5b5b5b; line-height: 1; vertical-align: top; \">\n                                  <strong>SHIPPING INFORMATION</strong>\n                                </td>\n                              </tr>\n                              <tr>\n                                <td width=\"100%\" height=\"10\"></td>\n                              </tr>\n                              <tr>\n                                <td style=\"font-size: 12px; font-family: 'Open Sans', sans-serif; color: #5b5b5b; line-height: 20px; vertical-align: top; \">\n                                  Sup Inc<br> Another Place, Somewhere<br> New York NY<br> 4468, United States<br> T: 202-555-0171\n                                </td>\n                              </tr>\n                            </tbody>\n                          </table>\n  \n  \n                          <table width=\"220\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" align=\"right\" class=\"col\">\n                            <tbody>\n                              <tr class=\"hiddenMobile\">\n                                <td height=\"35\"></td>\n                              </tr>\n                              <tr class=\"visibleMobile\">\n                                <td height=\"20\"></td>\n                              </tr>\n                              <tr>\n                                <td style=\"font-size: 11px; font-family: 'Open Sans', sans-serif; color: #5b5b5b; line-height: 1; vertical-align: top; \">\n                                  <strong>SHIPPING METHOD</strong>\n                                </td>\n                              </tr>\n                              <tr>\n                                <td width=\"100%\" height=\"10\"></td>\n                              </tr>\n                              <tr>\n                                <td style=\"font-size: 12px; font-family: 'Open Sans', sans-serif; color: #5b5b5b; line-height: 20px; vertical-align: top; \">\n                                  UPS: U.S. Shipping Services\n                                </td>\n                              </tr>\n                            </tbody>\n                          </table>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </td>\n              </tr>\n              <tr class=\"hiddenMobile\">\n                <td height=\"60\"></td>\n              </tr>\n              <tr class=\"visibleMobile\">\n                <td height=\"30\"></td>\n              </tr>\n            </tbody>\n          </table>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <!-- /Information -->\n  <table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\" class=\"fullTable\" bgcolor=\"#e1e1e1\">\n  \n    <tr>\n      <td>\n        <table width=\"600\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\" class=\"fullTable\" bgcolor=\"#ffffff\" style=\"border-radius: 0 0 10px 10px;\">\n          <tr>\n            <td>\n              <table width=\"480\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\" class=\"fullPadding\">\n                <tbody>\n                  <tr>\n                    <td style=\"font-size: 12px; color: #5b5b5b; font-family: 'Open Sans', sans-serif; line-height: 18px; vertical-align: top; text-align: left;\">\n                      Have a nice day.\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </td>\n          </tr>\n          <tr class=\"spacer\">\n            <td height=\"50\"></td>\n          </tr>\n  \n        </table>\n      </td>\n    </tr>\n    <tr>\n      <td height=\"20\"></td>\n    </tr>\n  </table>\n\n\n</ion-content>\n");

/***/ }),

/***/ "hdHI":
/*!*******************************************!*\
  !*** ./src/app/invoice/invoice.module.ts ***!
  \*******************************************/
/*! exports provided: InvoicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicePageModule", function() { return InvoicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _invoice_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invoice-routing.module */ "EbbV");
/* harmony import */ var _invoice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./invoice.page */ "6MpR");







let InvoicePageModule = class InvoicePageModule {
};
InvoicePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _invoice_routing_module__WEBPACK_IMPORTED_MODULE_5__["InvoicePageRoutingModule"]
        ],
        declarations: [_invoice_page__WEBPACK_IMPORTED_MODULE_6__["InvoicePage"]]
    })
], InvoicePageModule);



/***/ })

}]);
//# sourceMappingURL=invoice-invoice-module.js.map