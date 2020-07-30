(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/layout/dashboard/components/chat/chat.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/layout/dashboard/components/chat/chat.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-panel card card-default\">\n    <div class=\"card-header\">\n        <i class=\"fa fa-comments fa-fw\"></i>\n        Chat\n        <div class=\" pull-right\" ngbDropdown>\n            <button class=\"btn btn-secondary btn-sm\" ngbDropdownToggle>\n                <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu dropdown-menu-right\">\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\n                    <i class=\"fa fa-refresh fa-fw\"></i> Refresh</a>\n                </li>\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\n                    <i class=\"fa fa-check-circle fa-fw\"></i> Available</a>\n                </li>\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\n                    <i class=\"fa fa-times fa-fw\"></i> Busy</a>\n                </li>\n                <li class=\"divider dropdown-divider\"></li>\n                <li role=\"menuitem\">\n                    <a href=\"#\" class=\"dropdown-item\">\n                        <i class=\"fa fa-times fa-fw\"></i> Busy\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\" class=\"dropdown-item\">\n                        <i class=\"fa fa-clock-o fa-fw\"></i> Away\n                    </a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                  <a href=\"#\" class=\"dropdown-item\">\n                    <i class=\"fa fa-sign-out fa-fw\"></i> Sign Out\n                  </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <!-- /.panel-heading -->\n    <div class=\"card-body\">\n        <ul class=\"chat\">\n            <li class=\"left clearfix\">\n                <span class=\"chat-img pull-left\">\n                    <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\">\n                </span>\n                <div class=\"chat-body clearfix\">\n                    <div class=\"header\">\n                        <strong class=\"primary-font\">Jack Sparrow</strong>\n                        <small class=\"pull-right text-muted\">\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 12 mins ago\n                        </small>\n                    </div>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n                    </p>\n                </div>\n            </li>\n            <li class=\"right clearfix\">\n                <span class=\"chat-img pull-right\">\n                    <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\">\n                </span>\n                <div class=\"chat-body clearfix\">\n                    <div class=\"header\">\n                        <small class=\" text-muted\">\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 13 mins ago\n                        </small>\n                        <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\n                    </div>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n                    </p>\n                </div>\n            </li>\n            <li class=\"left clearfix\">\n                <span class=\"chat-img pull-left\">\n                    <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\">\n                </span>\n                <div class=\"chat-body clearfix\">\n                    <div class=\"header\">\n                        <strong class=\"primary-font\">Jack Sparrow</strong>\n                        <small class=\"pull-right text-muted\">\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 14 mins ago\n                        </small>\n                    </div>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n                    </p>\n                </div>\n            </li>\n            <li class=\"right clearfix\">\n                <span class=\"chat-img pull-right\">\n                    <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\">\n                </span>\n                <div class=\"chat-body clearfix\">\n                    <div class=\"header\">\n                        <small class=\" text-muted\">\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 15 mins ago\n                        </small>\n                        <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\n                    </div>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n                    </p>\n                </div>\n            </li>\n        </ul>\n    </div>\n    <!-- /.card-body -->\n    <div class=\"card-footer\">\n        <div class=\"input-group\">\n            <input id=\"btn-input\" type=\"text\" class=\"form-control input-sm\" placeholder=\"Type your message here...\">\n            <span class=\"input-group-btn\">\n                <button class=\"btn btn-warning btn-sm\" id=\"btn-chat\">\n                    Send\n                </button>\n            </span>\n        </div>\n    </div>\n    <!-- /.card-footer -->\n</div>\n"

/***/ }),

/***/ "./src/app/layout/dashboard/components/chat/chat.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/layout/dashboard/components/chat/chat.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat-panel .chat-dropdown {\n  margin-top: -3px; }\n\n.chat-panel .chat {\n  height: 350px;\n  overflow-y: scroll;\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.chat-panel .chat .left img {\n    margin-right: 15px; }\n\n.chat-panel .chat .right img {\n    margin-left: 15px; }\n\n.chat-panel .chat li {\n    margin-bottom: 10px;\n    margin-right: 15px;\n    padding-bottom: 5px;\n    border-bottom: 1px dotted #999; }\n\n.chat-panel .card-footer input {\n  padding: 3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9jb21wb25lbnRzL2NoYXQvRDpcXGNjcHR0b29sLmdpdFxcdHJ1bmtcXGNjcHQtcGFyZW50XFxjY3B0LXdlYlxcc3JjXFxtYWluXFx3ZWIvc3JjXFxhcHBcXGxheW91dFxcZGFzaGJvYXJkXFxjb21wb25lbnRzXFxjaGF0XFxjaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsaUJBQWdCLEVBQ25COztBQUhMO0VBZVEsY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsV0FBVTtFQUNWLGlCQUFnQixFQU9uQjs7QUExQkw7SUFPZ0IsbUJBQWtCLEVBQ3JCOztBQVJiO0lBWWdCLGtCQUFpQixFQUNwQjs7QUFiYjtJQXFCWSxvQkFBbUI7SUFDbkIsbUJBQWtCO0lBQ2xCLG9CQUFtQjtJQUNuQiwrQkFBOEIsRUFDakM7O0FBekJUO0VBNkJZLGFBQWEsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvZGFzaGJvYXJkL2NvbXBvbmVudHMvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQtcGFuZWx7XG4gICAgLmNoYXQtZHJvcGRvd257XG4gICAgICAgIG1hcmdpbi10b3A6IC0zcHg7XG4gICAgfVxuICAgIC5jaGF0e1xuICAgICAgICAubGVmdHtcbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnJpZ2h0e1xuICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBsaXtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjOTk5O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jYXJkLWZvb3RlcntcbiAgICAgICAgaW5wdXR7XG4gICAgICAgICAgICBwYWRkaW5nIDogM3B4O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/layout/dashboard/components/chat/chat.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/dashboard/components/chat/chat.component.ts ***!
  \********************************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
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

var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () { };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/layout/dashboard/components/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/layout/dashboard/components/chat/chat.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/components/index.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/dashboard/components/index.ts ***!
  \******************************************************/
/*! exports provided: TimelineComponent, NotificationComponent, ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/layout/dashboard/components/timeline/timeline.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_0__["TimelineComponent"]; });

/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/layout/dashboard/components/notification/notification.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return _notification_notification_component__WEBPACK_IMPORTED_MODULE_1__["NotificationComponent"]; });

/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/layout/dashboard/components/chat/chat.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"]; });






/***/ }),

/***/ "./src/app/layout/dashboard/components/notification/notification.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/notification/notification.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-body\">\n    <div class=\"list-group\">\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\n            <i class=\"fa fa-comment fa-fw\"></i> New Comment\n            <span class=\"float-right text-muted small\"><em>4 minutes ago</em></span>\n        </a>\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\n            <i class=\"fa fa-twitter fa-fw\"></i> 3 New Followers\n            <span class=\"float-right text-muted small\"><em>12 minutes ago</em></span>\n        </a>\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\n            <i class=\"fa fa-envelope fa-fw\"></i> Message Sent\n            <span class=\"float-right text-muted small\"><em>27 minutes ago</em></span>\n        </a>\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\n            <i class=\"fa fa-tasks fa-fw\"></i> New Task\n            <span class=\"float-right text-muted small\"><em>43 minutes ago</em></span>\n        </a>\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\n            <i class=\"fa fa-upload fa-fw\"></i> Server Rebooted\n            <span class=\"float-right text-muted small\"><em>11:32 AM</em></span>\n        </a>\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\n            <i class=\"fa fa-bolt fa-fw\"></i> Server Crashed!\n            <span class=\"float-right text-muted small\"><em>11:13 AM</em></span>\n        </a>\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\n            <i class=\"fa fa-warning fa-fw\"></i> Server Not Responding\n            <span class=\"float-right text-muted small\"><em>10:57 AM</em></span>\n        </a>\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\n            <i class=\"fa fa-shopping-cart fa-fw\"></i> New Order Placed\n            <span class=\"float-right text-muted small\"><em>9:49 AM</em></span>\n        </a>\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\n            <i class=\"fa fa-money fa-fw\"></i> Payment Received\n            <span class=\"float-right text-muted small\"><em>Yesterday</em></span>\n        </a>\n    </div>\n    <!-- /.list-group -->\n    <a href=\"#\" class=\"btn btn-default btn-block\">View All Alerts</a>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/dashboard/components/notification/notification.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/notification/notification.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9kYXNoYm9hcmQvY29tcG9uZW50cy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/dashboard/components/notification/notification.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/notification/notification.component.ts ***!
  \************************************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
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

