(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["maps-maps-module"],{

/***/ "./node_modules/@ngui/map/__ivy_ngcc__/esm5/ngui-map.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ngui/map/__ivy_ngcc__/esm5/ngui-map.js ***!
  \**************************************************************/
/*! exports provided: BicyclingLayer, NavigatorGeolocation, OptionBuilder, NG_MAP_CONFIG_TOKEN, NgMapApiLoader, NgMapAsyncApiLoader, NgMapAsyncCallbackApiLoader, NguiMapComponent, InfoWindow, CustomMarker, Circle, DataLayer, DirectionsRenderer, DrawingManager, GeoCoder, GroundOverlay, HeatmapLayer, KmlLayer, Marker, NguiMap, PlacesAutoComplete, Polygon, Polyline, StreetViewPanorama, TrafficLayer, TransitLayer, NguiMapModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BicyclingLayer", function() { return BicyclingLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorGeolocation", function() { return NavigatorGeolocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionBuilder", function() { return OptionBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_MAP_CONFIG_TOKEN", function() { return NG_MAP_CONFIG_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMapApiLoader", function() { return NgMapApiLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMapAsyncApiLoader", function() { return NgMapAsyncApiLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMapAsyncCallbackApiLoader", function() { return NgMapAsyncCallbackApiLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguiMapComponent", function() { return NguiMapComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoWindow", function() { return InfoWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMarker", function() { return CustomMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return Circle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataLayer", function() { return DataLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionsRenderer", function() { return DirectionsRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingManager", function() { return DrawingManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoCoder", function() { return GeoCoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroundOverlay", function() { return GroundOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeatmapLayer", function() { return HeatmapLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KmlLayer", function() { return KmlLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return Marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguiMap", function() { return NguiMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesAutoComplete", function() { return PlacesAutoComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polygon", function() { return Polygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polyline", function() { return Polyline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreetViewPanorama", function() { return StreetViewPanorama; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficLayer", function() { return TrafficLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitLayer", function() { return TransitLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguiMapModule", function() { return NguiMapModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return BaseMapDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");








var _c0 = ["*"];
var _c1 = ["template"];
function jsonize(str) {
    try {
        JSON.parse(str);
        return str;
    }
    catch (e) {
        return str
            .replace(/([\$\w]+)\s*:/g, function (_, $1) {
            return '"' + $1 + '":';
        })
            .replace(/'([^']+)'/g, function (_, $1) {
            return '"' + $1 + '"';
        });
    }
}
function getJSON(input) {
    if (typeof input === 'string') {
        var re = /^[\+\-]?[0-9\.]+,[ ]*\ ?[\+\-]?[0-9\.]+$/;
        if (input.match(re)) {
            input = '[' + input + ']';
        }
        return JSON.parse(jsonize(input));
    }
    else {
        return input;
    }
}
function toCamelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
        return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
}
function isMapsApiLoaded() {
    return typeof google === 'object' && typeof google.maps === 'object';
}
function missingLibraryError(component, libName) {
    return Error(component + ": library '" + libName + "' is missing, please ensure to include it in a 'libraries' parameter.\n    Example:\n      NguiMapModule.forRoot({\n        apiUrl: 'https://maps.googleapis.com/maps/api/js?libraries=" + libName + "'\n      })\n  ");
}
var BaseMapDirective = /** @class */ (function () {
    function BaseMapDirective(nguiMapComponent, mapObjectName, inputs, outputs) {
        var _this = this;
        this.nguiMapComponent = nguiMapComponent;
        this.mapObjectName = mapObjectName;
        this.inputs = inputs;
        this.outputs = outputs;
        this.initialized$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._subscriptions = [];
        this.nguiMap = this.nguiMapComponent['nguiMap'];
        this.optionBuilder = this.nguiMapComponent['optionBuilder'];
        this.outputs.forEach(function (output) { return _this[output] = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); });
        this.mapObjectName = mapObjectName;
    }
    BaseMapDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.nguiMapComponent.mapIdledOnce) {
            this.initialize();
        }
        else {
            this.nguiMapComponent.mapReady$.subscribe(function (map) { return _this.initialize(); });
        }
    };
    BaseMapDirective.prototype.initialize = function () {
        this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
        typeof this.objectOptions.position === 'string' && (delete this.objectOptions.position);
        typeof this.objectOptions.center === 'string' && (delete this.objectOptions.center);
        if (this.libraryName) {
            if (!google.maps[this.libraryName]) {
                throw missingLibraryError(this.mapObjectName, this.libraryName);
            }
            this.mapObject = new google.maps[this.libraryName][this.mapObjectName](this.objectOptions);
        }
        else {
            this.mapObject = new google.maps[this.mapObjectName](this.objectOptions);
        }
        this.mapObject.setMap(this.nguiMapComponent.map);
        this.mapObject['mapObjectName'] = this.mapObjectName;
        this.mapObject['nguiMapComponent'] = this.nguiMapComponent;
        this.nguiMap.setObjectEvents(this.outputs, this, 'mapObject');
        this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
    BaseMapDirective.prototype.ngOnChanges = function (changes) {
        this.nguiMap.updateGoogleObject(this.mapObject, changes);
    };
    BaseMapDirective.prototype.ngOnDestroy = function () {
        this._subscriptions.map(function (subscription) { return subscription.unsubscribe(); });
        this.nguiMapComponent.removeFromMapObjectGroup(this.mapObjectName, this.mapObject);
        if (this.mapObject) {
            this.nguiMap.clearObjectEvents(this.outputs, this, 'mapObject');
        }
    };
BaseMapDirective.ɵfac = function BaseMapDirective_Factory(t) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinvalidFactory"](); };
BaseMapDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: BaseMapDirective, outputs: { initialized$: "initialized$" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()] });

    return BaseMapDirective;
}());
BaseMapDirective.propDecorators = {
    "initialized$": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
};
var OptionBuilder = /** @class */ (function () {
    function OptionBuilder() {
    }
    OptionBuilder.prototype.googlizeAllInputs = function (definedInputs, userInputs) {
        var _this = this;
        var options = {};
        if (userInputs.options) {
            options = userInputs.options;
            if (!this.onlyOptionsGiven(definedInputs, userInputs)) {
                console.error('when "options" are used, other options are ignored');
            }
        }
        else {
            definedInputs.forEach(function (input) {
                if (userInputs[input] !== undefined) {
                    options[input] = _this.googlize(userInputs[input], { key: input });
                }
            });
        }
        return options;
    };
    OptionBuilder.prototype.googlizeMultiple = function (inputs, options) {
        options = options || {};
        for (var key in inputs) {
            var val = inputs[key];
            if (typeof val !== 'string') {
                options[key] = val;
            }
            else if (!(options['doNotConverStringToNumber'] && val.match(/^[0-9]+$/))) {
                options[key] = this.googlize(val, { key: key });
            }
        }
        return options;
    };
    OptionBuilder.prototype.googlize = function (input, options) {
        options = options || {};
        var output = input;
        if (typeof input === 'string') {
            if (input === 'false') {
                output = false;
            }
            else if (input === '0') {
                output = 0;
            }
            else {
                output =
                    this.getJSONParsed(input, options)
                        || this.getAnyMapObject(input)
                        || this.getAnyMapConstant(input, options)
                        || this.getDateObject(input)
                        || input;
            }
        }
        if (options['key']) {
            var key = (options['key']);
            if (output instanceof Array) {
                if (key === 'bounds') {
                    output = new google.maps.LatLngBounds(output[0], output[1]);
                }
                else if (key === 'icons') {
                    output = this.getMapIcons(output);
                }
                else if (key === 'position' || key.match(/^geoFallback/)) {
                    output = this.getLatLng(output);
                }
            }
            else if (output instanceof Object) {
                if (key === 'icon') {
                    output = this.getMarkerIcon(output);
                }
                else if (key.match(/ControlOptions$/)) {
                    output = this.getMapControlOption(output);
                }
            }
        }
        delete output['doNotConverStringToNumber'];
        delete output['key'];
        return output;
    };
    OptionBuilder.prototype.getLatLng = function (input) {
        var output;
        if (input[0].constructor === Array) {
            output = ((input)).map(function (el) { return new google.maps.LatLng(el[0], el[1]); });
        }
        else if (!isNaN(parseFloat(input[0])) && isFinite(input[0])) {
            output = new google.maps.LatLng(input[0], input[1]);
        }
        return output;
    };
    OptionBuilder.prototype.getJSONParsed = function (input, options) {
        var output;
        try {
            output = getJSON(input);
            if (output instanceof Array) {
                if (output[0].constructor !== Object) {
                    output = this.getLatLng(output);
                }
            }
            else if (output === Object(output)) {
                var newOptions = options;
                newOptions['doNotConverStringToNumber'] = true;
                output = this.googlizeMultiple(output, newOptions);
            }
        }
        catch (e) {
        }
        return output;
    };
    OptionBuilder.prototype.getAnyMapObject = function (input) {
        var output;
        if (input.match(/^[A-Z][a-zA-Z0-9]+\(.*\)$/)) {
            try {
                output = Function("return new google.maps." + input + ";")();
            }
            catch (e) { }
        }
        return output;
    };
    OptionBuilder.prototype.getAnyMapConstant = function (input, options) {
        var output;
        if (input.match(/^([A-Z][a-zA-Z0-9]+)\.([A-Z]+)$/)) {
            try {
                var matches = input.match(/^([A-Z][a-zA-Z0-9]+)\.([A-Z]+)$/);
                output = google.maps[matches[1]][matches[2]];
            }
            catch (e) { }
        }
        else if (input.match(/^[A-Z]+$/)) {
            try {
                var capitalizedKey = ((options['key'])).charAt(0).toUpperCase() +
                    ((options['key'])).slice(1);
                output = google.maps[capitalizedKey][input];
            }
            catch (e) { }
        }
        return output;
    };
    OptionBuilder.prototype.getMapControlOption = function (controlOptions) {
        var newControlOptions = controlOptions;
        for (var key in newControlOptions) {
            if (newControlOptions[key]) {
                var value = newControlOptions[key];
                if (typeof value === 'string') {
                    value = ((value)).toUpperCase();
                }
                else if (key === 'mapTypeIds') {
                    value = ((value)).map(function (str) {
                        if (str.match(/^[A-Z]+$/)) {
                            return google.maps.MapTypeId[str.toUpperCase()];
                        }
                        else {
                            return str;
                        }
                    });
                }
                if (key === 'style') {
                    var objName = key.replace(/Options$/, '') + 'Style';
                    newControlOptions[key] = google.maps[objName][(value)];
                }
                else if (key === 'position') {
                    newControlOptions[key] = google.maps.ControlPosition[(value)];
                }
                else {
                    newControlOptions[key] = value;
                }
            }
        }
        return newControlOptions;
    };
    OptionBuilder.prototype.getDateObject = function (input) {
        var output;
        if (input.match(/^(\d{4}\-\d\d\-\d\d([tT][\d:\.]*)?)([zZ]|([+\-])(\d\d):?(\d\d))?$/)) {
            try {
                output = new Date(input);
            }
            catch (e) { }
        }
        return output;
    };
    OptionBuilder.prototype.getMapIcons = function (input) {
        return input.map(function (el) {
            if (el.icon.path.match(/^[A-Z_]+$/)) {
                el.icon.path = google.maps.SymbolPath[el.icon.path];
            }
            return el;
        });
    };
    OptionBuilder.prototype.getMarkerIcon = function (input) {
        var output = input;
        if (('' + output.path).match(/^[A-Z_]+$/)) {
            output.path = google.maps.SymbolPath[output.path];
        }
        for (var key in output) {
            var arr = output[key];
            if (key === 'anchor' || key === 'origin' || key === 'labelOrigin') {
                output[key] = new google.maps.Point(arr[0], arr[1]);
            }
            else if (key === 'size' || key === 'scaledSize') {
                output[key] = new google.maps.Size(arr[0], arr[1]);
            }
        }
        return output;
    };
    OptionBuilder.prototype.onlyOptionsGiven = function (definedInputs, userInputs) {
        for (var i = 0; i < definedInputs.length; i++) {
            var input = definedInputs[i];
            if (input !== 'options' && typeof userInputs[input] !== 'undefined') {
                return false;
            }
        }
        return true;
    };
OptionBuilder.ɵfac = function OptionBuilder_Factory(t) { return new (t || OptionBuilder)(); };
OptionBuilder.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OptionBuilder, factory: function (t) { return OptionBuilder.ɵfac(t); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OptionBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return []; }, null); })();
    return OptionBuilder;
}());
var NavigatorGeolocation = /** @class */ (function () {
    function NavigatorGeolocation() {
    }
    NavigatorGeolocation.prototype.getCurrentPosition = function (geoLocationOptions) {
        geoLocationOptions = geoLocationOptions || { timeout: 5000 };
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (responseObserver) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    responseObserver.next(position);
                    responseObserver.complete();
                }, function (evt) { return responseObserver.error(evt); }, geoLocationOptions);
            }
            else {
                responseObserver.error('Browser Geolocation service failed.');
            }
        });
    };
