(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lock/lock.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lock/lock.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent\">\n  <div class=\"container\">\n    <div class=\"navbar-wrapper\">\n      <div class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\n        <button type=\"button\" class=\"navbar-toggler\">\n          <span class=\"navbar-toggler-bar bar1\"></span>\n          <span class=\"navbar-toggler-bar bar2\"></span>\n          <span class=\"navbar-toggler-bar bar3\"></span>\n        </button>\n      </div>\n      <a class=\"navbar-brand\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">Paper Dashboard PRO Angular</a>\n    </div>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\" aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\" class=\"nav-link\">\n            <i class=\"nc-icon nc-layout-11\"></i> Dashboard\n          </a>\n        </li>\n        <li class=\"nav-item \">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/pages/register']\" class=\"nav-link\">\n            <i class=\"nc-icon nc-book-bookmark\"></i> Register\n          </a>\n        </li>\n        <li class=\"nav-item \">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/pages/login']\"  class=\"nav-link\">\n            <i class=\"nc-icon nc-tap-01\"></i> Login\n          </a>\n        </li>\n        <li class=\"nav-item \">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/pages/user']\" class=\"nav-link\">\n            <i class=\"nc-icon nc-satisfied\"></i> User\n          </a>\n        </li>\n        <li class=\"nav-item  active \">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/pages/lock']\" class=\"nav-link\">\n            <i class=\"nc-icon nc-key-25\"></i> Lock\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper wrapper-full-page \">\n  <div class=\"full-page lock-page section-image\" filter-color=\"black\" data-image=\"./assets/img/bg/bruno-abatti.jpg\">\n    <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\n    <div class=\"content\">\n      <div class=\"container\">\n        <div class=\"col-lg-4 col-md-6 ml-auto mr-auto\">\n          <div class=\"card card-lock text-center\">\n            <div class=\"card-header \">\n              <img src=\"./assets/img/faces/joe-gardner-2.jpg\" alt=\"...\">\n            </div>\n            <div class=\"card-body \">\n              <h4 class=\"card-title\">Joe Gardner</h4>\n              <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Enter Password..\">\n              </div>\n            </div>\n            <div class=\"card-footer \">\n              <a href=\"javascript:void(0)\" class=\"btn btn-outline-default btn-round\">Unlock</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <footer class=\"footer footer-black  footer-white \">\n      <div class=\"container\">\n        <div class=\"row\">\n          <nav class=\"footer-nav\">\n            <ul>\n              <li>\n                <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>\n              </li>\n              <li>\n                <a href=\"http://blog.creative-tim.com/\" target=\"_blank\">Blog</a>\n              </li>\n              <li>\n                <a href=\"https://www.creative-tim.com/license\" target=\"_blank\">Licenses</a>\n              </li>\n            </ul>\n          </nav>\n          <div class=\"credits ml-auto\">\n            <span class=\"copyright\">\n            &copy; {{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim\n            </span>\n          </div>\n        </div>\n      </div>\n    </footer>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent\">\n  <div class=\"container\">\n    <div class=\"navbar-wrapper\">\n      <div class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\n        <button type=\"button\" class=\"navbar-toggler\">\n          <span class=\"navbar-toggler-bar bar1\"></span>\n          <span class=\"navbar-toggler-bar bar2\"></span>\n          <span class=\"navbar-toggler-bar bar3\"></span>\n        </button>\n      </div>\n      <a class=\"navbar-brand\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">Paper Dashboard PRO Angular</a>\n    </div>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\" aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\" class=\"nav-link\">\n            <i class=\"nc-icon nc-layout-11\"></i> Dashboard\n          </a>\n        </li>\n        <li class=\"nav-item \">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/pages/register']\" class=\"nav-link\">\n            <i class=\"nc-icon nc-book-bookmark\"></i> Register\n          </a>\n        </li>\n        <li class=\"nav-item \">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/pages/login']\"  class=\"nav-link\">\n            <i class=\"nc-icon nc-tap-01\"></i> Login\n          </a>\n        </li>\n        <li class=\"nav-item \">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/pages/user']\" class=\"nav-link\">\n            <i class=\"nc-icon nc-satisfied\"></i> User\n          </a>\n        </li>\n        <li class=\"nav-item  active \">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/pages/lock']\" class=\"nav-link\">\n            <i class=\"nc-icon nc-key-25\"></i> Lock\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<div class=\"wrapper wrapper-full-page \">\n  <div class=\"full-page section-image\" filter-color=\"black\" data-image=\"./assets/img/bg/fabio-mangione.jpg\">\n    <!--   you can change the color of the filter page using: data-color=\"blue | purple | green | orange | red | rose \" -->\n    <div class=\"content\">\n      <div class=\"container\">\n        <div class=\"col-lg-4 col-md-6 ml-auto mr-auto\">\n          <form class=\"form\" method=\"\" action=\"\">\n            <div class=\"card card-login\">\n              <div class=\"card-header \">\n                <div class=\"card-header \">\n                  <h3 class=\"header text-center\">Login</h3>\n                </div>\n              </div>\n              <div class=\"card-body \">\n                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <i class=\"nc-icon nc-single-02\"></i>\n                    </span>\n                  </div>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                </div>\n                <div class=\"input-group\"  [ngClass]=\"{'input-group-focus':focus1===true}\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <i class=\"nc-icon nc-key-25\"></i>\n                    </span>\n                  </div>\n                  <input type=\"password\" placeholder=\"Password\" class=\"form-control\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                </div>\n                <br/>\n                <div class=\"form-group\">\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\n                      <span class=\"form-check-sign\"></span>\n                      Subscribe to newsletter\n                    </label>\n                  </div>\n                </div>\n              </div>\n              <div class=\"card-footer \">\n                <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-round btn-block mb-3\">Get Started</a>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <footer class=\"footer footer-black  footer-white \">\n      <div class=\"container\">\n        <div class=\"row\">\n          <nav class=\"footer-nav\">\n            <ul>\n              <li>\n                <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>\n              </li>\n              <li>\n                <a href=\"http://blog.creative-tim.com/\" target=\"_blank\">Blog</a>\n              </li>\n              <li>\n                <a href=\"https://www.creative-tim.com/license\" target=\"_blank\">Licenses</a>\n              </li>\n            </ul>\n          </nav>\n          <div class=\"credits ml-auto\">\n            <span class=\"copyright\">\n              &copy; {{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim\n            </span>\n          </div>\n        </div>\n      </div>\n    </footer>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent\">\n  <div class=\"container\">\n    <div class=\"navbar-wrapper\">\n      <div class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\n        <button type=\"button\" class=\"navbar-toggler\">\n          <span class=\"navbar-toggler-bar bar1\"></span>\n          <span class=\"navbar-toggler-bar bar2\"></span>\n          <span class=\"navbar-toggler-bar bar3\"></span>\n        </button>\n      </div>\n      <a class=\"navbar-brand\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">Paper Dashboard PRO Angular</a>\n    </div>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\" aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\" class=\"nav-link\">\n            <i class=\"nc-icon nc-layout-11\"></i> Dashboard\n          </a>\n        </li>\n        <li class=\"nav-item \">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/pages/register']\" class=\"nav-link\">\n            <i class=\"nc-icon nc-book-bookmark\"></i> Register\n          </a>\n        </li>\n        <li class=\"nav-item \">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/pages/login']\"  class=\"nav-link\">\n            <i class=\"nc-icon nc-tap-01\"></i> Login\n          </a>\n        </li>\n        <li class=\"nav-item \">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/pages/user']\" class=\"nav-link\">\n            <i class=\"nc-icon nc-satisfied\"></i> User\n          </a>\n        </li>\n        <li class=\"nav-item  active \">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/pages/lock']\" class=\"nav-link\">\n            <i class=\"nc-icon nc-key-25\"></i> Lock\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper wrapper-full-page \">\n  <div class=\"full-page register-page section-image\" filter-color=\"black\" data-image=\"./assets/img/bg/jan-sendereks.jpg\">\n    <div class=\"content\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-5 col-md-5 ml-auto\">\n            <div class=\"info-area info-horizontal mt-5\">\n              <div class=\"icon icon-primary\">\n                <i class=\"nc-icon nc-tv-2\"></i>\n              </div>\n              <div class=\"description\">\n                <h5 class=\"info-title\">Marketing</h5>\n                <p class=\"description\">\n                  We've created the marketing campaign of the website. It was a very interesting collaboration.\n                </p>\n              </div>\n            </div>\n            <div class=\"info-area info-horizontal\">\n              <div class=\"icon icon-primary\">\n                <i class=\"nc-icon nc-html5\"></i>\n              </div>\n              <div class=\"description\">\n                <h5 class=\"info-title\">Fully Coded in HTML5</h5>\n                <p class=\"description\">\n                  We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub.\n                </p>\n              </div>\n            </div>\n            <div class=\"info-area info-horizontal\">\n              <div class=\"icon icon-info\">\n                <i class=\"nc-icon nc-atom\"></i>\n              </div>\n              <div class=\"description\">\n                <h5 class=\"info-title\">Built Audience</h5>\n                <p class=\"description\">\n                  There is also a Fully Customizable CMS Admin Dashboard for this product.\n                </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-4 col-md-6 mr-auto\">\n            <div class=\"card card-signup text-center\">\n              <div class=\"card-header \">\n                <h4 class=\"card-title\">Register</h4>\n                <div class=\"social\">\n                  <button class=\"btn btn-icon btn-round btn-twitter\">\n                    <i class=\"fa fa-twitter\"></i>\n                  </button>\n                  <button class=\"btn btn-icon btn-round btn-dribbble\">\n                    <i class=\"fa fa-dribbble\"></i>\n                  </button>\n                  <button class=\"btn btn-icon btn-round btn-facebook\">\n                    <i class=\"fa fa-facebook-f\"></i>\n                  </button>\n                  <p class=\"card-description\"> or be classical </p>\n                </div>\n              </div>\n              <div class=\"card-body \">\n                <form class=\"form\" method=\"\" action=\"\">\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">\n                        <i class=\"nc-icon nc-single-02\"></i>\n                      </span>\n                    </div>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                  </div>\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">\n                        <i class=\"nc-icon nc-circle-10\"></i>\n                      </span>\n                    </div>\n                    <input type=\"text\" placeholder=\"Last Name...\" class=\"form-control\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                  </div>\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus2===true}\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">\n                        <i class=\"nc-icon nc-email-85\"></i>\n                      </span>\n                    </div>\n                    <input type=\"email\" class=\"form-control\" placeholder=\"Email...\" (focus)=\"focus2=true\" (blur)=\"focus2=false\">\n                  </div>\n                  <div class=\"form-check text-left\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" checked>\n                      <span class=\"form-check-sign\"></span>\n                      I agree to the\n                      <a href=\"#something\">terms and conditions</a>.\n                    </label>\n                  </div>\n                </form>\n              </div>\n              <div class=\"card-footer \">\n                <a href=\"javascript:void(0)\" class=\"btn btn-info btn-round\">Get Started</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <footer class=\"footer footer-black  footer-white \">\n      <div class=\"container\">\n        <div class=\"row\">\n          <nav class=\"footer-nav\">\n            <ul>\n              <li>\n                <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>\n              </li>\n              <li>\n                <a href=\"http://blog.creative-tim.com/\" target=\"_blank\">Blog</a>\n              </li>\n              <li>\n                <a href=\"https://www.creative-tim.com/license\" target=\"_blank\">Licenses</a>\n              </li>\n            </ul>\n          </nav>\n          <div class=\"credits ml-auto\">\n            <span class=\"copyright\">\n              &copy; {{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim\n            </span>\n          </div>\n        </div>\n      </div>\n    </footer>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/pages/lock/lock.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/lock/lock.component.ts ***!
  \**********************************************/
/*! exports provided: LockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockComponent", function() { return LockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var LockComponent = /** @class */ (function () {
    function LockComponent(element) {
        this.element = element;
        this.test = new Date();
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    LockComponent.prototype.checkFullPageBackgroundImage = function () {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    };
    ;
    LockComponent.prototype.ngOnInit = function () {
        this.checkFullPageBackgroundImage();
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('lock-page');
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    };
    LockComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('lock-page');
    };
    LockComponent.prototype.sidebarToggle = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    LockComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    LockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'lock-cmp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./lock.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lock/lock.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], LockComponent);
    return LockComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent(element) {
        this.element = element;
        this.test = new Date();
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    LoginComponent.prototype.checkFullPageBackgroundImage = function () {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    };
    ;
    LoginComponent.prototype.ngOnInit = function () {
        this.checkFullPageBackgroundImage();
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
    };
    LoginComponent.prototype.sidebarToggle = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login-cmp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _pages_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages.routing */ "./src/app/pages/pages.routing.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _lock_lock_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lock/lock.component */ "./src/app/pages/lock/lock.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/pages/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_pages_routing__WEBPACK_IMPORTED_MODULE_4__["PagesRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
                _lock_lock_component__WEBPACK_IMPORTED_MODULE_6__["LockComponent"]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.routing.ts":
/*!****************************************!*\
  !*** ./src/app/pages/pages.routing.ts ***!
  \****************************************/
/*! exports provided: PagesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutes", function() { return PagesRoutes; });
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _lock_lock_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lock/lock.component */ "./src/app/pages/lock/lock.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/pages/login/login.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var PagesRoutes = [{
        path: '',
        children: [{
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
            }, {
                path: 'lock',
                component: _lock_lock_component__WEBPACK_IMPORTED_MODULE_1__["LockComponent"]
            }, {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"]
            }]
    }];


/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(element) {
        this.element = element;
        this.test = new Date();
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    RegisterComponent.prototype.checkFullPageBackgroundImage = function () {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('register-page');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    };
    ;
    RegisterComponent.prototype.ngOnInit = function () {
        this.checkFullPageBackgroundImage();
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('register-page');
    };
    RegisterComponent.prototype.sidebarToggle = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'register-cmp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map