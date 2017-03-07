/// <reference path="node_modules/angular2/bundles/typings/es6-shim/es6-shim.d.ts" />
/// <reference path="node_modules/angular2/bundles/typings/angular2/angular2.d.ts" />
System.register(["angular2/angular2"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var angular2_1;
    var AdvanceCalculator;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            AdvanceCalculator = (function () {
                function AdvanceCalculator() {
                    this.result = '0';
                    this.equation = "";
                }
                AdvanceCalculator.prototype.clear = function () {
                    this.result = '0';
                    this.equation = "";
                };
                AdvanceCalculator.prototype.evaluate = function () {
                    this.result = eval(this.equation);
                };
                AdvanceCalculator.prototype.buildEquation = function (temp) {
                    this.equation += temp;
                    this.result = this.equation;
                };
                AdvanceCalculator = __decorate([
                    angular2_1.Component({
                        selector: 'advancecalculator'
                    }),
                    angular2_1.View({
                        templateUrl: 'AdvanceCalculator.html'
                    })
                ], AdvanceCalculator);
                return AdvanceCalculator;
            }());
            exports_1("AdvanceCalculator", AdvanceCalculator);
            angular2_1.bootstrap(AdvanceCalculator);
        }
    }
});
//# sourceMappingURL=advanceCalculator.js.map