NavigatorGeolocation.ɵfac = function NavigatorGeolocation_Factory(t) { return new (t || NavigatorGeolocation)(); };
NavigatorGeolocation.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NavigatorGeolocation, factory: function (t) { return NavigatorGeolocation.ɵfac(t); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigatorGeolocation, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return []; }, null); })();
    return NavigatorGeolocation;
}());
var NG_MAP_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('NG_MAP_CONFIG_TOKEN');
var NgMapApiLoader = /** @class */ (function () {
    function NgMapApiLoader(config) {
        this.config = config;
        this.api$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.config = this.config || { apiUrl: 'https://maps.google.com/maps/api/js' };
    }
    NgMapApiLoader.prototype.ngOnDestroy = function () {
        this.api$.complete();
    };
NgMapApiLoader.ɵfac = function NgMapApiLoader_Factory(t) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinvalidFactory"](); };
NgMapApiLoader.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NgMapApiLoader });

    return NgMapApiLoader;
}());
var NgMapAsyncCallbackApiLoader = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NgMapAsyncCallbackApiLoader, _super);
    function NgMapAsyncCallbackApiLoader(zone, config) {
        var _this = _super.call(this, config) || this;
        _this.zone = zone;
        return _this;
    }
    NgMapAsyncCallbackApiLoader.prototype.load = function () {
        var _this = this;
        if (typeof window === 'undefined') {
            return;
        }
        if (isMapsApiLoaded()) {
            this.api$.next(google.maps);
        }
        else if (!document.querySelector('#ngui-map-api')) {
            ((window))['nguiMapRef'] = ((window))['nguiMapRef'] || [];
            ((window))['nguiMapRef'].push({ zone: this.zone, componentFn: function () { return _this.api$.next(google.maps); } });
            this.addGoogleMapsApi();
        }
    };
    NgMapAsyncCallbackApiLoader.prototype.addGoogleMapsApi = function () {
        ((window))['initNguiMap'] = ((window))['initNguiMap'] || function () {
            ((window))['nguiMapRef'].forEach(function (nguiMapRef) {
                nguiMapRef.zone.run(function () { nguiMapRef.componentFn(); });
            });
            ((window))['nguiMapRef'].splice(0, ((window))['nguiMapRef'].length);
        };
        var script = document.createElement('script');
        script.id = 'ngui-map-api';
        var apiUrl = this.config.apiUrl;
        apiUrl += apiUrl.indexOf('?') !== -1 ? '&' : '?';
        script.src = apiUrl + 'callback=initNguiMap';
        document.querySelector('body').appendChild(script);
    };
NgMapAsyncCallbackApiLoader.ɵfac = function NgMapAsyncCallbackApiLoader_Factory(t) { return new (t || NgMapAsyncCallbackApiLoader)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](NG_MAP_CONFIG_TOKEN, 8)); };
NgMapAsyncCallbackApiLoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NgMapAsyncCallbackApiLoader, factory: function (t) { return NgMapAsyncCallbackApiLoader.ɵfac(t); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgMapAsyncCallbackApiLoader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [NG_MAP_CONFIG_TOKEN]
            }] }]; }, null); })();
    return NgMapAsyncCallbackApiLoader;
}(NgMapApiLoader));
NgMapAsyncCallbackApiLoader.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NG_MAP_CONFIG_TOKEN,] },] },
]; };
var NgMapAsyncApiLoader = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NgMapAsyncApiLoader, _super);
    function NgMapAsyncApiLoader(config) {
        return _super.call(this, config) || this;
    }
    NgMapAsyncApiLoader.prototype.load = function () {
        var _this = this;
        if (typeof window === 'undefined') {
            return;
        }
        if (isMapsApiLoaded()) {
            this.api$.next(google.maps);
        }
        else if (!document.querySelector('#ngui-map-api')) {
            var script = document.createElement('script');
            script.id = 'ngui-map-api';
            script.async = true;
            script.onload = function () { return _this.api$.next(google.maps); };
            script.src = this.config.apiUrl;
            document.querySelector('body').appendChild(script);
        }
    };
NgMapAsyncApiLoader.ɵfac = function NgMapAsyncApiLoader_Factory(t) { return new (t || NgMapAsyncApiLoader)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](NG_MAP_CONFIG_TOKEN, 8)); };
NgMapAsyncApiLoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NgMapAsyncApiLoader, factory: function (t) { return NgMapAsyncApiLoader.ɵfac(t); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgMapAsyncApiLoader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [NG_MAP_CONFIG_TOKEN]
            }] }]; }, null); })();
    return NgMapAsyncApiLoader;
}(NgMapApiLoader));
NgMapAsyncApiLoader.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NG_MAP_CONFIG_TOKEN,] },] },
]; };
var GeoCoder = /** @class */ (function () {
    function GeoCoder(apiLoader) {
        this.apiLoader = apiLoader;
        this.apiLoaderSubs = [];
    }
    GeoCoder.prototype.geocode = function (options) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (responseObserver) {
            _this.apiLoaderSubs.push(_this.apiLoader.api$
                .subscribe(function () { return _this.requestGeocode(options, responseObserver); }));
        });
    };
    GeoCoder.prototype.ngOnDestroy = function () {
        this.apiLoaderSubs.map(function (sub) { return sub.unsubscribe(); });
    };
    GeoCoder.prototype.requestGeocode = function (options, observer) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode(options, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                observer.next(results);
                observer.complete();
            }
            else {
                observer.error(results);
            }
        });
    };
