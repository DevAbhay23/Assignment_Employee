(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Welcome to Employee Report</h2>\n<table class=\"employee-table-grid\">\n  <thead>\n    <tr>\n      <th> <span class=\"icon-heading\"></span></th>\n      <th class=\"header-title\"> <span class=\"span-main\">Name</span></th>\n      <th class=\"header-title\"> <span class=\"span-main\">Title</span></th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-template #recursiveTableOne let-orgEmployeesList let-pIndex=\"parentIndex\">\n      <ng-container *ngFor=\"let currentItem of orgEmployeesList; let counter = index\">\n        <tr>\n\n          <td class=\"icon-col\" [style.padding-left]=\"(pIndex+1)*20+'px'\">\n            <span class=\"icon\" (click)=\"collapseClick($event, currentItem)\">\n              <strong>{{getIconText(currentItem)}}</strong>\n            </span>\n          </td>\n\n          <td class=\"name-col\" [style.padding-left]=\"(pIndex+1)*20+'px'\">\n            <span>{{currentItem?.name}}</span>\n          </td>\n          <td class=\"name-col pl-10 text-center\">\n            <span>{{currentItem?.title}}</span>\n          </td>\n\n        </tr>\n\n        <ng-container *ngIf=\"currentItem?.sub?.length > 0 && currentItem.showSub\">\n          <ng-container\n            *ngTemplateOutlet=\"recursiveTableOne; context:{ $implicit: currentItem?.sub,parentIndex:pIndex+1}\">\n          </ng-container>\n        </ng-container>\n\n      </ng-container>\n    </ng-template>\n\n    <ng-container *ngTemplateOutlet=\"recursiveTableOne; context:{ $implicit: orgEmployeesList,parentIndex:0 }\">\n    </ng-container>\n  </tbody>\n</table>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span.span-main {\n  display: inline-block; }\n\nspan.icon-heading {\n  background: #005596;\n  color: transparent;\n  display: inline-block; }\n\n.icon-col {\n  width: 20px; }\n\npl-10 {\n  padding-left: 10px; }\n\n.text-center {\n  text-align: center; }\n\n.employee-table-grid {\n  width: 50%; }\n\n.employee-table-grid thead {\n    background: #005596;\n    color: #ffffff; }\n\n.employee-table-grid thead th {\n      border: 1px solid #dee2e6;\n      vertical-align: top;\n      word-wrap: break-word;\n      white-space: normal; }\n\n.employee-table-grid thead th.header-title {\n        border-right: 0; }\n\n.employee-table-grid tbody tr.name-col {\n    border-right: 1px solid #d1d1d1; }\n\n.employee-table-grid tbody tr:nth-child(even) {\n    background-color: #edf6f8; }\n\n.employee-table-grid tbody tr:nth-child(odd) {\n    background-color: #fff; }\n\n.employee-table-grid tbody tr td {\n    height: 40px;\n    border-top: 0; }\n\n.employee-table-grid span.icon {\n    padding: 10px 0;\n    font-weight: inherit;\n    text-align: inherit;\n    text-overflow: ellipsis;\n    border-color: rgba(0, 0, 0, 0.08);\n    height: 37px;\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXEFzc2lnbm1lbnRzXFx6b3BwZXIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFxQixFQUN0Qjs7QUFFRDtFQUNFLG9CQUFtQjtFQUNuQixtQkFBa0I7RUFDbEIsc0JBQXFCLEVBQ3RCOztBQUVEO0VBQ0UsWUFBVyxFQUNaOztBQUNEO0VBQ0ksbUJBQWlCLEVBQ3BCOztBQUVEO0VBQ0UsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0UsV0FBUyxFQStDVjs7QUFoREQ7SUFHSSxvQkFBbUI7SUFDbkIsZUFBYyxFQVlmOztBQWhCSDtNQU9NLDBCQUF5QjtNQUN6QixvQkFBbUI7TUFDbkIsc0JBQXFCO01BQ3JCLG9CQUFtQixFQUtwQjs7QUFmTDtRQWFRLGdCQUFlLEVBQ2hCOztBQWRQO0lBcUJRLGdDQUErQixFQUNoQzs7QUF0QlA7SUF5QlEsMEJBQXlCLEVBQzFCOztBQTFCUDtJQTZCUSx1QkFBc0IsRUFDdkI7O0FBOUJQO0lBaUNRLGFBQVk7SUFDWixjQUFhLEVBQ2Q7O0FBbkNQO0lBd0NJLGdCQUFlO0lBQ2YscUJBQW9CO0lBQ3BCLG9CQUFtQjtJQUNuQix3QkFBdUI7SUFDdkIsa0NBQWlDO0lBQ2pDLGFBQVk7SUFDWixnQkFBZSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW4uc3Bhbi1tYWluIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbnNwYW4uaWNvbi1oZWFkaW5nIHtcclxuICBiYWNrZ3JvdW5kOiAjMDA1NTk2O1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5pY29uLWNvbCB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbn1cclxucGwtMTB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxufVxyXG5cclxuLnRleHQtY2VudGVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmVtcGxveWVlLXRhYmxlLWdyaWQge1xyXG4gIHdpZHRoOjUwJTtcclxuICB0aGVhZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA1NTk2O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gICAgdGgge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcblxyXG4gICAgICAmLmhlYWRlci10aXRsZSB7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0Ym9keSB7XHJcbiAgICB0ciB7XHJcbiAgICAgICYubmFtZS1jb2wge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkMWQxZDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmNmY4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm50aC1jaGlsZChvZGQpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0ZCB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNwYW4uaWNvbiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICAgIGhlaWdodDogMzdweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_employee_service_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/employee.service.ts */ "./src/app/services/employee.service.ts.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/utils.service */ "./src/app/services/utils.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { takeUntil } from 'rxjs/operators';


var AppComponent = /** @class */ (function () {
    function AppComponent(employeeDataService, utilsProvider) {
        this.employeeDataService = employeeDataService;
        this.utilsProvider = utilsProvider;
        this.title = 'employee';
        this.orgEmployeesList = [];
        this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    /**
     * Method called on page init.
     */
    AppComponent.prototype.ngOnInit = function () {
        this.getEmployeesReportFromServer();
        this.utilsProvider.isDeviceReady().then(function (data) {
            if (data) {
                navigator.splashscreen.hide(); // hide splash screen
            }
        });
    };
    /**
     * Method called on page destroy.
     */
    AppComponent.prototype.ngOnDestroy = function () {
        this.onDestroy$.next();
    };
    /**
     * Function to get employee report from server.
     */
    AppComponent.prototype.getEmployeesReportFromServer = function () {
        this.orgEmployeesList = this.getEmployeesData();
        /*  Below code commented as Api Not Available
        try {
          this.employeeDataService.getEmployeeReportData()
            .pipe(takeUntil(this.onDestroy$))
            .subscribe(
              (retData: any) => {
                if (retData['status']) {
                  this.orgEmployeesList = this.getEmployeesData();
                } else {
                  this.showErrorDialog();
                }
              }, (error) => {
                this.showErrorDialog();
              });
        } catch (e) {
          this.showErrorDialog();
        }
        */
    };
    /**
    * Return sample JSON Data
    */
    AppComponent.prototype.getEmployeesData = function () {
        var sampleData = [
            {
                name: 'abc',
                title: 'Manager',
                sub: [
                    {
                        name: 'def',
                        title: 'TL',
                        sub: [
                            {
                                name: 'ghi',
                                title: 'Associate',
                                sub: []
                            },
                        ]
                    },
                    {
                        name: 'jkl',
                        title: 'TL',
                        sub: []
                    }
                ]
            },
            {
                name: 'mno',
                title: 'Manager',
                sub: [
                    {
                        name: 'pqr',
                        title: 'Associate',
                        sub: []
                    }
                ]
            }
        ];
        return sampleData;
    };
    /**
     * Method to show alert error message to user
     */
    AppComponent.prototype.showErrorDialog = function () {
        var errorMessage = 'Unable to process the request. Please try again after sometime';
        alert(errorMessage);
    };
    /**
     *  Function to handle collapse click for nested records.
     * @param event:row click event.
     * @param dataItem: data item for clicked row.
     */
    AppComponent.prototype.collapseClick = function (event, dataItem) {
        dataItem.showSub = !dataItem.showSub;
        event.stopPropagation();
    };
    /**
     * Method to return icon text
     * @param dataItem:current record in grid
     */
    AppComponent.prototype.getIconText = function (dataItem) {
        var labelText = (dataItem.sub.length > 0) ? dataItem.showSub ? '-' : '+' : ' ';
        return labelText;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_employee_service_ts__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"], _services_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsProvider"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/constants/constants.ts":
/*!*********************************************!*\
  !*** ./src/app/core/constants/constants.ts ***!
  \*********************************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
var Constants;
(function (Constants) {
    Constants[Constants["ApiTimeout"] = 240000] = "ApiTimeout";
    Constants["ApiEndPoint"] = "https://www.zopper.com";
})(Constants || (Constants = {}));


/***/ }),

/***/ "./src/app/core/http/base-http.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/http/base-http.service.ts ***!
  \************************************************/
/*! exports provided: BaseHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseHttpService", function() { return BaseHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/constants */ "./src/app/core/constants/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BaseHttpService = /** @class */ (function () {
    function BaseHttpService(httpClient) {
        this.httpClient = httpClient;
        // Pass header parameters
        this.httpRequestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({})
        };
        this.baseUrl = _constants_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].ApiEndPoint;
    }
    /**
     * Function used for HTTP get
     * @param relativeUrl API endpoint
     * @param options Optional parameters
     */
    BaseHttpService.prototype.get = function (relativeUrl, options) {
        if (options) {
            return this.httpClient.get("" + this.baseUrl + relativeUrl, options);
        }
        else {
            return this.httpClient.get("" + this.baseUrl + relativeUrl);
        }
    };
    /**
     * Function used for HTTP get post
     * @param relativeUrl API endpoint
     * @param data Data object
     * @param options Optional parameters
     */
    BaseHttpService.prototype.post = function (relativeUrl, data, options) {
        if (options) {
            return this.httpClient.post("" + this.baseUrl + relativeUrl, data, options);
        }
        else {
            return this.httpClient.post("" + this.baseUrl + relativeUrl, data);
        }
    };
    /**
     * Function used for HTTP put
     * @param relativeUrl API endpoint
     * @param data Data object
     * @param options Optional parameters
     */
    BaseHttpService.prototype.put = function (relativeUrl, data, options) {
        if (options) {
            return this.httpClient.put("" + this.baseUrl + relativeUrl, data, options);
        }
        else {
            return this.httpClient.put("" + this.baseUrl + relativeUrl, data);
        }
    };
    /**
     * Function used for HTTP delete
     * @param relativeUrl: API endpoint
     * @param options: Optional parameters
     */
    BaseHttpService.prototype.delete = function (relativeUrl, options) {
        if (options) {
            return this.httpClient.delete("" + this.baseUrl + relativeUrl, options);
        }
        else {
            return this.httpClient.delete("" + this.baseUrl + relativeUrl);
        }
    };
    BaseHttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BaseHttpService);
    return BaseHttpService;
}());



