(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["client-position-client-position-module"],{

/***/ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js ***!
  \*******************************************************************************/
/*! exports provided: MultiSelectComponent, NgMultiSelectDropDownModule, ɵb, ɵc, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelectComponent", function() { return MultiSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMultiSelectDropDownModule", function() { return NgMultiSelectDropDownModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return ClickOutsideDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return ListFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DROPDOWN_CONTROL_VALUE_ACCESSOR; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ListItem = /** @class */ (function () {
    function ListItem(source) {
        if (typeof source === 'string') {
            this.id = this.text = source;
        }
        if (typeof source === 'object') {
            this.id = source.id;
            this.text = source.text;
        }
    }
    return ListItem;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ DROPDOWN_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return MultiSelectComponent; }),
    multi: true
};
var /** @type {?} */ noop = function () { };
var MultiSelectComponent = /** @class */ (function () {
    function MultiSelectComponent(cdr) {
        this.cdr = cdr;
        this._data = [];
        this.selectedItems = [];
        this.isDropdownOpen = true;
        this._placeholder = 'Select';
        this.filter = new ListItem(this.data);
        this.defaultSettings = {
            singleSelection: false,
            idField: 'id',
            textField: 'text',
            enableCheckAll: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: false,
            limitSelection: -1,
            clearSearchFilter: true,
            maxHeight: 197,
            itemsShowLimit: 999999999999,
            searchPlaceholderText: 'Search',
            noDataAvailablePlaceholderText: 'No data available',
            closeDropDownOnSelection: false,
            showSelectedItemsAtTop: false,
            defaultOpen: false
        };
        this.disabled = false;
        this.onFilterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDropDownClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDeSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    Object.defineProperty(MultiSelectComponent.prototype, "placeholder", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._placeholder = value;
            }
            else {
                this._placeholder = 'Select';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiSelectComponent.prototype, "settings", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._settings = Object.assign(this.defaultSettings, value);
            }
            else {
                this._settings = Object.assign(this.defaultSettings);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiSelectComponent.prototype, "data", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            if (!value) {
                this._data = [];
            }
            else {
                // const _items = value.filter((item: any) => {
                //   if (typeof item === 'string' || (typeof item === 'object' && item && item[this._settings.idField] && item[this._settings.textField])) {
                //     return item;
                //   }
                // });
                this._data = value.map(function (item) {
                    return typeof item === 'string'
                        ? new ListItem(item)
                        : new ListItem({
                            id: item[_this._settings.idField],
                            text: item[_this._settings.textField]
                        });
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} $event
     * @return {?}
     */
    MultiSelectComponent.prototype.onFilterTextChange = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.onFilterChange.emit($event);
    };
    /**
     * @param {?} $event
     * @param {?} item
     * @return {?}
     */
    MultiSelectComponent.prototype.onItemClick = /**
     * @param {?} $event
     * @param {?} item
     * @return {?}
     */
    function ($event, item) {
        if (this.disabled) {
            return false;
        }
        var /** @type {?} */ found = this.isSelected(item);
        var /** @type {?} */ allowAdd = this._settings.limitSelection === -1 ||
            (this._settings.limitSelection > 0 &&
                this.selectedItems.length < this._settings.limitSelection);
        if (!found) {
            if (allowAdd) {
                this.addSelected(item);
            }
        }
        else {
            this.removeSelected(item);
        }
        if (this._settings.singleSelection &&
            this._settings.closeDropDownOnSelection) {
            this.closeDropdown();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MultiSelectComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (value !== undefined && value !== null && value.length > 0) {
            if (this._settings.singleSelection) {
                try {
                    if (value.length >= 1) {
                        var /** @type {?} */ firstItem = value[0];
                        this.selectedItems = [
                            typeof firstItem === 'string'
                                ? new ListItem(firstItem)
                                : new ListItem({
                                    id: firstItem[this._settings.idField],
                                    text: firstItem[this._settings.textField]
                                })
                        ];
                    }
                }
                catch (/** @type {?} */ e) {
                    // console.error(e.body.msg);
                }
            }
            else {
                var /** @type {?} */ _data = value.map(function (item) {
                    return typeof item === 'string'
                        ? new ListItem(item)
                        : new ListItem({
                            id: item[_this._settings.idField],
                            text: item[_this._settings.textField]
                        });
                });
                if (this._settings.limitSelection > 0) {
                    this.selectedItems = _data.splice(0, this._settings.limitSelection);
                }
                else {
                    this.selectedItems = _data;
                }
            }
        }
        else {
            this.selectedItems = [];
        }
        this.onChangeCallback(value);
    };
    // From ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    MultiSelectComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeCallback = fn;
    };
    // From ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    MultiSelectComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @return {?}
     */
    MultiSelectComponent.prototype.onTouched = /**
     * @return {?}
     */
    function () {
        this.closeDropdown();
        this.onTouchedCallback();
    };
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    MultiSelectComponent.prototype.trackByFn = /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        return item.id;
    };
    /**
     * @param {?} clickedItem
     * @return {?}
     */
    MultiSelectComponent.prototype.isSelected = /**
     * @param {?} clickedItem
     * @return {?}
     */
    function (clickedItem) {
        var /** @type {?} */ found = false;
        this.selectedItems.forEach(function (item) {
            if (clickedItem.id === item.id) {
                found = true;
            }
        });
        return found;
    };
    /**
     * @return {?}
     */
    MultiSelectComponent.prototype.isLimitSelectionReached = /**
     * @return {?}
     */
    function () {
        return this._settings.limitSelection === this.selectedItems.length;
    };
    /**
     * @return {?}
     */
    MultiSelectComponent.prototype.isAllItemsSelected = /**
     * @return {?}
     */
    function () {
        return this._data.length === this.selectedItems.length;
    };
    /**
     * @return {?}
     */
    MultiSelectComponent.prototype.showButton = /**
     * @return {?}
     */
    function () {
        if (!this._settings.singleSelection) {
            if (this._settings.limitSelection > 0) {
                return false;
            }
            // this._settings.enableCheckAll = this._settings.limitSelection === -1 ? true : false;
            return true; // !this._settings.singleSelection && this._settings.enableCheckAll && this._data.length > 0;
        }
        else {
            // should be disabled in single selection mode
            return false;
        }
    };
    /**
     * @return {?}
     */
    MultiSelectComponent.prototype.itemShowRemaining = /**
     * @return {?}
     */
    function () {
        return this.selectedItems.length - this._settings.itemsShowLimit;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    MultiSelectComponent.prototype.addSelected = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (this._settings.singleSelection) {
            this.selectedItems = [];
            this.selectedItems.push(item);
        }
        else {
            this.selectedItems.push(item);
        }
        this.onChangeCallback(this.emittedValue(this.selectedItems));
        this.onSelect.emit(this.emittedValue(item));
    };
    /**
     * @param {?} itemSel
     * @return {?}
     */
    MultiSelectComponent.prototype.removeSelected = /**
     * @param {?} itemSel
     * @return {?}
     */
    function (itemSel) {
        var _this = this;
        this.selectedItems.forEach(function (item) {
            if (itemSel.id === item.id) {
                _this.selectedItems.splice(_this.selectedItems.indexOf(item), 1);
            }
        });
        this.onChangeCallback(this.emittedValue(this.selectedItems));
        this.onDeSelect.emit(this.emittedValue(itemSel));
    };
    /**
     * @param {?} val
     * @return {?}
     */
    MultiSelectComponent.prototype.emittedValue = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        var _this = this;
        var /** @type {?} */ selected = [];
        if (Array.isArray(val)) {
            val.map(function (item) {
                if (item.id === item.text) {
                    selected.push(item.text);
                }
                else {
                    selected.push(_this.objectify(item));
                }
            });
        }
        else {
            if (val) {
                if (val.id === val.text) {
                    return val.text;
                }
                else {
                    return this.objectify(val);
                }
            }
        }
        return selected;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    MultiSelectComponent.prototype.objectify = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        var /** @type {?} */ obj = {};
        obj[this._settings.idField] = val.id;
        obj[this._settings.textField] = val.text;
        return obj;
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    MultiSelectComponent.prototype.toggleDropdown = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.preventDefault();
        if (this.disabled && this._settings.singleSelection) {
            return;
        }
        this._settings.defaultOpen = !this._settings.defaultOpen;
        if (!this._settings.defaultOpen) {
            this.onDropDownClose.emit();
        }
    };
    /**
     * @return {?}
     */
    MultiSelectComponent.prototype.closeDropdown = /**
     * @return {?}
     */
    function () {
        this._settings.defaultOpen = false;
        // clear search text
        if (this._settings.clearSearchFilter) {
            this.filter.text = '';
        }
        this.onDropDownClose.emit();
    };
    /**
     * @return {?}
     */
    MultiSelectComponent.prototype.toggleSelectAll = /**
     * @return {?}
     */
    function () {
        if (this.disabled) {
            return false;
        }
        if (!this.isAllItemsSelected()) {
            this.selectedItems = this._data.slice();
            this.onSelectAll.emit(this.emittedValue(this.selectedItems));
        }
        else {
            this.selectedItems = [];
            this.onDeSelectAll.emit(this.emittedValue(this.selectedItems));
        }
        this.onChangeCallback(this.emittedValue(this.selectedItems));
    };
    MultiSelectComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng-multiselect-dropdown',
                    template: "<div tabindex=\"=0\" (blur)=\"onTouched()\" class=\"multiselect-dropdown\" (clickOutside)=\"closeDropdown()\">\n  <div [class.disabled]=\"disabled\">\n    <span tabindex=\"-1\" class=\"dropdown-btn\" (click)=\"toggleDropdown($event)\">\n      <span *ngIf=\"selectedItems.length == 0\">{{_placeholder}}</span>\n      <span class=\"selected-item\" *ngFor=\"let item of selectedItems;trackBy: trackByFn;let k = index\" [hidden]=\"k > _settings.itemsShowLimit-1\">\n        {{item.text}}\n        <a style=\"padding-top:2px;padding-left:2px;color:white\" (click)=\"onItemClick($event,item)\">x</a>\n      </span>\n      <span style=\"float:right !important;padding-right:4px\">\n        <span style=\"padding-right: 6px;\" *ngIf=\"itemShowRemaining()>0\">+{{itemShowRemaining()}}</span>\n        <span [ngClass]=\"_settings.defaultOpen ? 'dropdown-up' : 'dropdown-down'\"></span>\n      </span>\n    </span>\n  </div>\n  <div class=\"dropdown-list\" [hidden]=\"!_settings.defaultOpen\">\n    <ul class=\"item1\">\n      <li (click)=\"toggleSelectAll()\" *ngIf=\"_data.length > 0 && !_settings.singleSelection && _settings.enableCheckAll && _settings.limitSelection===-1\" class=\"multiselect-item-checkbox\" style=\"border-bottom: 1px solid #ccc;padding:10px\">\n        <input type=\"checkbox\" aria-label=\"multiselect-select-all\" [checked]=\"isAllItemsSelected()\" [disabled]=\"disabled || isLimitSelectionReached()\" />\n        <div>{{!isAllItemsSelected() ? _settings.selectAllText : _settings.unSelectAllText}}</div>\n      </li>\n      <li class=\"filter-textbox\" *ngIf=\"_data.length>0 && _settings.allowSearchFilter\">\n        <input type=\"text\" aria-label=\"multiselect-search\" [readOnly]=\"disabled\" [placeholder]=\"_settings.searchPlaceholderText\" [(ngModel)]=\"filter.text\" (ngModelChange)=\"onFilterTextChange($event)\">\n      </li>\n    </ul>\n    <ul class=\"item2\" [style.maxHeight]=\"_settings.maxHeight+'px'\">\n      <li *ngFor=\"let item of _data | ng2ListFilter:filter; let i = index;\" (click)=\"onItemClick($event,item)\" class=\"multiselect-item-checkbox\">\n        <input type=\"checkbox\" aria-label=\"multiselect-item\" [checked]=\"isSelected(item)\" [disabled]=\"disabled || (isLimitSelectionReached() && !isSelected(item))\" />\n        <div>{{item.text}}</div>\n      </li>\n      <li class='no-data' *ngIf=\"_data.length == 0\">\n        <h5>{{_settings.noDataAvailablePlaceholderText}}</h5>\n      </li>\n    </ul>\n  </div>\n</div>",
                    styles: [".multiselect-dropdown{position:relative;width:100%;font-size:inherit;font-family:inherit}.multiselect-dropdown .dropdown-btn{display:inline-block;border:1px solid #adadad;width:100%;padding:6px 12px;margin-bottom:0;font-weight:400;line-height:1.52857143;text-align:left;vertical-align:middle;cursor:pointer;background-image:none;border-radius:4px}.multiselect-dropdown .dropdown-btn .selected-item{border:1px solid #337ab7;margin-right:4px;background:#337ab7;padding:0 5px;color:#fff;border-radius:2px;float:left}.multiselect-dropdown .dropdown-btn .selected-item a{text-decoration:none}.multiselect-dropdown .dropdown-btn .selected-item:hover{box-shadow:1px 1px #959595}.multiselect-dropdown .dropdown-btn .dropdown-down{display:inline-block;top:10px;width:0;height:0;border-top:10px solid #adadad;border-left:10px solid transparent;border-right:10px solid transparent}.multiselect-dropdown .dropdown-btn .dropdown-up{display:inline-block;width:0;height:0;border-bottom:10px solid #adadad;border-left:10px solid transparent;border-right:10px solid transparent}.multiselect-dropdown .disabled>span{background-color:#eceeef}.dropdown-list{position:absolute;padding-top:6px;width:100%;z-index:9999;border:1px solid #ccc;border-radius:3px;background:#fff;margin-top:10px;box-shadow:0 1px 5px #959595}.dropdown-list ul{padding:0;list-style:none;overflow:auto;margin:0}.dropdown-list li{padding:6px 10px;cursor:pointer;text-align:left}.dropdown-list .filter-textbox{border-bottom:1px solid #ccc;position:relative;padding:10px}.dropdown-list .filter-textbox input{border:0;width:100%;padding:0 0 0 26px}.dropdown-list .filter-textbox input:focus{outline:0}.multiselect-item-checkbox input[type=checkbox]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.multiselect-item-checkbox input[type=checkbox]:focus+div:before,.multiselect-item-checkbox input[type=checkbox]:hover+div:before{border-color:#337ab7;background-color:#f2f2f2}.multiselect-item-checkbox input[type=checkbox]:active+div:before{transition-duration:0s}.multiselect-item-checkbox input[type=checkbox]+div{position:relative;padding-left:2em;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;margin:0;color:#000}.multiselect-item-checkbox input[type=checkbox]+div:before{box-sizing:content-box;content:'';color:#337ab7;position:absolute;top:50%;left:0;width:14px;height:14px;margin-top:-9px;border:2px solid #337ab7;text-align:center;transition:all .4s ease}.multiselect-item-checkbox input[type=checkbox]+div:after{box-sizing:content-box;content:'';position:absolute;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:50%;transform-origin:50%;transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;background-color:transparent;top:50%;left:4px;width:8px;height:3px;margin-top:-4px;border-style:solid;border-color:#fff;border-width:0 0 3px 3px;-o-border-image:none;border-image:none;-webkit-transform:rotate(-45deg) scale(0);transform:rotate(-45deg) scale(0)}.multiselect-item-checkbox input[type=checkbox]:disabled+div:before{border-color:#ccc}.multiselect-item-checkbox input[type=checkbox]:disabled:focus+div:before .multiselect-item-checkbox input[type=checkbox]:disabled:hover+div:before{background-color:inherit}.multiselect-item-checkbox input[type=checkbox]:disabled:checked+div:before{background-color:#ccc}.multiselect-item-checkbox input[type=checkbox]:checked+div:after{content:'';transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;-webkit-transform:rotate(-45deg) scale(1);transform:rotate(-45deg) scale(1)}.multiselect-item-checkbox input[type=checkbox]:checked+div:before{-webkit-animation:.2s ease-in borderscale;animation:.2s ease-in borderscale;background:#337ab7}@-webkit-keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}@keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}"],
                    providers: [DROPDOWN_CONTROL_VALUE_ACCESSOR],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                },] },
    ];
    /** @nocollapse */
    MultiSelectComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    MultiSelectComponent.propDecorators = {
        "placeholder": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "settings": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "data": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "onFilterChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onFilterChange',] },],
        "onDropDownClose": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onDropDownClose',] },],
        "onSelect": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onSelect',] },],
        "onDeSelect": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onDeSelect',] },],
        "onSelectAll": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onSelectAll',] },],
        "onDeSelectAll": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onDeSelectAll',] },],
        "onTouched": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['blur',] },],
    };
    return MultiSelectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} event
     * @param {?} targetElement
     * @return {?}
     */
    ClickOutsideDirective.prototype.onClick = /**
     * @param {?} event
     * @param {?} targetElement
     * @return {?}
     */
    function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var /** @type {?} */ clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    };
    ClickOutsideDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[clickOutside]'
                },] },
    ];
    /** @nocollapse */
    ClickOutsideDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    ClickOutsideDirective.propDecorators = {
        "clickOutside": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:click', ['$event', '$event.target'],] },],
    };
    return ClickOutsideDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ListFilterPipe = /** @class */ (function () {
    function ListFilterPipe() {
    }
    /**
     * @param {?} items
     * @param {?} filter
     * @return {?}
     */
    ListFilterPipe.prototype.transform = /**
     * @param {?} items
     * @param {?} filter
     * @return {?}
     */
    function (items, filter) {
        var _this = this;
        if (!items || !filter) {
            return items;
        }
        return items.filter(function (item) { return _this.applyFilter(item, filter); });
    };
    /**
     * @param {?} item
     * @param {?} filter
     * @return {?}
     */
    ListFilterPipe.prototype.applyFilter = /**
     * @param {?} item
     * @param {?} filter
     * @return {?}
     */
    function (item, filter) {
        return !(filter.text && item.text && item.text.toLowerCase().indexOf(filter.text.toLowerCase()) === -1);
    };
    ListFilterPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'ng2ListFilter',
                    pure: false
                },] },
    ];
    return ListFilterPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgMultiSelectDropDownModule = /** @class */ (function () {
    function NgMultiSelectDropDownModule() {
    }
    /**
     * @return {?}
     */
    NgMultiSelectDropDownModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: NgMultiSelectDropDownModule
        };
    };
    NgMultiSelectDropDownModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]],
                    declarations: [MultiSelectComponent, ClickOutsideDirective, ListFilterPipe],
                    exports: [MultiSelectComponent]
                },] },
    ];
    return NgMultiSelectDropDownModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbXVsdGlzZWxlY3QtZHJvcGRvd24uanMubWFwIiwic291cmNlcyI6WyJuZzovL25nLW11bHRpc2VsZWN0LWRyb3Bkb3duL211bHRpc2VsZWN0Lm1vZGVsLnRzIiwibmc6Ly9uZy1tdWx0aXNlbGVjdC1kcm9wZG93bi9tdWx0aXNlbGVjdC5jb21wb25lbnQudHMiLCJuZzovL25nLW11bHRpc2VsZWN0LWRyb3Bkb3duL2NsaWNrLW91dHNpZGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZy1tdWx0aXNlbGVjdC1kcm9wZG93bi9saXN0LWZpbHRlci5waXBlLnRzIiwibmc6Ly9uZy1tdWx0aXNlbGVjdC1kcm9wZG93bi9uZy1tdWx0aXNlbGVjdC1kcm9wZG93bi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBJRHJvcGRvd25TZXR0aW5ncyB7XHJcbiAgc2luZ2xlU2VsZWN0aW9uPzogYm9vbGVhbjtcclxuICBpZEZpZWxkPzogc3RyaW5nO1xyXG4gIHRleHRGaWVsZD86IHN0cmluZztcclxuICBlbmFibGVDaGVja0FsbD86IGJvb2xlYW47XHJcbiAgc2VsZWN0QWxsVGV4dD86IHN0cmluZztcclxuICB1blNlbGVjdEFsbFRleHQ/OiBzdHJpbmc7XHJcbiAgYWxsb3dTZWFyY2hGaWx0ZXI/OiBib29sZWFuO1xyXG4gIGNsZWFyU2VhcmNoRmlsdGVyPzogYm9vbGVhbjtcclxuICBtYXhIZWlnaHQ/OiBudW1iZXI7XHJcbiAgaXRlbXNTaG93TGltaXQ/OiBudW1iZXI7XHJcbiAgbGltaXRTZWxlY3Rpb24/OiBudW1iZXI7XHJcbiAgc2VhcmNoUGxhY2Vob2xkZXJUZXh0Pzogc3RyaW5nO1xyXG4gIG5vRGF0YUF2YWlsYWJsZVBsYWNlaG9sZGVyVGV4dD86IHN0cmluZztcclxuICBjbG9zZURyb3BEb3duT25TZWxlY3Rpb24/OiBib29sZWFuO1xyXG4gIHNob3dTZWxlY3RlZEl0ZW1zQXRUb3A/OiBib29sZWFuO1xyXG4gIGRlZmF1bHRPcGVuPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExpc3RJdGVtIHtcclxuICBpZDogU3RyaW5nO1xyXG4gIHRleHQ6IFN0cmluZztcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNvdXJjZTogYW55KSB7XHJcbiAgICBpZiAodHlwZW9mIHNvdXJjZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdGhpcy5pZCA9IHRoaXMudGV4dCA9IHNvdXJjZTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2Ygc291cmNlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICB0aGlzLmlkID0gc291cmNlLmlkO1xyXG4gICAgICB0aGlzLnRleHQgPSBzb3VyY2UudGV4dDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IExpc3RJdGVtLCBJRHJvcGRvd25TZXR0aW5ncyB9IGZyb20gJy4vbXVsdGlzZWxlY3QubW9kZWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERST1BET1dOX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcclxuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNdWx0aVNlbGVjdENvbXBvbmVudCksXHJcbiAgbXVsdGk6IHRydWVcclxufTtcclxuY29uc3Qgbm9vcCA9ICgpID0+IHt9O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZy1tdWx0aXNlbGVjdC1kcm9wZG93bicsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IHRhYmluZGV4PVwiPTBcIiAoYmx1cik9XCJvblRvdWNoZWQoKVwiIGNsYXNzPVwibXVsdGlzZWxlY3QtZHJvcGRvd25cIiAoY2xpY2tPdXRzaWRlKT1cImNsb3NlRHJvcGRvd24oKVwiPlxyXG4gIDxkaXYgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVkXCI+XHJcbiAgICA8c3BhbiB0YWJpbmRleD1cIi0xXCIgY2xhc3M9XCJkcm9wZG93bi1idG5cIiAoY2xpY2spPVwidG9nZ2xlRHJvcGRvd24oJGV2ZW50KVwiPlxyXG4gICAgICA8c3BhbiAqbmdJZj1cInNlbGVjdGVkSXRlbXMubGVuZ3RoID09IDBcIj57e19wbGFjZWhvbGRlcn19PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cInNlbGVjdGVkLWl0ZW1cIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzZWxlY3RlZEl0ZW1zO3RyYWNrQnk6IHRyYWNrQnlGbjtsZXQgayA9IGluZGV4XCIgW2hpZGRlbl09XCJrID4gX3NldHRpbmdzLml0ZW1zU2hvd0xpbWl0LTFcIj5cclxuICAgICAgICB7e2l0ZW0udGV4dH19XHJcbiAgICAgICAgPGEgc3R5bGU9XCJwYWRkaW5nLXRvcDoycHg7cGFkZGluZy1sZWZ0OjJweDtjb2xvcjp3aGl0ZVwiIChjbGljayk9XCJvbkl0ZW1DbGljaygkZXZlbnQsaXRlbSlcIj54PC9hPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxzcGFuIHN0eWxlPVwiZmxvYXQ6cmlnaHQgIWltcG9ydGFudDtwYWRkaW5nLXJpZ2h0OjRweFwiPlxyXG4gICAgICAgIDxzcGFuIHN0eWxlPVwicGFkZGluZy1yaWdodDogNnB4O1wiICpuZ0lmPVwiaXRlbVNob3dSZW1haW5pbmcoKT4wXCI+K3t7aXRlbVNob3dSZW1haW5pbmcoKX19PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIFtuZ0NsYXNzXT1cIl9zZXR0aW5ncy5kZWZhdWx0T3BlbiA/ICdkcm9wZG93bi11cCcgOiAnZHJvcGRvd24tZG93bidcIj48L3NwYW4+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbGlzdFwiIFtoaWRkZW5dPVwiIV9zZXR0aW5ncy5kZWZhdWx0T3BlblwiPlxyXG4gICAgPHVsIGNsYXNzPVwiaXRlbTFcIj5cclxuICAgICAgPGxpIChjbGljayk9XCJ0b2dnbGVTZWxlY3RBbGwoKVwiICpuZ0lmPVwiX2RhdGEubGVuZ3RoID4gMCAmJiAhX3NldHRpbmdzLnNpbmdsZVNlbGVjdGlvbiAmJiBfc2V0dGluZ3MuZW5hYmxlQ2hlY2tBbGwgJiYgX3NldHRpbmdzLmxpbWl0U2VsZWN0aW9uPT09LTFcIiBjbGFzcz1cIm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3hcIiBzdHlsZT1cImJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO3BhZGRpbmc6MTBweFwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBhcmlhLWxhYmVsPVwibXVsdGlzZWxlY3Qtc2VsZWN0LWFsbFwiIFtjaGVja2VkXT1cImlzQWxsSXRlbXNTZWxlY3RlZCgpXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkIHx8IGlzTGltaXRTZWxlY3Rpb25SZWFjaGVkKClcIiAvPlxyXG4gICAgICAgIDxkaXY+e3shaXNBbGxJdGVtc1NlbGVjdGVkKCkgPyBfc2V0dGluZ3Muc2VsZWN0QWxsVGV4dCA6IF9zZXR0aW5ncy51blNlbGVjdEFsbFRleHR9fTwvZGl2PlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGkgY2xhc3M9XCJmaWx0ZXItdGV4dGJveFwiICpuZ0lmPVwiX2RhdGEubGVuZ3RoPjAgJiYgX3NldHRpbmdzLmFsbG93U2VhcmNoRmlsdGVyXCI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgYXJpYS1sYWJlbD1cIm11bHRpc2VsZWN0LXNlYXJjaFwiIFtyZWFkT25seV09XCJkaXNhYmxlZFwiIFtwbGFjZWhvbGRlcl09XCJfc2V0dGluZ3Muc2VhcmNoUGxhY2Vob2xkZXJUZXh0XCIgWyhuZ01vZGVsKV09XCJmaWx0ZXIudGV4dFwiIChuZ01vZGVsQ2hhbmdlKT1cIm9uRmlsdGVyVGV4dENoYW5nZSgkZXZlbnQpXCI+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gICAgPHVsIGNsYXNzPVwiaXRlbTJcIiBbc3R5bGUubWF4SGVpZ2h0XT1cIl9zZXR0aW5ncy5tYXhIZWlnaHQrJ3B4J1wiPlxyXG4gICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgX2RhdGEgfCBuZzJMaXN0RmlsdGVyOmZpbHRlcjsgbGV0IGkgPSBpbmRleDtcIiAoY2xpY2spPVwib25JdGVtQ2xpY2soJGV2ZW50LGl0ZW0pXCIgY2xhc3M9XCJtdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94XCI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGFyaWEtbGFiZWw9XCJtdWx0aXNlbGVjdC1pdGVtXCIgW2NoZWNrZWRdPVwiaXNTZWxlY3RlZChpdGVtKVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZCB8fCAoaXNMaW1pdFNlbGVjdGlvblJlYWNoZWQoKSAmJiAhaXNTZWxlY3RlZChpdGVtKSlcIiAvPlxyXG4gICAgICAgIDxkaXY+e3tpdGVtLnRleHR9fTwvZGl2PlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGkgY2xhc3M9J25vLWRhdGEnICpuZ0lmPVwiX2RhdGEubGVuZ3RoID09IDBcIj5cclxuICAgICAgICA8aDU+e3tfc2V0dGluZ3Mubm9EYXRhQXZhaWxhYmxlUGxhY2Vob2xkZXJUZXh0fX08L2g1PlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj5cclxuPC9kaXY+YCxcclxuICBzdHlsZXM6IFtgLm11bHRpc2VsZWN0LWRyb3Bkb3due3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC1mYW1pbHk6aW5oZXJpdH0ubXVsdGlzZWxlY3QtZHJvcGRvd24gLmRyb3Bkb3duLWJ0bntkaXNwbGF5OmlubGluZS1ibG9jaztib3JkZXI6MXB4IHNvbGlkICNhZGFkYWQ7d2lkdGg6MTAwJTtwYWRkaW5nOjZweCAxMnB4O21hcmdpbi1ib3R0b206MDtmb250LXdlaWdodDo0MDA7bGluZS1oZWlnaHQ6MS41Mjg1NzE0Mzt0ZXh0LWFsaWduOmxlZnQ7dmVydGljYWwtYWxpZ246bWlkZGxlO2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQtaW1hZ2U6bm9uZTtib3JkZXItcmFkaXVzOjRweH0ubXVsdGlzZWxlY3QtZHJvcGRvd24gLmRyb3Bkb3duLWJ0biAuc2VsZWN0ZWQtaXRlbXtib3JkZXI6MXB4IHNvbGlkICMzMzdhYjc7bWFyZ2luLXJpZ2h0OjRweDtiYWNrZ3JvdW5kOiMzMzdhYjc7cGFkZGluZzowIDVweDtjb2xvcjojZmZmO2JvcmRlci1yYWRpdXM6MnB4O2Zsb2F0OmxlZnR9Lm11bHRpc2VsZWN0LWRyb3Bkb3duIC5kcm9wZG93bi1idG4gLnNlbGVjdGVkLWl0ZW0gYXt0ZXh0LWRlY29yYXRpb246bm9uZX0ubXVsdGlzZWxlY3QtZHJvcGRvd24gLmRyb3Bkb3duLWJ0biAuc2VsZWN0ZWQtaXRlbTpob3Zlcntib3gtc2hhZG93OjFweCAxcHggIzk1OTU5NX0ubXVsdGlzZWxlY3QtZHJvcGRvd24gLmRyb3Bkb3duLWJ0biAuZHJvcGRvd24tZG93bntkaXNwbGF5OmlubGluZS1ibG9jazt0b3A6MTBweDt3aWR0aDowO2hlaWdodDowO2JvcmRlci10b3A6MTBweCBzb2xpZCAjYWRhZGFkO2JvcmRlci1sZWZ0OjEwcHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXJpZ2h0OjEwcHggc29saWQgdHJhbnNwYXJlbnR9Lm11bHRpc2VsZWN0LWRyb3Bkb3duIC5kcm9wZG93bi1idG4gLmRyb3Bkb3duLXVwe2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjA7aGVpZ2h0OjA7Ym9yZGVyLWJvdHRvbToxMHB4IHNvbGlkICNhZGFkYWQ7Ym9yZGVyLWxlZnQ6MTBweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItcmlnaHQ6MTBweCBzb2xpZCB0cmFuc3BhcmVudH0ubXVsdGlzZWxlY3QtZHJvcGRvd24gLmRpc2FibGVkPnNwYW57YmFja2dyb3VuZC1jb2xvcjojZWNlZWVmfS5kcm9wZG93bi1saXN0e3Bvc2l0aW9uOmFic29sdXRlO3BhZGRpbmctdG9wOjZweDt3aWR0aDoxMDAlO3otaW5kZXg6OTk5OTtib3JkZXI6MXB4IHNvbGlkICNjY2M7Ym9yZGVyLXJhZGl1czozcHg7YmFja2dyb3VuZDojZmZmO21hcmdpbi10b3A6MTBweDtib3gtc2hhZG93OjAgMXB4IDVweCAjOTU5NTk1fS5kcm9wZG93bi1saXN0IHVse3BhZGRpbmc6MDtsaXN0LXN0eWxlOm5vbmU7b3ZlcmZsb3c6YXV0bzttYXJnaW46MH0uZHJvcGRvd24tbGlzdCBsaXtwYWRkaW5nOjZweCAxMHB4O2N1cnNvcjpwb2ludGVyO3RleHQtYWxpZ246bGVmdH0uZHJvcGRvd24tbGlzdCAuZmlsdGVyLXRleHRib3h7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2NjYztwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nOjEwcHh9LmRyb3Bkb3duLWxpc3QgLmZpbHRlci10ZXh0Ym94IGlucHV0e2JvcmRlcjowO3dpZHRoOjEwMCU7cGFkZGluZzowIDAgMCAyNnB4fS5kcm9wZG93bi1saXN0IC5maWx0ZXItdGV4dGJveCBpbnB1dDpmb2N1c3tvdXRsaW5lOjB9Lm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF17Ym9yZGVyOjA7Y2xpcDpyZWN0KDAgMCAwIDApO2hlaWdodDoxcHg7bWFyZ2luOi0xcHg7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6MDtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxcHh9Lm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF06Zm9jdXMrZGl2OmJlZm9yZSwubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XTpob3ZlcitkaXY6YmVmb3Jle2JvcmRlci1jb2xvcjojMzM3YWI3O2JhY2tncm91bmQtY29sb3I6I2YyZjJmMn0ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XTphY3RpdmUrZGl2OmJlZm9yZXt0cmFuc2l0aW9uLWR1cmF0aW9uOjBzfS5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdK2Rpdntwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nLWxlZnQ6MmVtO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7Y3Vyc29yOnBvaW50ZXI7bWFyZ2luOjA7Y29sb3I6IzAwMH0ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XStkaXY6YmVmb3Jle2JveC1zaXppbmc6Y29udGVudC1ib3g7Y29udGVudDonJztjb2xvcjojMzM3YWI3O3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDowO3dpZHRoOjE0cHg7aGVpZ2h0OjE0cHg7bWFyZ2luLXRvcDotOXB4O2JvcmRlcjoycHggc29saWQgIzMzN2FiNzt0ZXh0LWFsaWduOmNlbnRlcjt0cmFuc2l0aW9uOmFsbCAuNHMgZWFzZX0ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XStkaXY6YWZ0ZXJ7Ym94LXNpemluZzpjb250ZW50LWJveDtjb250ZW50OicnO3Bvc2l0aW9uOmFic29sdXRlOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NTAlO3RyYW5zZm9ybS1vcmlnaW46NTAlO3RyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjJzIGVhc2Utb3V0O3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycyBlYXNlLW91dDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMgZWFzZS1vdXQsLXdlYmtpdC10cmFuc2Zvcm0gLjJzIGVhc2Utb3V0O2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7dG9wOjUwJTtsZWZ0OjRweDt3aWR0aDo4cHg7aGVpZ2h0OjNweDttYXJnaW4tdG9wOi00cHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjojZmZmO2JvcmRlci13aWR0aDowIDAgM3B4IDNweDstby1ib3JkZXItaW1hZ2U6bm9uZTtib3JkZXItaW1hZ2U6bm9uZTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZykgc2NhbGUoMCl9Lm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF06ZGlzYWJsZWQrZGl2OmJlZm9yZXtib3JkZXItY29sb3I6I2NjY30ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XTpkaXNhYmxlZDpmb2N1cytkaXY6YmVmb3JlIC5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdOmRpc2FibGVkOmhvdmVyK2RpdjpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjppbmhlcml0fS5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdOmRpc2FibGVkOmNoZWNrZWQrZGl2OmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOiNjY2N9Lm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCtkaXY6YWZ0ZXJ7Y29udGVudDonJzt0cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC4ycyBlYXNlLW91dDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMgZWFzZS1vdXQ7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzIGVhc2Utb3V0LC13ZWJraXQtdHJhbnNmb3JtIC4ycyBlYXNlLW91dDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKSBzY2FsZSgxKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZykgc2NhbGUoMSl9Lm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCtkaXY6YmVmb3Jley13ZWJraXQtYW5pbWF0aW9uOi4ycyBlYXNlLWluIGJvcmRlcnNjYWxlO2FuaW1hdGlvbjouMnMgZWFzZS1pbiBib3JkZXJzY2FsZTtiYWNrZ3JvdW5kOiMzMzdhYjd9QC13ZWJraXQta2V5ZnJhbWVzIGJvcmRlcnNjYWxlezUwJXtib3gtc2hhZG93OjAgMCAwIDJweCAjMzM3YWI3fX1Aa2V5ZnJhbWVzIGJvcmRlcnNjYWxlezUwJXtib3gtc2hhZG93OjAgMCAwIDJweCAjMzM3YWI3fX1gXSxcclxuICBwcm92aWRlcnM6IFtEUk9QRE9XTl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXVsdGlTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgcHVibGljIF9zZXR0aW5nczogSURyb3Bkb3duU2V0dGluZ3M7XHJcbiAgcHVibGljIF9kYXRhOiBBcnJheTxMaXN0SXRlbT4gPSBbXTtcclxuICBwdWJsaWMgc2VsZWN0ZWRJdGVtczogQXJyYXk8TGlzdEl0ZW0+ID0gW107XHJcbiAgcHVibGljIGlzRHJvcGRvd25PcGVuID0gdHJ1ZTtcclxuICBfcGxhY2Vob2xkZXIgPSAnU2VsZWN0JztcclxuICBmaWx0ZXI6IExpc3RJdGVtID0gbmV3IExpc3RJdGVtKHRoaXMuZGF0YSk7XHJcbiAgZGVmYXVsdFNldHRpbmdzOiBJRHJvcGRvd25TZXR0aW5ncyA9IHtcclxuICAgIHNpbmdsZVNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICBpZEZpZWxkOiAnaWQnLFxyXG4gICAgdGV4dEZpZWxkOiAndGV4dCcsXHJcbiAgICBlbmFibGVDaGVja0FsbDogdHJ1ZSxcclxuICAgIHNlbGVjdEFsbFRleHQ6ICdTZWxlY3QgQWxsJyxcclxuICAgIHVuU2VsZWN0QWxsVGV4dDogJ1VuU2VsZWN0IEFsbCcsXHJcbiAgICBhbGxvd1NlYXJjaEZpbHRlcjogZmFsc2UsXHJcbiAgICBsaW1pdFNlbGVjdGlvbjogLTEsXHJcbiAgICBjbGVhclNlYXJjaEZpbHRlcjogdHJ1ZSxcclxuICAgIG1heEhlaWdodDogMTk3LFxyXG4gICAgaXRlbXNTaG93TGltaXQ6IDk5OTk5OTk5OTk5OSxcclxuICAgIHNlYXJjaFBsYWNlaG9sZGVyVGV4dDogJ1NlYXJjaCcsXHJcbiAgICBub0RhdGFBdmFpbGFibGVQbGFjZWhvbGRlclRleHQ6ICdObyBkYXRhIGF2YWlsYWJsZScsXHJcbiAgICBjbG9zZURyb3BEb3duT25TZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgc2hvd1NlbGVjdGVkSXRlbXNBdFRvcDogZmFsc2UsXHJcbiAgICBkZWZhdWx0T3BlbjogZmFsc2VcclxuICB9O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgcGxhY2Vob2xkZXIodmFsdWU6IHN0cmluZykge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9wbGFjZWhvbGRlciA9ICdTZWxlY3QnO1xyXG4gICAgfVxyXG4gIH1cclxuICBASW5wdXQoKVxyXG4gIGRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCBzZXR0aW5ncyh2YWx1ZTogSURyb3Bkb3duU2V0dGluZ3MpIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLl9zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24odGhpcy5kZWZhdWx0U2V0dGluZ3MsIHZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3NldHRpbmdzID0gT2JqZWN0LmFzc2lnbih0aGlzLmRlZmF1bHRTZXR0aW5ncyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgZGF0YSh2YWx1ZTogQXJyYXk8YW55Pikge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICB0aGlzLl9kYXRhID0gW107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBjb25zdCBfaXRlbXMgPSB2YWx1ZS5maWx0ZXIoKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAvLyAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycgfHwgKHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiBpdGVtICYmIGl0ZW1bdGhpcy5fc2V0dGluZ3MuaWRGaWVsZF0gJiYgaXRlbVt0aGlzLl9zZXR0aW5ncy50ZXh0RmllbGRdKSkge1xyXG4gICAgICAvLyAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyB9KTtcclxuICAgICAgdGhpcy5fZGF0YSA9IHZhbHVlLm1hcChcclxuICAgICAgICAoaXRlbTogYW55KSA9PlxyXG4gICAgICAgICAgdHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnXHJcbiAgICAgICAgICAgID8gbmV3IExpc3RJdGVtKGl0ZW0pXHJcbiAgICAgICAgICAgIDogbmV3IExpc3RJdGVtKHtcclxuICAgICAgICAgICAgICAgIGlkOiBpdGVtW3RoaXMuX3NldHRpbmdzLmlkRmllbGRdLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogaXRlbVt0aGlzLl9zZXR0aW5ncy50ZXh0RmllbGRdXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBPdXRwdXQoJ29uRmlsdGVyQ2hhbmdlJylcclxuICBvbkZpbHRlckNoYW5nZTogRXZlbnRFbWl0dGVyPExpc3RJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoJ29uRHJvcERvd25DbG9zZScpXHJcbiAgb25Ecm9wRG93bkNsb3NlOiBFdmVudEVtaXR0ZXI8TGlzdEl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBPdXRwdXQoJ29uU2VsZWN0JylcclxuICBvblNlbGVjdDogRXZlbnRFbWl0dGVyPExpc3RJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBAT3V0cHV0KCdvbkRlU2VsZWN0JylcclxuICBvbkRlU2VsZWN0OiBFdmVudEVtaXR0ZXI8TGlzdEl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBPdXRwdXQoJ29uU2VsZWN0QWxsJylcclxuICBvblNlbGVjdEFsbDogRXZlbnRFbWl0dGVyPEFycmF5PExpc3RJdGVtPj4gPSBuZXcgRXZlbnRFbWl0dGVyPEFycmF5PGFueT4+KCk7XHJcblxyXG4gIEBPdXRwdXQoJ29uRGVTZWxlY3RBbGwnKVxyXG4gIG9uRGVTZWxlY3RBbGw6IEV2ZW50RW1pdHRlcjxBcnJheTxMaXN0SXRlbT4+ID0gbmV3IEV2ZW50RW1pdHRlcjxBcnJheTxhbnk+PigpO1xyXG5cclxuICBwcml2YXRlIG9uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gbm9vcDtcclxuICBwcml2YXRlIG9uQ2hhbmdlQ2FsbGJhY2s6IChfOiBhbnkpID0+IHZvaWQgPSBub29wO1xyXG5cclxuICBvbkZpbHRlclRleHRDaGFuZ2UoJGV2ZW50KSB7XHJcbiAgICB0aGlzLm9uRmlsdGVyQ2hhbmdlLmVtaXQoJGV2ZW50KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgb25JdGVtQ2xpY2soJGV2ZW50OiBhbnksIGl0ZW06IExpc3RJdGVtKSB7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZm91bmQgPSB0aGlzLmlzU2VsZWN0ZWQoaXRlbSk7XHJcbiAgICBjb25zdCBhbGxvd0FkZCA9XHJcbiAgICAgIHRoaXMuX3NldHRpbmdzLmxpbWl0U2VsZWN0aW9uID09PSAtMSB8fFxyXG4gICAgICAodGhpcy5fc2V0dGluZ3MubGltaXRTZWxlY3Rpb24gPiAwICYmXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA8IHRoaXMuX3NldHRpbmdzLmxpbWl0U2VsZWN0aW9uKTtcclxuICAgIGlmICghZm91bmQpIHtcclxuICAgICAgaWYgKGFsbG93QWRkKSB7XHJcbiAgICAgICAgdGhpcy5hZGRTZWxlY3RlZChpdGVtKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW1vdmVTZWxlY3RlZChpdGVtKTtcclxuICAgIH1cclxuICAgIGlmIChcclxuICAgICAgdGhpcy5fc2V0dGluZ3Muc2luZ2xlU2VsZWN0aW9uICYmXHJcbiAgICAgIHRoaXMuX3NldHRpbmdzLmNsb3NlRHJvcERvd25PblNlbGVjdGlvblxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5zaW5nbGVTZWxlY3Rpb24pIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+PSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0SXRlbSA9IHZhbHVlWzBdO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbXHJcbiAgICAgICAgICAgICAgdHlwZW9mIGZpcnN0SXRlbSA9PT0gJ3N0cmluZydcclxuICAgICAgICAgICAgICAgID8gbmV3IExpc3RJdGVtKGZpcnN0SXRlbSlcclxuICAgICAgICAgICAgICAgIDogbmV3IExpc3RJdGVtKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogZmlyc3RJdGVtW3RoaXMuX3NldHRpbmdzLmlkRmllbGRdLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGZpcnN0SXRlbVt0aGlzLl9zZXR0aW5ncy50ZXh0RmllbGRdXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5lcnJvcihlLmJvZHkubXNnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgX2RhdGEgPSB2YWx1ZS5tYXAoXHJcbiAgICAgICAgICAoaXRlbTogYW55KSA9PlxyXG4gICAgICAgICAgICB0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZydcclxuICAgICAgICAgICAgICA/IG5ldyBMaXN0SXRlbShpdGVtKVxyXG4gICAgICAgICAgICAgIDogbmV3IExpc3RJdGVtKHtcclxuICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW1bdGhpcy5fc2V0dGluZ3MuaWRGaWVsZF0sXHJcbiAgICAgICAgICAgICAgICAgIHRleHQ6IGl0ZW1bdGhpcy5fc2V0dGluZ3MudGV4dEZpZWxkXVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5saW1pdFNlbGVjdGlvbiA+IDApIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IF9kYXRhLnNwbGljZSgwLCB0aGlzLl9zZXR0aW5ncy5saW1pdFNlbGVjdGlvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IF9kYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLy8gRnJvbSBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2VcclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcclxuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xyXG4gIH1cclxuXHJcbiAgLy8gRnJvbSBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2VcclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XHJcbiAgfVxyXG5cclxuICAvLyBTZXQgdG91Y2hlZCBvbiBibHVyXHJcbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXHJcbiAgcHVibGljIG9uVG91Y2hlZCgpIHtcclxuICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xyXG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjaygpO1xyXG4gIH1cclxuXHJcbiAgdHJhY2tCeUZuKGluZGV4LCBpdGVtKSB7XHJcbiAgICByZXR1cm4gaXRlbS5pZDtcclxuICB9XHJcblxyXG4gIGlzU2VsZWN0ZWQoY2xpY2tlZEl0ZW06IExpc3RJdGVtKSB7XHJcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBpZiAoY2xpY2tlZEl0ZW0uaWQgPT09IGl0ZW0uaWQpIHtcclxuICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZvdW5kO1xyXG4gIH1cclxuXHJcbiAgaXNMaW1pdFNlbGVjdGlvblJlYWNoZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MubGltaXRTZWxlY3Rpb24gPT09IHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBpc0FsbEl0ZW1zU2VsZWN0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGF0YS5sZW5ndGggPT09IHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBzaG93QnV0dG9uKCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF0aGlzLl9zZXR0aW5ncy5zaW5nbGVTZWxlY3Rpb24pIHtcclxuICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLmxpbWl0U2VsZWN0aW9uID4gMCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICAvLyB0aGlzLl9zZXR0aW5ncy5lbmFibGVDaGVja0FsbCA9IHRoaXMuX3NldHRpbmdzLmxpbWl0U2VsZWN0aW9uID09PSAtMSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgcmV0dXJuIHRydWU7IC8vICF0aGlzLl9zZXR0aW5ncy5zaW5nbGVTZWxlY3Rpb24gJiYgdGhpcy5fc2V0dGluZ3MuZW5hYmxlQ2hlY2tBbGwgJiYgdGhpcy5fZGF0YS5sZW5ndGggPiAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gc2hvdWxkIGJlIGRpc2FibGVkIGluIHNpbmdsZSBzZWxlY3Rpb24gbW9kZVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpdGVtU2hvd1JlbWFpbmluZygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggLSB0aGlzLl9zZXR0aW5ncy5pdGVtc1Nob3dMaW1pdDtcclxuICB9XHJcblxyXG4gIGFkZFNlbGVjdGVkKGl0ZW06IExpc3RJdGVtKSB7XHJcbiAgICBpZiAodGhpcy5fc2V0dGluZ3Muc2luZ2xlU2VsZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucHVzaChpdGVtKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMuZW1pdHRlZFZhbHVlKHRoaXMuc2VsZWN0ZWRJdGVtcykpO1xyXG4gICAgdGhpcy5vblNlbGVjdC5lbWl0KHRoaXMuZW1pdHRlZFZhbHVlKGl0ZW0pKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVNlbGVjdGVkKGl0ZW1TZWw6IExpc3RJdGVtKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgaWYgKGl0ZW1TZWwuaWQgPT09IGl0ZW0uaWQpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMuc3BsaWNlKHRoaXMuc2VsZWN0ZWRJdGVtcy5pbmRleE9mKGl0ZW0pLCAxKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy5lbWl0dGVkVmFsdWUodGhpcy5zZWxlY3RlZEl0ZW1zKSk7XHJcbiAgICB0aGlzLm9uRGVTZWxlY3QuZW1pdCh0aGlzLmVtaXR0ZWRWYWx1ZShpdGVtU2VsKSk7XHJcbiAgfVxyXG5cclxuICBlbWl0dGVkVmFsdWUodmFsOiBhbnkpOiBhbnkge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBbXTtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcclxuICAgICAgdmFsLm1hcChpdGVtID0+IHtcclxuICAgICAgICBpZiAoaXRlbS5pZCA9PT0gaXRlbS50ZXh0KSB7XHJcbiAgICAgICAgICBzZWxlY3RlZC5wdXNoKGl0ZW0udGV4dCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNlbGVjdGVkLnB1c2godGhpcy5vYmplY3RpZnkoaXRlbSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodmFsKSB7XHJcbiAgICAgICAgaWYgKHZhbC5pZCA9PT0gdmFsLnRleHQpIHtcclxuICAgICAgICAgIHJldHVybiB2YWwudGV4dDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0aWZ5KHZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2VsZWN0ZWQ7XHJcbiAgfVxyXG5cclxuICBvYmplY3RpZnkodmFsOiBMaXN0SXRlbSkge1xyXG4gICAgY29uc3Qgb2JqID0ge307XHJcbiAgICBvYmpbdGhpcy5fc2V0dGluZ3MuaWRGaWVsZF0gPSB2YWwuaWQ7XHJcbiAgICBvYmpbdGhpcy5fc2V0dGluZ3MudGV4dEZpZWxkXSA9IHZhbC50ZXh0O1xyXG4gICAgcmV0dXJuIG9iajtcclxuICB9XHJcblxyXG4gIHRvZ2dsZURyb3Bkb3duKGV2dCkge1xyXG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCAmJiB0aGlzLl9zZXR0aW5ncy5zaW5nbGVTZWxlY3Rpb24pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fc2V0dGluZ3MuZGVmYXVsdE9wZW4gPSAhdGhpcy5fc2V0dGluZ3MuZGVmYXVsdE9wZW47XHJcbiAgICBpZiAoIXRoaXMuX3NldHRpbmdzLmRlZmF1bHRPcGVuKSB7XHJcbiAgICAgIHRoaXMub25Ecm9wRG93bkNsb3NlLmVtaXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsb3NlRHJvcGRvd24oKSB7XHJcbiAgICB0aGlzLl9zZXR0aW5ncy5kZWZhdWx0T3BlbiA9IGZhbHNlO1xyXG4gICAgLy8gY2xlYXIgc2VhcmNoIHRleHRcclxuICAgIGlmICh0aGlzLl9zZXR0aW5ncy5jbGVhclNlYXJjaEZpbHRlcikge1xyXG4gICAgICB0aGlzLmZpbHRlci50ZXh0ID0gJyc7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uRHJvcERvd25DbG9zZS5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVTZWxlY3RBbGwoKSB7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuaXNBbGxJdGVtc1NlbGVjdGVkKCkpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gdGhpcy5fZGF0YS5zbGljZSgpO1xyXG4gICAgICB0aGlzLm9uU2VsZWN0QWxsLmVtaXQodGhpcy5lbWl0dGVkVmFsdWUodGhpcy5zZWxlY3RlZEl0ZW1zKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbXTtcclxuICAgICAgdGhpcy5vbkRlU2VsZWN0QWxsLmVtaXQodGhpcy5lbWl0dGVkVmFsdWUodGhpcy5zZWxlY3RlZEl0ZW1zKSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy5lbWl0dGVkVmFsdWUodGhpcy5zZWxlY3RlZEl0ZW1zKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbY2xpY2tPdXRzaWRlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIENsaWNrT3V0c2lkZURpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgICB9XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBwdWJsaWMgY2xpY2tPdXRzaWRlID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnLCAnJGV2ZW50LnRhcmdldCddKVxyXG4gICAgcHVibGljIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQsIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0YXJnZXRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNsaWNrZWRJbnNpZGUgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnModGFyZ2V0RWxlbWVudCk7XHJcbiAgICAgICAgaWYgKCFjbGlja2VkSW5zaWRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xpY2tPdXRzaWRlLmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBMaXN0SXRlbSB9IGZyb20gJy4vbXVsdGlzZWxlY3QubW9kZWwnO1xyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ25nMkxpc3RGaWx0ZXInLFxyXG4gICAgcHVyZTogZmFsc2VcclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RGaWx0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm0oaXRlbXM6IExpc3RJdGVtW10sIGZpbHRlcjogTGlzdEl0ZW0pOiBMaXN0SXRlbVtdIHtcclxuICAgICAgICBpZiAoIWl0ZW1zIHx8ICFmaWx0ZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXRlbXMuZmlsdGVyKChpdGVtOiBMaXN0SXRlbSkgPT4gdGhpcy5hcHBseUZpbHRlcihpdGVtLCBmaWx0ZXIpKTtcclxuICAgIH1cclxuXHJcbiAgICBhcHBseUZpbHRlcihpdGVtOiBMaXN0SXRlbSwgZmlsdGVyOiBMaXN0SXRlbSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhKGZpbHRlci50ZXh0ICYmIGl0ZW0udGV4dCAmJiBpdGVtLnRleHQudG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlci50ZXh0LnRvTG93ZXJDYXNlKCkpID09PSAtMSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE11bHRpU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9tdWx0aXNlbGVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDbGlja091dHNpZGVEaXJlY3RpdmUgfSBmcm9tICcuL2NsaWNrLW91dHNpZGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTGlzdEZpbHRlclBpcGUgfSBmcm9tICcuL2xpc3QtZmlsdGVyLnBpcGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTXVsdGlTZWxlY3RDb21wb25lbnQsIENsaWNrT3V0c2lkZURpcmVjdGl2ZSwgTGlzdEZpbHRlclBpcGVdLFxyXG4gIGV4cG9ydHM6IFtNdWx0aVNlbGVjdENvbXBvbmVudF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBOZ011bHRpU2VsZWN0RHJvcERvd25Nb2R1bGUge1xyXG4gICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbmdNb2R1bGU6IE5nTXVsdGlTZWxlY3REcm9wRG93bk1vZHVsZVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoi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

