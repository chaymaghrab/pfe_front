(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charts-charts-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/charts.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/charts.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <p>Simple yet flexible JavaScript charting for designers & developers. Made by our friends from\n    <a target=\"_blank\" href=\"https://github.com/gionkunz/chartist-js\">Chartist.js</a>. Please check\n    <a target=\"_blank\" href=\"https://gionkunz.github.io/chartist-js/api-documentation.html\">the full documentation</a>.</p>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card card-chart\">\n        <div class=\"card-header\">\n          <h5 class=\"card-title\">24 Hours Performance</h5>\n          <p class=\"card-category\">Line Chart</p>\n        </div>\n        <div class=\"card-body\">\n          <canvas id=\"activeUsers\"></canvas>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card card-chart\">\n        <div class=\"card-header\">\n          <h5 class=\"card-title\">NASDAQ: AAPL</h5>\n          <p class=\"card-category\">Line Chart with Points</p>\n        </div>\n        <div class=\"card-body\">\n          <canvas id=\"chartStock\"></canvas>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card card-chart\">\n        <div class=\"card-header\">\n          <h5 class=\"card-title\">Views</h5>\n          <p class=\"card-category\">Bar Chart</p>\n        </div>\n        <div class=\"card-body\">\n          <canvas id=\"chartViews\"></canvas>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card car-chart\">\n        <div class=\"card-header\">\n          <h5 class=\"card-title\">Activity</h5>\n          <p class=\"card-category\">Multiple Bars Chart</p>\n        </div>\n        <div class=\"card-body\">\n          <canvas id=\"chartActivity\"></canvas>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"card \">\n        <div class=\"card-header \">\n          <h5 class=\"card-title\">Email Statistics</h5>\n          <p class=\"card-category\">Last Campaign Performance</p>\n        </div>\n        <div class=\"card-body \">\n          <canvas id=\"chartEmail\" class=\"ct-chart ct-perfect-fourth\" width=\"456\" height=\"300\"></canvas>\n        </div>\n        <div class=\"card-footer \">\n          <div class=\"legend\">\n            <i class=\"fa fa-circle text-info\"></i> Open\n          </div>\n          <hr>\n          <div class=\"stats\">\n            <i class=\"fa fa-calendar\"></i> Number of emails sent\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-8\">\n      <div class=\"card \">\n        <div class=\"card-header \">\n          <h5 class=\"card-title\">Users Behavior</h5>\n          <p class=\"card-category\">24 Hours performance</p>\n        </div>\n        <div class=\"card-body \">\n          <canvas id=chartHours width=\"400\" height=\"100\"></canvas>\n        </div>\n        <div class=\"card-footer \">\n          <hr>\n          <div class=\"stats\">\n            <i class=\"fa fa-history\"></i> Updated 3 minutes ago\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/charts/charts.component.ts":
/*!********************************************!*\
  !*** ./src/app/charts/charts.component.ts ***!
  \********************************************/
/*! exports provided: ChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsComponent", function() { return ChartsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ChartsComponent = /** @class */ (function () {
    function ChartsComponent() {
        this.chartColor = "#FFFFFF";
    }
    ChartsComponent.prototype.ngOnInit = function () {
        this.canvas = document.getElementById("chartHours");
        this.ctx = this.canvas.getContext("2d");
        this.myChart = new chart_js__WEBPACK_IMPORTED_MODULE_1___default.a(this.ctx, {
            type: 'line',
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
                datasets: [{
                        borderColor: "#6bd098",
                        backgroundColor: "#6bd098",
                        pointRadius: 0,
                        pointHoverRadius: 0,
                        borderWidth: 3,
                        data: [300, 310, 316, 322, 330, 326, 333, 345, 338, 354]
                    },
                    {
                        borderColor: "#f17e5d",
                        backgroundColor: "#f17e5d",
                        pointRadius: 0,
                        pointHoverRadius: 0,
                        borderWidth: 3,
                        data: [320, 340, 365, 360, 370, 385, 390, 384, 408, 420]
                    },
                    {
                        borderColor: "#fcc468",
                        backgroundColor: "#fcc468",
                        pointRadius: 0,
                        pointHoverRadius: 0,
                        borderWidth: 3,
                        data: [370, 394, 415, 409, 425, 445, 460, 450, 478, 484]
                    }
                ]
            },
            options: {
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                },
                scales: {
                    yAxes: [{
                            ticks: {
                                fontColor: "#9f9f9f",
                                beginAtZero: false,
                                maxTicksLimit: 5,
                            },
                            gridLines: {
                                drawBorder: false,
                                zeroLineColor: "transparent",
                                color: 'rgba(255,255,255,0.05)'
                            }
                        }],
                    xAxes: [{
                            barPercentage: 1.6,
                            gridLines: {
                                drawBorder: false,
                                color: 'rgba(255,255,255,0.1)',
                                zeroLineColor: "transparent",
                                display: false,
                            },
                            ticks: {
                                padding: 20,
                                fontColor: "#9f9f9f"
                            }
                        }]
                },
            }
        });
        this.canvas = document.getElementById("chartEmail");
        this.ctx = this.canvas.getContext("2d");
        this.myChart = new chart_js__WEBPACK_IMPORTED_MODULE_1___default.a(this.ctx, {
            type: 'pie',
            data: {
                labels: [1, 2, 3],
                datasets: [{
                        label: "Emails",
                        pointRadius: 0,
                        pointHoverRadius: 0,
                        backgroundColor: [
                            '#e3e3e3',
                            '#4acccd',
                            '#fcc468'
                        ],
                        borderWidth: 0,
                        data: [542, 480, 430]
                    }]
            },
            options: {
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                },
                scales: {
                    yAxes: [{
                            ticks: {
                                display: false
                            },
                            gridLines: {
                                drawBorder: false,
                                zeroLineColor: "transparent",
                                color: 'rgba(255,255,255,0.05)'
                            }
                        }],
                    xAxes: [{
                            barPercentage: 1.6,
                            gridLines: {
                                drawBorder: false,
                                color: 'rgba(255,255,255,0.1)',
                                zeroLineColor: "transparent"
                            },
                            ticks: {
                                display: false,
                            }
                        }]
                },
            }
        });
        this.canvas = document.getElementById("chartActivity");
        this.ctx = this.canvas.getContext("2d");
        this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
        this.gradientStroke.addColorStop(0, '#80b6f4');
        this.gradientStroke.addColorStop(1, this.chartColor);
        this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
        this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        this.gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");
        this.myChart = new chart_js__WEBPACK_IMPORTED_MODULE_1___default.a(this.ctx, {
            type: 'bar',
            data: {
                labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
                datasets: [
                    {
                        label: "Data",
                        borderColor: '#fcc468',
                        fill: true,
                        backgroundColor: '#fcc468',
                        hoverBorderColor: '#fcc468',
                        borderWidth: 8,
                        data: [100, 120, 80, 100, 90, 130, 110, 100, 80, 110, 130, 140, 130, 120, 130, 80, 100, 90, 120, 130],
                    },
                    {
                        label: "Data",
                        borderColor: '#4cbdd7',
                        fill: true,
                        backgroundColor: '#4cbdd7',
                        hoverBorderColor: '#4cbdd7',
                        borderWidth: 8,
                        data: [80, 140, 50, 120, 50, 150, 60, 130, 50, 130, 150, 100, 110, 80, 140, 50, 140, 50, 110, 150],
                    }
                ]
            },
            options: {
                tooltips: {
                    tooltipFillColor: "rgba(0,0,0,0.5)",
                    tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    tooltipFontSize: 14,
                    tooltipFontStyle: "normal",
                    tooltipFontColor: "#fff",
                    tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    tooltipTitleFontSize: 14,
                    tooltipTitleFontStyle: "bold",
                    tooltipTitleFontColor: "#fff",
                    tooltipYPadding: 6,
                    tooltipXPadding: 6,
                    tooltipCaretSize: 8,
                    tooltipCornerRadius: 6,
                    tooltipXOffset: 10,
                },
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                            ticks: {
                                fontColor: "#9f9f9f",
                                fontStyle: "bold",
                                beginAtZero: true,
                                maxTicksLimit: 5,
                                padding: 20
                            },
                            gridLines: {
                                zeroLineColor: "transparent",
                                display: true,
                                drawBorder: false,
                                color: '#9f9f9f',
                            }
                        }],
                    xAxes: [{
                            barPercentage: 0.4,
                            gridLines: {
                                zeroLineColor: "white",
                                display: false,
                                drawBorder: false,
                                color: 'transparent',
                            },
                            ticks: {
                                padding: 20,
                                fontColor: "#9f9f9f",
                                fontStyle: "bold"
                            }
                        }]
                }
            }
        });
        this.canvas = document.getElementById("chartViews");
        this.ctx = this.canvas.getContext("2d");
        this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
        this.gradientStroke.addColorStop(0, '#80b6f4');
        this.gradientStroke.addColorStop(1, this.chartColor);
        this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
        this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        this.gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");
        this.myChart = new chart_js__WEBPACK_IMPORTED_MODULE_1___default.a(this.ctx, {
            type: 'bar',
            data: {
                labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
                datasets: [
                    {
                        label: "Data",
                        borderColor: '#fcc468',
                        fill: true,
                        backgroundColor: '#fcc468',
                        hoverBorderColor: '#fcc468',
                        borderWidth: 5,
                        data: [100, 120, 80, 100, 90, 130, 110, 100, 80, 110, 130, 140, 130, 120, 130, 80, 100, 90, 120, 130],
                    }
                ]
            },
            options: {
                tooltips: {
                    tooltipFillColor: "rgba(0,0,0,0.5)",
                    tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    tooltipFontSize: 14,
                    tooltipFontStyle: "normal",
                    tooltipFontColor: "#fff",
                    tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    tooltipTitleFontSize: 14,
                    tooltipTitleFontStyle: "bold",
                    tooltipTitleFontColor: "#fff",
                    tooltipYPadding: 6,
                    tooltipXPadding: 6,
                    tooltipCaretSize: 8,
                    tooltipCornerRadius: 6,
                    tooltipXOffset: 10,
                },
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                            ticks: {
                                fontColor: "#9f9f9f",
                                fontStyle: "bold",
                                beginAtZero: true,
                                maxTicksLimit: 5,
                                padding: 20
                            },
                            gridLines: {
                                zeroLineColor: "transparent",
                                display: true,
                                drawBorder: false,
                                color: '#9f9f9f',
                            }
                        }],
                    xAxes: [{
                            barPercentage: 0.4,
                            gridLines: {
                                zeroLineColor: "white",
                                display: false,
                                drawBorder: false,
                                color: 'transparent',
                            },
                            ticks: {
                                padding: 20,
                                fontColor: "#9f9f9f",
                                fontStyle: "bold"
                            }
                        }]
                }
            }
        });
        this.canvas = document.getElementById("chartStock");
        this.ctx = this.canvas.getContext("2d");
        this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
        this.gradientStroke.addColorStop(0, '#80b6f4');
        this.gradientStroke.addColorStop(1, this.chartColor);
        this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
        this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        this.gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");
        this.myChart = new chart_js__WEBPACK_IMPORTED_MODULE_1___default.a(this.ctx, {
            type: 'line',
            data: {
                labels: ["6pm", "9pm", "11pm", "2am", "4am", "6am", "8am"],
                datasets: [{
                        label: "Active Users",
                        borderColor: "#f17e5d",
                        pointBackgroundColor: "#f17e5d",
                        pointRadius: 3,
                        pointHoverRadius: 3,
                        lineTension: 0,
                        fill: false,
                        borderWidth: 3,
                        data: [200, 250, 300, 350, 280, 330, 400]
                    }]
            },
            options: {
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                },
                scales: {
                    yAxes: [{
                            ticks: {
                                fontColor: "#9f9f9f",
                                beginAtZero: false,
                                maxTicksLimit: 5,
                            },
                            gridLines: {
                                drawBorder: false,
                                borderDash: [8, 5],
                                zeroLineColor: "transparent",
                                color: '#9f9f9f'
                            }
                        }],
                    xAxes: [{
                            barPercentage: 1.6,
                            gridLines: {
                                drawBorder: false,
                                borderDash: [8, 5],
                                color: '#9f9f9f',
                                zeroLineColor: "transparent"
                            },
                            ticks: {
                                padding: 20,
                                fontColor: "#9f9f9f"
                            }
                        }]
                },
            }
        });
        this.canvas = document.getElementById("activeUsers");
        this.ctx = this.canvas.getContext("2d");
        this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
        this.gradientStroke.addColorStop(0, '#80b6f4');
        this.gradientStroke.addColorStop(1, this.chartColor);
        this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
        this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        this.gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");
        this.myChart = new chart_js__WEBPACK_IMPORTED_MODULE_1___default.a(this.ctx, {
            type: 'line',
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
                datasets: [{
                        label: "Active Users",
                        borderColor: "#6bd098",
                        pointRadius: 0,
                        pointHoverRadius: 0,
                        fill: false,
                        borderWidth: 3,
                        data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610]
                    }]
            },
            options: {
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                },
                scales: {
                    yAxes: [{
                            ticks: {
                                fontColor: "#9f9f9f",
                                beginAtZero: false,
                                maxTicksLimit: 5,
                            },
                            gridLines: {
                                drawBorder: false,
                                zeroLineColor: "transparent",
                                color: 'rgba(255,255,255,0.05)'
                            }
                        }],
                    xAxes: [{
                            barPercentage: 1.6,
                            gridLines: {
                                drawBorder: false,
                                color: 'rgba(255,255,255,0.1)',
                                zeroLineColor: "transparent",
                                display: false,
                            },
                            ticks: {
                                padding: 20,
                                fontColor: "#9f9f9f"
                            }
                        }]
                },
            }
        });
        // General configuration for the charts with Line gradientStroke
        this.gradientChartOptionsConfiguration = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                bodySpacing: 4,
                mode: "nearest",
                intersect: 0,
                position: "nearest",
                xPadding: 10,
                yPadding: 10,
                caretPadding: 10
            },
            responsive: 1,
            scales: {
                yAxes: [{
                        display: 0,
                        ticks: {
                            display: false
                        },
                        gridLines: {
                            zeroLineColor: "transparent",
                            drawTicks: false,
                            display: false,
                            drawBorder: false
                        }
                    }],
                xAxes: [{
                        display: 0,
                        ticks: {
                            display: false
                        },
                        gridLines: {
                            zeroLineColor: "transparent",
                            drawTicks: false,
                            display: false,
                            drawBorder: false
                        }
                    }]
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 15,
                    bottom: 15
                }
            }
        };
        this.gradientChartOptionsConfigurationWithNumbersAndGrid = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                bodySpacing: 4,
                mode: "nearest",
                intersect: 0,
                position: "nearest",
                xPadding: 10,
                yPadding: 10,
                caretPadding: 10
            },
            responsive: true,
            scales: {
                yAxes: [{
                        gridLines: {
                            zeroLineColor: "transparent",
                            drawBorder: false
                        }
                    }],
                xAxes: [{
                        ticks: {
                            display: false
                        },
                        gridLines: {
                            zeroLineColor: "transparent",
                            drawTicks: false,
                            display: false,
                            drawBorder: false
                        }
                    }]
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 15,
                    bottom: 15
                }
            }
        };
    };
    ChartsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'charts-cmp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./charts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/charts.component.html")).default
        })
    ], ChartsComponent);
    return ChartsComponent;
}());