var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
    }
    NotificationComponent.prototype.ngOnInit = function () { };
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/layout/dashboard/components/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/layout/dashboard/components/notification/notification.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/components/timeline/timeline.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/timeline/timeline.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-body\">\n    <ul class=\"timeline\">\n        <li>\n            <div class=\"timeline-badge\"><i class=\"fa fa-check\"></i>\n            </div>\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                    <p><small class=\"text-muted\"><i class=\"fa fa-clock-o\"></i> 11 hours ago via Twitter</small>\n                    </p>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero laboriosam dolor perspiciatis omnis exercitationem. Beatae, officia pariatur? Est cum veniam excepturi. Maiores praesentium, porro voluptas suscipit facere rem dicta, debitis.</p>\n                </div>\n            </div>\n        </li>\n        <li class=\"timeline-inverted\">\n            <div class=\"timeline-badge warning\"><i class=\"fa fa-credit-card\"></i>\n            </div>\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem quibusdam, tenetur commodi provident cumque magni voluptatem libero, quis rerum. Fugiat esse debitis optio, tempore. Animi officiis alias, officia repellendus.</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium maiores odit qui est tempora eos, nostrum provident explicabo dignissimos debitis vel! Adipisci eius voluptates, ad aut recusandae minus eaque facere.</p>\n                </div>\n            </div>\n        </li>\n        <li>\n            <div class=\"timeline-badge danger\"><i class=\"fa fa-bomb\"></i>\n            </div>\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus numquam facilis enim eaque, tenetur nam id qui vel velit similique nihil iure molestias aliquam, voluptatem totam quaerat, magni commodi quisquam.</p>\n                </div>\n            </div>\n        </li>\n        <li class=\"timeline-inverted\">\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates est quaerat asperiores sapiente, eligendi, nihil. Itaque quos, alias sapiente rerum quas odit! Aperiam officiis quidem delectus libero, omnis ut debitis!</p>\n                </div>\n            </div>\n        </li>\n        <li>\n            <div class=\"timeline-badge info\"><i class=\"fa fa-save\"></i>\n            </div>\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis minus modi quam ipsum alias at est molestiae excepturi delectus nesciunt, quibusdam debitis amet, beatae consequuntur impedit nulla qui! Laborum, atque.</p>\n                    <hr>\n                    <div class=\"btn-group\">\n                        <button type=\"button\" class=\"btn btn-primary btn-sm dropdown-toggle\" data-toggle=\"dropdown\">\n                            <i class=\"fa fa-gear\"></i>  <span class=\"caret\"></span>\n                        </button>\n                        <ul class=\"dropdown-menu\" role=\"menu\">\n                            <li><a href=\"#\">Action</a>\n                            </li>\n                            <li><a href=\"#\">Another action</a>\n                            </li>\n                            <li><a href=\"#\">Something else here</a>\n                            </li>\n                            <li class=\"divider\"></li>\n                            <li><a href=\"#\">Separated link</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </li>\n        <li>\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fuga odio quibusdam. Iure expedita, incidunt unde quis nam! Quod, quisquam. Officia quam qui adipisci quas consequuntur nostrum sequi. Consequuntur, commodi.</p>\n                </div>\n            </div>\n        </li>\n        <li class=\"timeline-inverted\">\n            <div class=\"timeline-badge success\"><i class=\"fa fa-graduation-cap\"></i>\n            </div>\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt obcaecati, quaerat tempore officia voluptas debitis consectetur culpa amet, accusamus dolorum fugiat, animi dicta aperiam, enim incidunt quisquam maxime neque eaque.</p>\n                </div>\n            </div>\n        </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/dashboard/components/timeline/timeline.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/timeline/timeline.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".timeline {\n  position: relative;\n  padding: 20px 0 20px;\n  list-style: none; }\n\n.timeline:before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 3px;\n  margin-left: -1.5px;\n  background-color: #eeeeee; }\n\n.timeline > li {\n  position: relative;\n  margin-bottom: 20px; }\n\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table; }\n\n.timeline > li:after {\n  clear: both; }\n\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table; }\n\n.timeline > li:after {\n  clear: both; }\n\n.timeline > li > .timeline-panel {\n  float: left;\n  position: relative;\n  width: 46%;\n  padding: 20px;\n  border: 1px solid #d4d4d4;\n  border-radius: 2px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175); }\n\n.timeline > li > .timeline-panel:before {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 26px;\n  right: -15px;\n  border-top: 15px solid transparent;\n  border-right: 0 solid #ccc;\n  border-bottom: 15px solid transparent;\n  border-left: 15px solid #ccc; }\n\n.timeline > li > .timeline-panel:after {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 27px;\n  right: -14px;\n  border-top: 14px solid transparent;\n  border-right: 0 solid #fff;\n  border-bottom: 14px solid transparent;\n  border-left: 14px solid #fff; }\n\n.timeline > li > .timeline-badge {\n  z-index: 100;\n  position: absolute;\n  top: 16px;\n  left: 50%;\n  width: 50px;\n  height: 50px;\n  margin-left: -25px;\n  border-radius: 50% 50% 50% 50%;\n  text-align: center;\n  font-size: 1.4em;\n  line-height: 50px;\n  color: #fff;\n  background-color: #999999; }\n\n.timeline > li.timeline-inverted > .timeline-panel {\n  float: right; }\n\n.timeline > li.timeline-inverted > .timeline-panel:before {\n  right: auto;\n  left: -15px;\n  border-right-width: 15px;\n  border-left-width: 0; }\n\n.timeline > li.timeline-inverted > .timeline-panel:after {\n  right: auto;\n  left: -14px;\n  border-right-width: 14px;\n  border-left-width: 0; }\n\n.timeline-badge.primary {\n  background-color: #2e6da4 !important; }\n\n.timeline-badge.success {\n  background-color: #3f903f !important; }\n\n.timeline-badge.warning {\n  background-color: #f0ad4e !important; }\n\n.timeline-badge.danger {\n  background-color: #d9534f !important; }\n\n.timeline-badge.info {\n  background-color: #5bc0de !important; }\n\n.timeline-title {\n  margin-top: 0;\n  color: inherit; }\n\n.timeline-body > p,\n.timeline-body > ul {\n  margin-bottom: 0; }\n\n.timeline-body > p + p {\n  margin-top: 5px; }\n\n@media (max-width: 767px) {\n  ul.timeline:before {\n    left: 40px; }\n  ul.timeline > li > .timeline-panel {\n    width: calc(100% - 90px);\n    width: -webkit-calc(100% - 90px); }\n  ul.timeline > li > .timeline-badge {\n    top: 16px;\n    left: 15px;\n    margin-left: 0; }\n  ul.timeline > li > .timeline-panel {\n    float: right; }\n  ul.timeline > li > .timeline-panel:before {\n    right: auto;\n    left: -15px;\n    border-right-width: 15px;\n    border-left-width: 0; }\n  ul.timeline > li > .timeline-panel:after {\n    right: auto;\n    left: -14px;\n    border-right-width: 14px;\n    border-left-width: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9jb21wb25lbnRzL3RpbWVsaW5lL0Q6XFxjY3B0dG9vbC5naXRcXHRydW5rXFxjY3B0LXBhcmVudFxcY2NwdC13ZWJcXHNyY1xcbWFpblxcd2ViL3NyY1xcYXBwXFxsYXlvdXRcXGRhc2hib2FyZFxcY29tcG9uZW50c1xcdGltZWxpbmVcXHRpbWVsaW5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQWtCO0VBQ2xCLHFCQUFvQjtFQUNwQixpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixVQUFTO0VBQ1QsVUFBUztFQUNULFdBQVU7RUFDVixvQkFBbUI7RUFDbkIsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLG9CQUFtQixFQUN0Qjs7QUFFRDs7RUFFSSxhQUFZO0VBQ1osZUFBYyxFQUNqQjs7QUFFRDtFQUNJLFlBQVcsRUFDZDs7QUFFRDs7RUFFSSxhQUFZO0VBQ1osZUFBYyxFQUNqQjs7QUFFRDtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNJLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsV0FBVTtFQUNWLGNBQWE7RUFDYiwwQkFBeUI7RUFDekIsbUJBQWtCO0VBRWxCLDJDQUF1QyxFQUMxQzs7QUFFRDtFQUNJLGFBQVk7RUFDWixzQkFBcUI7RUFDckIsbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxhQUFZO0VBQ1osbUNBQWtDO0VBQ2xDLDJCQUEwQjtFQUMxQixzQ0FBcUM7RUFDckMsNkJBQTRCLEVBQy9COztBQUVEO0VBQ0ksYUFBWTtFQUNaLHNCQUFxQjtFQUNyQixtQkFBa0I7RUFDbEIsVUFBUztFQUNULGFBQVk7RUFDWixtQ0FBa0M7RUFDbEMsMkJBQTBCO0VBQzFCLHNDQUFxQztFQUNyQyw2QkFBNEIsRUFDL0I7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxVQUFTO0VBQ1QsWUFBVztFQUNYLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsK0JBQThCO0VBQzlCLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLFlBQVc7RUFDWCwwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxZQUFXO0VBQ1gsWUFBVztFQUNYLHlCQUF3QjtFQUN4QixxQkFBb0IsRUFDdkI7O0FBRUQ7RUFDSSxZQUFXO0VBQ1gsWUFBVztFQUNYLHlCQUF3QjtFQUN4QixxQkFBb0IsRUFDdkI7O0FBRUQ7RUFDSSxxQ0FBb0MsRUFDdkM7O0FBRUQ7RUFDSSxxQ0FBb0MsRUFDdkM7O0FBRUQ7RUFDSSxxQ0FBb0MsRUFDdkM7O0FBRUQ7RUFDSSxxQ0FBb0MsRUFDdkM7O0FBRUQ7RUFDSSxxQ0FBb0MsRUFDdkM7O0FBRUQ7RUFDSSxjQUFhO0VBQ2IsZUFBYyxFQUNqQjs7QUFFRDs7RUFFSSxpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJO0lBQ0ksV0FBVSxFQUNiO0VBRUQ7SUFDSSx5QkFBd0I7SUFFeEIsaUNBQWdDLEVBQ25DO0VBRUQ7SUFDSSxVQUFTO0lBQ1QsV0FBVTtJQUNWLGVBQWMsRUFDakI7RUFFRDtJQUNJLGFBQVksRUFDZjtFQUVEO0lBQ0ksWUFBVztJQUNYLFlBQVc7SUFDWCx5QkFBd0I7SUFDeEIscUJBQW9CLEVBQ3ZCO0VBRUQ7SUFDSSxZQUFXO0lBQ1gsWUFBVztJQUNYLHlCQUF3QjtJQUN4QixxQkFBb0IsRUFDdkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9kYXNoYm9hcmQvY29tcG9uZW50cy90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aW1lbGluZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDIwcHggMCAyMHB4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi50aW1lbGluZTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMS41cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbn1cblxuLnRpbWVsaW5lID4gbGkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4udGltZWxpbmUgPiBsaTpiZWZvcmUsXG4udGltZWxpbmUgPiBsaTphZnRlciB7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgZGlzcGxheTogdGFibGU7XG59XG5cbi50aW1lbGluZSA+IGxpOmFmdGVyIHtcbiAgICBjbGVhcjogYm90aDtcbn1cblxuLnRpbWVsaW5lID4gbGk6YmVmb3JlLFxuLnRpbWVsaW5lID4gbGk6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4udGltZWxpbmUgPiBsaTphZnRlciB7XG4gICAgY2xlYXI6IGJvdGg7XG59XG5cbi50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLXBhbmVsIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDQ2JTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggNnB4IHJnYmEoMCwwLDAsMC4xNzUpO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDZweCByZ2JhKDAsMCwwLDAuMTc1KTtcbn1cblxuLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtcGFuZWw6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjZweDtcbiAgICByaWdodDogLTE1cHg7XG4gICAgYm9yZGVyLXRvcDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDAgc29saWQgI2NjYztcbiAgICBib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICNjY2M7XG59XG5cbi50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLXBhbmVsOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjdweDtcbiAgICByaWdodDogLTE0cHg7XG4gICAgYm9yZGVyLXRvcDogMTRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDAgc29saWQgI2ZmZjtcbiAgICBib3JkZXItYm90dG9tOiAxNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0OiAxNHB4IHNvbGlkICNmZmY7XG59XG5cbi50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLWJhZGdlIHtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTZweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDUwJSA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTk5OTtcbn1cblxuLnRpbWVsaW5lID4gbGkudGltZWxpbmUtaW52ZXJ0ZWQgPiAudGltZWxpbmUtcGFuZWwge1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLnRpbWVsaW5lID4gbGkudGltZWxpbmUtaW52ZXJ0ZWQgPiAudGltZWxpbmUtcGFuZWw6YmVmb3JlIHtcbiAgICByaWdodDogYXV0bztcbiAgICBsZWZ0OiAtMTVweDtcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDE1cHg7XG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG59XG5cbi50aW1lbGluZSA+IGxpLnRpbWVsaW5lLWludmVydGVkID4gLnRpbWVsaW5lLXBhbmVsOmFmdGVyIHtcbiAgICByaWdodDogYXV0bztcbiAgICBsZWZ0OiAtMTRweDtcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDE0cHg7XG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG59XG5cbi50aW1lbGluZS1iYWRnZS5wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU2ZGE0ICFpbXBvcnRhbnQ7XG59XG5cbi50aW1lbGluZS1iYWRnZS5zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y5MDNmICFpbXBvcnRhbnQ7XG59XG5cbi50aW1lbGluZS1iYWRnZS53YXJuaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhZDRlICFpbXBvcnRhbnQ7XG59XG5cbi50aW1lbGluZS1iYWRnZS5kYW5nZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGYgIWltcG9ydGFudDtcbn1cblxuLnRpbWVsaW5lLWJhZGdlLmluZm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YmMwZGUgIWltcG9ydGFudDtcbn1cblxuLnRpbWVsaW5lLXRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGNvbG9yOiBpbmhlcml0O1xufVxuXG4udGltZWxpbmUtYm9keSA+IHAsXG4udGltZWxpbmUtYm9keSA+IHVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4udGltZWxpbmUtYm9keSA+IHAgKyBwIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6NzY3cHgpIHtcbiAgICB1bC50aW1lbGluZTpiZWZvcmUge1xuICAgICAgICBsZWZ0OiA0MHB4O1xuICAgIH1cblxuICAgIHVsLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtcGFuZWwge1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gOTBweCk7XG4gICAgICAgIHdpZHRoOiAtbW96LWNhbGMoMTAwJSAtIDkwcHgpO1xuICAgICAgICB3aWR0aDogLXdlYmtpdC1jYWxjKDEwMCUgLSA5MHB4KTtcbiAgICB9XG5cbiAgICB1bC50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLWJhZGdlIHtcbiAgICAgICAgdG9wOiAxNnB4O1xuICAgICAgICBsZWZ0OiAxNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICB1bC50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLXBhbmVsIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cblxuICAgIHVsLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtcGFuZWw6YmVmb3JlIHtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGxlZnQ6IC0xNXB4O1xuICAgICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDE1cHg7XG4gICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICAgIH1cblxuICAgIHVsLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtcGFuZWw6YWZ0ZXIge1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgbGVmdDogLTE0cHg7XG4gICAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMTRweDtcbiAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/layout/dashboard/components/timeline/timeline.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/timeline/timeline.component.ts ***!
  \****************************************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
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