/***/ }),

/***/ "./src/app/layout/client-position/client-position-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layout/client-position/client-position-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: ClientPositionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPositionRoutingModule", function() { return ClientPositionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _client_position_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-position.component */ "./src/app/layout/client-position/client-position.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: "",
        component: _client_position_component__WEBPACK_IMPORTED_MODULE_2__["ClientPositionComponent"]
    }
];
var ClientPositionRoutingModule = /** @class */ (function () {
    function ClientPositionRoutingModule() {
    }
    ClientPositionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ClientPositionRoutingModule);
    return ClientPositionRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/client-position/client-position.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/layout/client-position/client-position.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <app-page-header [icon1]=\"'fa fa-briefcase'\" [heading1]=\"'Client Positions'\"></app-page-header>\n  <ng-template #spinner>\n    <div class=\"spinner padding-top justify-content-md-center\">\n      <div class=\"bounce1\"></div>\n      <div class=\"bounce2\"></div>\n      <div class=\"bounce3\"></div>\n    </div>\n  </ng-template>\n  <div class=\"row\" *ngIf=\"listReturned == true; else spinner\">\n    <div class=\"col-md-7\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"search\" [(ngModel)]=\"currSearchTxt\" />\n        </div>\n        <div class=\"col-md-6 mt-2\">\n          <input class=\"check\" type=\"checkbox\" [(ngModel)]=\"showInactiveContent\" (change)=\"checkTableType()\" value=\"\" />\n          <span class=\"\"> Include Inactive Positions</span>\n        </div>\n      </div>\n      <div class=\"row\">\n        <b class=\"pull-left\">Filter list count : {{ clientPositionList?.list?.length }}</b>\n      </div>\n      <div class=\"mt-2 table-responsive table-wrapper-scroll-y my-custom-scrollbar\" [style.height.px]=\"screenHeight\">\n        <table class=\"table table-sm table-hover table-striped\">\n          <tbody>\n            <tr *ngFor=\"\n                let cpl of clientPositionList.list\n                  | filter: currSearchTxt\n                  | paginate: paginateConfig;\n                let i = index\n              \" (click)=\"setModel(cpl.id)\" [ngClass]=\"{\n                'bl-red': !cpl.isProfilePosted,\n                'bl-green': cpl.isProfilePosted\n              }\">\n              <td class=\"table-data-padding\">\n                <dl>\n                  <dt>\n                    {{ cpl.generatedCode }} ({{ cpl.assignedTo.fullname }})\n                  </dt>\n                  <dd>\n                    Need {{ cpl.requiredPositions }} candidate(s) ({{\n                      cpl.minCtc\n                    }}\n                    - {{ cpl.maxCtc }}) with {{ cpl.experience }} experience.\n                  </dd>\n                </dl>\n              </td>\n              <!-- <td width=\"140\">\n                    <app-action\n                      [trashContent]=\"trashContent\"\n                      [shortListContent]=\"shortListContent\"\n                      [sendMailContent]=\"sendMailContent\"\n                      [sendSMSContent]=\"sendSMSContent\"\n                      [id]=\"cpl.id\"\n                      [isTrash]=\"trash\"\n                      [isSendSMS]=\"sms\"\n                      [isSendMail]=\"email\"\n                      [isShortList]=\"shortList\"\n                      (shortList)=\"open($event)\"\n                      (sendSMS)=\"open($event)\"\n                      (trash)=\"open($event)\"\n                      (sendMail)=\"open($event)\"\n                    ></app-action>\n                  </td> -->\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <div class=\"col-12 justify-content-center mb-5\" *ngIf=\"clientPositionList.noOfRecords > properties.ITEMSPERPAGE\">\n        <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n        <!-- <ngb-pagination [collectionSize]=\"cpListLength\" [(page)]=\"page\" [ellipses]=\"false\" (pageChange)=\"pageChange($event)\" [maxSize]=\"pageSize\" [rotate]=\"true\" [boundaryLinks]=\"true\">\n          </ngb-pagination> -->\n      </div>\n    </div>\n    <div class=\"col-md-5\">\n      <form name=\"form\" id=\"clientPositionForm\" (ngSubmit)=\"f.form.valid && create(f, clientCall)\" #f=\"ngForm\"\n        novalidate>\n        <div class=\"row text-center\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <button type=\"submit\" *ngIf=\"enableButtonType == '' && loggedInRole != 'User'\"\n                class=\"btn btn-secondary ml-3\" [disabled]=\"f.form.pristine || f.form.invalid || isCreate\">\n                Add\n              </button>\n              <button type=\"button\" *ngIf=\"enableButtonType == 'U' && loggedInRole != 'User'\"\n                class=\"btn btn-secondary ml-2\" (click)=\"update(f)\">\n                Update\n              </button>\n              <!-- <button *ngIf=\"enableButtonType == 'E'\" class=\"btn btn-secondary ml-2\" type=\"button\" (click)=\"enableFormEditable()\">\n                Edit\n              </button> -->\n              <button type=\"button\" (click)=\"cancelForm(f)\" *ngIf=\"\n                  enableButtonType == '' ||\n                  (enableButtonType == 'U' && loggedInRole != 'User')\n                \" class=\"btn btn-secondary ml-3\">\n                {{ enableButtonType != \"\" ? \"Close\" : \"Clear\" }}\n              </button>\n\n              <span class=\"pull-right\" *ngIf=\"showAction && readOnlyForm == 'U'\">\n                <div class=\"dropdown theme-dropdown clearfix\" placement=\"bottom-right\" ngbDropdown>\n                  <!-- <button class=\"btn btn-secondary\" >\n                            Dropdown\n                        </button> -->\n                  <i class=\"fa fa-bars\" ngbDropdownToggle></i>\n                  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\" ngbDropdownMenu>\n                    <a class=\"dropdown-item drop-list\" *ngIf=\"loggedInRole != 'User'\"\n                      (click)=\"enableFormEditable()\">Edit</a>\n                    <a class=\"dropdown-item drop-list\" (click)=\"cancelForm(f)\">New</a>\n                    <a class=\"dropdown-item drop-list\" *ngIf=\"loggedInRole != 'User'\"\n                      (click)=\"createApplication(shortListContent)\">Create Application</a>\n                    <a class=\"dropdown-item drop-list\" (click)=\"emailJd(sendMailContent)\">Email JD</a>\n                    <a class=\"dropdown-item drop-list\" (click)=\"smsJd(sendSMSContent)\">SMS JD</a>\n                    <a class=\"dropdown-item drop-list\" *ngIf=\"loggedInRole != 'User'\"\n                      (click)=\"cloneData(model)\">Clone</a>\n                    <a class=\"dropdown-item drop-list\" *ngIf=\"loggedInRole != 'User'\"\n                      (click)=\"open(model.id, trashContent)\">Delete</a>\n                    <a class=\"dropdown-item drop-list\" (click)=\"open(model.id, editPI)\">Edit Posting Info</a>\n                  </div>\n                </div>\n              </span>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"readOnlyForm == 'U'; else notRead\">\n          <table class=\"table table-borderless table-striped\">\n            <tbody>\n              <tr *ngIf=\"model?.client?.name\">\n                <th>Client Name</th>\n                <td>\n                  {{ model.client.name }}\n                </td>\n              </tr>\n              <tr *ngIf=\"model.role\">\n                <th>Job Title</th>\n                <td>{{ model.role }}</td>\n              </tr>\n              <tr *ngIf=\"model.availability\">\n                <th>Availability</th>\n                <td>{{ model.availability }}</td>\n              </tr>\n              <tr *ngIf=\"model.requiredPositions\">\n                <th>Required Positions</th>\n                <td>{{ model.requiredPositions }}</td>\n              </tr>\n              <tr *ngIf=\"model.experience\">\n                <th>Required Experience</th>\n                <td>{{ model.experience }}</td>\n              </tr>\n              <tr *ngIf=\"model.minCtc\">\n                <th>Min CTC</th>\n                <td>{{ model.minCtc }}</td>\n              </tr>\n              <tr *ngIf=\"model.maxCtc\">\n                <th>Max CTC</th>\n                <td>{{ model.maxCtc }}</td>\n              </tr>\n              <tr *ngIf=\"model.location\">\n                <th>Location</th>\n                <td>{{ model.location }}</td>\n              </tr>\n              <tr *ngIf=\"model?.status?.description\">\n                <th>Status</th>\n                <td>{{ model.status.description }}</td>\n              </tr>\n              <tr *ngIf=\"model?.assignedTo?.fullname\">\n                <th>Assign To</th>\n                <td>{{ model.assignedTo.fullname }}</td>\n              </tr>\n              <tr *ngIf=\"model.qualification\">\n                <th>Qualification</th>\n                <td>{{ model.qualification }}</td>\n              </tr>\n              <tr *ngIf=\"model.requiredSkills\">\n                <th>Required Skills</th>\n                <td>\n                  <p [innerHTML]=\"model.requiredSkills\"></p>\n                </td>\n              </tr>\n              <tr *ngIf=\"model.address\">\n                <th>Address</th>\n                <td>\n                  {{model.address}}\n                </td>\n              </tr>\n              <tr *ngIf=\"model.description\">\n                <th>Description</th>\n                <td>\n                  <p [innerHTML]=\"model.description\"></p>\n                </td>\n              </tr>\n              <tr *ngIf=\"model.shineURL\">\n                <th>Shine</th>\n                <td>{{ model.shineURL }}</td>\n              </tr>\n              <tr *ngIf=\"model.naukriURL\">\n                <th>Naukri</th>\n                <td>{{ model.naukriURL }}</td>\n              </tr>\n              <tr *ngFor=\"let ap of model.properties\">\n                <th>{{ ap.name }}</th>\n                <td>{{ ap.value }}</td>\n              </tr>\n              <tr *ngFor=\"let fl of model.files\">\n                <th>Files</th>\n                <td class=\"file-download\" (click)=\"downloadFile(fl.id)\">\n                  {{ fl.fileName }}\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <ng-template #notRead>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Client Name<span class=\"required\">*</span></label>\n                <select class=\"form-control\" name=\"cn\" [disabled]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.clientId\"\n                  [ngClass]=\"{ 'is-invalid': f.submitted && cn.invalid }\" #cn=\"ngModel\" required>\n                  <option *ngFor=\"let cls of clientList\" [ngValue]=\"cls.id\">\n                    {{ cls.name }}</option>\n                </select>\n                <div class=\"invalid-feedback\">\n                  Client Name is mandatory\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Job Title<span class=\"required\">*</span></label>\n                <input class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.role\" name=\"technology\"\n                  [ngClass]=\"{\n                    'is-invalid': f.submitted && technology.invalid\n                  }\" #technology=\"ngModel\" required />\n                <div class=\"invalid-feedback\">\n                  Role is mandatory\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Job Type</label>\n                <select class=\"form-control\" name=\"jobType\" [disabled]=\"readOnlyForm == 'R'\"\n                  [(ngModel)]=\"model.jobType\">\n                  <option *ngFor=\"let cs of properties.JOB_TYPE\">\n                    {{ cs }}\n                  </option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Availability</label>\n                <select class=\"form-control\" name=\"sourced\" [disabled]=\"readOnlyForm == 'R'\"\n                  [(ngModel)]=\"model.availability\">\n                  <option *ngFor=\"let cs of properties.DURATION\">\n                    {{ cs }}\n                  </option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Required Positions</label>\n                <input class=\"form-control\" type=\"number\" min=\"0\" [readonly]=\"readOnlyForm == 'R'\"\n                  [(ngModel)]=\"model.requiredPositions\" name=\"nofpos\" />\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Required Experience</label>\n                <input class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.experience\"\n                  name=\"experience\" />\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Min CTC(in LPA)</label>\n                <input class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\" type=\"number\" [(ngModel)]=\"model.minCtc\"\n                  name=\"minctc\" />\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Max CTC(in LPA)</label>\n                <input class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\" type=\"number\" [(ngModel)]=\"model.maxCtc\"\n                  name=\"maxctc\" (blur)=\"checkCTC()\" />\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Location</label>\n                <input class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.location\" name=\"loc\" />\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Client Position Status </label>\n                <select class=\"form-control\" name=\"cps\" [disabled]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.cpstatus\">\n                  <option *ngFor=\"let cpsl of clientPositionStatusList.list\" [ngValue]=\"cpsl.code\">\n                    {{ cpsl.description }}\n                  </option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Assign To<span class=\"required\">*</span></label>\n                <select class=\"form-control\" name=\"assign\" [disabled]=\"readOnlyForm == 'R'\"\n                  [(ngModel)]=\"model.assignedTo\" [ngClass]=\"{ 'is-invalid': f.submitted && assign.invalid }\"\n                  #assign=\"ngModel\" required>\n                  <option *ngFor=\"let rl of recruiterList\" [ngValue]=\"rl.id\">\n                    {{ rl.name }} ({{ rl.count }})</option>\n                </select>\n                <div class=\"invalid-feedback\">\n                  Assign to is mandatory\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Qualification</label>\n                <input class=\"form-control\" [readonly]=\"readOnlyForm == 'R'\" [(ngModel)]=\"model.qualification\"\n                  name=\"qual\" [ngClass]=\"{ 'is-invalid': f.submitted && qual.invalid }\" #qual=\"ngModel\" />\n              </div>\n            </div>\n            <div class=\"col-md-6\" *ngIf=\"model.cpstatus == 'Closed'\">\n              <div class=\"form-group\">\n                <label>Closed By</label>\n                <select class=\"form-control\" name=\"closedBy\" [disabled]=\"readOnlyForm == 'R'\"\n                  [(ngModel)]=\"model.closedBy\">\n                  <option *ngFor=\"let rl of recruiterList\" [ngValue]=\"rl.id\">\n                    {{ rl.name }}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Address</label>\n                <input type=\"checkbox\" class=\"ml-3\" name=\"addCheckbox\"\n                  (change)=\"setClientAddress($event,model.clientId)\" />&nbsp;<small>Same as client</small>\n                <textarea class=\"form-control\" cols=\"5\" rows=\"5\" [readonly]=\"readOnlyForm == 'R'\"\n                  [(ngModel)]=\"model.address\" name=\"address\" #billingAddress=\"ngModel\"></textarea>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Required Skills<span class=\"required\">*</span></label>\n                <angular-editor [(ngModel)]=\"model.requiredSkills\" name=\"requiredSkills\" [config]=\"config\" required>\n                </angular-editor>\n                <div class=\"invalid-feedback\">\n                  Required Skills are mandatory\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\" *ngIf=\"model.properties.length > 0\">\n            <div class=\"col-md-12 mb-5\" *ngIf=\"model.properties.length > 0\">\n              <div class=\"form-group\">\n                <label>Additional Properties</label>\n                <div class=\"row\" *ngFor=\"let ap of model.properties; let i = index\">\n                  <div class=\"col-md-5 pt-2\">\n                    <input type=\"text\" [(ngModel)]=\"ap.name\" class=\"form-control\" name=\"addPropName{{ i }}\"\n                      [readonly]=\"readOnlyForm == 'R'\" />\n                  </div>\n                  <div class=\"col-md-5 pt-2\">\n                    <input type=\"text\" [(ngModel)]=\"ap.value\" class=\"form-control\" name=\"addPropValue{{ i }}\"\n                      [readonly]=\"readOnlyForm == 'R'\" />\n                  </div>\n                  <div class=\"col-md-2\">\n                    <i class=\"fa fa-minus\" aria-hidden=\"true\" id=\"decrease\" *ngIf=\"enableButtonType != 'E'\"\n                      (click)=\"propertiesListIncrement($event.target, i)\"></i>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Description</label>\n                <angular-editor [(ngModel)]=\"model.description\" name=\"description\" [config]=\"config\">\n                </angular-editor>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Additional Properties</label>\n                <div class=\"row\">\n                  <div class=\"col-md-5\">\n                    <input type=\"text\" [(ngModel)]=\"apName\" class=\"form-control\" name=\"apName\"\n                      [readonly]=\"readOnlyForm == 'R'\" />\n                  </div>\n                  <div class=\"col-md-5\">\n                    <input type=\"text\" [(ngModel)]=\"apValue\" class=\"form-control\" name=\"apValue\"\n                      [readonly]=\"readOnlyForm == 'R'\" />\n                  </div>\n                  <div class=\"col-md-2\">\n                    <i class=\"fa fa-plus\" aria-hidden=\"true\" id=\"increase\" *ngIf=\"enableButtonType != 'E'\"\n                      (click)=\"propertiesListIncrement($event.target, 0)\"></i>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-template>\n        <div class=\"row text-center\" *ngIf=\"loggedInRole != 'User'\">\n          <div class=\"col-md-12\">\n            <button type=\"submit\" *ngIf=\"enableButtonType == ''\"\n              [disabled]=\"f.form.pristine || f.form.invalid || isCreate\" class=\"btn btn-secondary ml-3\">\n              Add\n            </button>\n            <button type=\"button\" *ngIf=\"enableButtonType == 'U'\" class=\"btn btn-secondary ml-2\" (click)=\"update(f)\">\n              Update\n            </button>\n            <!-- <button *ngIf=\"enableButtonType == 'E'\" class=\"btn btn-secondary ml-2\" type=\"button\" (click)=\"enableFormEditable()\">\n              Edit\n            </button> -->\n            <button type=\"button\" (click)=\"cancelForm(f)\" *ngIf=\"\n                enableButtonType == '' ||\n                (enableButtonType == 'U' && loggedInRole != 'User')\n              \" class=\"btn btn-secondary ml-3\">\n              {{ enableButtonType != \"\" ? \"Close\" : \"Clear\" }}\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<!-- All Templates Start-->\n<ng-template #shortListContent let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">Create Client Application</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <label>Creator</label>\n    <select class=\"form-control\" name=\"creator\" [(ngModel)]=\"creator\">\n      <option *ngFor=\"let rl of recruiterList\" [ngValue]=\"rl.id\">\n        {{ rl.name }}</option>\n    </select>\n    <label>Consultants</label>\n    <ng-multiselect-dropdown [placeholder]=\"'choose names..'\" [data]=\"consultantNames\"\n      [(ngModel)]=\"shortListConsultants\" [settings]=\"dropdownSettings\">\n      <!-- (onSelect)=\"onItemSelect($event)\"\n     (onSelectAll)=\"onSelectAll($event)\" -->\n    </ng-multiselect-dropdown>\n    <div *ngIf=\"shortListConsultants\">\n      <table class=\"table table-hover table-striped\">\n        <thead>\n          <tr>\n            <th>Name</th>\n            <th>Description</th>\n            <th>Action</th>\n          </tr>\n        </thead>\n        <tbody class=\"overflow-ele-scroll\">\n          <tr *ngFor=\"let cnt of shortListConsultants\">\n            <td>\n              {{ cnt.item_text }}\n            </td>\n            <td>\n              <input class=\"form-control\" [(ngModel)]=\"cnt.notes\" name=\"experience\" />\n            </td>\n            <td>\n              <button type=\"button\" class=\"btn btn-secondary\" (click)=\"createClientApplication(cnt, f)\">\n                Create\n              </button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">\n      Close\n    </button>\n  </div>\n</ng-template>\n\n<ng-template #sendMailContent let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">Send Mail</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div calss=\"form-group\">\n      <select class=\"form-control\" [(ngModel)]=\"sendTo\" name=\"sel1\" (change)=\"onItemSelect(sendTo, 'email')\">\n        <option [ngValue]=\"null\" hidden selected>--select Consultant--</option>\n        <option *ngFor=\"let cl of consultantList\" [ngValue]=\"cl\">\n          {{ cl.name }}\n        </option>\n      </select>\n    </div>\n    <label>E-Mail</label>\n    <div class=\"form-group\">\n      <input class=\"form-control\" [(ngModel)]=\"sendEmailModel.toEmails\" name=\"tomail\" #tomail=\"ngModel\" />\n    </div>\n    <label>Cc</label>\n    <input type=\"text\" [(ngModel)]=\"sendEmailModel.cc\" class=\"form-control\" name=\"cc\" />\n    <label>Bcc</label>\n    <input type=\"text\" [(ngModel)]=\"sendEmailModel.bcc\" class=\"form-control\" name=\"bcc\" />\n    <label>Subject</label>\n    <input class=\"form-control\" [(ngModel)]=\"sendEmailModel.subject\" name=\"sub\" />\n    <label>Message Body</label>\n    <angular-editor [(ngModel)]=\"sendEmailModel.body\" name=\"body\" [config]=\"emailEditorconfig\">\n    </angular-editor>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"sendEmailReq(createConsultants)\">\n      Send\n    </button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">\n      Close\n    </button>\n  </div>\n</ng-template>\n\n<ng-template #sendSMSContent let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">Send SMS</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <select class=\"form-control\" [(ngModel)]=\"sendTo\" name=\"sel2\" (change)=\"onItemSelect(sendTo, 'sms')\">\n      <option [ngValue]=\"null\" hidden selected>--select Consultant--</option>\n      <option *ngFor=\"let cl of consultantList\" [ngValue]=\"cl\">\n        {{ cl.name }}\n      </option>\n    </select>\n    <label>Numbers</label>\n    <div class=\"form-group\">\n      <input class=\"form-control\" [(ngModel)]=\"sendSmsModel.contactNumbers\" name=\"tonumbers\" #tonumbers=\"ngModel\" />\n    </div>\n    <!-- <ng-multiselect-dropdown\n      [placeholder]=\"'choose numbers..'\"\n      [data]=\"numbersForSmsDropdown\"\n      [(ngModel)]=\"numbersToSend\"\n      [settings]=\"dropdownSettings\"\n    >\n      (onSelect)=\"onItemSelect($event)\"\n     (onSelectAll)=\"onSelectAll($event)\" \n    </ng-multiselect-dropdown>-->\n    <label>Message Body</label>\n    <textarea class=\"form-control\" cols=\"5\" rows=\"8\" [(ngModel)]=\"sendSmsModel.message\" name=\"mbody\"></textarea>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"sendSmsReq()\" [disabled]=\"creating\">\n      {{ creating ? \"loading...\" : (\"Send\" | translate) }}\n    </button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">\n      Close\n    </button>\n  </div>\n</ng-template>\n\n<ng-template #trashContent let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">Client Position</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>Are you sure you want to delete ? &hellip;</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"trash()\">\n      Ok\n    </button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">\n      Close\n    </button>\n  </div>\n</ng-template>\n<ng-template #createConsultants let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">Create Consultants</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form name=\"form\" id=\"consultantForm\" (ngSubmit)=\"consultantForm.form.valid && createConsultant()\"\n      #consultantForm=\"ngForm\" novalidate>\n      <div *ngIf=\"consultantsToCreate\">\n        <table class=\"table table-hover table-striped\">\n          <thead>\n            <tr>\n              <th>Email</th>\n              <th>Name</th>\n              <th>Phone</th>\n            </tr>\n          </thead>\n          <tbody class=\"overflow-ele-scroll\">\n            <tr *ngFor=\"let cnt of consultantsToCreate\">\n              <td>\n                <input class=\"form-control\" [(ngModel)]=\"cnt.email\" name=\"email\" #email=\"ngModel\" readonly />\n              </td>\n              <td>\n                <input class=\"form-control\" [(ngModel)]=\"cnt.fullname\" name=\"fullname\" [ngClass]=\"{\n                    'is-invalid': consultantForm.submitted && fullname.invalid\n                  }\" #fullname=\"ngModel\" required />\n                <div class=\"invalid-feedback\">\n                  Fullname is mandatory\n                </div>\n              </td>\n              <td>\n                <input class=\"form-control\" [(ngModel)]=\"cnt.phone\" name=\"phone\" #phone=\"ngModel\" />\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <hr />\n      <div class=\"row pull-right\">\n        <div class=\"col-md-12\">\n          <button type=\"submit\" class=\"btn btn-secondary ml-3\" [disabled]=\"creating\">\n            {{ creating ? \"loading...\" : (\"Create\" | translate) }}\n          </button>\n          <button type=\"button\" class=\"btn btn-secondary ml-3\" (click)=\"c('Close click')\" [disabled]=\"creating\">\n            Close\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</ng-template>\n\n<ng-template #clientCall let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">\n      Consultant Call History<span class=\"required\">*</span>\n    </h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <label>Description</label>\n    <textarea class=\"form-control\" cols=\"5\" rows=\"8\" [(ngModel)]=\"clchModel.description\" name=\"desc\"></textarea>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"createClientCallHistory()\" [disabled]=\"creating\">\n      {{ creating ? \"loading...\" : (\"Send\" | translate) }}\n    </button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">\n      Close\n    </button>\n  </div>\n</ng-template>\n<ng-template #editPI let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header modal-popup-header-bg\">\n    <h4 class=\"modal-title\">\n      Edit Posting Info<span class=\"required\">*</span>\n    </h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label>Shine</label>\n        <textarea class=\"form-control\" cols=\"2\" rows=\"2\" [(ngModel)]=\"model.shineURL\" name=\"shine\"></textarea>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label>Naukri</label>\n        <textarea class=\"form-control\" cols=\"2\" rows=\"2\" [(ngModel)]=\"model.naukriURL\" name=\"naukri\"></textarea>\n      </div>\n    </div>\n\n    <h5 class=\"pt-2\">Tracker</h5>\n    <hr />\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label>Shine Mass Mailing</label>\n          <div class=\"row\">\n            <div class=\"col-sm-8\">\n              <input class=\"form-control input-group-lg reg_name\" type=\"date\" name=\"shineMassMailing\"\n                [(ngModel)]=\"model.shineMassMailing\" max=\"9999-12-31\" />\n            </div>\n            <div class=\"col-sm-4\">\n              <input class=\"form-control input-group-lg reg_name\" type=\"number\" name=\"shineMassMailingCount\"\n                [(ngModel)]=\"model.shineMassMailingCount\" placeholder=\"Count\" />\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label>Naukri Mass Mailing</label>\n          <div class=\"row\">\n            <div class=\"col-sm-8\">\n              <input class=\"form-control input-group-lg reg_name\" type=\"date\" name=\"naukriMassMailing\"\n                [(ngModel)]=\"model.naukriMassMailing\" max=\"9999-12-31\" />\n            </div>\n            <div class=\"col-sm-4\">\n              <input class=\"form-control input-group-lg reg_name\" type=\"number\" name=\"naukriMassMailingCount\"\n                [(ngModel)]=\"model.naukriMassMailingCount\" placeholder=\"Count\" />\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label>Shine Posting</label>\n          <input type=\"date\" class=\"form-control\" name=\"shinePosting\" [(ngModel)]=\"model.shinePosting\"\n            max=\"9999-12-31\" />\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label>Naukri Posting</label>\n          <input type=\"date\" class=\"form-control\" name=\"naukriPosting\" [(ngModel)]=\"model.naukriPosting\"\n            max=\"9999-12-31\" />\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label>Facebook Posting</label>\n          <input type=\"date\" class=\"form-control\" name=\"facebookPosting\" [(ngModel)]=\"model.facebookPosting\"\n            max=\"9999-12-31\" />\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label>Twitter Posting</label>\n          <input type=\"date\" class=\"form-control\" name=\"twitterPosting\" [(ngModel)]=\"model.twitterPosting\"\n            max=\"9999-12-31\" />\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"editPostingInfo()\" [disabled]=\"creating\">\n      {{ creating ? \"loading...\" : (\"Update\" | translate) }}\n    </button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">\n      Close\n    </button>\n  </div>\n</ng-template>\n<!-- All Templates Ends-->\n"

/***/ }),