/***/ }),

/***/ "./src/app/core/http/end-point.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/http/end-point.service.ts ***!
  \************************************************/
/*! exports provided: EndPointService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndPointService", function() { return EndPointService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EndPointService = /** @class */ (function () {
    function EndPointService() {
        this.getEmployeeReport = 'Employee/UserData';
    }
    EndPointService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], EndPointService);
    return EndPointService;
}());



/***/ }),

/***/ "./src/app/services/employee.service.ts.ts":
/*!*************************************************!*\
  !*** ./src/app/services/employee.service.ts.ts ***!
  \*************************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/constants/constants */ "./src/app/core/constants/constants.ts");
/* harmony import */ var _core_http_base_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/http/base-http.service */ "./src/app/core/http/base-http.service.ts");
/* harmony import */ var _core_http_end_point_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/http/end-point.service */ "./src/app/core/http/end-point.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EmployeeService = /** @class */ (function () {
    function EmployeeService(baseHttp, endpoint) {
        this.baseHttp = baseHttp;
        this.endpoint = endpoint;
    }
    /**
     * Function will get employee report data
     */
    EmployeeService.prototype.getEmployeeReportData = function () {
        return this.baseHttp.get(this.endpoint.getEmployeeReport)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(_core_constants_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].ApiTimeout), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err); }));
    };
    EmployeeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_core_http_base_http_service__WEBPACK_IMPORTED_MODULE_4__["BaseHttpService"], _core_http_end_point_service__WEBPACK_IMPORTED_MODULE_5__["EndPointService"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/services/utils.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/utils.service.ts ***!
  \*******************************************/
/*! exports provided: UtilsProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsProvider", function() { return UtilsProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UtilsProvider = /** @class */ (function () {
    function UtilsProvider() {
    }
    /**
     * Descp:Function to check whether cordova platforms is ready for device.
     */
    UtilsProvider.prototype.isDeviceReady = function () {
        return new Promise(function (resolve) {
            document.addEventListener('deviceready', function (onDeviceReady) {
                resolve(true);
            }, false);
        });
    };
    UtilsProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UtilsProvider);
    return UtilsProvider;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Assignments\zopper\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map