var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    TimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/layout/dashboard/components/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.scss */ "./src/app/layout/dashboard/components/timeline/timeline.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/dashboard-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/layout/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: "",
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.html":
/*!***********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <div class=\"spinner padding-top justify-content-md-center\" *ngIf=\"!listReturned\">\n    <div class=\"bounce1\"></div>\n    <div class=\"bounce2\"></div>\n    <div class=\"bounce3\"></div>\n  </div>\n  <div class=\"row\" *ngIf=\"listReturned\">\n    <div class=\"col-md-6\">\n      <div class=\"row\">\n        <div class=\"col col-xl-12 col-lg-12\" *ngIf=\"interviewsToday.length != 0\">\n          <div class=\"card mb-3\">\n            <div class=\"link card-header bg-dark text-clr-white\"\n              (click)=\"selectLeftTable(constantProperties.DASHBOARD_ITW)\">\n              {{ constantProperties.DASHBOARD_ITW }}\n            </div>\n            <div>\n              <div [ngbCollapse]=\"\n                  showLeftTable != constantProperties.DASHBOARD_ITW\n                \" class=\"card-body table-responsive\">\n                <table class=\"table table-sm table-striped \">\n                  <thead>\n                    <tr>\n                      <th>{{ constantProperties.CLIENT }}</th>\n                      <th>{{ constantProperties.CON }}</th>\n                      <th>{{ constantProperties.TH_MODE }}</th>\n                      <th>\n                        {{ constantProperties.TH_DATE }}/{{\n                          constantProperties.TH_TIME\n                        }}\n                      </th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let val of interviewsToday\" [ngClass]=\"{ 'bl-red': val.interviewDate === today }\">\n                      <td container=\"body\" class=\"click-data\" [autoClose]=\"'outside'\" [ngbPopover]=\"popContent1\"\n                        [popoverTitle]=\"popTitle1\">\n                        {{ val.clientName }}\n                      </td>\n                      <td container=\"body\" class=\"click-data\" [autoClose]=\"'outside'\" [ngbPopover]=\"popContent2\"\n                        [popoverTitle]=\"popTitle2\">\n                        {{ val.consultantName }}\n                      </td>\n                      <td>{{ val.interviewMode }}</td>\n                      <td>\n                        {{ val.interviewDate | date }}/{{ val.interviewTime }}\n                      </td>\n                      <ng-template #popContent1>{{\n                        val.clientPhone\n                      }}</ng-template>\n                      <ng-template #popTitle1><b>Client Phone</b></ng-template>\n                      <ng-template #popContent2>{{ val.consultantPhone }}\n                      </ng-template>\n                      <ng-template #popTitle2><b>Consultant Phone</b></ng-template>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-12\">\n          <div class=\"card mb-3\">\n            <div class=\" card-header bg-dark text-clr-white\">\n              <span class=\"link text-clr-white\"\n                (click)=\"selectLeftTable(constantProperties.DASHBOARD_QSU)\">{{ constantProperties.DASHBOARD_QSU }}</span>\n              <span class=\"pull-right\">\n                <button type=\"submit\" *ngIf=\"selectedCAList.length > 0\" class=\"btn btn-secondary btn-sm ml-3\"\n                  (click)=\"open(multipleQSU, 0, 'any')\">\n                  Change Status\n                </button>\n              </span>\n            </div>\n\n            <div [ngbCollapse]=\"showLeftTable != constantProperties.DASHBOARD_QSU\"\n              class=\"card-body  table-responsive table-overflow-l\">\n              <table class=\"table table-sm table-striped \">\n                <thead>\n                  <tr>\n                    <th></th>\n                    <th>{{ constantProperties.CLIENT }}</th>\n                    <th>{{ constantProperties.CON }}</th>\n                    <th>{{ constantProperties.TH_STAT }}</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let ca of caStat\">\n                    <td class=\"checkbox\" width=\"15px\">\n                      <label>\n                        <input class=\"check\" type=\"checkbox\" (change)=\"onSelectApplication($event, ca)\" />\n                      </label>\n                    </td>\n                    <td>\n                      {{ ca.clientName }}\n                    </td>\n                    <td>\n                      {{ ca.consultantName }}\n                    </td>\n                    <td colspan=\"2\">\n                      <select class=\"form-control form-control-sm\" name=\"cas\" [(ngModel)]=\"ca.status\"\n                        (change)=\"updateCAStatus(ca, ca.status, 'table')\">\n                        <option *ngFor=\"let casl of caStatusList?.list\" [ngValue]=\"casl.code\">\n                          {{ casl.description }}\n                        </option>\n                      </select><i *ngIf=\"updateIndex == ca.id\" class=\"fa fa-check fa-lg fa-position\"></i>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-12\">\n          <div class=\"card mb-3\">\n            <div class=\"link card-header bg-dark text-clr-white\"\n              (click)=\"selectLeftTable(constantProperties.DASHBOARD_OCP)\">\n              {{ constantProperties.DASHBOARD_OCP\n              }}<i class=\"fa fa-question-circle-o ml-2\" placement=\"top\"\n                ngbTooltip=\"All those positions which dont have any applications.\" aria-hidden=\"true\"></i>\n            </div>\n            <div>\n              <div [ngbCollapse]=\"\n                  showLeftTable != constantProperties.DASHBOARD_OCP\n                \" class=\"card-body table-responsive \">\n                <table class=\"table table-sm table-striped\">\n                  <thead>\n                    <tr>\n                      <th>{{ constantProperties.CLIENT }}</th>\n                      <th>{{ constantProperties.TH_DATE }}</th>\n                      <th>{{ constantProperties.TH_ASSIGN }}</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let ocp of openCP\">\n                      <td>{{ ocp.generatedCode }}</td>\n                      <td width=\"100\">\n                        {{ ocp.createdDate | date }}\n                      </td>\n                      <td>{{ ocp.recruiterName }}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\" *ngIf=\"listReturned\">\n      <div class=\"row\">\n        <div class=\"col col-xl-12 col-lg-12\" *ngIf=\"paymentTrack.length\">\n          <div class=\"card mb-3\">\n            <div class=\"card-header bg-dark text-clr-white link\"\n              (click)=\"selectRightTable(constantProperties.DASHBOARD_PT)\">\n              {{ constantProperties.DASHBOARD_PT }}\n            </div>\n            <div>\n              <div [ngbCollapse]=\"\n                  showRightTable != constantProperties.DASHBOARD_PT\n                \" class=\"card-body table-responsive\">\n                <table class=\"table table-sm table-striped \">\n                  <thead>\n                    <tr>\n                      <th>{{ constantProperties.CLIENT }}</th>\n                      <th>{{ constantProperties.CON }}</th>\n                      <th>{{ constantProperties.JOINING_DATE }}</th>\n                      <th>{{ constantProperties.AMT_REC }}</th>\n                      <th>{{ constantProperties.PEN_SIN }}</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let pt of paymentTrack\">\n                      <td>\n                        {{ pt.companyName }}\n                      </td>\n                      <td>\n                        {{ pt.candidateName }}\n                      </td>\n                      <td>{{ pt.joiningDate | date }}</td>\n                      <td>{{ pt.amountReceivable }} rs.</td>\n                      <td>{{ pt.pendingSince }} days</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-12\">\n          <div class=\"card mb-3\">\n            <div (click)=\"getGraphData()\" class=\"link card-header bg-dark text-clr-white\">\n              {{ constantProperties.DASHBOARD_CAS }}\n            </div>\n            <div [ngbCollapse]=\"showRightTable != constantProperties.DASHBOARD_CAS\" *ngIf=\"caByStatusList.length\"\n              class=\"card-body table-overflow\">\n              <div [style.height.px]=\"stackChartHeight\">\n                <canvas baseChart id=\"activeCAChart\" [datasets]=\"barChartCAByStatusData\"\n                  [labels]=\"barChartCAByStautsLabels\" [colors]=\"stackbarChartColors\" [options]=\"barChartOptions\"\n                  [legend]=\"stackBarChartLegend\" [chartType]=\"barChartType\">\n                </canvas>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col col-xl-12 col-lg-12\" *ngIf=\"cpEmptyPostings.length\">\n          <div class=\"card mb-3\">\n            <div class=\"card-header bg-dark text-clr-white link\"\n              (click)=\"selectRightTable(constantProperties.DASHBOARD_TODO)\">\n              {{ constantProperties.DASHBOARD_TODO }}\n            </div>\n            <div>\n              <div [ngbCollapse]=\"\n                  showRightTable != constantProperties.DASHBOARD_TODO\n                \" class=\"card-body table-responsive\">\n                <table class=\"table table-sm table-striped \">\n                  <thead>\n                    <tr>\n                      <th>Client Position</th>\n                      <th>Postings</th>\n                    </tr>\n                  </thead>\n                  <tbody class=\"word-break\">\n                    <tr *ngFor=\"let ep of cpEmptyPostings\">\n                      <td width=\"100\">\n                        {{ ep.generatedCode }}\n                      </td>\n                      <td>\n                        {{ ep.value }}\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-12\" *ngIf=\"dyingCP.length > 0\">\n          <div class=\"card mb-3\">\n            <div class=\"card-header bg-dark text-clr-white link\"\n              (click)=\"selectRightTable(constantProperties.DASHBOARD_DCP)\">\n              {{ constantProperties.DASHBOARD_DCP\n              }}<i class=\"fa fa-question-circle-o ml-2\" placement=\"top\"\n                ngbTooltip=\"All those positions which dont have applications since one week.\" aria-hidden=\"true\"></i>\n            </div>\n            <div [ngbCollapse]=\"showRightTable != constantProperties.DASHBOARD_DCP\" class=\"card-body table-responsive\">\n              <table class=\"table table-sm table-striped\">\n                <thead>\n                  <tr>\n                    <th>{{ constantProperties.CLIENT }}</th>\n                    <th>{{ constantProperties.TH_DATE }}</th>\n                    <th>{{ constantProperties.TH_ASSIGN }}</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let ocp of dyingCP\">\n                    <td>{{ ocp.generatedCode }}</td>\n                    <td width=\"100\">\n                      {{ ocp.createdDate | date }}\n                    </td>\n                    <td>{{ ocp.recruiterName }}</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n        <!-- <div class=\"col-md-12\">\n      <div class=\"card mb-3\">\n        <div class=\"card-header bg-dark text-clr-white\">\n          Client Call History\n          <span class=\"pull-right\">\n            <select class=\"form-control form-control-sm\" name=\"clchChoosenDays\" [(ngModel)]=\"clchChoosenDays\"\n              (change)=\"clchGetAllByDays()\">\n              <option *ngFor=\"let nod of noOfDays\" [ngValue]=\"nod.value\">{{nod.key}}\n              </option>\n            </select>\n          </span>\n        </div>\n        <div *ngIf=\"ccptReportCLCH.length != 0\" class=\"card-body\">\n          <table class=\"table table-sm\">\n            <thead>\n              <tr>\n                <th>Name</th>\n                <th>Count</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let cch of ccptReportCLCH\" class=\"link\" placement=\"top\" ngbTooltip=\"click for details\"\n                data-toggle=\"tooltip\" (click)=\"open(contentClch, cch.recruiterId, 'ClientCallHistory')\">\n                <td>{{ cch.fullName }}</td>\n                <td>{{ cch.count }}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div> -->\n      </div>\n    </div>\n  </div>\n</div>\n<ng-template #contentClch let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">{{ constantProperties.CLI_C_H }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"\">\n      <table class=\"table table-sm table-striped\">\n        <thead>\n          <tr>\n            <th>\n              {{ constantProperties.TH_CALLER }}\n            </th>\n            <th>\n              {{ constantProperties.CP }}\n            </th>\n            <th>\n              {{ constantProperties.TH_CALL_DATE }}\n            </th>\n            <th width=\"150\">\n              {{ constantProperties.TH_DESC }}\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let aca of clchByIdList\">\n            <td>{{ aca.calledBy.fullname }}</td>\n            <td>{{ aca.clientPosition.generatedCode }}</td>\n            <td>{{ aca.calledDate }}</td>\n            <td>{{ aca.description }}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <!-- <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteCoCHRecord()\">Ok</button> -->\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">\n      Close\n    </button>\n  </div>\n</ng-template>\n<ng-template #contentCoCH let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">{{ constantProperties.CON_C_H }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"table-scroll ht-30\">\n      <table class=\"table table-sm table-striped\">\n        <thead>\n          <tr>\n            <th>\n              {{ constantProperties.TH_SNO }}\n            </th>\n            <th>\n              {{ constantProperties.TH_CALLER }}\n            </th>\n            <th>\n              {{ constantProperties.CON }}\n            </th>\n            <th>\n              {{ constantProperties.TH_CALL_DATE }}\n            </th>\n            <th width=\"150\">\n              {{ constantProperties.TH_DESC }}\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let aca of cochByIdList; let i = index\">\n            <td>{{ i + 1 }}.</td>\n            <td>{{ aca.calledBy.fullname }}</td>\n            <td>\n              {{ aca.consultant.fullname }}\n            </td>\n            <td>{{ aca.calledDate }}</td>\n            <td>{{ aca.description }}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <!-- <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteCoCHRecord()\">Ok</button> -->\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">\n      Close\n    </button>\n  </div>\n</ng-template>\n<ng-template #contentACA let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">{{ constantProperties.DASHBOARD_ACA }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"table-scroll ht-30\">\n      <table class=\"table table-sm table-striped\">\n        <thead>\n          <tr>\n            <th>{{ constantProperties.TH_SNO }}</th>\n            <th>{{ constantProperties.TH_POS }}</th>\n            <th>{{ constantProperties.CLIENT }}</th>\n            <th>{{ constantProperties.CON }}</th>\n            <th>{{ constantProperties.TH_INT_DT }}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let aca of activeCAById; let i = index\">\n            <td>{{ i + 1 }}</td>\n            <td>{{ aca.clientPosition.generatedCode }}</td>\n            <td>{{ aca.clientPosition.client.name }}</td>\n            <td>{{ aca.consultant.fullname }}</td>\n            <td>{{ aca.interviewDate }}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">\n      Close\n    </button>\n  </div>\n</ng-template>\n<ng-template #top5CP let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">{{ constantProperties.CP }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form name=\"form\" id=\"clientPositionForm\" (ngSubmit)=\"f.form.valid && create(f)\" #f=\"ngForm\" novalidate>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>{{ constantProperties.CP_CN }} </label>\n            <input class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"top5ById?.client.name\" name=\"cn\"\n              [ngClass]=\"{ 'is-invalid': f.submitted && cn.invalid }\" #cn=\"ngModel\" required />\n            <!-- <select\n                    class=\"form-control\"\n                    name=\"cn\"\n                    [disabled]=\"readOnlyForm == 'R'\"\n                    [(ngModel)]=\"top5ById.clientId\"\n                    [ngClass]=\"{ 'is-invalid': f.submitted && cn.invalid }\"\n                    #cn=\"ngModel\"\n                    required\n                  >\n                    <option *ngFor=\"let cls of clientList\" [ngValue]=\"cls.id\"> {{ cls.name }}</option>\n                  </select>\n                  <div class=\"invalid-feedback\">\n                    Client Name is mandatory\n                  </div> -->\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>{{ constantProperties.CP_JT }} </label>\n            <input class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"top5ById.role\" name=\"technology\"\n              [ngClass]=\"{ 'is-invalid': f.submitted && technology.invalid }\" #technology=\"ngModel\" required />\n            <div class=\"invalid-feedback\">\n              Role is mandatory\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>{{ constantProperties.CP_JTY }}</label>\n            <input class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"top5ById.jobType\" name=\"jobType\"\n              [ngClass]=\"{ 'is-invalid': f.submitted && jobType.invalid }\" #jobType=\"ngModel\" />\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>{{ constantProperties.CP_AVAIL }}</label>\n            <input class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"top5ById.availability\"\n              name=\"availability\" [ngClass]=\"{ 'is-invalid': f.submitted && availability.invalid }\"\n              #availability=\"ngModel\" />\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>{{ constantProperties.CP_RP }}</label>\n            <input class=\"form-control\" type=\"number\" min=\"0\" [readonly]=\"readOnlyForm == 'R'\"\n              [(ngModel)]=\"top5ById.requiredPositions\" name=\"nofpos\" #nofpos=\"ngModel\" />\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>{{ constantProperties.CP_RE }}</label>\n            <input class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"top5ById.experience\"\n              name=\"experience\" [ngClass]=\"{ 'is-invalid': f.submitted && experience.invalid }\" #experience=\"ngModel\" />\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>{{ constantProperties.CP_MIN_CTC }}</label>\n            <input class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\" type=\"text\" [(ngModel)]=\"top5ById.minCtc\"\n              name=\"minctc\" [ngClass]=\"{ 'is-invalid': f.submitted && minctc.invalid }\" #minctc=\"ngModel\" />\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>{{ constantProperties.CP_MAX_CTC }}</label>\n            <input class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\" type=\"text\" [(ngModel)]=\"top5ById.maxCtc\"\n              name=\"maxctc\" [ngClass]=\"{ 'is-invalid': f.submitted && maxctc.invalid }\" #maxctc=\"ngModel\" />\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>{{ constantProperties.TH_LOC }}</label>\n            <input class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"top5ById.location\" name=\"loc\"\n              [ngClass]=\"{ 'is-invalid': f.submitted && loc.invalid }\" #loc=\"ngModel\" />\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>{{ constantProperties.CP_CPS }} </label>\n            <input class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"top5ById.status.description\"\n              name=\"cps\" [ngClass]=\"{ 'is-invalid': f.submitted && cps.invalid }\" #cps=\"ngModel\" />\n            <!-- <select class=\"form-control\" name=\"cps\" [disabled]=\"readOnlyForm == 'R'\" [(ngModel)]=\"top5ById.cpstatus\">\n                     <option *ngFor=\"let cpsl of clientPositionStatusList\" [ngValue]=\"cpsl.code\"> {{ cpsl.description }} </option>\n                  </select> -->\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>{{ constantProperties.CP_ASSIGN }}</label>\n            <input class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"top5ById.assignedTo.fullname\"\n              name=\"assign\" [ngClass]=\"{ 'is-invalid': f.submitted && assign.invalid }\" #assign=\"ngModel\" />\n            <!-- <select\n                      class=\"form-control\"\n                      name=\"assign\"\n                      [disabled]=\"readOnlyForm == 'R'\"\n                      [(ngModel)]=\"top5ById.assignedTo\"\n                      [ngClass]=\"{ 'is-invalid': f.submitted && assign.invalid }\"\n                      #assign=\"ngModel\"\n                    >\n                      <option *ngFor=\"let rl of recruiterList\" [ngValue]=\"rl.id\"> {{ rl.name }}</option>\n                    </select> -->\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>{{ constantProperties.CP_QUAL }}</label>\n            <input class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"top5ById.qualification\"\n              name=\"qual\" [ngClass]=\"{ 'is-invalid': f.submitted && qual.invalid }\" #qual=\"ngModel\" />\n          </div>\n        </div>\n        <div class=\"col-md-6\" *ngIf=\"top5ById.cpstatus == 'Closed'\">\n          <div class=\"form-group\">\n            <label>{{ constantProperties.CP_CL_BY }}</label>\n            <select class=\"form-control\" name=\"closedBy\" [disabled]=\"readOnlyForm == 'R'\"\n              [(ngModel)]=\"top5ById.closedBy\">\n              <!-- <option *ngFor=\"let rl of recruiterList\" [ngValue]=\"rl.id\"> {{ rl.name }}</option> -->\n            </select>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"form-group\">\n            <label>{{ constantProperties.CP_REQ_SKILL }} </label>\n            <textarea class=\"form-control\" cols=\"10\" rows=\"10\" [(ngModel)]=\"top5ById.requiredSkills\"\n              name=\"requiredskills\" [ngClass]=\"{\n                'is-invalid': f.submitted && requiredskills.invalid\n              }\" #requiredskills=\"ngModel\" required [readonly]=\"readOnlyForm == 'R'\"></textarea>\n            <div class=\"invalid-feedback\">\n              Required Skills are mandatory\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"top5ById?.properties?.length > 0\">\n        <div class=\"col-md-12 mb-5\" *ngIf=\"top5ById.properties.length > 0\">\n          <div class=\"form-group\">\n            <label>{{ constantProperties.ADD_PROP }}</label>\n            <div class=\"row\" *ngFor=\"let ap of top5ById.properties; let i = index\">\n              <div class=\"col-md-5 pt-3\">\n                <input type=\"text\" [(ngModel)]=\"ap.name\" class=\"form-control\" name=\"addPropName{{ i }}\"\n                  [readonly]=\"readOnlyForm == 'R'\" />\n              </div>\n              <div class=\"col-md-5 pt-3\">\n                <input type=\"text\" [(ngModel)]=\"ap.value\" class=\"form-control\" name=\"addPropValue{{ i }}\"\n                  [readonly]=\"readOnlyForm == 'R'\" />\n              </div>\n              <!-- <div class=\"col-md-2 pt-3\">\n                          <i\n                            class=\"fa fa-minus\"\n                            aria-hidden=\"true\"\n                            id=\"decrease\"\n                            *ngIf=\"enableButtonType != 'E'\"\n                            (click)=\"propertiesListIncrement($event.target, i)\"\n                          ></i>\n                        </div> -->\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"form-group\">\n            <label>{{ constantProperties.TH_DESC }}</label>\n            <angular-editor [(ngModel)]=\"top5ById.description\" name=\"description\" [config]=\"config\">\n            </angular-editor>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <!-- <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteCoCHRecord()\">Ok</button> -->\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">\n      {{ constantProperties.CLOSE }}\n    </button>\n  </div>\n</ng-template>\n<ng-template #multipleQSU let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">{{ constantProperties.DASHBOARD_QSU }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <h2>Choose Status to change:</h2>\n      </div>\n      <div class=\"col-md-6\">\n        <select class=\"form-control form-control-lg\" style=\"width:200px\" name=\"cast\" [(ngModel)]=\"statusToChange\">\n          <option selected hidden>status</option>\n          <option *ngFor=\"let casl of caStatusList?.list\" [ngValue]=\"casl.code\">\n            {{ casl.description }}\n          </option>\n        </select>\n      </div>\n    </div>\n    <div class=\"table-scroll pt-3\">\n      <table class=\"table table-sm table-striped\">\n        <thead>\n          <tr>\n            <th>{{ constantProperties.CLIENT }}</th>\n            <th>{{ constantProperties.CON }}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let aca of selectedCAList; let i = index\">\n            <td>{{ aca.clientName }}</td>\n            <td>{{ aca.consultantName }}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"updateCAStatus(selectedCAList, statusToChange, 'popup')\">\n      Update\n    </button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">\n      Close\n    </button>\n  </div>\n</ng-template>\n<!-- </div>\n    <div class=\"row\">\n      <div class=\"col-xl-3 col-lg-6\">\n        <app-stat [bgClass]=\"'primary'\" [icon]=\"'fa-comments'\" [count]=\"26\" [label]=\"'New Comments!'\"></app-stat>\n      </div>\n      <div class=\"col-xl-3 col-lg-6\">\n        <app-stat [bgClass]=\"'warning'\" [icon]=\"'fa-tasks'\" [count]=\"12\" [label]=\"'New task!'\"></app-stat>\n      </div>\n      <div class=\"col-xl-3 col-lg-6\">\n        <app-stat [bgClass]=\"'success'\" [icon]=\"'fa-shopping-cart'\" [count]=\"124\" [label]=\"'New Orders!'\"></app-stat>\n      </div>\n      <div class=\"col-xl-3 col-lg-6\">\n        <app-stat [bgClass]=\"'danger'\" [icon]=\"'fa-support'\" [count]=\"13\" [label]=\"'New Tickets!'\"></app-stat>\n      </div>\n    </div>\n    <hr />\n    <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}\n    </ngb-alert>\n    <hr />\n    <div class=\"row\">\n      <div class=\"col-lg-8\">\n        <div class=\"card card-default\">\n          <div class=\"card-header\">\n            <i class=\"fa fa-clock-o fa-fw\"></i> Responsive Timeline\n          </div>\n          <app-timeline></app-timeline>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"card card-default mb-3\">\n          <div class=\"card-header\">\n            <i class=\"fa fa-bell fa-fw\"></i> Notifications card\n          </div>\n          <app-notification></app-notification>\n        </div>\n  \n        <app-chat></app-chat>\n      </div>\n    </div> -->\n"

/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-custom-scrollbar {\n  position: relative;\n  overflow: auto; }\n\n.table-wrapper-scroll-y {\n  display: block; }\n\n.table-scroll {\n  height: 10em;\n  overflow-y: scroll; }\n\n.ht-30 {\n  height: 30em !important; }\n\n.text-clr-white {\n  color: white; }\n\n.word-break {\n  word-break: break-all; }\n\n.padding-top {\n  padding-top: 60px; }\n\n.link:hover {\n  cursor: pointer; }\n\n.link-style:hover {\n  text-decoration: underline; }\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: #c1c1c1; }\n\n.table-overflow {\n  position: relative;\n  height: 458px;\n  overflow-y: scroll; }\n\n.table-overflow-l {\n  position: relative;\n  height: 458px; }\n\n.table-fixed thead,\n.table-fixed tbody,\n.table-fixed tr,\n.table-fixed td,\n.table-fixed th {\n  display: block; }\n\n.fa-position {\n  position: absolute;\n  margin-left: 158px;\n  margin-top: -18px;\n  color: #2af72a; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9EOlxcY2NwdHRvb2wuZ2l0XFx0cnVua1xcY2NwdC1wYXJlbnRcXGNjcHQtd2ViXFxzcmNcXG1haW5cXHdlYi9zcmNcXGFwcFxcbGF5b3V0XFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFrQjtFQUNsQixlQUFjLEVBQ2Y7O0FBQ0Q7RUFDRSxlQUFjLEVBQ2Y7O0FBQ0Q7RUFDRSxhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0Usd0JBQXVCLEVBQ3hCOztBQUNEO0VBQ0UsYUFBWSxFQUNiOztBQUNEO0VBQ0Usc0JBQXFCLEVBQ3RCOztBQUNEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFDRSwyQkFBMEIsRUFDM0I7O0FBQ0Q7RUFFSSwwQkFBeUIsRUFDMUI7O0FBRUg7RUFDRSxtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixjQUFhLEVBQ2Q7O0FBRUQ7Ozs7O0VBS0UsZUFBYyxFQUNmOztBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixrQkFBaUI7RUFDakIsZUFBYyxFQUNmIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktY3VzdG9tLXNjcm9sbGJhciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi50YWJsZS13cmFwcGVyLXNjcm9sbC15IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4udGFibGUtc2Nyb2xsIHtcclxuICBoZWlnaHQ6IDEwZW07XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcbi5odC0zMCB7XHJcbiAgaGVpZ2h0OiAzMGVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHQtY2xyLXdoaXRlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLndvcmQtYnJlYWsge1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxufVxyXG4ucGFkZGluZy10b3Age1xyXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xyXG59XHJcbi5saW5rOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmxpbmstc3R5bGU6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbi50YWJsZS1zdHJpcGVkIHtcclxuICB0Ym9keSB0cjpudGgtb2YtdHlwZShvZGQpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMWMxYzE7XHJcbiAgfVxyXG59XHJcbi50YWJsZS1vdmVyZmxvdyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNDU4cHg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcbi50YWJsZS1vdmVyZmxvdy1sIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA0NThweDtcclxufVxyXG5cclxuLnRhYmxlLWZpeGVkIHRoZWFkLFxyXG4udGFibGUtZml4ZWQgdGJvZHksXHJcbi50YWJsZS1maXhlZCB0cixcclxuLnRhYmxlLWZpeGVkIHRkLFxyXG4udGFibGUtZml4ZWQgdGgge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5mYS1wb3NpdGlvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNThweDtcclxuICBtYXJnaW4tdG9wOiAtMThweDtcclxuICBjb2xvcjogIzJhZjcyYTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.ts ***!
  \*********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/http.service */ "./src/app/shared/services/http.service.ts");