/***/ "./src/app/layout/client-position/client-position.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/layout/client-position/client-position.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-custom-scrollbar {\n  position: relative;\n  height: 31.5em;\n  overflow: auto; }\n\n.table-wrapper-scroll-y {\n  display: block; }\n\n.required {\n  color: red; }\n\n.bl-trans {\n  border-left: 10px solid transparent; }\n\n.modal-dialog {\n  max-width: 565px !important; }\n\n.container {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.padding-top {\n  padding-top: 60px; }\n\n.dropdown-toggle::after {\n  display: none; }\n\n.drop-list:hover {\n  cursor: pointer; }\n\n.file-download:hover {\n  cursor: pointer;\n  color: blue;\n  text-decoration: underline; }\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: #c1c1c1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NsaWVudC1wb3NpdGlvbi9EOlxcQ0NQVCBNQUlOXFx0cnVua1xcY2NwdC1wYXJlbnRcXGNjcHQtd2ViXFxzcmNcXG1haW5cXHdlYi9zcmNcXGFwcFxcbGF5b3V0XFxjbGllbnQtcG9zaXRpb25cXGNsaWVudC1wb3NpdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsZUFBYyxFQUNmOztBQUNEO0VBQ0UsZUFBYyxFQUNmOztBQUNEO0VBQ0UsV0FBVSxFQUNYOztBQUNEO0VBQ0Usb0NBQW1DLEVBQ3BDOztBQUNEO0VBQ0UsNEJBQTJCLEVBQzVCOztBQUNEO0VBQ0UsYUFBWTtFQUNaLGNBQWE7RUFDYix3QkFBdUI7RUFDdkIsb0JBQW1CLEVBQ3BCOztBQUNEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0UsY0FBYSxFQUNkOztBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLFlBQVc7RUFDWCwyQkFBMEIsRUFDM0I7O0FBQ0Q7RUFFSSwwQkFBeUIsRUFDMUIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvY2xpZW50LXBvc2l0aW9uL2NsaWVudC1wb3NpdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1jdXN0b20tc2Nyb2xsYmFyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAzMS41ZW07XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLnRhYmxlLXdyYXBwZXItc2Nyb2xsLXkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5yZXF1aXJlZCB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4uYmwtdHJhbnMge1xyXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcbi5tb2RhbC1kaWFsb2cge1xyXG4gIG1heC13aWR0aDogNTY1cHggIWltcG9ydGFudDtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5wYWRkaW5nLXRvcCB7XHJcbiAgcGFkZGluZy10b3A6IDYwcHg7XHJcbn1cclxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmRyb3AtbGlzdDpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZmlsZS1kb3dubG9hZDpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiBibHVlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbi50YWJsZS1zdHJpcGVkIHtcclxuICB0Ym9keSB0cjpudGgtb2YtdHlwZShvZGQpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMWMxYzE7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/client-position/client-position.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layout/client-position/client-position.component.ts ***!
  \*********************************************************************/