GeoCoder.ɵfac = function GeoCoder_Factory(t) { return new (t || GeoCoder)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](NgMapApiLoader)); };
GeoCoder.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GeoCoder, factory: function (t) { return GeoCoder.ɵfac(t); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GeoCoder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: NgMapApiLoader }]; }, null); })();
    return GeoCoder;
}());
GeoCoder.ctorParameters = function () { return [
    { type: NgMapApiLoader, },
]; };
var NguiMap = /** @class */ (function () {
    function NguiMap(geoCoder, optionBuilder, zone) {
        var _this = this;
        this.geoCoder = geoCoder;
        this.optionBuilder = optionBuilder;
        this.zone = zone;
        this.updateGoogleObject = function (object, changes) {
            var val, currentValue, setMethodName;
            if (object) {
                for (var key in changes) {
                    setMethodName = "set" + key.replace(/^[a-z]/, function (x) { return x.toUpperCase(); });
                    currentValue = changes[key].currentValue;
                    if (['position', 'center'].indexOf(key) !== -1 && typeof currentValue === 'string') {
                        (function (setMethodName) {
                            _this.geoCoder.geocode({ address: currentValue }).subscribe(function (results) {
                                if (typeof object[setMethodName] === 'function') {
                                    object[setMethodName](results[0].geometry.location);
                                }
                                else {
                                    console.error('Not all options are dynamically updatable according to Googles Maps API V3 documentation.\n' +
                                        'Please check Google Maps API documentation, and use "setOptions" instead.');
                                }
                            });
                        })(setMethodName);
                    }
                    else {
                        val = _this.optionBuilder.googlize(currentValue);
                        if (typeof object[setMethodName] === 'function') {
                            object[setMethodName](val);
                        }
                        else {
                            console.error('Not all options are dynamically updatable according to Googles Maps API V3 documentation.\n' +
                                'Please check Google Maps API documentation, and use "setOptions" instead.');
                        }
                    }
                }
            }
        };
    }
    NguiMap.prototype.setObjectEvents = function (definedEvents, thisObj, prefix) {
        var _this = this;
        definedEvents.forEach(function (definedEvent) {
            var eventName = _this.getEventName(definedEvent), zone = _this.zone;
            zone.runOutsideAngular(function () {
                thisObj[prefix].addListener(eventName, function (event) {
                    var param = event ? event : {};
                    param.target = this;
                    zone.run(function () { return thisObj[definedEvent].emit(param); });
                });
            });
        });
    };
    NguiMap.prototype.clearObjectEvents = function (definedEvents, thisObj, prefix) {
        var _this = this;
        definedEvents.forEach(function (definedEvent) {
            var eventName = _this.getEventName(definedEvent);
            _this.zone.runOutsideAngular(function () {
                if (thisObj[prefix]) {
                    google.maps.event.clearListeners(thisObj[prefix], eventName);
                }
            });
        });
        if (thisObj[prefix]) {
            if (thisObj[prefix].setMap) {
                thisObj[prefix].setMap(null);
            }
            delete thisObj[prefix].nguiMapComponent;
            delete thisObj[prefix];
        }
    };
    NguiMap.prototype.getEventName = function (definedEvent) {
        return definedEvent
            .replace(/([A-Z])/g, function ($1) { return "_" + $1.toLowerCase(); })
            .replace(/^map_/, '');
    };
NguiMap.ɵfac = function NguiMap_Factory(t) { return new (t || NguiMap)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GeoCoder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OptionBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
NguiMap.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NguiMap, factory: function (t) { return NguiMap.ɵfac(t); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NguiMap, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: GeoCoder }, { type: OptionBuilder }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
    return NguiMap;
}());
NguiMap.ctorParameters = function () { return [
    { type: GeoCoder, },
    { type: OptionBuilder, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
]; };
var INPUTS = [
    'backgroundColor', 'center', 'disableDefaultUI', 'disableDoubleClickZoom', 'draggable', 'draggableCursor',
    'draggingCursor', 'heading', 'keyboardShortcuts', 'mapMaker', 'mapTypeControl', 'mapTypeId', 'maxZoom', 'minZoom',
    'noClear', 'overviewMapControl', 'panControl', 'panControlOptions', 'rotateControl', 'scaleControl', 'scrollwheel',
    'streetView', 'styles', 'tilt', 'zoom', 'streetViewControl', 'zoomControl', 'zoomControlOptions', 'mapTypeControlOptions',
    'overviewMapControlOptions', 'rotateControlOptions', 'scaleControlOptions', 'streetViewControlOptions', 'fullscreenControl', 'fullscreenControlOptions',
    'options',
    'geoFallbackCenter'
];
var OUTPUTS = [
    'bounds_changed', 'center_changed', 'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'heading_changed', 'idle',
    'maptypeid_changed', 'mousemove', 'mouseout', 'mouseover', 'projection_changed', 'resize', 'rightclick',
    'tilesloaded', 'tile_changed', 'zoom_changed',
    'mapClick', 'mapMouseover', 'mapMouseout', 'mapMousemove', 'mapDrag', 'mapDragend', 'mapDragstart'
];
var NguiMapComponent = /** @class */ (function () {
    function NguiMapComponent(optionBuilder, elementRef, geolocation, geoCoder, nguiMap, apiLoader, zone) {
        var _this = this;
        this.optionBuilder = optionBuilder;
        this.elementRef = elementRef;
        this.geolocation = geolocation;
        this.geoCoder = geoCoder;
        this.nguiMap = nguiMap;
        this.apiLoader = apiLoader;
        this.zone = zone;
        this.mapReady$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mapOptions = {};
        this.inputChanges$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.infoWindows = {};
        this.mapIdledOnce = false;
        this.initializeMapAfterDisplayed = false;
        apiLoader.load();
        OUTPUTS.forEach(function (output) { return _this[output] = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); });
    }
    NguiMapComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.apiLoaderSub = this.apiLoader.api$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function () { return _this.initializeMap(); });
    };
    NguiMapComponent.prototype.ngAfterViewChecked = function () {
        if (this.initializeMapAfterDisplayed && this.el && this.el.offsetWidth > 0) {
            this.initializeMap();
        }
    };
    NguiMapComponent.prototype.ngOnChanges = function (changes) {
        this.inputChanges$.next(changes);
    };
    NguiMapComponent.prototype.initializeMap = function () {
        var _this = this;
        this.el = this.elementRef.nativeElement.querySelector('.google-map');
        if (this.el && this.el.offsetWidth === 0) {
            this.initializeMapAfterDisplayed = true;
            return;
        }
        this.initializeMapAfterDisplayed = false;
        this.mapOptions = this.optionBuilder.googlizeAllInputs(INPUTS, this);
        this.mapOptions.zoom = this.mapOptions.zoom || 15;
        typeof this.mapOptions.center === 'string' && (delete this.mapOptions.center);
        this.zone.runOutsideAngular(function () {
            _this.map = new google.maps.Map(_this.el, _this.mapOptions);
            _this.map['mapObjectName'] = 'NguiMapComponent';
            if (!_this.mapOptions.center) {
                _this.setCenter();
            }
            _this.nguiMap.setObjectEvents(OUTPUTS, _this, 'map');
            _this.map.addListener('idle', function () {
                if (!_this.mapIdledOnce) {
                    _this.mapIdledOnce = true;
                    setTimeout(function () {
                        _this.mapReady$.emit(_this.map);
                    });
                }
            });
            _this.inputChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (changes) { return _this.nguiMap.updateGoogleObject(_this.map, changes); })).subscribe();
            if (typeof window !== 'undefined' && ((window))['nguiMapRef']) {
                ((window))['nguiMapRef'].map = _this.map;
            }
        });
    };
    NguiMapComponent.prototype.setCenter = function () {
        var _this = this;
        if (!this['center']) {
            this.geolocation.getCurrentPosition().subscribe(function (position) {
                var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                _this.map.setCenter(latLng);
            }, function (error) {
                console.error('ngui-map: Error finding the current position');
                _this.map.setCenter(_this.mapOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
            });
        }
        else if (typeof this['center'] === 'string') {
            this.geoCoder.geocode({ address: this['center'] }).subscribe(function (results) {
                _this.map.setCenter(results[0].geometry.location);
            }, function (error) {
                _this.map.setCenter(_this.mapOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
            });
        }
    };
    NguiMapComponent.prototype.openInfoWindow = function (id, anchor) {
        this.infoWindows[id].open(anchor);
    };
    NguiMapComponent.prototype.closeInfoWindow = function (id) {
        if (this.infoWindows[id])
            this.infoWindows[id].close();
    };
    NguiMapComponent.prototype.ngOnDestroy = function () {
        this.inputChanges$.complete();
        if (this.el && !this.initializeMapAfterDisplayed) {
            this.nguiMap.clearObjectEvents(OUTPUTS, this, 'map');
        }
        if (this.apiLoaderSub) {
            this.apiLoaderSub.unsubscribe();
        }
    };
    NguiMapComponent.prototype.addToMapObjectGroup = function (mapObjectName, mapObject) {
        var groupName = toCamelCase(mapObjectName.toLowerCase()) + 's';
        this.map[groupName] = this.map[groupName] || [];
        this.map[groupName].push(mapObject);
    };
    NguiMapComponent.prototype.removeFromMapObjectGroup = function (mapObjectName, mapObject) {
        var groupName = toCamelCase(mapObjectName.toLowerCase()) + 's';
        if (this.map && this.map[groupName]) {
            var index = this.map[groupName].indexOf(mapObject);
            (index > -1) && this.map[groupName].splice(index, 1);
        }
    };
NguiMapComponent.ɵfac = function NguiMapComponent_Factory(t) { return new (t || NguiMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](OptionBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NavigatorGeolocation), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GeoCoder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NguiMap), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NgMapApiLoader), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
NguiMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NguiMapComponent, selectors: [["ngui-map"]], inputs: { backgroundColor: "backgroundColor", center: "center", disableDefaultUI: "disableDefaultUI", disableDoubleClickZoom: "disableDoubleClickZoom", draggable: "draggable", draggableCursor: "draggableCursor", draggingCursor: "draggingCursor", heading: "heading", keyboardShortcuts: "keyboardShortcuts", mapMaker: "mapMaker", mapTypeControl: "mapTypeControl", mapTypeId: "mapTypeId", maxZoom: "maxZoom", minZoom: "minZoom", noClear: "noClear", overviewMapControl: "overviewMapControl", panControl: "panControl", panControlOptions: "panControlOptions", rotateControl: "rotateControl", scaleControl: "scaleControl", scrollwheel: "scrollwheel", streetView: "streetView", styles: "styles", tilt: "tilt", zoom: "zoom", streetViewControl: "streetViewControl", zoomControl: "zoomControl", zoomControlOptions: "zoomControlOptions", mapTypeControlOptions: "mapTypeControlOptions", overviewMapControlOptions: "overviewMapControlOptions", rotateControlOptions: "rotateControlOptions", scaleControlOptions: "scaleControlOptions", streetViewControlOptions: "streetViewControlOptions", fullscreenControl: "fullscreenControl", fullscreenControlOptions: "fullscreenControlOptions", options: "options", geoFallbackCenter: "geoFallbackCenter" }, outputs: { bounds_changed: "bounds_changed", center_changed: "center_changed", click: "click", dblclick: "dblclick", drag: "drag", dragend: "dragend", dragstart: "dragstart", heading_changed: "heading_changed", idle: "idle", maptypeid_changed: "maptypeid_changed", mousemove: "mousemove", mouseout: "mouseout", mouseover: "mouseover", projection_changed: "projection_changed", resize: "resize", rightclick: "rightclick", tilesloaded: "tilesloaded", tile_changed: "tile_changed", zoom_changed: "zoom_changed", mapClick: "mapClick", mapMouseover: "mapMouseover", mapMouseout: "mapMouseout", mapMousemove: "mapMousemove", mapDrag: "mapDrag", mapDragend: "mapDragend", mapDragstart: "mapDragstart", mapReady$: "mapReady$" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([NguiMap, OptionBuilder, GeoCoder, NavigatorGeolocation]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "google-map"]], template: function NguiMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
    } }, styles: ["\n    ngui-map {display: block; height: 300px;}\n    .google-map {width: 100%; height: 100%}\n  "], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NguiMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ngui-map',
                providers: [NguiMap, OptionBuilder, GeoCoder, NavigatorGeolocation],
                styles: ["\n    ngui-map {display: block; height: 300px;}\n    .google-map {width: 100%; height: 100%}\n  "],
                inputs: INPUTS,
                outputs: OUTPUTS,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                template: "\n    <div class=\"google-map\"></div>\n    <ng-content></ng-content>\n  "
            }]
    }], function () { return [{ type: OptionBuilder }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: NavigatorGeolocation }, { type: GeoCoder }, { type: NguiMap }, { type: NgMapApiLoader }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, { mapReady$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();
    return NguiMapComponent;
}());
NguiMapComponent.ctorParameters = function () { return [
    { type: OptionBuilder, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: NavigatorGeolocation, },
    { type: GeoCoder, },
    { type: NguiMap, },
    { type: NgMapApiLoader, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
]; };
NguiMapComponent.propDecorators = {
    "mapReady$": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
};
var INPUTS$1 = [];
var OUTPUTS$1 = [];
var BicyclingLayer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BicyclingLayer, _super);
    function BicyclingLayer(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'BicyclingLayer', INPUTS$1, OUTPUTS$1) || this;
    }
