"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var CreateSampleComponent = (function () {
    function CreateSampleComponent(_http) {
        this._http = _http;
        this.createSampleUrl = "http://localhost:5000/api/samples";
        this.response = "";
        this.pageTitle = "Create a new Sample";
    }
    CreateSampleComponent.prototype.onCreateSuccess = function (response) {
        console.log('Got Successful response');
        this.response = response.statusText;
        console.log(response);
    };
    CreateSampleComponent.prototype.onCreateError = function (reason) {
        this.response = "There was an error in creating the sample. Please check the server.";
        console.log("Create Sample Error");
        console.log(reason);
    };
    CreateSampleComponent.prototype.submitSample = function () {
        var _this = this;
        console.log('Starting Submission');
        var newSample = {
            "id": this.inputSampleId,
            "barcode": this.inputBarcode,
            "statusId": this.inputStatusId,
            "createdBy": this.inputCreatedBy,
            "createdAt": this.inputCreatedAt,
        };
        console.log('Created Post Body');
        console.log(newSample);
        this._prevPost = this._http.post(this.createSampleUrl, newSample);
        this._prevPost.subscribe(function (data) { return _this.onCreateSuccess(data); }, function (err) { return _this.onCreateError(err); });
        console.log('Subscribed to Observable');
    };
    CreateSampleComponent.prototype.easySample = function () {
        console.log('Setting input to easy sample');
        this.inputSampleId = "101";
        this.inputBarcode = "123456";
        this.inputStatusId = "1";
        this.inputCreatedBy = "1";
        var now = Date.now();
        this.inputCreatedAt = new Date(now).toISOString();
        console.log("Now: " + this.inputCreatedAt);
    };
    CreateSampleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'djs-create',
            templateUrl: './createSample.component.html'
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], CreateSampleComponent);
    return CreateSampleComponent;
}());
exports.CreateSampleComponent = CreateSampleComponent;
//# sourceMappingURL=createSample.component.js.map