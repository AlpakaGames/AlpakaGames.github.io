(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<app-main-module></app-main-module>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main-module/main-module.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main-module/main-module.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n\r\n<div class=\"buttoncase\" *ngIf=\"!questionPhase\" >\r\n<table style=\"width: 100% \">\r\n<tr >\r\n   \r\n    <button class=\"TODbtn\" (click)=\"truth()\" > Truth</button>\r\n</tr>\r\n  \r\n<tr >\r\n\r\n    <button class=\"TODbtn\" (click)=\"dare()\">Dare</button>\r\n\r\n</tr>\r\n\r\n</table>\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n<div *ngIf=\"questionPhase\"  class=\"question\">\r\n\r\n    <div class=\"questionlable\" >\r\n\r\n        {{qText}}\r\n    </div>\r\n<div class=\"nextquestion\" (click)=\"next()\" >\r\n    next question\r\n</div>\r\n\r\n    <button class=\"Donebtn\" (click)=\"done()\" > done! </button>\r\n\r\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'TruthOrDareV1';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_module_main_module_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-module/main-module.component */ "./src/app/main-module/main-module.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _main_module_main_module_component__WEBPACK_IMPORTED_MODULE_5__["MainModuleComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/main-module/main-module.component.css":
/*!*******************************************************!*\
  !*** ./src/app/main-module/main-module.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n.buttoncase{\r\n    position: absolute;\r\n    top:25%;\r\n    width: 100%;\r\n    left: 0;\r\n    \r\n    display: -webkit-box;\r\n    \r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n\r\n\r\n.TODbtn{\r\n    position: relative;\r\n    left: 20%;\r\n    height: 100px;\r\n    width:60%;\r\n    \r\n    border: none;\r\n    margin-top: 30px;\r\n    outline: none;\r\n    background-color: transparent;\r\n    border: 2px solid rgb(204, 204, 204);\r\n    color: rgb(204, 204, 204);\r\n    border-radius: 8px;\r\n    line-height: 50px;\r\n    font-size: 35px;\r\n    font-family: Arial, Helvetica, sans-serif\r\n}\r\n\r\n\r\n\r\n.TODbtn:active{\r\n    background-image: -webkit-gradient(linear,left top, left bottom,from(rgb(46, 46, 46)),to(rgb(31, 31, 31)));\r\n    background-image: linear-gradient(rgb(46, 46, 46),rgb(31, 31, 31));\r\n}\r\n\r\n\r\n\r\n.Donebtn{\r\n    position: absolute;\r\n    left: 20%;\r\n    height: 100px;\r\n    width:60%;\r\n    bottom: 5%;\r\n    border: none;\r\n    margin-top: 30px;\r\n    outline: none;\r\n    background-color: transparent;\r\n    border: 2px solid rgb(204, 204, 204);\r\n    color: rgb(204, 204, 204);\r\n    border-radius: 8px;\r\n    line-height: 50px;\r\n    font-size: 35px;\r\n    font-family: Arial, Helvetica, sans-serif\r\n}\r\n\r\n\r\n\r\n.nextquestion{\r\n    position: absolute;\r\n    height: 100px;\r\n    width:100%;\r\n    text-align: center;\r\n    bottom: 15%;\r\n    color: rgb(204, 204, 204);\r\n    line-height: 20px;\r\n    font-size: 15px;\r\n    font-family: Arial, Helvetica, sans-serif\r\n}\r\n\r\n\r\n\r\n.questionlable{\r\n    position: absolute;\r\n    top:20%;\r\n    left: 20%;\r\n    height: 100px;\r\n    width:60%;\r\n    color: white;   \r\n    line-height: 30px;\r\n    font-size: 22px;\r\n    font-family: Arial, Helvetica, sans-serif\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1tb2R1bGUvbWFpbi1tb2R1bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsV0FBVztJQUNYLE9BQU87O0lBRVAsb0JBQWE7O0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQjs7OztBQUlBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsU0FBUzs7SUFFVCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0Isb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZjtBQUNKOzs7O0FBRUE7SUFDSSwwR0FBa0U7SUFBbEUsa0VBQWtFO0FBQ3RFOzs7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGFBQWE7SUFDYixTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixvQ0FBb0M7SUFDcEMseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmO0FBQ0o7Ozs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Y7QUFDSjs7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxTQUFTO0lBQ1QsYUFBYTtJQUNiLFNBQVM7SUFDVCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1tb2R1bGUvbWFpbi1tb2R1bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5idXR0b25jYXNle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjI1JTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG4uVE9EYnRue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMjAlO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOjYwJTtcclxuICAgIFxyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMDQsIDIwNCwgMjA0KTtcclxuICAgIGNvbG9yOiByZ2IoMjA0LCAyMDQsIDIwNCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmXHJcbn1cclxuXHJcbi5UT0RidG46YWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYig0NiwgNDYsIDQ2KSxyZ2IoMzEsIDMxLCAzMSkpO1xyXG59XHJcblxyXG5cclxuLkRvbmVidG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6NjAlO1xyXG4gICAgYm90dG9tOiA1JTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjA0LCAyMDQsIDIwNCk7XHJcbiAgICBjb2xvcjogcmdiKDIwNCwgMjA0LCAyMDQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZlxyXG59XHJcblxyXG4ubmV4dHF1ZXN0aW9ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3R0b206IDE1JTtcclxuICAgIGNvbG9yOiByZ2IoMjA0LCAyMDQsIDIwNCk7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmXHJcbn1cclxuXHJcbi5xdWVzdGlvbmxhYmxle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjIwJTtcclxuICAgIGxlZnQ6IDIwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDo2MCU7XHJcbiAgICBjb2xvcjogd2hpdGU7ICAgXHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmXHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/main-module/main-module.component.ts":
/*!******************************************************!*\
  !*** ./src/app/main-module/main-module.component.ts ***!
  \******************************************************/
/*! exports provided: MainModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModuleComponent", function() { return MainModuleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


//import truthAndDareFile from 'src/assets/truth.json'
var truthAndDareFile = __webpack_require__(/*! src/assets/truth.json */ "./src/assets/truth.json");
var MainModuleComponent = /** @class */ (function () {
    function MainModuleComponent() {
        this.truthQestions = this.shuffle(truthAndDareFile.truth);
        this.dareQuesttions = this.shuffle(truthAndDareFile.dare);
        this.truthCount = 0;
        this.dareCount = 0;
        this.state = "";
        this.qText = "How old were you when your parents sat you down for “the talk” and what did they say (or not say) about “the birds and the bees”  ";
        this.questionPhase = false;
    }
    MainModuleComponent.prototype.ngOnInit = function () {
    };
    MainModuleComponent.prototype.truth = function () {
        this.questionPhase = true;
        this.qText = this.truthQestions[this.truthCount];
        this.truthCount++;
        this.state = "t";
    };
    MainModuleComponent.prototype.dare = function () {
        this.questionPhase = true;
        this.qText = this.dareQuesttions[this.dareCount];
        this.dareCount++;
        this.state = "d";
    };
    MainModuleComponent.prototype.done = function () {
        this.questionPhase = false;
    };
    MainModuleComponent.prototype.next = function () {
        if (this.state == "t") {
            this.truth();
        }
        else if (this.state == "d") {
            this.dare();
        }
    };
    MainModuleComponent.prototype.shuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    MainModuleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-module',
            template: __webpack_require__(/*! raw-loader!./main-module.component.html */ "./node_modules/raw-loader/index.js!./src/app/main-module/main-module.component.html"),
            styles: [__webpack_require__(/*! ./main-module.component.css */ "./src/app/main-module/main-module.component.css")]
        })
    ], MainModuleComponent);
    return MainModuleComponent;
}());