BicyclingLayer.ɵfac = function BicyclingLayer_Factory(t) { return new (t || BicyclingLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NguiMapComponent)); };
BicyclingLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: BicyclingLayer, selectors: [["bicycling-layer"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BicyclingLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'ngui-map > bicycling-layer',
                inputs: INPUTS$1,
                outputs: OUTPUTS$1
            }]
    }], function () { return [{ type: NguiMapComponent }]; }, null); })();
    return BicyclingLayer;
}(BaseMapDirective));
BicyclingLayer.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var INPUTS$2 = [
    'content', 'disableAutoPan', 'maxWidth', 'pixelOffset', 'position', 'zIndex', 'options'
];
var OUTPUTS$2 = [
    'closeclick', 'content_changed', 'domready', 'position_changed', 'zindex_changed'
];
var InfoWindow = /** @class */ (function () {
    function InfoWindow(elementRef, nguiMap, nguiMapComponent) {
        var _this = this;
        this.elementRef = elementRef;
        this.nguiMap = nguiMap;
        this.nguiMapComponent = nguiMapComponent;
        this.initialized$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.objectOptions = {};
        this.inputChanges$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.elementRef.nativeElement.style.display = 'none';
        OUTPUTS$2.forEach(function (output) { return _this[output] = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); });
    }
    InfoWindow.prototype.ngOnInit = function () {
        var _this = this;
        if (this.nguiMapComponent.mapIdledOnce) {
            this.initialize();
        }
        else {
            this.nguiMapComponent.mapReady$.subscribe(function (map) { return _this.initialize(); });
        }
    };
    InfoWindow.prototype.ngOnChanges = function (changes) {
        this.inputChanges$.next(changes);
    };
    InfoWindow.prototype.initialize = function () {
        var _this = this;
        this.objectOptions = this.nguiMapComponent.optionBuilder.googlizeAllInputs(INPUTS$2, this);
        this.infoWindow = new google.maps.InfoWindow(this.objectOptions);
        this.infoWindow['mapObjectName'] = 'InfoWindow';
        if (this.elementRef.nativeElement.id) {
            this.nguiMapComponent.infoWindows[this.elementRef.nativeElement.id] = this;
        }
        else {
            console.error('An InfoWindow must have an id. e.g. id="detail"');
        }
        this.nguiMap.setObjectEvents(OUTPUTS$2, this, 'infoWindow');
        this.inputChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (changes) { return _this.nguiMap.updateGoogleObject(_this.infoWindow, changes); })).subscribe();
        this.nguiMapComponent.addToMapObjectGroup('InfoWindow', this.infoWindow);
        this.initialized$.emit(this.infoWindow);
    };
    InfoWindow.prototype.open = function (anchor) {
        this.infoWindow.setContent(this.template.element.nativeElement);
        this.infoWindow.open(this.nguiMapComponent.map, anchor);
    };
    InfoWindow.prototype.close = function () {
        if (this.infoWindow)
            this.infoWindow.close();
    };
    InfoWindow.prototype.ngOnDestroy = function () {
        this.inputChanges$.complete();
        if (this.infoWindow) {
            this.nguiMap.clearObjectEvents(OUTPUTS$2, this, 'infoWindow');
            delete this.infoWindow;
        }
    };