/*! exports provided: ClientPositionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPositionComponent", function() { return ClientPositionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_constants_url_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/constants/url-constants */ "./src/app/layout/components/constants/url-constants.ts");
/* harmony import */ var _components_constants_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/constants/properties */ "./src/app/layout/components/constants/properties.ts");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _client_position_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client-position.model */ "./src/app/layout/client-position/client-position.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/services */ "./src/app/shared/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ClientPositionComponent = /** @class */ (function () {
    function ClientPositionComponent(http, toastr, elRef, modalService, router, titleService, storageService) {
        this.http = http;
        this.toastr = toastr;
        this.elRef = elRef;
        this.modalService = modalService;
        this.router = router;
        this.titleService = titleService;
        this.storageService = storageService;
        this.model = {};
        this.clchModel = {};
        this.clientPositionList = [];
        this.pagedCPList = [];
        this.consultantCreateList = [];
        this.consultantList = [];
        this.smsList = [];
        this.clientPositionStatusList = [];
        this.clientList = [];
        this.recruiterList = [];
        this.messageTemplateModel = {};
        this.emailTemplateModel = {};
        this.sendSmsModel = {};
        this.sendEmailModel = {};
        this.numbersForSmsDropdown = [];
        this.numbersToSend = [];
        this.mailIdForMails = [];
        this.shortListConsultants = [];
        this.consultantNames = [];
        this.actionModel = {};
        this.invalidAppCode = false;
        this.closedByEnable = false;
        this.selectedRecrd = 0;
        this.closeResult = "";
        this.urlConstants = new _components_constants_url_constants__WEBPACK_IMPORTED_MODULE_2__["URLConstants"]();
        this.properties = new _components_constants_properties__WEBPACK_IMPORTED_MODULE_3__["Properties"]();
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.shortList = "shortList";
        this.sms = "sms";
        this.email = "email";
        this.numberOfPositions = 0;
        this.creator = 0;
        this.apName = "";
        this.apValue = "";
        this.loggedInRole = "";
        this.showAction = false;
        this.actionsList = new _client_position_model__WEBPACK_IMPORTED_MODULE_5__["ActionsList"]();
        this.isCreate = false;
        this.showInactiveContent = false;
        this.pageSize = 20;
        this.sendTo = null;
        this.consultantsToCreate = [];
        this.getAllCPS = this.http.get(this.urlConstants.CPSGetAll);
        this.getAllR = this.http.get(this.urlConstants.RDropdown);
        this.getAllC = this.http.get(this.urlConstants.ClientDropdown);
        this.getAllCon = this.http.get(this.urlConstants.CDropdown);
        this.creating = false;
        this.config = {
            editable: true,
            spellcheck: true,
            height: "15rem",
            minHeight: "5rem",
            translate: "no",
        };
        this.emailEditorconfig = {
            editable: true,
            spellcheck: true,
            height: "15rem",
            minHeight: "5rem",
            translate: "no",
        };
        this.paginateConfig = {
            itemsPerPage: 0,
            currentPage: 0,
            totalItems: 0,
        };
        // tslint:disable-next-line:no-unused-expression
        this.actionModel.sendMail;
        this.getScreenSize();
    }
    ClientPositionComponent.prototype.getScreenSize = function (event) {
        this.screenHeight = window.innerHeight;
    };
    ClientPositionComponent.prototype.ngOnInit = function () {
        /*Autheticate user with the token */
        if (!this.http.isAuthenticate()) {
            this.router.navigate(["/login"]);
        }
        this.getAllDropdowns();
        this.loggedInRole = sessionStorage.getItem("role");
        this.dropdownSettings = {
            singleSelection: false,
            idField: "item_id",
            textField: "item_text",
            selectAllText: "Select All",
            unSelectAllText: "UnSelect All",
            itemsShowLimit: 3,
            allowSearchFilter: true,
        };
        this.init();
        this.initialGetAll();
        this.spinner(true);
        this.checkStorage();
    };
    ClientPositionComponent.prototype.checkStorage = function () {
        if (this.storageService.clientId) {
            this.model.clientId = this.storageService.clientId;
        }
    };
    ClientPositionComponent.prototype.paginateConfigDeclare = function (itemsPerPage, currentPage, totalItems) {
        (this.paginateConfig.itemsPerPage = itemsPerPage),
            (this.paginateConfig.currentPage = currentPage),
            (this.paginateConfig.totalItems = totalItems);
    };
    ClientPositionComponent.prototype.init = function () {
        // this.http.get(this.urlConstants.CPGetAll).subscribe(resp => {
        //   this.clientPositionList = resp as any;
        //   this.pagedCPList = resp as any;
        //   this.spinner(true);
        //   this.cpListLength = this.clientPositionList.length;
        //   this.pageChange(this.page);
        // });
        this.paginateConfigDeclare(this.properties.ITEMSPERPAGE, 1, 0);
        this.model.properties = [];
        this.model.cpstatus = "Open";
        this.model.requiredPositions = "1";
        this.page = 1;
        this.setAdditionalDefaultProps();
    };
    ClientPositionComponent.prototype.initialGetAll = function () {
        var _this = this;
        var pageNumber = this.paginateConfig.currentPage - 1;
        var temp = this.http.get(this.urlConstants.CPGetAllByStatus +
            pageNumber +
            "&pageSize=50&sortBy=id&status=Active");
        temp.subscribe(function (resp) {
            _this.clientPositionList = resp;
            _this.clientPositionList.list.forEach(function (cl) {
                if (_this.validate(cl.shineURL) || _this.validate(cl.naukriURL)) {
                    cl["isProfilePosted"] = true;
                }
                else {
                    cl["isProfilePosted"] = false;
                }
            });
            //this.pageChange(this.page);
            _this.paginateConfig.totalItems = _this.clientPositionList.noOfRecords;
            _this.tableType = "Active Positions";
        });
    };
    ClientPositionComponent.prototype.setAdditionalDefaultProps = function () {
        this.model.properties.push({ name: "Office Hours", value: "" }, { name: "Interview Process", value: "" }, { name: "Communication", value: "" }, { name: "Gender", value: "" });
    };
    ClientPositionComponent.prototype.validate = function (value) {
        var bool = value ? true : false;
        return bool;
    };
    ClientPositionComponent.prototype.getAllDropdowns = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])(this.getAllCPS, this.getAllR, this.getAllC, this.getAllCon
        // forkJoin on works for observables that complete
        ).subscribe(function (listofrecords) {
            _this.clientPositionStatusList = listofrecords[0];
            _this.recruiterList = listofrecords[1];
            _this.clientList = listofrecords[2];
            _this.consultantList = listofrecords[3];
        });
    };
    ClientPositionComponent.prototype.enableFormEditable = function () {
        this.readOnlyForm = "";
        this.enableButtonType = "U";
        this.config.editable = true;
        this.closedByEnable = true;
    };
    ClientPositionComponent.prototype.setModel = function (id) {
        this.getCPById(id);
        this.config.editable = false;
        this.readOnlyForm = "U";
        this.enableButtonType = "E";
        this.showAction = true;
        this.action = null;
    };
    ClientPositionComponent.prototype.getCPById = function (id) {
        var _this = this;
        this.spinner(false);
        var temp = this.http.get(this.urlConstants.CPGetById + id);
        temp.subscribe(function (resp) {
            if (resp) {
                _this.model = _this.mapToUpdateModel(resp);
            }
            if (_this.model.properties == null) {
                _this.model.properties = [];
            }
            _this.spinner(true);
        });
    };
    ClientPositionComponent.prototype.mapToUpdateModel = function (response) {
        var temp = response;
        this.model = temp;
        this.model["clientId"] = temp.client.id;
        this.model["cpstatus"] = temp.status.code;
        this.model["assignedTo"] = temp.assignedTo ? temp.assignedTo.id : 0;
        this.model["closedBy"] = temp.closedBy ? temp.closedBy.id : 0;
        this.titleService.setTitle("CCPT-" + temp.client.name + "-" + temp.role);
        return this.model;
    };
    ClientPositionComponent.prototype.propertiesListIncrement = function (event, i) {
        switch (event.id) {
            case "decrease": {
                this.model.properties.splice(i, 1);
                break;
            }
            case "increase": {
                if (this.model.properties == null) {
                    this.model.properties = [];
                    this.model.properties.push({
                        name: this.apName,
                        value: this.apValue,
                    });
                    this.apName = "";
                    this.apValue = "";
                }
                else if (this.model.properties.length == 0) {
                    this.model.properties.push({
                        name: this.apName,
                        value: this.apValue,
                    });
                    this.apName = "";
                    this.apValue = "";
                }
                else {
                    var propertyExist = void 0;
                    for (var i_1 = 0; i_1 < this.model.properties.length; i_1++) {
                        if (this.model.properties[i_1].name == this.apName &&
                            this.model.properties[i_1].value == this.apValue) {
                            propertyExist = true;
                        }
                        else {
                            propertyExist = false;
                        }
                    }
                    if (propertyExist) {
                        this.toastr.error(this.properties.PROPERTY_EXIST, this.properties.PROPERTIES);
                    }
                    else {
                        this.model.properties.push({
                            name: this.apName,
                            value: this.apValue,
                        });
                        this.apName = "";
                        this.apValue = "";
                    }
                }
                break;
            }
        }
    };
    ClientPositionComponent.prototype.createApplication = function (shortListContent) {
        for (var i = 0; i < this.consultantList.length; i++) {
            var temp = {
                item_id: this.consultantList[i].id,
                item_text: this.consultantList[i].name,
                notes: "",
            };
            this.consultantNames.push(temp);
        }
        this.open(this.model.id, shortListContent);
    };
    ClientPositionComponent.prototype.onItemSelect = function (cl, type) {
        if (type == "email") {
            if (this.sendEmailModel.toEmails.length > 0) {
                this.sendEmailModel.toEmails += ",";
            }
            this.sendEmailModel.toEmails += cl.email;
            this.sendTo = null;
        }
        else if (type == "sms") {
            if (this.sendSmsModel.contactNumbers.length > 0) {
                this.sendSmsModel.contactNumbers += ",";
            }
            this.sendSmsModel.contactNumbers += cl.phone;
            this.sendTo = null;
        }
    };
    ClientPositionComponent.prototype.emailJd = function (sendMailContent) {
        var _this = this;
        var temp = { cpId: this.model.id };
        this.http
            .post(temp, this.urlConstants.EmailTemplateBuildContent + "Job Description")
            .subscribe(function (resp) {
            _this.sendEmailModel = resp;
            _this.sendEmailModel.target = "";
            _this.sendEmailModel.toEmails = "";
        });
        this.open(this.model.id, sendMailContent);
    };
    ClientPositionComponent.prototype.smsJd = function (sendSMSContent) {
        var _this = this;
        var temp = { cpId: this.model.id };
        this.http
            .post(temp, this.urlConstants.SMSTemplateBuildContent + "JobDescription")
            .subscribe(function (resp) {
            _this.sendSmsModel = resp;
            _this.sendSmsModel.target = "";
            _this.sendSmsModel.contactNumbers = "";
        });
        this.open(this.model.id, sendSMSContent);
    };
    ClientPositionComponent.prototype.cloneData = function (data) {
        data.id = null;
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.config.editable = true;
        this.closedByEnable = false;
    };
    ClientPositionComponent.prototype.formReset = function () {
        this.model = {};
        this.model.properties = [];
        this.model.cpstatus = "Open";
        this.model.requiredPositions = "1";
    };
    ClientPositionComponent.prototype.getRecruiterId = function () {
        var temp = sessionStorage.getItem("username");
        var id;
        this.recruiterList.forEach(function (rl) {
            if (rl.email === temp) {
                id = rl.id;
            }
        });
        return id;
    };
    ClientPositionComponent.prototype.createReqClch = function (clientCall, resp) {
        var decision = confirm(this.properties.CONFIRM_ClCH_NEW);
        if (decision == true) {
            this.clchModel.cpId = resp.id;
            this.open(this.model.id, clientCall);
        }
    };
    ClientPositionComponent.prototype.setTodaysDate = function () {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, "0");
        var mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
        var yyyy = today.getFullYear();
        var temp = yyyy + "-" + mm + "-" + dd;
        return temp;
    };
    ClientPositionComponent.prototype.createClientCallHistory = function () {
        var _this = this;
        this.creating = true;
        this.clchModel.calledBy = this.getRecruiterId();
        this.clchModel.calledDate = this.setTodaysDate();
        var temp = this.http.post(this.clchModel, this.urlConstants.CCHCreate);
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.CREATE, _this.properties.CON_C_H);
            //this.create(this.cpForm);
            _this.clchModel = {};
            _this.creating = false;
            _this.close();
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.CON_C_H);
            _this.creating = false;
        });
    };
    ClientPositionComponent.prototype.create = function (clientPositionForm, clientCall) {
        var _this = this;
        if (!this.http.checkAdditionPropValueExist(this.model.properties)) {
            this.toastr.error("Please provide all property values", this.properties.CP);
        }
        else {
            this.isCreate = true;
            this.spinner(false);
            // tslint:disable-next-line:max-line-length
            this.model.generatedCode = this.generateCPCode(this.model.clientId, this.model.role, this.model.location);
            var temp = this.http.post(this.model, this.urlConstants.CPCreate);
            temp.subscribe(function (resp) {
                _this.toastr.success(_this.properties.CREATE, _this.properties.CP);
                _this.init();
                _this.formReset();
                _this.spinner(true);
                clientPositionForm.resetForm();
                _this.isCreate = false;
                _this.paginateConfig.currentPage = 1;
                _this.checkTableType();
                _this.emptyStorage();
                if (_this.showAction) {
                    _this.showAction = false;
                }
                _this.createReqClch(clientCall, resp);
            }, function (err) {
                _this.toastr.error(err.error.message, _this.properties.CP);
                _this.isCreate = false;
                _this.spinner(true);
            });
        }
    };
    ClientPositionComponent.prototype.emptyStorage = function () {
        this.storageService.clientId = 0;
        this.model.clientId = 0;
    };
    ClientPositionComponent.prototype.generateCPCode = function (cnt, role, loc) {
        if (loc == null || loc === undefined) {
            return this.getClientNameById(cnt) + "-" + role;
        }
        else {
            return this.getClientNameById(cnt) + "-" + role + "-" + loc;
        }
    };
    ClientPositionComponent.prototype.getClientNameById = function (clientId) {
        var temp = this.clientList.filter(function (c) { return c.id === clientId; });
        return temp[0].name;
    };
    /** Check contains Only Digits */
    ClientPositionComponent.prototype.containsOnlyDigits = function (code) {
        var isnum = /^\d+$/.test(code);
        return isnum;
    };
    /** Check contains Only alphabets */
    ClientPositionComponent.prototype.containsOnlyAlphabets = function (code) {
        var isStr = /^[a-zA-Z]+$/.test(code);
        if (isStr === false) {
            return false;
        }
        return isStr;
    };
    ClientPositionComponent.prototype.update = function (clientPositionForm) {
        var _this = this;
        // tslint:disable-next-line:max-line-length
        this.spinner(false);
        this.model.generatedCode = this.generateCPCode(this.model.clientId, this.model.role, this.model.location);
        var temp = this.http.update(this.model, this.urlConstants.CPUpdate);
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.UPDATE, _this.properties.CP);
            _this.formReset();
            _this.init();
            _this.spinner(true);
            clientPositionForm.resetForm();
            _this.checkTableType();
            _this.readOnlyForm = "";
            _this.enableButtonType = "";
            _this.closedByEnable = false;
            _this.showAction = false;
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.CP);
            _this.spinner(true);
        });
    };
    ClientPositionComponent.prototype.cancelForm = function (clientPositionForm) {
        clientPositionForm.resetForm();
        this.formReset();
        this.init();
        this.readOnlyForm = "";
        this.enableButtonType = "";
        this.closedByEnable = false;
        this.showAction = false;
    };
    ClientPositionComponent.prototype.trash = function () {
        var _this = this;
        this.spinner(false);
        var temp = this.http.delete(this.urlConstants.CPDelete + this.selectedRecrd);
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.DELETE, _this.properties.CP);
            _this.init();
            _this.close();
            _this.formReset();
            _this.spinner(true);
            _this.checkTableType();
            _this.readOnlyForm = "";
            _this.enableButtonType = "";
            _this.showAction = false;
        }, function (err) {
            if (err.status === 200) {
                _this.init();
                _this.close();
                _this.formReset();
                return _this.toastr.success(_this.properties.DELETE, _this.properties.CP);
            }
            _this.spinner(true);
            _this.toastr.error(err.error.message, _this.properties.CP);
        });
    };
    ClientPositionComponent.prototype.selectSms = function (sms) {
        var _this = this;
        var temp = { cpId: this.selectedRecrd };
        this.http
            .post(temp, this.urlConstants.SMSTemplateBuildContent + sms.value)
            .subscribe(function (resp) {
            // tslint:disable-next-line:no-shadowed-variable
            var temp = resp;
            _this.sendSmsModel.message = temp.message;
        });
    };
    ClientPositionComponent.prototype.sendSmsReq = function () {
        var _this = this;
        this.spinner(false);
        this.creating = true;
        var temp = this.http.post(this.sendSmsModel, this.urlConstants.SMSTemplateSend);
        temp.subscribe(function (resp) {
            /**Check if any new consultants exists in emails to which send  */
            _this.close();
            _this.creating = false;
            _this.sendSmsModel = {};
            _this.toastr.success("Sms sent successfully", "Sent!");
            _this.spinner(true);
        }, function (err) {
            _this.creating = false;
            _this.toastr.error(err.error.message, _this.properties.CP);
            _this.spinner(true);
        });
    };
    ClientPositionComponent.prototype.sendEmailReq = function (createConsultants) {
        var _this = this;
        this.spinner(false);
        this.creating = true;
        var temp = this.http.post(this.sendEmailModel, this.urlConstants.EmailTemplateSend);
        temp.subscribe(function (resp) {
            /**Check if any new consultants exists in emails to which send  */
            _this.close();
            _this.creating = false;
            _this.quickAddConsultants(createConsultants);
            _this.sendEmailModel = {};
            _this.toastr.success("Email/Emails sent successfully", "Sent!");
            _this.spinner(true);
        }, function (err) {
            _this.creating = false;
            _this.toastr.error(err.error.message, _this.properties.CP);
            _this.spinner(true);
        });
    };
    ClientPositionComponent.prototype.quickAddConsultants = function (createConsultants) {
        var _this = this;
        this.consultantsToCreate = [];
        var newConEmails = [];
        var selectedEmails = this.sendEmailModel.toEmails.split(",");
        var conEmails = this.consultantList.map(function (cl) {
            return cl.email;
        });
        selectedEmails.forEach(function (ets) {
            if (conEmails.indexOf(ets) == -1 && newConEmails.indexOf(ets) == -1) {
                newConEmails.push(ets);
            }
        });
        newConEmails.forEach(function (element) {
            var temp = {
                email: element,
                gender: "",
                fullname: "",
                phone: "+91",
                conStatus: "Active",
            };
            _this.consultantsToCreate.push(temp);
        });
        if (this.consultantsToCreate.length > 0) {
            this.open(this.model.id, createConsultants);
        }
    };
    ClientPositionComponent.prototype.createConsultant = function () {
        var _this = this;
        this.spinner(false);
        this.creating = true;
        this.consultantsToCreate.forEach(function (consultant) {
            var temp = _this.http.post(consultant, _this.urlConstants.CCreate);
            temp.subscribe(function (resp) {
                _this.spinner(true);
                _this.creating = false;
                _this.toastr.success(_this.properties.CREATE, _this.properties.CON);
                _this.close();
            }, function (err) {
                _this.creating = false;
                _this.toastr.error(err.error.message, _this.properties.CON);
                _this.spinner(true);
            });
        });
    };
    ClientPositionComponent.prototype.createClientApplication = function (data, clientPositionForm) {
        var _this = this;
        // TODO:Need to check the code
        var dataToCreate = {
            cpId: this.selectedRecrd,
            consultantId: data.item_id,
            caStatus: "NEW",
            description: data.notes,
            creatorId: this.creator,
        };
        this.spinner(false);
        var temp = this.http.post(dataToCreate, this.urlConstants.CACreate);
        temp.subscribe(function (resp) {
            _this.toastr.success(_this.properties.CREATE, _this.properties.CA);
            _this.init();
            _this.formReset();
            clientPositionForm.resetForm();
            _this.isCreate = false;
            if (_this.showAction) {
                _this.showAction = false;
            }
            _this.shortListConsultants = [];
            _this.spinner(true);
        }, function (err) {
            _this.toastr.error(err.statusText, _this.properties.CA);
            _this.spinner(true);
        });
    };
    /**
     * @param
     * 1) content consists the modal instance
     * 2) Selected contains the code of selected row
     */
    ClientPositionComponent.prototype.open = function (event, content) {
        var _this = this;
        // content, selected: number, type: string
        if (event) {
            this.selectedRecrd = event;
        }
        this.modalRef = this.modalService.open(content, {
            size: "lg",
            backdrop: "static",
        });
        this.modalRef.result.then(function (result) {
            _this.action = null;
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.action = null;
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
        if (content) {
            if (content.type === this.email) {
                for (var i = 0; i < this.consultantList.length; i++) {
                    var temp = {
                        item_id: this.consultantList[i].id,
                        item_text: this.consultantList[i].fullname,
                        notes: "",
                    };
                    this.mailIdForMails.push(this.consultantList[i].email);
                }
            }
            if (content.type === this.sms) {
                this.http.get(this.urlConstants.SMSTemplateGetAll).subscribe(function (resp) {
                    _this.smsList = resp;
                });
                for (var i = 0; i < this.consultantList.length; i++) {
                    var temp = {
                        item_id: this.consultantList[i].phone,
                        item_text: this.consultantList[i].fullname,
                        notes: "",
                    };
                    this.numbersForSmsDropdown.push(temp);
                }
            }
        }
    };
    ClientPositionComponent.prototype.close = function () {
        this.modalRef.close();
    };
    ClientPositionComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return "by pressing ESC";
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return "by clicking on a backdrop";
        }
        else {
            return "with: " + reason;
        }
    };
    ClientPositionComponent.prototype.pageChanged = function (event) {
        this.paginateConfig.currentPage = event;
        switch (this.tableType) {
            case "Active Positions": {
                this.initialGetAll();
                break;
            }
            case "Inactive Positions": {
                this.showInactive();
                break;
            }
        }
        // this.initialGetAll();
    };
    ClientPositionComponent.prototype.spinner = function (isSpinner) {
        this.listReturned = isSpinner;
    };
    ClientPositionComponent.prototype.checkTableType = function () {
        if (this.showInactiveContent) {
            this.showInactive();
        }
        else {
            this.showActive();
        }
    };
    ClientPositionComponent.prototype.showActive = function () {
        if (this.tableType != "Active Positions") {
            this.paginateConfigDeclare(this.properties.ITEMSPERPAGE, 1, 0);
        }
        this.initialGetAll();
    };
    ClientPositionComponent.prototype.showInactive = function () {
        var _this = this;
        this.tableType = "Inactive Positions";
        var pageNumber = this.paginateConfig.currentPage - 1;
        var temp = this.http.get(this.urlConstants.CPGetAllByStatus +
            pageNumber +
            "&pageSize=50&sortBy=id&status=Inactive");
        temp.subscribe(function (resp) {
            _this.clientPositionList = resp;
            _this.paginateConfig.totalItems = _this.clientPositionList.noOfRecords;
        });
    };
    /**
     * shineURL: string;
      shinePosting:Date;
      naukriPosting:Date;
      facebookPosting:Date;
      twitterPosting:Date;
      shineMassMailing:Date;
      naukriMassMailing:Date;
      shineMassMailingCount:number;
      naukriMassMailingCount:number;
     */
    ClientPositionComponent.prototype.editPostingInfo = function () {
        var _this = this;
        this.creating = true;
        var postingInfo = {};
        postingInfo.id = this.model.id;
        postingInfo.shineURL = this.model.shineURL;
        postingInfo.naukriURL = this.model.naukriURL;
        postingInfo.shinePosting = this.model.shinePosting;
        postingInfo.naukriPosting = this.model.naukriPosting;
        postingInfo.facebookPosting = this.model.facebookPosting;
        postingInfo.twitterPosting = this.model.twitterPosting;
        postingInfo.shineMassMailing = this.model.shineMassMailing;
        postingInfo.naukriMassMailing = this.model.naukriMassMailing;
        postingInfo.shineMassMailingCount = this.model.shineMassMailingCount;
        postingInfo.naukriMassMailingCount = this.model.naukriMassMailingCount;
        this.http.update(postingInfo, this.urlConstants.CPUpdatePosting).subscribe(function (resp) {
            _this.toastr.success(_this.properties.UPDATE, _this.properties.CP);
            _this.creating = false;
            _this.close();
        }, function (err) {
            _this.toastr.error(err.error.message, _this.properties.CP);
            _this.creating = false;
        });
    };
    ClientPositionComponent.prototype.checkCTC = function () {
        if (this.model.maxCtc != null && this.model.minCtc != null) {
            if (this.model.maxCtc < this.model.minCtc) {
                this.model.maxCtc = null;
                this.toastr.error("Max CTC should be greater than Min CTC", this.properties.CP);
            }
        }
    };
    ClientPositionComponent.prototype.setClientAddress = function (event, clientId) {
        var _this = this;
        if (event.target.checked) {
            this.clientList.forEach(function (cl) {
                if (clientId == cl.id) {
                    _this.model.address = cl.address;
                }
            });
        }
        else {
            this.model.address = null;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:resize", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ClientPositionComponent.prototype, "getScreenSize", null);
    ClientPositionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-client-position",
            template: __webpack_require__(/*! ./client-position.component.html */ "./src/app/layout/client-position/client-position.component.html"),
            styles: [__webpack_require__(/*! ./client-position.component.scss */ "./src/app/layout/client-position/client-position.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_4__["routerTransition"])()],
        }),
        __metadata("design:paramtypes", [_shared_services__WEBPACK_IMPORTED_MODULE_9__["HttpClientService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_9__["ToastrCustomService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"],
            _shared_services__WEBPACK_IMPORTED_MODULE_9__["StorageService"]])
    ], ClientPositionComponent);
    return ClientPositionComponent;
}());