/* harmony import */ var src_app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/toastr.service */ "./src/app/shared/services/toastr.service.ts");
/* harmony import */ var _components_constants_url_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/constants/url-constants */ "./src/app/layout/components/constants/url-constants.ts");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_constants_properties__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/constants/properties */ "./src/app/layout/components/constants/properties.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(http, router, toastr, modalService) {
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.modalService = modalService;
        this.alerts = [];
        this.sliders = [];
        //public noOfDays: any = { 'Day': 1, 'Week': 7, 'Month': 30, 'Year': 365 };
        this.noOfDays = [
            { key: "Day", value: 1 },
            { key: "Week", value: 7 },
            { key: "Month", value: 30 },
            { key: "Year", value: 365 }
        ];
        this.ccptReportCLCH = [];
        this.ccptReportCOCH = [];
        this.ccptReportCC = {};
        this.top5ById = {};
        this.openCP = [];
        this.dyingCP = [];
        this.caByStatusList = [];
        this.activeCA = [];
        this.activeCAById = [];
        this.cochByIdList = [];
        this.clchByIdList = [];
        this.interviewsToday = [];
        this.cpEmptyPostings = [];
        this.urlConstants = new _components_constants_url_constants__WEBPACK_IMPORTED_MODULE_3__["URLConstants"]();
        this.constantProperties = new _components_constants_properties__WEBPACK_IMPORTED_MODULE_8__["Properties"]();
        this.rpChoosenDays = 7;
        this.cochChoosenDays = 7;
        this.clchChoosenDays = 7;
        this.listReturned = false;
        this.isCollapsed = true;
        this.selectedCAList = [];
        this.showLeftTable = this.constantProperties.DASHBOARD_ITW;
        this.showRightTable = this.constantProperties.DASHBOARD_PT;
        this.selectedRecrd = 0;
        this.closeResult = "";
        this.config = {
            editable: true,
            spellcheck: true,
            height: "15rem",
            minHeight: "5rem",
            translate: "no"
        };
        this.getAllCAStatus = this.http.get(this.urlConstants.CASGetAll + "0&pageSize=100&sortBy=id");
        this.getCAStatUPdate = this.http.get(this.urlConstants.DashboardCAStat);
        this.getCPEmptyPostings = this.http.get(this.urlConstants.CPEmptyPostings);
        // public getAllOpenCP = this.http.get(this.urlConstants.ReportingGetAllOpenCP);
        // public getAllActiveCA = this.http.get(this.urlConstants.ReportingGetAllActiveCA);
        // public getAllInterviewsToday = this.http.get(this.urlConstants.ReportingGetAllInterviewsToday);
        // public getAllDyingCP = this.http.get(this.urlConstants.ReportingDyingCp);
        this.getAllCAByStatus = this.http.get(this.urlConstants.ReportingGetAllCAByStatus);
        this.getAllDBContent = this.http.get(this.urlConstants.GetAllDashboard);
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                            steps: 2,
                            stepValue: 2
                        }
                    }
                ],
                yAxes: [
                    {
                        barPercentage: 1,
                        ticks: {
                            fontSize: 10,
                            callback: function (label, index, labels) {
                                if (/\-/.test(label)) {
                                    return label.split(/\-/);
                                }
                                else {
                                    return label;
                                }
                            }
                        }
                    }
                ]
            }
        };
        this.barChartLabels = [];
        this.barChartCAByStautsLabels = [];
        this.barChartType = "horizontalBar";
        this.barChartLegend = false;
        this.stackBarChartLegend = true;
        this.barChartActiveCAData = [
            { data: [], label: "Active Client Applications", cpIds: [] }
        ];
        this.barChartColors = [{ backgroundColor: "#343a40" }];
        this.stackbarChartColors = [
            { backgroundColor: "#f88e90" },
            { backgroundColor: "#f88e90" },
            { backgroundColor: "#f88e90" },
            { backgroundColor: "#f88e90" },
            { backgroundColor: "#ffe29a" },
            { backgroundColor: "#ffe29a" },
            { backgroundColor: "#ffe29a" },
            { backgroundColor: "#ffe29a" },
            { backgroundColor: "#46bfbd" }
        ];
        this.barChartCAByStatusData = [];
        this.today = new Date().toISOString().split("T")[0]; //2019-12-05
    }
    DashboardComponent.prototype.ngOnInit = function () {
        /*Autheticate user with the token */
        if (!this.http.isAuthenticate()) {
            this.router.navigate(["/login"]);
        }
        this.init();
    };
    DashboardComponent.prototype.init = function () {
        var _this = this;
        this.spinner(false);
        this.getAllDBContent.subscribe(function (resp) {
            var temp = resp;
            _this.interviewsToday = temp.interviewSummaryStatistics;
            _this.openCP = temp.openClientPositions;
            _this.dyingCP = temp.dyingClientPositions;
            _this.caStat = temp.dashboardCAStatistics;
            _this.paymentTrack = temp.paymentStatistics;
            // this.setCAByStatusBarData(this.caByStatusList);
            _this.spinner(true);
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(this.getAllCAStatus, this.getCPEmptyPostings).subscribe(function (listofrecords) {
            _this.caStatusList = listofrecords[0];
            _this.cpEmptyPostings = listofrecords[1];
            _this.setActiveCPBarData();
        });
        this.top5ById.properties = [];
    };
    DashboardComponent.prototype.getGraphData = function () {
        var _this = this;
        if (this.caByStatusList.length == 0) {
            this.getAllCAByStatus.subscribe(function (resp) {
                _this.caByStatusList = resp;
                _this.setCAByStatusBarData(_this.caByStatusList);
                _this.selectRightTable(_this.constantProperties.DASHBOARD_CAS);
            });
        }
        else if (this.caByStatusList.length != 0) {
            this.caByStatusList = [];
            this.selectRightTable(this.constantProperties.DASHBOARD_CAS);
        }
    };
    DashboardComponent.prototype.spinner = function (isSpinner) {
        this.listReturned = isSpinner;
    };
    DashboardComponent.prototype.getAllActiveCAById = function (recrd) {
        var _this = this;
        this.spinner(false);
        this.activeCAById = [];
        this.http
            .get(this.urlConstants.ReportingGetAllActiveCAById + recrd)
            .subscribe(function (resp) {
            _this.activeCAById = resp;
            _this.spinner(true);
        });
    };
    DashboardComponent.prototype.getTop5ById = function (recrd) {
        var _this = this;
        this.spinner(false);
        this.http.get(this.urlConstants.CPGetById + recrd).subscribe(function (resp) {
            _this.top5ById = resp;
            _this.spinner(true);
        });
    };
    /**
     * @param
     * 1) content consists the modal instance
     * 2) Selected contains the code of selected row
     */
    DashboardComponent.prototype.open = function (content, selected, type) {
        var _this = this;
        if (selected) {
            this.selectedRecrd = selected;
        }
        this.modalRef = this.modalService.open(content, {
            size: "lg",
            backdrop: "static"
        });
        this.modalRef.result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
        if (type == "activeClientApplication") {
            this.getAllActiveCAById(this.selectedRecrd);
        }
        if (type == "latestCPTop5") {
            this.getTop5ById(this.selectedRecrd);
        }
    };
    DashboardComponent.prototype.close = function () {
        this.modalRef.close();
    };
    DashboardComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].ESC) {
            return "by pressing ESC";
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].BACKDROP_CLICK) {
            return "by clicking on a backdrop";
        }
        else {
            return "with: " + reason;
        }
    };
    /**
     * Looping and assigning the count to display on bar UI
     * Store cpId and pass when clicked on the bar
     */
    DashboardComponent.prototype.setActiveCPBarData = function () {
        var _this = this;
        this.activeCA.forEach(function (ca) {
            _this.barChartLabels.push(ca.generatedCode);
            _this.barChartActiveCAData[0].data.push("" + ca.count);
            _this.barChartActiveCAData[0].cpIds.push("" + ca.cpId);
        });
        this.chartHeight = 55 * this.activeCA.length;
    };
    /**
     * data list of client applications by status
     */
    DashboardComponent.prototype.setCAByStatusBarData = function (data) {
        var _this = this;
        this.barChartCAByStatusData = [];
        var CAStatusOder = [];
        this.caStatusList.list.filter(function (csl) {
            for (var i = 1; i <= _this.caStatusList.list.length; i++) {
                if (csl.ordr == i) {
                    CAStatusOder[i - 1] = csl.description;
                }
            }
        });
        var uniqueClientName = data
            .map(function (item) { return item.clientName; })
            .filter(function (value, index, self) { return self.indexOf(value) === index; });
        this.stackChartHeight = uniqueClientName.length * 60;
        var uniqueStatus = [];
        var tempUniqueStatus = data
            .map(function (item) { return item.statusCode; })
            .filter(function (value, index, self) { return self.indexOf(value) === index; });
        if (CAStatusOder.length) {
            CAStatusOder.forEach(function (cp) {
                tempUniqueStatus.forEach(function (tus) {
                    if (cp === tus) {
                        uniqueStatus.push(tus);
                    }
                });
            });
        }
        if (uniqueStatus.length) {
            uniqueStatus.forEach(function (us) {
                var temp = { data: [], label: "", stack: "a" };
                uniqueClientName.forEach(function (ucn) {
                    var unique = data.filter(function (dt) { return dt.clientName == ucn && dt.statusCode == us; });
                    temp.data.push(unique[0].count);
                });
                _this.barChartCAByStautsLabels = uniqueClientName;
                _this.barChartCAByStatusData.push(temp);
            });
        }
        if (this.barChartCAByStatusData.length) {
            for (var i = 0; i < this.barChartCAByStatusData.length; i++) {
                this.barChartCAByStatusData[i].label = uniqueStatus[i];
            }
        }
    };
    /**
     * @param event eventdata
     * Click on bar chart and get the id of respective bar
     */
    DashboardComponent.prototype.chartClicked = function (event) {
        var index = event.active[0]._index;
        this.open(this.contentACA, this.barChartActiveCAData[0].cpIds[index], "activeClientApplication");
    };
    DashboardComponent.prototype.updateCAStatus = function (clientApps, status, type) {
        var _this = this;
        var idsToUpdate = [];
        if (type == "table") {
            idsToUpdate.push(clientApps.id);
        }
        if (type == "popup") {
            clientApps.forEach(function (ca) {
                idsToUpdate.push(ca.id);
            });
        }
        this.http
            .update(idsToUpdate, this.urlConstants.CAStatusUpdate + status)
            .subscribe(function (resp) {
            idsToUpdate = [];
            if (type === "table") {
                _this.updateIndex = clientApps.id;
                setTimeout(function () {
                    _this.updateIndex = 0;
                    _this.reload();
                }, 1000);
            }
            if (type === "popup") {
                _this.reload();
                _this.close();
                _this.statusToChange = "";
                _this.selectedCAList = [];
                _this.toastr.success("Status changed successfully", _this.constantProperties.CA);
            }
        });
    };
    DashboardComponent.prototype.reload = function () {
        var _this = this;
        this.getCAStatUPdate.subscribe(function (resp) {
            _this.caStat = resp;
        });
    };
    // public updateBarChart() {
    //   let temp1 = this.http.get(this.urlConstants.ReportingGetAllCAByStatus).subscribe(resp => {
    //     this.caByStatusList = resp as any;
    //     this.barChartCAByStatusData = [];
    //     this.setCAByStatusBarData(this.caByStatusList);
    //   });
    // }
    DashboardComponent.prototype.selectLeftTable = function (value) {
        if (this.showLeftTable != value) {
            this.showLeftTable = value;
        }
        else {
            this.showLeftTable = "";
        }
    };
    DashboardComponent.prototype.selectRightTable = function (value) {
        if (this.showRightTable != value) {
            this.showRightTable = value;
        }
        else {
            this.showRightTable = "";
        }
    };
    DashboardComponent.prototype.onSelectApplication = function (event, ca) {
        var _this = this;
        if (event.target.checked) {
            this.selectedCAList.push(ca);
        }
        else {
            this.selectedCAList.forEach(function (sca) {
                if (ca.id === sca.id)
                    _this.selectedCAList.splice(_this.selectedCAList.indexOf(sca), 1);
            });
            /* for (let i = 0; i < this.selectedCAList.length; i++) {
              if (ca.id == this.selectedCAList[i].id) {
                this.selectedCAList.splice(i, 1);
              }
            }*/
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("contentACA"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], DashboardComponent.prototype, "contentACA", void 0);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-dashboard",
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/layout/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/layout/dashboard/dashboard.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_4__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            src_app_shared_services_toastr_service__WEBPACK_IMPORTED_MODULE_2__["ToastrCustomService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.module.ts ***!
  \******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/layout/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/layout/dashboard/dashboard.component.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ "./src/app/layout/dashboard/components/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_6__["StatModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_8__["AngularEditorModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_9__["ChartsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_6__["ActionListModule"]
            ],
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]
            ],
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                _components__WEBPACK_IMPORTED_MODULE_5__["TimelineComponent"],
                _components__WEBPACK_IMPORTED_MODULE_5__["NotificationComponent"],
                _components__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map