InfoWindow.ɵfac = function InfoWindow_Factory(t) { return new (t || InfoWindow)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NguiMap), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NguiMapComponent)); };
InfoWindow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InfoWindow, selectors: [["info-window"]], viewQuery: function InfoWindow_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
    } }, inputs: { content: "content", disableAutoPan: "disableAutoPan", maxWidth: "maxWidth", pixelOffset: "pixelOffset", position: "position", zIndex: "zIndex", options: "options" }, outputs: { closeclick: "closeclick", content_changed: "content_changed", domready: "domready", position_changed: "position_changed", zindex_changed: "zindex_changed", initialized$: "initialized$" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()], ngContentSelectors: _c0, decls: 3, vars: 0, consts: [["template", ""]], template: function InfoWindow_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InfoWindow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ngui-map > info-window',
                inputs: INPUTS$2,
                outputs: OUTPUTS$2,
                template: "<div #template><ng-content></ng-content></div>"
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: NguiMap }, { type: NguiMapComponent }]; }, { initialized$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['template', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }]
        }] }); })();
    return InfoWindow;
}());
InfoWindow.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: NguiMap, },
    { type: NguiMapComponent, },
]; };
InfoWindow.propDecorators = {
    "initialized$": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "template": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['template', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },] },],
};
var INPUTS$3 = [
    'position'
];
var OUTPUTS$3 = [
    'animationChanged', 'click', 'clickableChanged', 'cursorChanged', 'dblclick', 'drag', 'dragend', 'draggableChanged',
    'dragstart', 'flatChanged', 'iconChanged', 'mousedown', 'mouseout', 'mouseover', 'mouseup', 'positionChanged', 'rightclick',
    'shapeChanged', 'titleChanged', 'visibleChanged', 'zindexChanged',
    'map_click', 'map_mouseover', 'map_mouseout', 'map_mouseup', 'map_mousedown', 'map_drag', 'map_dragend'
];
function getCustomMarkerOverlayView(htmlEl, position) {
    var CustomMarkerOverlayView = /** @class */ (function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CustomMarkerOverlayView, _super);
        function CustomMarkerOverlayView(htmlEl, position) {
            var _this = _super.call(this) || this;
            _this.visible = true;
            _this.setPosition = function (position) {
                _this.htmlEl.style.visibility = 'hidden';
                if (position.constructor.name === 'Array') {
                    _this.position = new google.maps.LatLng(position[0], position[1]);
                }
                else if (typeof position === 'string') {
                    var geocoder = new google.maps.Geocoder();
                    geocoder.geocode({ address: position }, function (results, status) {
                        if (status === google.maps.GeocoderStatus.OK) {
                            _this.setPosition(results[0].geometry.location);
                        }
                        else {
                        }
                    });
                }
                else if (position && typeof position.lng === 'function') {
                    _this.position = position;
                }
                if (_this.getProjection() && typeof _this.position.lng === 'function') {
                    var positionOnMap_1 = function () {
                        var projection = _this.getProjection();
                        if (!projection) {
                            return;
                        }
                        var posPixel = projection.fromLatLngToDivPixel(_this.position);
                        var x = Math.round(posPixel.x - (_this.htmlEl.offsetWidth / 2));
                        var y = Math.round(posPixel.y - _this.htmlEl.offsetHeight / 2);
                        _this.htmlEl.style.left = x + 'px';
                        _this.htmlEl.style.top = y + 'px';
                        _this.htmlEl.style.visibility = 'visible';
                    };
                    if (_this.htmlEl.offsetWidth && _this.htmlEl.offsetHeight) {
                        positionOnMap_1();
                    }
                    else {
                        setTimeout(function () { return positionOnMap_1(); });
                    }
                }
            };
            _this.htmlEl = htmlEl;
            _this.position = position;
            return _this;
        }
        CustomMarkerOverlayView.prototype.onAdd = function () {
            this.getPanes().overlayMouseTarget.appendChild(this.htmlEl);
            this.htmlEl.style.position = 'absolute';
        };
        CustomMarkerOverlayView.prototype.draw = function () {
            this.setPosition(this.position);
            this.setZIndex(this.zIndex);
            this.setVisible(this.visible);
        };
        CustomMarkerOverlayView.prototype.onRemove = function () {
        };
        CustomMarkerOverlayView.prototype.getPosition = function () {
            return this.position;
        };
        CustomMarkerOverlayView.prototype.setZIndex = function (zIndex) {
            zIndex && (this.zIndex = zIndex);
            this.htmlEl.style.zIndex = this.zIndex;
        };
        CustomMarkerOverlayView.prototype.setVisible = function (visible) {
            this.htmlEl.style.display = visible ? 'inline-block' : 'none';
            this.visible = visible;
        };
        return CustomMarkerOverlayView;
    }(google.maps.OverlayView));
    return new CustomMarkerOverlayView(htmlEl, position);
}
var CustomMarker = /** @class */ (function () {
    function CustomMarker(nguiMapComponent, elementRef, nguiMap) {
        var _this = this;
        this.nguiMapComponent = nguiMapComponent;
        this.elementRef = elementRef;
        this.nguiMap = nguiMap;
        this.initialized$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.inputChanges$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.elementRef.nativeElement.style.display = 'none';
        OUTPUTS$3.forEach(function (output) { return _this[output] = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); });
    }
    CustomMarker.prototype.ngOnInit = function () {
        var _this = this;
        if (this.nguiMapComponent.mapIdledOnce) {
            this.initialize();
        }
        else {
            this.nguiMapComponent.mapReady$.subscribe(function (map) { return _this.initialize(); });
        }
    };
    CustomMarker.prototype.ngOnChanges = function (changes) {
        this.inputChanges$.next(changes);
    };
    CustomMarker.prototype.ngOnDestroy = function () {
        this.inputChanges$.complete();
        this.nguiMapComponent.removeFromMapObjectGroup('CustomMarker', this.mapObject);
        if (this.mapObject) {
            this.nguiMap.clearObjectEvents(OUTPUTS$3, this, 'mapObject');
        }
    };
    CustomMarker.prototype.initialize = function () {
        var _this = this;
        this.el = this.elementRef.nativeElement;
        this.mapObject = getCustomMarkerOverlayView(this.el, this['position']);
        this.mapObject.setMap(this.nguiMapComponent.map);
        this.nguiMap.setObjectEvents(OUTPUTS$3, this, 'mapObject');
        this.inputChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (changes) { return _this.nguiMap.updateGoogleObject(_this.mapObject, changes); })).subscribe();
        this.nguiMapComponent.addToMapObjectGroup('CustomMarker', this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
CustomMarker.ɵfac = function CustomMarker_Factory(t) { return new (t || CustomMarker)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NguiMapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NguiMap)); };
CustomMarker.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CustomMarker, selectors: [["custom-marker"]], inputs: { position: "position" }, outputs: { animationChanged: "animationChanged", click: "click", clickableChanged: "clickableChanged", cursorChanged: "cursorChanged", dblclick: "dblclick", drag: "drag", dragend: "dragend", draggableChanged: "draggableChanged", dragstart: "dragstart", flatChanged: "flatChanged", iconChanged: "iconChanged", mousedown: "mousedown", mouseout: "mouseout", mouseover: "mouseover", mouseup: "mouseup", positionChanged: "positionChanged", rightclick: "rightclick", shapeChanged: "shapeChanged", titleChanged: "titleChanged", visibleChanged: "visibleChanged", zindexChanged: "zindexChanged", map_click: "map_click", map_mouseover: "map_mouseover", map_mouseout: "map_mouseout", map_mouseup: "map_mouseup", map_mousedown: "map_mousedown", map_drag: "map_drag", map_dragend: "map_dragend", initialized$: "initialized$" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()], ngContentSelectors: _c0, decls: 1, vars: 0, template: function CustomMarker_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomMarker, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ngui-map > custom-marker',
                inputs: INPUTS$3,
                outputs: OUTPUTS$3,
                template: "\n    <ng-content></ng-content>\n  "
            }]
    }], function () { return [{ type: NguiMapComponent }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: NguiMap }]; }, { initialized$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();
    return CustomMarker;
}());
CustomMarker.ctorParameters = function () { return [
    { type: NguiMapComponent, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: NguiMap, },
]; };
CustomMarker.propDecorators = {
    "initialized$": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
};
var INPUTS$4 = [
    'center', 'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'map', 'radius',
    'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'options',
    'geoFallbackCenter'
];
var OUTPUTS$4 = [
    'centerChanged', 'click', 'dblclick', 'drag', 'dragend', 'dragstart',
    'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'radiusChanged', 'rightclick',
];
var Circle = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Circle, _super);
    function Circle(nguiMapComp) {
        var _this = _super.call(this, nguiMapComp, 'Circle', INPUTS$4, OUTPUTS$4) || this;
        _this.nguiMapComp = nguiMapComp;
        _this.objectOptions = ({});
        return _this;
    }
    Circle.prototype.initialize = function () {
        _super.prototype.initialize.call(this);
        this.setCenter();
    };
    Circle.prototype.setCenter = function () {
        var _this = this;
        if (!this['center']) {
            this._subscriptions.push(this.nguiMapComp.geolocation.getCurrentPosition().subscribe(function (center) {
                var latLng = new google.maps.LatLng(center.coords.latitude, center.coords.longitude);
                _this.mapObject.setCenter(latLng);
            }, function (error) {
                console.error('ngui-map, error in finding the current position');
                _this.mapObject.setCenter(_this.objectOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
            }));
        }
        else if (typeof this['center'] === 'string') {
            this._subscriptions.push(this.nguiMapComp.geoCoder.geocode({ address: this['center'] }).subscribe(function (results) {
                _this.mapObject.setCenter(results[0].geometry.location);
            }, function (error) {
                console.error('ngui-map, error in finding location from', _this['center']);
                _this.mapObject.setCenter(_this.objectOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
            }));
        }
    };
Circle.ɵfac = function Circle_Factory(t) { return new (t || Circle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NguiMapComponent)); };
Circle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: Circle, selectors: [["circle"], ["map-circle"]], inputs: { center: "center", clickable: "clickable", draggable: "draggable", editable: "editable", fillColor: "fillColor", fillOpacity: "fillOpacity", map: "map", radius: "radius", strokeColor: "strokeColor", strokeOpacity: "strokeOpacity", strokePosition: "strokePosition", strokeWeight: "strokeWeight", visible: "visible", zIndex: "zIndex", options: "options", geoFallbackCenter: "geoFallbackCenter" }, outputs: { centerChanged: "centerChanged", click: "click", dblclick: "dblclick", drag: "drag", dragend: "dragend", dragstart: "dragstart", mousedown: "mousedown", mousemove: "mousemove", mouseout: "mouseout", mouseover: "mouseover", mouseup: "mouseup", radiusChanged: "radiusChanged", rightclick: "rightclick" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Circle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'ngui-map>circle, ngui-map>map-circle',
                inputs: INPUTS$4,
                outputs: OUTPUTS$4
            }]
    }], function () { return [{ type: NguiMapComponent }]; }, null); })();
    return Circle;
}(BaseMapDirective));
Circle.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var INPUTS$5 = ['controlPosition', 'controls', 'drawingMode', 'featureFactory', 'style', 'geoJson', 'geoJsonUrl'];
var OUTPUTS$5 = [
    'addfeature', 'click', 'dblclick', 'mousedown', 'mouseout', 'mouseover',
    'mouseup', 'removefeature', 'removeproperty', 'rightclick', 'setgeometry', 'setproperty'
];
var DataLayer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DataLayer, _super);
    function DataLayer(nguiMapComponent) {
        return _super.call(this, nguiMapComponent, 'Data', INPUTS$5, OUTPUTS$5) || this;
    }
    DataLayer.prototype.initialize = function () {
        if (this['geoJson']) {
            this.nguiMapComponent.map.data.addGeoJson(this['geoJson']);
        }
        else if (this['geoJsonUrl']) {
            this.nguiMapComponent.map.data.loadGeoJson(this['geoJsonUrl']);
        }
        else {
            this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
            this.nguiMapComponent.map.data.add(this.objectOptions);
        }
        this.mapObject = this.nguiMapComponent.map.data;
        this.nguiMap.setObjectEvents(this.outputs, this, 'mapObject');
        this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
DataLayer.ɵfac = function DataLayer_Factory(t) { return new (t || DataLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NguiMapComponent)); };
DataLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DataLayer, selectors: [["data-layer"]], inputs: { controlPosition: "controlPosition", controls: "controls", drawingMode: "drawingMode", featureFactory: "featureFactory", style: "style", geoJson: "geoJson", geoJsonUrl: "geoJsonUrl" }, outputs: { addfeature: "addfeature", click: "click", dblclick: "dblclick", mousedown: "mousedown", mouseout: "mouseout", mouseover: "mouseover", mouseup: "mouseup", removefeature: "removefeature", removeproperty: "removeproperty", rightclick: "rightclick", setgeometry: "setgeometry", setproperty: "setproperty" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'ngui-map > data-layer',
                inputs: INPUTS$5,
                outputs: OUTPUTS$5
            }]
    }], function () { return [{ type: NguiMapComponent }]; }, null); })();
    return DataLayer;
}(BaseMapDirective));
DataLayer.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var INPUTS$6 = [
    'directions', 'draggable', 'hideRouteList', 'infoWindow', 'panel', 'markerOptions',
    'polylineOptions', 'preserveViewport', 'routeIndex', 'suppressBicyclingLayer',
    'suppressInfoWindows', 'suppressMarkers', 'suppressPolylines'
];
var OUTPUTS$6 = ['directions_changed'];
var DirectionsRenderer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DirectionsRenderer, _super);
    function DirectionsRenderer(nguiMapComponent, geolocation) {
        var _this = _super.call(this, nguiMapComponent, 'DirectionsRenderer', INPUTS$6, OUTPUTS$6) || this;
        _this.geolocation = geolocation;
        return _this;
    }
    DirectionsRenderer.prototype.initialize = function () {
        this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
        if (typeof this.objectOptions['panel'] === 'string') {
            this.objectOptions['panel'] = document.querySelector(this.objectOptions['panel']);
        }
        this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer(this.objectOptions);
        this.directionsRenderer.setMap(this.nguiMapComponent.map);
        this.showDirections(this.directionsRequest);
        this.nguiMap.setObjectEvents(this.outputs, this, 'directionsRenderer');
        this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.directionsRenderer);
    };
    DirectionsRenderer.prototype.ngOnChanges = function (changes) {
        var newOptions = {};
        for (var key in changes) {
            if (this.inputs.indexOf(key) !== -1) {
                newOptions[key] = this.optionBuilder.googlize(changes[key].currentValue);
            }
        }
        if (changes['directionsRequest'] && this.directionsRenderer) {
            this.directionsService && this.showDirections(this.directionsRequest);
        }
    };
    DirectionsRenderer.prototype.showDirections = function (directionsRequest) {
        var _this = this;
        this.directionsService.route(directionsRequest, function (response, status) {
            if (!_this.directionsRenderer) {
                return;
            }
            if (status === google.maps.DirectionsStatus.OK) {
                _this.directionsRenderer.setDirections(response);
            }
            else {
                console.error('Directions request failed due to ' + status);
            }
        });
    };
    DirectionsRenderer.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        this.nguiMap.clearObjectEvents(this.outputs, this, 'directionsRenderer');
    };
