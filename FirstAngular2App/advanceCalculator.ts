/// <reference path="node_modules/angular2/bundles/typings/es6-shim/es6-shim.d.ts" />
/// <reference path="node_modules/angular2/bundles/typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from "angular2/angular2";

@Component(
    {

        selector: 'advancecalculator'
    })
@View({
        templateUrl: 'AdvanceCalculator.html'
})
  
export class AdvanceCalculator {   
   
    result: string;
    equation: string;
    constructor() {
        this.result = '0';
        this.equation = "";
    }
    
    clear()
    {
        this.result = '0';
        this.equation = "";
    }
    evaluate()
    {
        this.result = eval(this.equation);
    }
    buildEquation(temp: string)
    {
        this.equation += temp;
        this.result = this.equation;
    }
}
bootstrap(AdvanceCalculator);