/***/ }),

/***/ "./src/app/charts/charts.module.ts":
/*!*****************************************!*\
  !*** ./src/app/charts/charts.module.ts ***!
  \*****************************************/
/*! exports provided: ChartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsModule", function() { return ChartsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _charts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./charts.component */ "./src/app/charts/charts.component.ts");
/* harmony import */ var _charts_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./charts.routing */ "./src/app/charts/charts.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var ChartsModule = /** @class */ (function () {
    function ChartsModule() {
    }
    ChartsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_charts_routing__WEBPACK_IMPORTED_MODULE_5__["ChartsRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_charts_component__WEBPACK_IMPORTED_MODULE_4__["ChartsComponent"]]
        })
    ], ChartsModule);
    return ChartsModule;
}());



/***/ }),

/***/ "./src/app/charts/charts.routing.ts":
/*!******************************************!*\
  !*** ./src/app/charts/charts.routing.ts ***!
  \******************************************/
/*! exports provided: ChartsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsRoutes", function() { return ChartsRoutes; });
/* harmony import */ var _charts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts.component */ "./src/app/charts/charts.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ChartsRoutes = [{
        path: '',
        children: [{
                path: '',
                component: _charts_component__WEBPACK_IMPORTED_MODULE_0__["ChartsComponent"]
            }]
    }];


/***/ })

}]);
//# sourceMappingURL=charts-charts-module.js.map