DirectionsRenderer.ɵfac = function DirectionsRenderer_Factory(t) { return new (t || DirectionsRenderer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NguiMapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NavigatorGeolocation)); };
DirectionsRenderer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DirectionsRenderer, selectors: [["directions-renderer"]], inputs: { directions: "directions", draggable: "draggable", hideRouteList: "hideRouteList", infoWindow: "infoWindow", panel: "panel", markerOptions: "markerOptions", polylineOptions: "polylineOptions", preserveViewport: "preserveViewport", routeIndex: "routeIndex", suppressBicyclingLayer: "suppressBicyclingLayer", suppressInfoWindows: "suppressInfoWindows", suppressMarkers: "suppressMarkers", suppressPolylines: "suppressPolylines", directionsRequest: ["directions-request", "directionsRequest"] }, outputs: { directions_changed: "directions_changed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DirectionsRenderer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'ngui-map > directions-renderer',
                inputs: INPUTS$6,
                outputs: OUTPUTS$6
            }]
    }], function () { return [{ type: NguiMapComponent }, { type: NavigatorGeolocation }]; }, { directionsRequest: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['directions-request']
        }] }); })();
    return DirectionsRenderer;
}(BaseMapDirective));
DirectionsRenderer.ctorParameters = function () { return [
    { type: NguiMapComponent, },
    { type: NavigatorGeolocation, },
]; };
DirectionsRenderer.propDecorators = {
    "directionsRequest": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['directions-request',] },],
};
var INPUTS$7 = [
    'options',
    'circleOptions', 'drawingControl', 'drawingControlOptions', 'drawingMode',
    'map', 'markerOptions', 'polygonOptions', 'polylineOptions', 'rectangleOptions'
];
var OUTPUTS$7 = [
    'circlecomplete', 'markercomplete', 'overlaycomplete',
    'polygoncomplete', 'polylinecomplete', 'rectanglecomplete'
];
var DrawingManager = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DrawingManager, _super);
    function DrawingManager(nguiMapComp) {
        var _this = _super.call(this, nguiMapComp, 'DrawingManager', INPUTS$7, OUTPUTS$7) || this;
        _this.libraryName = 'drawing';
        return _this;
    }
DrawingManager.ɵfac = function DrawingManager_Factory(t) { return new (t || DrawingManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NguiMapComponent)); };
DrawingManager.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DrawingManager, selectors: [["drawing-manager"]], inputs: { options: "options", circleOptions: "circleOptions", drawingControl: "drawingControl", drawingControlOptions: "drawingControlOptions", drawingMode: "drawingMode", map: "map", markerOptions: "markerOptions", polygonOptions: "polygonOptions", polylineOptions: "polylineOptions", rectangleOptions: "rectangleOptions" }, outputs: { circlecomplete: "circlecomplete", markercomplete: "markercomplete", overlaycomplete: "overlaycomplete", polygoncomplete: "polygoncomplete", polylinecomplete: "polylinecomplete", rectanglecomplete: "rectanglecomplete" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DrawingManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'ngui-map > drawing-manager',
                inputs: INPUTS$7,
                outputs: OUTPUTS$7
            }]
    }], function () { return [{ type: NguiMapComponent }]; }, null); })();
    return DrawingManager;
}(BaseMapDirective));
DrawingManager.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var INPUTS$8 = ['url', 'bounds', 'clickable', 'opacity'];
var OUTPUTS$8 = ['click', 'dblclick'];
var GroundOverlay = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GroundOverlay, _super);
    function GroundOverlay(nguiMapComp) {
        var _this = _super.call(this, nguiMapComp, 'GroundOverlay', INPUTS$8, OUTPUTS$8) || this;
        _this.objectOptions = ({});
        return _this;
    }
    GroundOverlay.prototype.initialize = function () {
        this.objectOptions = this.optionBuilder.googlizeAllInputs(['clickable', 'opacity'], this);
        this.mapObject = new google.maps.GroundOverlay(this['url'], this['bounds'], this.objectOptions);
        this.mapObject.setMap(this.nguiMapComponent.map);
        this.mapObject['mapObjectName'] = this.mapObjectName;
        this.nguiMap.setObjectEvents(this.outputs, this, 'mapObject');
        this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
GroundOverlay.ɵfac = function GroundOverlay_Factory(t) { return new (t || GroundOverlay)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NguiMapComponent)); };
GroundOverlay.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: GroundOverlay, selectors: [["ground-overlay"]], inputs: { url: "url", bounds: "bounds", clickable: "clickable", opacity: "opacity" }, outputs: { click: "click", dblclick: "dblclick" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GroundOverlay, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'ngui-map > ground-overlay',
                inputs: INPUTS$8,
                outputs: OUTPUTS$8
            }]
    }], function () { return [{ type: NguiMapComponent }]; }, null); })();
    return GroundOverlay;
}(BaseMapDirective));
GroundOverlay.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var INPUTS$9 = ['data', 'dissipating', 'gradient', 'maxIntensity', 'opacity', 'radius', 'options'];
var OUTPUTS$9 = [];
var HeatmapLayer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HeatmapLayer, _super);
    function HeatmapLayer(nguiMapComp) {
        var _this = _super.call(this, nguiMapComp, 'HeatmapLayer', INPUTS$9, OUTPUTS$9) || this;
        _this.libraryName = 'visualization';
        return _this;
    }
HeatmapLayer.ɵfac = function HeatmapLayer_Factory(t) { return new (t || HeatmapLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NguiMapComponent)); };
HeatmapLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: HeatmapLayer, selectors: [["heatmap-layer"]], inputs: { data: "data", dissipating: "dissipating", gradient: "gradient", maxIntensity: "maxIntensity", opacity: "opacity", radius: "radius", options: "options" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeatmapLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'ngui-map > heatmap-layer',
                inputs: INPUTS$9,
                outputs: OUTPUTS$9
            }]
    }], function () { return [{ type: NguiMapComponent }]; }, null); })();
    return HeatmapLayer;
}(BaseMapDirective));
HeatmapLayer.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var INPUTS$10 = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex', 'options'];
var OUTPUTS$10 = ['click', 'defaultviewport_changed', 'status_changed'];
var KmlLayer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(KmlLayer, _super);
    function KmlLayer(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'KmlLayer', INPUTS$10, OUTPUTS$10) || this;
    }
KmlLayer.ɵfac = function KmlLayer_Factory(t) { return new (t || KmlLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NguiMapComponent)); };
KmlLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: KmlLayer, selectors: [["kml-layer"]], inputs: { clickable: "clickable", preserveViewport: "preserveViewport", screenOverlays: "screenOverlays", suppressInfoWindows: "suppressInfoWindows", url: "url", zIndex: "zIndex", options: "options" }, outputs: { click: "click", defaultviewport_changed: "defaultviewport_changed", status_changed: "status_changed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](KmlLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'ngui-map > kml-layer',
                inputs: INPUTS$10,
                outputs: OUTPUTS$10
            }]
    }], function () { return [{ type: NguiMapComponent }]; }, null); })();
    return KmlLayer;
}(BaseMapDirective));
KmlLayer.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var INPUTS$11 = [
    'anchorPoint', 'animation', 'clickable', 'cursor', 'draggable', 'icon', 'label', 'opacity',
    'optimized', 'place', 'position', 'shape', 'title', 'visible', 'zIndex', 'options',
    'geoFallbackPosition'
];
var OUTPUTS$11 = [
    'animationChanged', 'click', 'clickableChanged', 'cursorChanged', 'dblclick', 'drag', 'dragend', 'draggableChanged',
    'dragstart', 'flatChanged', 'iconChanged', 'mousedown', 'mouseout', 'mouseover', 'mouseup', 'positionChanged', 'rightclick',
    'shapeChanged', 'titleChanged', 'visibleChanged', 'zindexChanged'
];
var Marker = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Marker, _super);
    function Marker(nguiMapComp) {
        var _this = _super.call(this, nguiMapComp, 'Marker', INPUTS$11, OUTPUTS$11) || this;
        _this.nguiMapComp = nguiMapComp;
        _this.objectOptions = ({});
        return _this;
    }
    Marker.prototype.ngOnInit = function () {
        var _this = this;
        if (this.nguiMapComponent.mapIdledOnce) {
            this.initialize();
        }
        else {
            this.nguiMapComponent.mapReady$.subscribe(function (map) { return _this.initialize(); });
        }
    };
    Marker.prototype.initialize = function () {
        _super.prototype.initialize.call(this);
        this.setPosition();
    };
    Marker.prototype.setPosition = function () {
        var _this = this;
        if (!this['position']) {
            this._subscriptions.push(this.nguiMapComp.geolocation.getCurrentPosition().subscribe(function (position) {
                var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                _this.mapObject.setPosition(latLng);
            }, function (error) {
                console.error('ngui-map, error finding the current location');
                _this.mapObject.setPosition(_this.objectOptions['geoFallbackPosition'] || new google.maps.LatLng(0, 0));
            }));
        }
        else if (typeof this['position'] === 'string') {
            this._subscriptions.push(this.nguiMapComp.geoCoder.geocode({ address: this['position'] }).subscribe(function (results) {
                _this.mapObject.setPosition(results[0].geometry.location);
            }, function (error) {
                console.error('ngui-map, error finding the location from', _this['position']);
                _this.mapObject.setPosition(_this.objectOptions['geoFallbackPosition'] || new google.maps.LatLng(0, 0));
            }));
        }
    };