/***/ }),

/***/ "./src/app/layout/client-position/client-position.model.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/client-position/client-position.model.ts ***!
  \*****************************************************************/
/*! exports provided: SendSmsModel, SendEmailModel, ActionsList, PostingInfoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendSmsModel", function() { return SendSmsModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendEmailModel", function() { return SendEmailModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsList", function() { return ActionsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostingInfoModel", function() { return PostingInfoModel; });
var SendSmsModel = /** @class */ (function () {
    function SendSmsModel() {
    }
    return SendSmsModel;
}());

var SendEmailModel = /** @class */ (function () {
    function SendEmailModel() {
    }
    return SendEmailModel;
}());

var ActionsList = /** @class */ (function () {
    function ActionsList() {
        this.actions = [{ key: 'Edit', value: 'Edit' }, { key: 'Send JD', value: 'Send JD' }, { key: 'Clone', value: 'Clone' }, { key: 'Create Application', value: 'Create Application' }, { key: 'Delete', value: 'Delete' }, { key: 'Close', value: 'Close' }];
    }
    return ActionsList;
}());

var PostingInfoModel = /** @class */ (function () {
    function PostingInfoModel() {
    }
    return PostingInfoModel;
}());



/***/ }),

/***/ "./src/app/layout/client-position/client-position.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/client-position/client-position.module.ts ***!
  \******************************************************************/
/*! exports provided: ClientPositionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPositionModule", function() { return ClientPositionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _client_position_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client-position-routing.module */ "./src/app/layout/client-position/client-position-routing.module.ts");
/* harmony import */ var _client_position_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client-position.component */ "./src/app/layout/client-position/client-position.component.ts");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ClientPositionModule = /** @class */ (function () {
    function ClientPositionModule() {
    }
    ClientPositionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            // tslint:disable-next-line:max-line-length
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _client_position_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClientPositionRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["SharedPipesModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["ActionListModule"],
                _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_3__["NgMultiSelectDropDownModule"].forRoot()
            ],
            declarations: [_client_position_component__WEBPACK_IMPORTED_MODULE_6__["ClientPositionComponent"]]
        })
    ], ClientPositionModule);
    return ClientPositionModule;
}());



/***/ })

}]);
//# sourceMappingURL=client-position-client-position-module.js.map