/***/ }),

/***/ "./src/assets/truth.json":
/*!*******************************!*\
  !*** ./src/assets/truth.json ***!
  \*******************************/
/*! exports provided: truth, dare, default */
/***/ (function(module) {

module.exports = {"truth":[" What’s the scariest thing you’ve ever done?"," What’s your biggest regret?"," What’s the most childish thing you’ve ever done?"," What’s a bad habit you have?"," What’s one thing on your bucket list?"," What’s one thing you would do if you waked up tomorrow as the opposite sex?"," What’s the last dream you had? Describe."," Have you ever shared a toothbrush with anyone?"," Have you ever told a lie and got caught?"," What’s one thing you like, and one thing you dislike about yourself?"," Have you ever peed in a pool?"," Have you ever done something embarrassing while drunk? Describe."," What do you think about while on the toilet?"," If you could change one thing about your life, what would it be?"," What are you afraid of?"," Have you ever sent an inappropriate/embarrassing text to someone? Describe."," Have you ever stalked someone on Facebook?"," Who are you most jealous of and why?"," What color is your underwear?"," What do you hate and why?"," Who/what is someone/something that annoys you?"," If you could go anywhere in the world, where would you go?"," Have you ever been in love?"," What’s something in your web browsing history that you’d be embarrassed if someone saw?"," What would you do with your time if you didn’t have to work?"," What’s the worst thing that’s ever happened to you?"," What’s one thing you can’t live without?"," When’s the last time you took a shower?"," Have you ever lied or done something to get out of trouble?"," What’s the best purchase you ever made?"," What’s the most illegal thing you’ve ever done."," Have you ever been arrested?"," What would you do with a million dollars?"," What do you believe in?"," Have you ever shared a secret you shouldn’t have, or promised you wouldn’t?"," What’s something you’re looking forward to and not looking forward to?"," You’re going #2 in a public bathroom and run out of toilet paper—what do you do?"," What’s something you think is absolutely disgusting?"," When was the last time you cried and why?"," If you could live anywhere, where would it be?"," What’s your biggest pet peeve?"," What do you value most in your relationships?"," If you could have three wishes, what would you wish for?"," What is your secret vice/guilty pleasure?"," Have you ever cheated on someone?"," What’s the most embarrassing thing you’ve ever done?"," What’s the worst gift you’ve ever received?"," What’s the last thing you searched on your phone?"," Have you ever been so drunk you blacked out?"," Have you ever peed your pants?"," What’s the longest you’ve ever gone without a shower?"," What’s your grossest personal habit?"," What’s the one thing you wish you could unsee?"," If you could be reincarnated as someone in this room, who would you want to be?"," Who in this room do you most want to see in a bikini?"," Who in this room do you most want to skinny dip with?"," If you could be a member of the opposite sex for a day, what’s the first thing you’d do?"," If you had to date an animal, what kind of animal would you date?"," If you had to date a plant, what kind of plant would you date and why?"," If you had to date one of your teachers, who would it be?"," What would you do if you ran out of toilet paper in a public bathroom just after taking a big poop?"," What’s the most embarrassing thing that’s ever happened to you in public?"," What’s the biggest secret you’ve kept from your parents?"," What’s the biggest secret you’ve kept from your best friend?"," If you could trade places with your mom or your dad for 24 hours, who would you pick and what would you do?"," If you could trade places with a famous person for a day, what’s the first thing you’d do?"," If you could write your own law that everyone had to follow, what would it be?"," If you could do anything without getting caught, what would it be?"," What’s the one thing you’d never say to a crush?"," If you had five lives, what would you do that you wouldn’t do with only one?"," Who’s the “Bey and Jay” of your school?"," If you could prank anyone without getting caught, who would it be and what would you do?"," Who’s the queen bee of your friend group?"," Would you rather eat fish food or cat food?"," When is the last time you lied to a friend to get out of doing something?"," When’s the last time you lied to your parents and why?"," What’s the best lie you’ve ever told without anyone finding out (until now)?"," What would you say if you had to pretend to like a present?"," What animal most closely resembles you?"," What was your absolute worst bathroom experience?"," Do you currently have a crush on anyone and if so how would you describe them?"," What is your current crush’s personality like?"," What’s the one thing you’d change about your daily life?"," Who do you resent and why?"," What’s your biggest pet peeve?"," How many people have you kissed?"," What’s your biggest turn-on?"," If you could date anyone, living or dead, who would it be?"," Would you date two people simultaneously if you could get away with it?"," Have you ever sent a sext and if so to who?"," Have you ever sent someone a nude selfie and if so who?"," Have you ever received a nude selfie and if so who was it from?"," Have you ever gotten mad at a friend for posting an unflattering photo of you?"," Who’s the last person you cyberstalked?"," Have you ever had a crush on a teacher and if so who?"," Who in this room do you think would make the best kisser?"," Who’s the hottest person in your entire school / company?"," What is the most attractive feature on the human body?"," What’s the funniest thing you’ve done to get a crush’s attention?"," What does “wife / husband material” mean to you?"," What’s the dirtiest thought you’ve ever had?"," Of the people in this room, who do you most want to make out with?"," What’s the first thing you’d do if you woke up one day and you were the opposite sex?"," What sexual activity do you consider totally off limits?"," Of the people in this room, who do you consider the sluttiest?"," What’s the most embarrassing thing your parents have caught you doing?"," What’s the biggest romantic fail you’ve ever experienced?"," What’s the weirdest thing you’ve done when you were alone?"," Of the people in this room, who would you feel most comfortable with naked?"," What’s the biggest secret you’ve ever kept from your boyfriend or girlfriend?"," What’s the biggest lie you’ve ever told your boyfriend or girlfriend—without getting caught?"," Of the people in this room, who do you most want to caress?"," What do you like most and least about your own appearance?"," What do you like most and least about your significant other’s appearance?"," If you could erase one past sexual experience, what would it be?"," What’s the craziest thing you’ve ever done to attract a crush?"," When’s the last time you were flat-out rejected and how did you handle it?"," What’s your biggest sexual fear?"," Of the people in this room, who would you most want to have a kid with?"," What’s your favorite go-to move for getting attention from the opposite sex?"," What would you change about your love life if you could?"," What’s the most flirtatious thing you’ve ever done?"," If you could make out with any celebrity right this second, who would it be?"," At what age did you first start having sexy thoughts and what prompted them?"," What three adjectives best describe your private parts?"," What does the perfect male/female body look like (from head to toe and everything in between) in your opinion?"," How many people can someone sleep with before you secretly judge them for their “number”?"," What’s the one thing you’d do in bed with someone if you had no inhibitions whatsoever?"," What’s sexual milestone has been most memorable for you so far?"," What’s the weirdest thing you’ve ever done in front of the mirror?"," At what age did you first inspect your private parts and how did you feel about them?"," What would you guess your parents’ favorite sexual position is, and why?"," What did you think about the first (or last) time you masturbated?"," What’s the most surprising thing that’s ever turned you on?"," What’s the grossest thing that’s come out of your body?"," What’s the most disgusting thing you’ve ever done?"," What’s the most disturbing fantasy or dream you’ve ever had?"," What’s the most awkward experience you’ve had with a crush?"," What’s the funniest thing you’ve ever said to someone you had a crush on?"," What’s the cruelest thing you’ve ever done to a boyfriend or girlfriend?"," What time of day do you feel most aroused and what do you usually do about it?"," What’s the funniest urge you’ve ever had?"," How do you really feel about anal sex?"," What’s your favorite sex toy (hypothetically, or from experience)?"," What’s the biggest sexual regret you have?"," How old were you when your parents sat you down for “the talk” and what did they say (or not say) about “the birds and the bees”?"," What’s the biggest dating disappointment you’ve experienced so far?"," Do you ever catch yourself thinking about doing it with someone of the same sex?"," What’s the most number of times you’ve ever masturbated within one week?"," How far would you go to land the guy or girl of your dreams?"," Describe your worst date ever?"," If there was no such thing as money, what would you do with your life?"," What is your favourite food?"," What are your three favourite colours, and why?"," What is your dream job?"," If you were trapped on an island for 3 days, what would you take with you?"," Who is your favourite person and why?"," Do you prefer apple or android?"," How do you put your toilet paper on the roll?"," What is your best talent?"," Do you believe in love at first sight?"," Do you believe in love at all?"," What is your dream wedding?"," Would you ever consider being a nudist?"," How do you feel about end pieces of a loaf of bread?"," Can you touch your tongue to your nose?"," If you could take away one bad thing in the world, what would it be?"," What is your guilty pleasure?"," What is the most exotic food that you have ever eaten?"," What is your biggest fear in a relationship?"," What was your funniest first date ever?"," What is your biggest turn off in a partner?"," What is your weirdest habit?"," How many kids would you like to have?"," What is the perfect first day?"," What is one embarrassing fact I should know about you?"," What was your childhood nickname?"," What is your favourite movie?"," What country would like to live in if you had the chance?"," If you could change one thing on your body, what would it be?"," What do you daydream about the most?"," Describe the weirdest dream you’ve ever had?"," Can you lick your elbow?"," How do you feel about social media?"," What is your favourite season of the year?"," Could you go a week without junk food?"," How was your first kiss?"," Describe your worst kiss ever?"," Do you like to exercise?"," What was your best sexual experience?"," What is the longest you’ve ever given head?"," Do you enjoy rough or slow sex?"," Do you prefer to be on top or bottom?"," What is your favourite position?"," Do you like anal?"," What is your least favourite position?"," What is the worst sexual experience you’ve ever had?"," Have you ever had sex outside?"," Where is the strangest place you’ve ever had sex?"," Have you ever performed oral on someone of the same sex?"," Have you ever paid for sex?"," Who was your first partner?"," Have you ever made a video of yourself?"," Who is your favourite porn star?"," What is your favourite type of porn?"," Would you ever do a 3-some?"," How do you feel about sex in groups?"," Would you ever watch your partner have sex with someone else?"," How many partners have you had at one time?"," Describe how you orgasim feels?"," Where is your favourite place to be kissed?"," Have you ever taken it in the butt or would you?"," What is the longest time you’ve gone without sex?"," What is your favourite type of foreplay?"," Have you done role-playing?"," What is your role-playing fantasy?"," What is your “sweet spot”?"," What is your strangest sexual fantasy?"," Would you ever have sex for money?"," How flexible are you?"," How many orgasms have you had in one sexual encounter?"," Spit or Swallow?"," What was your first impression of your spouse?"," How soon did you realize that you were in love with your partner?"," Who is your favourite in-law?"," Who is your least favourite in-law?"," How many children would you like to have?"," What is your favourite strip club?"," Have you ever thought about being a stripper?"," Do you prefer the lights on or off?"," Does size matter?"," Do you prefer to have music in the background, or for it to be be quiet?"," Do you prefer for your partner to be silent, or do you like moans?"," Do you like a lot of foreplay?"," Have you ever thought about marrying someone else?"," How many relationships have you had before your spouse?"," What is your partner’s most annoying habit?"," What is the sweetest thing your spouse has ever done for you?"," What is your favourite thing about your spouse?"," What can your spouse do/say to make you do anything?"," If you had never met your spouse where do you think you would be?"," What body part of your spouse does you like the most?"," What is the sexiest thing about your spouse?"," If you could fix one body part on your spouse, which would it be?"," Does your spouse act more like their mother or their father?"," Is your spouse a good dancer?"," What is your spouse’s favourite colour?"," What is your spouse’s favourite sport’s team?"," What was your spouse’s childhood nickname?"," What could your spouse not go a day without?"," Would your spouse trade you for a million dollars?"," What is one lie your spouse tells everyone else, but you know the truth?"," Have you ever accused you spouse of cheating?"," How many times have you and your spouse broken up before you got married?"," Would you leave your spouse if it meant that you would be very rich?"," What white lie have you told your partner to make sure not to hurt their feelings?"," What was the best night you have ever had with your spouse?"," What sexual position do you and your spouse use the most?"," How many days could you go without your spouse?"," What personality trait does you least like about your spouse?"," How soon did you want start a family?"," What is your favourite song?"," Who is your favourite Disney character?"," What is your favourite TV show?"," What is your pet’s name?"," What is your shoe size?"," What is your favourite movie?"," Who is your favourite singer?"," Do you like bugs?"," What is your favourite vegetable?"," Would you rather be a chicken or duck?"," Would you rather be a pig or snake?"," What is your favourite game to play?"," Do you like doing chores?"," What is your favourite thing to do on the weekends?"," Do you know how to dance?"," Do you know how to cook?"," Can you speak a different language?"," What is your favourite thing to do after school?"," What country would you like to visit with your spouse?"," Who in your family likes your spouse the least, why?"," Has your spouse ever done something really embarrassing in public to the point that you did not want to be seen with them?"," What is your favourite color?"," What is your favourite animal?"," What is your favourite food?"," What is your favourite school subject?"," Who is your favourite teacher, and why?"," Are you in any sports?"," What is your favourite sport?"," What animal are you scared of?"," Are you scared of monsters?"," Do you have an imaginary friend?"," Who is your best friend?"," When did you learn how to ride a bike?"," Can you use a pogo stick?"," If you could be any animal, which one would you be?"," What is your favourite place to go out to eat?"," How people have you slept with on campus?"," What is your real GPA?"," What did you do on your first night of freshman year?"," What is your least favourite frat on campus?"," Would you ever have sex with one of your professors? If so, which one?"," Have you ever blacked out from drinking too much?"," What is the craziest thing that you have ever done while drunk?"," Who is the best roommate that you have ever had?"," What is the most annoying thing that your roommate has ever done?"," Have you ever had sex anywhere on campus?"," What do you want to be when you grow up?"," What is your favourite sport in the Olympics?"," What is the capital of the state that you live in?"," If you could go anywhere in the world, where would you go?"," If you a million dollars, what would you do with all of your money?"," If you could dye your hair any colour, what colour would you pick?"," How many brothers and sisters do you have?"," Have you ever had sex in your roommate’s bed?"," Did you smoke or drink before college? Or did you start when you got here?"," Have you ever been a stripper?"," Have you ever wanted to have an orgy?"," Have you used a toy while have sex?"," What is the longest you’ve had sex in one session?"," What is most amount of shots that you have taken in one night?"," Have you ever spent your parent’s money on alcohol?"," How many freshmen have you slept with?"," Have you ever taken money from a freshman?"," Have you ever lied to your parents about if you were in classes or not?"," Have you ever taken money from your roommate?"," What is the most annoying thing your roommate does?"," Have you been in any fights while in school?"," Have you ever had someone write a paper for you?"," Have you ever done a sex train?"," What is the most annoying thing that your mom does?"," What is the most annoying thing that your dad does?"," Have you ever snuck anyone into to the house?"," How many times have you snuck out of the house?"," What is the best dish that you mom makes for dinner?"," If you could change any of the house rules, what would it be?"," Would you rather be a horse or a cow?"," What is the funniest thing your grandparents have ever said?"," If you could get rid of one household chore, what would it be?"," What is your favourite cartoon from your generation?"," Have you ever slept with your roommate’s bf/gf?"," Have you ever had sex in your parent’s bed?"," Would you drop out of school if you were to win the lottery?"," What is the best party that you’ve ever been to?"," How many parties have you thrown at your house?"," Have you ever had a threesome?"," What is your favourite childhood song?"," What is your favourite board game to play with your family?"," If you could put one person in your family on mute for a day, who would it be?"," At what age did you learn to ride a bike?"],"dare":["Yell out the first word that comes to your mind right now.","Call the pizza place and order 300 sardine pizzas.","Pound on your chest and act like a gorilla for the next minute.","Sing everything you say for the next 10 minutes.","Give a foot massage.","Say the alphabet backwards in 15 seconds.","Go to the neighbour’s house and ask for a banana.","Go up to someone random and ask for a hug.","Do an impression of your favorite celebrity.","Close your eyes and send a blind text to a random person.","Go grab a broom and do your best tango.","Give a 3 minute stand-up comedy routine.","Break dance.","Make up a story about the item to your right.","Sing the alphabet without moving your mouth.","Do your best president impression.","Set your cell phone language to Chinese for the next 10 minutes.","Act like your favourite Disney character for the rest of the game.","Sing “Twinkle Twinkle, Little Star” while beat boxing.","Give a concert with your air guitar.","Make up a short rap about another player.","Act like Romeo from “Romeo and Juliet” (pick who you want to be Juliet).","Do an impression of someone until another player can guess who you are.","Say “ya heard meh” after everything you say for the next 5 minutes.","Act like you do not understand your own language until your next turn (come up with your own language).","Use the letters of the name of another player to describe them (ex SAM : S – Silly : A – Attractive : M – Merry).","Only use sign language for the next round.","Do pushups until it’s your turn again.","Make a poem using the words orange and moose.","Unbuckle your own belt using your elbows.","Brush someone else’s teeth.","Twerk for a minute.","Belly dance to a country song.","Make up a country song of the top of your head.","Get on all fours and act like a dog until your next turn.","Wear a finger moustache for the next 5 minutes.","Only use your elbows and knees to go make a sandwich.","Lick your partner (or person to your left) from their neck all the way to the brim or their underwear.","Suck on your partner’s belly button for a minute.","Lick or suck on the nipples of your partner for a minute.","Unwrap a piece of candy in your mouth.","Put a wrapped piece of candy in your mouth and then unwrap it with your partner.","Take off your partner’s underwear using only your teeth.","Kiss your partner all around their “down-low” area (not the actual part tough).","Put your hand down your partner’s pants until the next round.","Make out with the person to the right of you (if okay with your partner :).","With no bottoms, sit on your partner’s man piece until the next round (women).","With no bottoms, spoon your partner until the next round.","Write a Facebook (or other social media) post only using your toes.","Take a selfie with the toilet and post it online.","Paint your toenails only using your teeth.","Get on the table (or in the middle/front) and do a strip tease.","Tie a cherry stem with your tongue.","With clothes on (for now) top your partner and start riding.","Twerk in only your underwear.","Give a hand job for 3 minutes.","Make love with your partner for 3 minutes only (must stop after 3 minutes).","Take off your partner’s bra (or nearest woman’s) using only your teeth.","Give a back rub the person to your right.","Pull up your favourite porn site your phone right now.","Send a nude to your ex.","Wear a pair of your partner’s underwear.","Put a hickey on the inner thigh of the person to your left.","Give head to the person next to you for 2 full songs.","Make your partner cum using only your hands.","Let your partner rub your inner thighs, but don’t let yourself get hard.","Make a porno in front of the group You must do everything the group says to do for 10 minutes.","You must act like the sex slave to the person to your right. Doing whatever they say to do for the next 15 minutes.","Go blindfolded into the closet, undress, and redress with items only available in that same closet.","Kiss your favourite part of your spouse.","Do an impression of your favourite in-law.","Do an impression of your least favourite in-law.","Sing you and your spouse’s favourite song.","Do an impression of your spouse.","Take a strawberry and eat it with your spouse.","Say something that only your spouse will understand.","Whisper something in your spouse’s ear that will turn them on.","Give your spouse a backrub.","Take off your spouse’s shirt only using your teeth.","Give your spouse a lapdance.","Hop in the shower with your spouse, stay in there while two of your favourite songs play.","Go five minutes without looking at your spouse at all.","Give your spouse an eskimo kiss.","Do an impression of your spouse’s best friend.","Turn your spouse on without touching them.","Be your spouse’s slave for the next 15 minutes.","Pour syrup on your spouse and then eat it off of them.","Make out with your spouse until the next round.","Sit upside down on your spouse’s lap until the next round.","Make up a 2 minute song about your spouse.","Sing to your spouse.","Give your spouse a foot rub for 3 minutes.","Blow a raspberry on your spouse’s forehead.","Brush your spouse’s teeth.","Take your spouse’s phone and go through all the emails and pictures, but don’t say a word about what you see.","Walk on your spouse’s back for a minute.","Do the silliest dance that you can think of.","Give your partner head for 3 minutes.","Take and ice cube and run it up and down your partner’s body until it is melted.","Spray whipped cream (or any other food) all over someone in the group and eat it off of them.","Take a shot off of the person to your right.","Run down the street in only your underwear.","Slap the person to your left on the booty.","Eat a raw egg.","Eat a dry pack of noodles.","Floss the teeth of the person to your left.","Take a shower fully clothed.","Speak like Tony Montana for the next 10 minutes.","Give the person to your right a hickie.","Eat toilet paper.","Snort a line of sugar.","Eat some soap.","Twerk on a handstand.","Let someone give you haircut with their weak hand.","Make a freestyle rap song about each person in the group.","Lick someone’s foot.","Give a topless lap dance.","Call someone random, and talk freaky to them.","Twerk while in a split.","Spin the bottle, whoever it lands on you must take their shirt off, only using your teeth.","Send a nude to one of your exes.","Email one of your professor’s and tell them you love them.","Lick the wall.","Blindfolded, spin around for 10 seconds, kiss the person in front you at the end of your spinning.","Close your eyes, go to the refrigerator and eat whatever you grab.","Give some head with their underwear still on.","Take two shots of a dark and a light liquor ( 4 shots total ).","Blindfolded, let someone tie you to a chair and give you a lapdance.","Go outside completely naked and walk slowly up to the mailbox and back.","Let someone lick a full circle around your face.","Stand in the corner in “time out”, not say a word for the next 3 rounds.","Make out with someone’s boyfriend or girlfriend.","Raise your shirt play with your nipples.","Chug a whole beer in 15 seconds.","Sit in the trash can for the next round.","Chug an entire beer, then spin around for 15 seconds, after that try to run to the door.","Wearing only high heels do a strip dance for the group.","Take 2 shots and do a cartwheel.","Call your parents and tell them you’re dropping out.","Get a bar of soap from the bathroom and sell it to the group for 3 minutes.","Go outside, and while skipping down the street, sing “Let it Go’ from Frozen.","With your eyes closed, pick someone from your contact list and send them a text.","Stand up and do your best impersonation of the person on your right.","Go in the kitchen and rearrange everything in the food pantry in alphabetical order.","Imagine the person to your left is your pet, talk to them as though you just got home.","Imagine that you are a dog and act like it until your next turn.","Describe what the sky looks like without using the words blue or white.","Sing the chorus of your favorite song.","Make up a song about the host of the party.","Exchange shirts with the person to your left and wear it for the remainder of the game.","Knock on the neighbor’s door and explain to them that your pet penguin got loose and ask if you can look for it in their back yard.","Invent a new color for nail polish and describe the person who would be most likely to wear it.","For the next 15 minutes, everything you say must be spoken in baby talk.","Make a sandwich while blindfolded.","Eat a spoonful of hot sauce.","From now until your next turn, every time someone talks, interrupt by saying, “that’s a lie.","You notice that the person sitting on your right has something on their face, spit on your finger and wipe it off for them.","Get down on one knee and propose to the person on your left.","Take the socks off the person’s feet across from you and wear them like gloves until your next turn.","Open Facebook and “like” the first thing that pops up even if you disagree with it.","Stand up and do your best impersonation of your mom.","Go for a short walk outside and while walking, hold a conversation with yourself.","Rearrange all the pictures in the room according to their size.","Take off your shoe and clean your foot as though you are an animal.","Put makeup on the person sitting the farthest away from you.","Do your best impersonation of someone else in the room and keep going until someone else guesses who you are.","For the next 10 minutes, when someone speaks, put your ear up close to them and act as though you can’t hear what they are saying.","Stand up and do jumping jacks until your next turn.","For the rest of the game, you must cluck like a chicken at the beginning and end of everything you say.","Be silent and say nothing from now until your next turn.","While blindfolded, you must eat something that the person to your left chooses to feed you.","Tie your shoe strings together with another person and walk together to the end of the driveway and back.","Drink chocolate syrup straight out of the bottle.","Text someone you are close to and tell them that you no longer want to talk to them.","Using the opposite hand that you write with, print your full name, birthdate, and address on a piece of paper.","Write your name on the floor with your tongue.","Stand in the time out corner facing the wall, not talking to anyone until your next turn.","Run in place and clap your hands for 5 minutes.","Get on all fours and walk over to a wall like a dog, then lick the wall.","Spin around 5 times and then stand on one leg while touching your nose with your fingertip.","Mix mustard and ketchup on your hands and then lap it up like a dog.","Stand on a chair and act like a monkey for 5 minutes.","Act like a cat and “make bread” on the person sitting beside you.","Go outside and howl, bark, and meow all for 2 minutes.","Making “coo” sounds like a baby, suck on your toe.","Run outside, shout, then run back inside.","Wash your hands with toothpaste.","Brush your teeth with soap.","Imagine that a pillow is a baby.","Burp it and then rock it to sleep.","Initiate your neighbors to help you look for your “missing cat.","Go outside, get in your car and honk the horn 10 times.","Every time someone begins to talk, interrupt by saying, “hey, ya know what?” Keep it up until your next turn.","Take a walk around the block on all fours and bark like a dog.","Call McDonald’s and ask if they sell whoppers.","Call Burger King and ask if they sell big macs.","Call Taco Bell and ask if they sell nuggets.","Sing the theme song from Barney non-stop until your next turn.","Pretend you’re a bird and eat cereal off the floor using only your mouth.","Go up to someone, expose their bare feet, and play “this little piggy went to market” on all their toes.","Every time someone performs a dare, yell, “tis but a mere flesh wound.","Every time someone tells a truth, yell, “liar.","Stand in the back yard and yell at the top of your lungs, “I was adopted! Nooooooo.","Text a friend and tell them their hair is on backward.","Wear your clothes backward for the duration of the game.","Go outside to the trash bin and throw a tantrum because someone put trash in it.","Go outside and pick exactly 40 blades of grass with a pair of tweezers.","Call someone and confess your new-found love for Justin Beiber.","Kiss the person to your right on the cheek.","Sniff the person to your left and tell them they smell bad.","Rub your armpits and then smell your fingers.","Knock on the neighbor’s door and ask if you can park your helicopter in their driveway.","Take someone with you outside in the sight of the neighbors and stare into the sky until someone asks you what you are looking at, then tell them that you saw a UFO.","Text your mom and tell her that you are expecting a baby.","Walk outside frantically carrying an empty leash and approach people asking them if they have seen your pet alligator because it just escaped.","Go into the bathroom and look in the cabinet Write a short summary of what you find and read it to the group.","Call the nearest gas station and ask them if they sell hemorrhoid cream.","Stop a car that is going down the street and tell them that their wheels are turning.","Close your eyes and let everyone draw on you for 5 minutes.","Tell a bizarre 2-minute story about the night you slept in the woods.","Stand up and dance the twist until your next turn.","Name the person in the room who you think is the best dressed.","Name the person in the room who you think is the worst dressed.","Text your siblings and tell them that you just found out you are adopted.","Make the sound of a dripping faucet until your next turn.","From now until the end of the game, every time you talk, speak like a robot.","Act like a cheerleader and do a cheer about the host of the party.","For the rest of the game, you must only communicate using animal sounds.","Make confetti out of a tissue.","Describe to the group what your last bathroom experience was like.","Get a magazine and go outside Roll up the magazine, put it on your nose and act and sound like an elephant.","Make a hat out of aluminum foil then put the hat on and post a selfie to social media Leave the hat on for the duration of the game.","Hang your socks from your ears until the end of the game.","Fill your mouth with water and act like a fountain.","For the rest of the game you must say your name at the beginning and the end of every sentence you speak.","Repeat everything the person to your left says until your next turn.","Choose one inanimate object that is in the room Now spend the next 2-minutes telling the group what that object is thinking.","Eat a teaspoonful of soy sauce.","Cut out an eyehole in a piece of cheese and a piece of lunchmeat Place each piece over your eyes and leave them there for the remainder of the game.","You are a seat in a car, for 2-minutes talk to your passengers.","Stand on your head and put your legs against the wall for 2-minutes.","Let the person to the left of you give you a creative hairstyle.","Paint your eyebrows with mayonnaise.","Put chocolate syrup on a pickle and eat it.","Tie a towel or blanket around your neck and run outside yelling, “I’m Superman!”.","Put strawberry syrup on a carrot and eat it.","Dip cheese in soda and eat it.","Without using your hands, eat an entire carrot while holding it with your toes.","Go outside and pick up the first non-poisonous bug you find then hold onto it for 2-minutes.","Eat a blade of grass.","Spread peanut butter onto a piece of cheese Roll up the peanut butter cheese and eat it all.","Eat a s’more made with peanut butter, saltines and ketchup.","Dip your feet into raw eggs and then, without cleaning your feet, wear your socks for the remainder of the game.","Using a wooden spoon and a pan, play a drum solo until someone recognizes the song.","Teach the room how to tie a man’s tie If you don’t know how to tie the tie, then you must use it to tie your hands together for the remainder of the game.","Stand up and professionally introduce yourself to everyone Now convince them as to why they should vote for you to be the next spokesperson for the elephants.","Drink a glass of water with a smashed-up banana mixed in it.","Go to a neighbor and ask them if you can use their driveway to park your new elephant.","Clean out your belly button and show everyone what you find.","Spend 2-minutes telling everyone about the creatures who live under your toenails.","Style your hair with at least ten paperclips When you are finished, post a selfie to social media.","Go outside and have a 2-minute conversation with the mailbox while someone makes a video and posts it to social media.","Call Pizza Hut and ask them if they sell hamburgers.","Call Wal-Mart and ask if they sell livestock.","Walk down to the end of the street and back while clucking, pecking, and flapping your arms like a chicken the entire time.","Sit on a balloon and bounce up and down until it breaks.","Peel a banana using only your feet and toes.","Call a car dealership and ask if they have any horse buggies in stock.","Call a car part store and tell them that you need a part for your Model T.","Try to eat a piece of popcorn off your nose with your tongue.","Dig through the trash and name off everything you find.","Lay down on the floor and toss popcorn in your mouth using only your feet Keep it up until you get at least five pieces into your mouth.","Scoot across the floor using only your elbows.","Mix orange juice with soda and drink it.","Taste a dog treat.","Just like when you were a child, make a blanket fort and stay in there for the next three rounds.","For the rest of the game, the floor is lava Find other ways to move without touching the floor.","Go around the room and smell everyone’s armpits.","While using the hand gestures, sing “Itsy Bitsy Spider” in its entirety on someone’s arm.","Text someone “hey” Every time they respond say, “hey” Do this ten times and on the eleventh, reply with “hi”.","Go outside and kiss the ground.","Call a pet store Tell them that you are babysitting and the baby ran out of formula Ask them how much the kitten formula is.","Call a Chinese restaurant and order a pizza.","Kiss each toe in the room individually.","Go to the fridge and read out loud all the expiration dates.","Put a breath mint in a glass of orange juice and drink it.","Rub the top of everyone’s head for 1-minute a piece.","Eat a butter stuffed Oreo.","Do the Chicken Dance on Facebook Live for 10-minutes.","Everyone must refer to you as “Captain Bed Wetter” for the rest of the game."]};

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

module.exports = __webpack_require__(/*! C:\ANgularDevelopmentLab\TruthOrDareV1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map