Marker.ɵfac = function Marker_Factory(t) { return new (t || Marker)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NguiMapComponent)); };
Marker.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: Marker, selectors: [["marker"]], inputs: { anchorPoint: "anchorPoint", animation: "animation", clickable: "clickable", cursor: "cursor", draggable: "draggable", icon: "icon", label: "label", opacity: "opacity", optimized: "optimized", place: "place", position: "position", shape: "shape", title: "title", visible: "visible", zIndex: "zIndex", options: "options", geoFallbackPosition: "geoFallbackPosition" }, outputs: { animationChanged: "animationChanged", click: "click", clickableChanged: "clickableChanged", cursorChanged: "cursorChanged", dblclick: "dblclick", drag: "drag", dragend: "dragend", draggableChanged: "draggableChanged", dragstart: "dragstart", flatChanged: "flatChanged", iconChanged: "iconChanged", mousedown: "mousedown", mouseout: "mouseout", mouseover: "mouseover", mouseup: "mouseup", positionChanged: "positionChanged", rightclick: "rightclick", shapeChanged: "shapeChanged", titleChanged: "titleChanged", visibleChanged: "visibleChanged", zindexChanged: "zindexChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Marker, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'ngui-map > marker',
                inputs: INPUTS$11,
                outputs: OUTPUTS$11
            }]
    }], function () { return [{ type: NguiMapComponent }]; }, null); })();
    return Marker;
}(BaseMapDirective));
Marker.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var PlacesAutoComplete = /** @class */ (function () {
    function PlacesAutoComplete(optionBuilder, elementRef, apiLoader) {
        var _this = this;
        this.optionBuilder = optionBuilder;
        this.elementRef = elementRef;
        this.apiLoader = apiLoader;
        this.place_changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.initialized$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.initialize = function () {
            _this.objectOptions =
                _this.optionBuilder.googlizeAllInputs(['bounds', 'componentRestrictions', 'types'], _this);
            if (!google.maps.places) {
                throw missingLibraryError('PlacesAutoComplete', 'places');
            }
            _this.autocomplete = new google.maps.places.Autocomplete(_this.elementRef.nativeElement, _this.objectOptions);
            _this.autocomplete.addListener('place_changed', function (place) {
                _this.place_changed.emit(_this.autocomplete.getPlace());
            });
            _this.initialized$.emit(_this.autocomplete);
        };
        apiLoader.load();
        apiLoader.api$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function () { return _this.initialize(); });
    }
PlacesAutoComplete.ɵfac = function PlacesAutoComplete_Factory(t) { return new (t || PlacesAutoComplete)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](OptionBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NgMapApiLoader)); };
PlacesAutoComplete.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: PlacesAutoComplete, selectors: [["", "places-auto-complete", ""]], inputs: { bounds: "bounds", componentRestrictions: "componentRestrictions", types: "types" }, outputs: { place_changed: "place_changed", initialized$: "initialized$" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PlacesAutoComplete, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[places-auto-complete]'
            }]
    }], function () { return [{ type: OptionBuilder }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: NgMapApiLoader }]; }, { place_changed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['place_changed']
        }], initialized$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], bounds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], componentRestrictions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], types: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
    return PlacesAutoComplete;
}());
PlacesAutoComplete.ctorParameters = function () { return [
    { type: OptionBuilder, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: NgMapApiLoader, },
]; };
PlacesAutoComplete.propDecorators = {
    "bounds": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "componentRestrictions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "types": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "place_changed": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['place_changed',] },],
    "initialized$": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
};
var INPUTS$12 = [
    'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'paths',
    'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'options',
];
var OUTPUTS$12 = [
    'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown',
    'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick',
];
var Polygon = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Polygon, _super);
    function Polygon(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'Polygon', INPUTS$12, OUTPUTS$12) || this;
    }
Polygon.ɵfac = function Polygon_Factory(t) { return new (t || Polygon)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NguiMapComponent)); };
Polygon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: Polygon, selectors: [["polygon"], ["map-polygon"]], inputs: { clickable: "clickable", draggable: "draggable", editable: "editable", fillColor: "fillColor", fillOpacity: "fillOpacity", geodesic: "geodesic", paths: "paths", strokeColor: "strokeColor", strokeOpacity: "strokeOpacity", strokePosition: "strokePosition", strokeWeight: "strokeWeight", visible: "visible", zIndex: "zIndex", options: "options" }, outputs: { click: "click", dblclick: "dblclick", drag: "drag", dragend: "dragend", dragstart: "dragstart", mousedown: "mousedown", mousemove: "mousemove", mouseout: "mouseout", mouseover: "mouseover", mouseup: "mouseup", rightclick: "rightclick" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Polygon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'ngui-map>polygon, ngui-map>map-polygon',
                inputs: INPUTS$12,
                outputs: OUTPUTS$12
            }]
    }], function () { return [{ type: NguiMapComponent }]; }, null); })();
    return Polygon;
}(BaseMapDirective));
Polygon.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var INPUTS$13 = [
    'clickable', 'draggable', 'editable', 'geodesic', 'icons', 'path', 'strokeColor',
    'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'options'
];
var OUTPUTS$13 = [
    'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown',
    'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'
];
var Polyline = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Polyline, _super);
    function Polyline(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'Polyline', INPUTS$13, OUTPUTS$13) || this;
    }
Polyline.ɵfac = function Polyline_Factory(t) { return new (t || Polyline)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NguiMapComponent)); };
Polyline.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: Polyline, selectors: [["polyline"]], inputs: { clickable: "clickable", draggable: "draggable", editable: "editable", geodesic: "geodesic", icons: "icons", path: "path", strokeColor: "strokeColor", strokeOpacity: "strokeOpacity", strokeWeight: "strokeWeight", visible: "visible", zIndex: "zIndex", options: "options" }, outputs: { click: "click", dblclick: "dblclick", drag: "drag", dragend: "dragend", dragstart: "dragstart", mousedown: "mousedown", mousemove: "mousemove", mouseout: "mouseout", mouseover: "mouseover", mouseup: "mouseup", rightclick: "rightclick" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Polyline, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'ngui-map > polyline',
                inputs: INPUTS$13,
                outputs: OUTPUTS$13
            }]
    }], function () { return [{ type: NguiMapComponent }]; }, null); })();
    return Polyline;
}(BaseMapDirective));
Polyline.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var INPUTS$14 = [
    'selector', 'options',
    'addressControl', 'addressControlOptions', 'clickToGo', 'disableDefaultUI', 'disableDoubleClickZoom',
    'enableCloseButton', 'fullscreenControl', 'fullscreenControlOptions', 'imageDateControl', 'linksControl',
    'motionTracking', 'motionTrackingControl', 'panControl', 'panControlOptions', 'pano',
    'position', 'pov', 'scrollwheel', 'showRoadLabels', 'visible', 'zoomControl', 'zoomControlOptions'
];
var OUTPUTS$14 = [
    'closeclick', 'pano_changed', 'position_changed', 'pov_changed', 'resize', 'status_changed',
    'visible_changed', 'zoom_changed'
];
var StreetViewPanorama = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StreetViewPanorama, _super);
    function StreetViewPanorama(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'StreetViewPanorama', INPUTS$14, OUTPUTS$14) || this;
    }
    StreetViewPanorama.prototype.initialize = function () {
        this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
        var element;
        if (this.objectOptions.selector) {
            element = document.querySelector(this['selector']);
            delete this.objectOptions.selector;
        }
        else {
            element = this.nguiMapComponent.el;
        }
        typeof this.objectOptions.position === 'string' && (delete this.objectOptions.position);
        this.mapObject = new google.maps[this.mapObjectName](element, this.objectOptions);
        this.mapObject['mapObjectName'] = this.mapObjectName;
        this.mapObject['nguiMapComponent'] = this.nguiMapComponent;
        this.nguiMap.setObjectEvents(this.outputs, this, 'mapObject');
        this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
    StreetViewPanorama.prototype.ngOnDestroy = function () {
        if (this.nguiMapComponent.el) {
            this.nguiMap.clearObjectEvents(this.outputs, this, 'mapObject');
        }
    };
StreetViewPanorama.ɵfac = function StreetViewPanorama_Factory(t) { return new (t || StreetViewPanorama)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NguiMapComponent)); };
StreetViewPanorama.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: StreetViewPanorama, selectors: [["street-view-panorama"]], inputs: { selector: "selector", options: "options", addressControl: "addressControl", addressControlOptions: "addressControlOptions", clickToGo: "clickToGo", disableDefaultUI: "disableDefaultUI", disableDoubleClickZoom: "disableDoubleClickZoom", enableCloseButton: "enableCloseButton", fullscreenControl: "fullscreenControl", fullscreenControlOptions: "fullscreenControlOptions", imageDateControl: "imageDateControl", linksControl: "linksControl", motionTracking: "motionTracking", motionTrackingControl: "motionTrackingControl", panControl: "panControl", panControlOptions: "panControlOptions", pano: "pano", position: "position", pov: "pov", scrollwheel: "scrollwheel", showRoadLabels: "showRoadLabels", visible: "visible", zoomControl: "zoomControl", zoomControlOptions: "zoomControlOptions" }, outputs: { closeclick: "closeclick", pano_changed: "pano_changed", position_changed: "position_changed", pov_changed: "pov_changed", resize: "resize", status_changed: "status_changed", visible_changed: "visible_changed", zoom_changed: "zoom_changed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StreetViewPanorama, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'ngui-map > street-view-panorama',
                inputs: INPUTS$14,
                outputs: OUTPUTS$14
            }]
    }], function () { return [{ type: NguiMapComponent }]; }, null); })();
    return StreetViewPanorama;
}(BaseMapDirective));
StreetViewPanorama.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var INPUTS$15 = ['autoRefresh', 'options'];
var OUTPUTS$15 = [];
var TrafficLayer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TrafficLayer, _super);
    function TrafficLayer(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'TrafficLayer', INPUTS$15, OUTPUTS$15) || this;
    }
TrafficLayer.ɵfac = function TrafficLayer_Factory(t) { return new (t || TrafficLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NguiMapComponent)); };
TrafficLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: TrafficLayer, selectors: [["traffic-layer"]], inputs: { autoRefresh: "autoRefresh", options: "options" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TrafficLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'ngui-map > traffic-layer',
                inputs: INPUTS$15,
                outputs: OUTPUTS$15
            }]
    }], function () { return [{ type: NguiMapComponent }]; }, null); })();
    return TrafficLayer;
}(BaseMapDirective));
TrafficLayer.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var INPUTS$16 = [];
var OUTPUTS$16 = [];
var TransitLayer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TransitLayer, _super);
    function TransitLayer(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'TransitLayer', INPUTS$16, OUTPUTS$16) || this;
    }
TransitLayer.ɵfac = function TransitLayer_Factory(t) { return new (t || TransitLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NguiMapComponent)); };
TransitLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: TransitLayer, selectors: [["transit-layer"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TransitLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'ngui-map > transit-layer',
                inputs: INPUTS$16,
                outputs: OUTPUTS$16
            }]
    }], function () { return [{ type: NguiMapComponent }]; }, null); })();
    return TransitLayer;
}(BaseMapDirective));
TransitLayer.ctorParameters = function () { return [
    { type: NguiMapComponent, },
]; };
var COMPONENTS_DIRECTIVES = [
    NguiMapComponent, InfoWindow,
    Marker, Circle, CustomMarker, Polygon, InfoWindow, Polyline, GroundOverlay,
    TransitLayer, TrafficLayer, HeatmapLayer, BicyclingLayer, KmlLayer, DataLayer,
    StreetViewPanorama, PlacesAutoComplete, DirectionsRenderer,
    DrawingManager,
];
var NguiMapModule = /** @class */ (function () {
    function NguiMapModule() {
    }
    NguiMapModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: NguiMapModule,
            providers: [
                { provide: NG_MAP_CONFIG_TOKEN, useValue: config }
            ],
        };
    };
NguiMapModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NguiMapModule });
NguiMapModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NguiMapModule_Factory(t) { return new (t || NguiMapModule)(); }, providers: [
        GeoCoder,
        NavigatorGeolocation,
        NguiMap,
        OptionBuilder,
        { provide: NgMapApiLoader, useClass: NgMapAsyncCallbackApiLoader },
    ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NguiMapModule, { declarations: function () { return [NguiMapComponent,
        InfoWindow,
        Marker,
        Circle,
        CustomMarker,
        Polygon,
        InfoWindow,
        Polyline,
        GroundOverlay,
        TransitLayer,
        TrafficLayer,
        HeatmapLayer,
        BicyclingLayer,
        KmlLayer,
        DataLayer,
        StreetViewPanorama,
        PlacesAutoComplete,
        DirectionsRenderer,
        DrawingManager]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]; }, exports: function () { return [NguiMapComponent,
        InfoWindow,
        Marker,
        Circle,
        CustomMarker,
        Polygon,
        InfoWindow,
        Polyline,
        GroundOverlay,
        TransitLayer,
        TrafficLayer,
        HeatmapLayer,
        BicyclingLayer,
        KmlLayer,
        DataLayer,
        StreetViewPanorama,
        PlacesAutoComplete,
        DirectionsRenderer,
        DrawingManager]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NguiMapModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
                declarations: COMPONENTS_DIRECTIVES,
                exports: [COMPONENTS_DIRECTIVES],
                providers: [
                    GeoCoder,
                    NavigatorGeolocation,
                    NguiMap,
                    OptionBuilder,
                    { provide: NgMapApiLoader, useClass: NgMapAsyncCallbackApiLoader },
                ]
            }]
    }], function () { return []; }, null); })();
    return NguiMapModule;
}());



//# sourceMappingURL=ngui-map.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/maps/fullscreenmap/fullscreenmap.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/maps/fullscreenmap/fullscreenmap.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n\n          <ngui-map zoom=\"13\" center=\"40.748817,-73.985428\" style=\"margin-top:60px;height: 100%; width: 100%; position: absolute;top: 0px;\n    left: 0px;\n    background-color: rgb(229, 227, 223);\">\n              <marker [position]=\"[40.748817,-73.985428]\"></marker>\n          </ngui-map>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/maps/googlemaps/googlemaps.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/maps/googlemaps/googlemaps.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card \">\n        <div class=\"card-header\">\n            <h4 class=\"card-title\">Satellite Map</h4>\n        </div>\n        <div class=\"card-body \">\n          <ngui-map zoom=\"3\" center=\"40.748817,-73.985428\"  mapTypeId=\"satellite\" >\n              <marker [position]=\"[40.748817,-73.985428]\"></marker>\n          </ngui-map>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"card \">\n        <div class=\"card-header \">\n          <h4 class='card-title'>Regular Map</h4>\n        </div>\n        <div class=\"card-body \">\n          <ngui-map zoom=\"13\" center=\"40.748817,-73.985428\" >\n              <marker [position]=\"[40.748817,-73.985428]\"></marker>\n          </ngui-map>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/maps/vectormaps/vectormaps.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/maps/vectormaps/vectormaps.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h3 class=\"text-center\">\n                    World Map<br />\n                    <small>\n                        Looks great on any resolution. Made by our friends from jVector Map.\n                    </small>\n                </h3>\n                <div class=\"card card-plain\">\n                    <div class=\"card-content\">\n                        <div id=\"worldMap\" class=\"map map-big\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./src/app/maps/fullscreenmap/fullscreenmap.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/maps/fullscreenmap/fullscreenmap.component.ts ***!
  \***************************************************************/
/*! exports provided: FullScreenMapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullScreenMapsComponent", function() { return FullScreenMapsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var FullScreenMapsComponent = /** @class */ (function () {
    function FullScreenMapsComponent() {
    }
    FullScreenMapsComponent.prototype.ngOnInit = function () {
    };
    FullScreenMapsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fullscreen-map-cmp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./fullscreenmap.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/maps/fullscreenmap/fullscreenmap.component.html")).default
        })
    ], FullScreenMapsComponent);
    return FullScreenMapsComponent;
}());



/***/ }),

/***/ "./src/app/maps/googlemaps/googlemaps.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/maps/googlemaps/googlemaps.component.ts ***!
  \*********************************************************/
/*! exports provided: GoogleMapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsComponent", function() { return GoogleMapsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var GoogleMapsComponent = /** @class */ (function () {
    function GoogleMapsComponent() {
    }
    GoogleMapsComponent.prototype.ngOnInit = function () {
    };
    GoogleMapsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vector-maps-cmp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./googlemaps.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/maps/googlemaps/googlemaps.component.html")).default
        })
    ], GoogleMapsComponent);
    return GoogleMapsComponent;
}());



/***/ }),

/***/ "./src/app/maps/maps.module.ts":
/*!*************************************!*\
  !*** ./src/app/maps/maps.module.ts ***!
  \*************************************/
/*! exports provided: MapsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsModule", function() { return MapsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ngui_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngui/map */ "./node_modules/@ngui/map/__ivy_ngcc__/esm5/ngui-map.js");
/* harmony import */ var _maps_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maps.routing */ "./src/app/maps/maps.routing.ts");
/* harmony import */ var _fullscreenmap_fullscreenmap_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fullscreenmap/fullscreenmap.component */ "./src/app/maps/fullscreenmap/fullscreenmap.component.ts");
/* harmony import */ var _googlemaps_googlemaps_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./googlemaps/googlemaps.component */ "./src/app/maps/googlemaps/googlemaps.component.ts");
/* harmony import */ var _vectormaps_vectormaps_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vectormaps/vectormaps.component */ "./src/app/maps/vectormaps/vectormaps.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};









var MapsModule = /** @class */ (function () {
    function MapsModule() {
    }
    MapsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_maps_routing__WEBPACK_IMPORTED_MODULE_5__["MapsRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ngui_map__WEBPACK_IMPORTED_MODULE_4__["NguiMapModule"].forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE' })
            ],
            declarations: [
                _fullscreenmap_fullscreenmap_component__WEBPACK_IMPORTED_MODULE_6__["FullScreenMapsComponent"],
                _googlemaps_googlemaps_component__WEBPACK_IMPORTED_MODULE_7__["GoogleMapsComponent"],
                _vectormaps_vectormaps_component__WEBPACK_IMPORTED_MODULE_8__["VectorMapsComponent"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], MapsModule);
    return MapsModule;
}());



/***/ }),

/***/ "./src/app/maps/maps.routing.ts":
/*!**************************************!*\
  !*** ./src/app/maps/maps.routing.ts ***!
  \**************************************/
/*! exports provided: MapsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsRoutes", function() { return MapsRoutes; });
/* harmony import */ var _fullscreenmap_fullscreenmap_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fullscreenmap/fullscreenmap.component */ "./src/app/maps/fullscreenmap/fullscreenmap.component.ts");
/* harmony import */ var _googlemaps_googlemaps_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./googlemaps/googlemaps.component */ "./src/app/maps/googlemaps/googlemaps.component.ts");
/* harmony import */ var _vectormaps_vectormaps_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vectormaps/vectormaps.component */ "./src/app/maps/vectormaps/vectormaps.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var MapsRoutes = [{
        path: '',
        children: [{
                path: 'fullscreen',
                component: _fullscreenmap_fullscreenmap_component__WEBPACK_IMPORTED_MODULE_0__["FullScreenMapsComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'google',
                component: _googlemaps_googlemaps_component__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'vector',
                component: _vectormaps_vectormaps_component__WEBPACK_IMPORTED_MODULE_2__["VectorMapsComponent"]
            }]
    }
];


/***/ }),

/***/ "./src/app/maps/vectormaps/vectormaps.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/maps/vectormaps/vectormaps.component.ts ***!
  \*********************************************************/
/*! exports provided: VectorMapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VectorMapsComponent", function() { return VectorMapsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var VectorMapsComponent = /** @class */ (function () {
    function VectorMapsComponent() {
    }
    VectorMapsComponent.prototype.ngOnInit = function () {
        var mapData = {
            "AU": 760,
            "BR": 550,
            "CA": 120,
            "DE": 1300,
            "FR": 540,
            "GB": 690,
            "GE": 200,
            "IN": 200,
            "RO": 600,
            "RU": 300,
            "US": 2920,
        };
        $('#worldMap').vectorMap({
            map: 'world_mill_en',
            backgroundColor: "transparent",
            zoomOnScroll: false,
            regionStyle: {
                initial: {
                    fill: '#e4e4e4',
                    "fill-opacity": 0.9,
                    stroke: 'none',
                    "stroke-width": 0,
                    "stroke-opacity": 0
                }
            },
            series: {
                regions: [{
                        values: mapData,
                        scale: ["#AAAAAA", "#444444"],
                        normalizeFunction: 'polynomial'
                    }]
            },
        });
    };
    VectorMapsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vector-maps-cmp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./vectormaps.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/maps/vectormaps/vectormaps.component.html")).default
        })
    ], VectorMapsComponent);
    return VectorMapsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=maps-maps-module.js.map