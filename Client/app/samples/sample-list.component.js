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
var SampleListComponent = (function () {
    function SampleListComponent(_http) {
        this._http = _http;
        this.samplesUrl = "http://localhost:5000/api/samples";
        this.pageTitle = "Search Samples";
        this.statusFilter = "";
        this.userFilter = "";
        this.warning = "";
        this.samples = [];
    }
    SampleListComponent.prototype.onLoadSuccess = function (response) {
        try {
            this.samples = response.json();
            this.warning = "";
        }
        catch (ex) {
            this.warning = "Error in parsing response.";
            console.log(ex);
        }
    };
    SampleListComponent.prototype.onLoadError = function (reason) {
        this.warning = "Error in load request.";
        console.log(reason);
    };
    SampleListComponent.prototype.load = function () {
        var _this = this;
        try {
            this.samples = [];
            this._prevRequest = this._http.get(this.samplesUrl);
            this._prevRequest.subscribe(function (data) { return _this.onLoadSuccess(data); }, function (err) { return _this.onLoadError(err); });
        }
        catch (ex) {
            this.warning = "Unable to load samples due to error.";
            console.log("Exception from Loading...");
            console.log(ex);
        }
    };
    SampleListComponent.prototype.useLocalData = function () {
        this.warning = "You are now using local data...";
        this.samples =
            [
                {
                    "sampleId": 1,
                    "barcode": "129076",
                    "createdAt": "2015-01-02T00:00:00",
                    "createdBy": 6,
                    "firstName": "Clint",
                    "lastName": "Reid",
                    "statusId": 3,
                    "status": "Report Generation"
                },
                {
                    "sampleId": 2,
                    "barcode": "850314",
                    "createdAt": "2015-06-15T00:00:00",
                    "createdBy": 7,
                    "firstName": "Kim",
                    "lastName": "Mullins",
                    "statusId": 3,
                    "status": "Report Generation"
                },
                {
                    "sampleId": 3,
                    "barcode": "176033",
                    "createdAt": "2015-07-31T00:00:00",
                    "createdBy": 7,
                    "firstName": "Kim",
                    "lastName": "Mullins",
                    "statusId": 0,
                    "status": "Received"
                },
                {
                    "sampleId": 4,
                    "barcode": "129629",
                    "createdAt": "2015-01-21T00:00:00",
                    "createdBy": 3,
                    "firstName": "Brad",
                    "lastName": "Huff",
                    "statusId": 0,
                    "status": "Received"
                },
                {
                    "sampleId": 5,
                    "barcode": "773561",
                    "createdAt": "2015-02-21T00:00:00",
                    "createdBy": 9,
                    "firstName": "Dwayne",
                    "lastName": "Pena",
                    "statusId": 1,
                    "status": "Accessioning"
                },
                {
                    "sampleId": 6,
                    "barcode": "255253",
                    "createdAt": "2015-05-13T00:00:00",
                    "createdBy": 9,
                    "firstName": "Dwayne",
                    "lastName": "Pena",
                    "statusId": 0,
                    "status": "Received"
                },
                {
                    "sampleId": 7,
                    "barcode": "693294",
                    "createdAt": "2015-05-11T00:00:00",
                    "createdBy": 3,
                    "firstName": "Brad",
                    "lastName": "Huff",
                    "statusId": 2,
                    "status": "In Lab"
                },
                {
                    "sampleId": 8,
                    "barcode": "455116",
                    "createdAt": "2015-09-13T00:00:00",
                    "createdBy": 6,
                    "firstName": "Clint",
                    "lastName": "Reid",
                    "statusId": 0,
                    "status": "Received"
                },
                {
                    "sampleId": 9,
                    "barcode": "280561",
                    "createdAt": "2015-04-08T00:00:00",
                    "createdBy": 5,
                    "firstName": "Orlando",
                    "lastName": "Holt",
                    "statusId": 3,
                    "status": "Report Generation"
                },
                {
                    "sampleId": 10,
                    "barcode": "863760",
                    "createdAt": "2016-01-25T00:00:00",
                    "createdBy": 0,
                    "firstName": "Kristine",
                    "lastName": "Butler",
                    "statusId": 3,
                    "status": "Report Generation"
                },
                {
                    "sampleId": 11,
                    "barcode": "211102",
                    "createdAt": "2015-08-24T00:00:00",
                    "createdBy": 4,
                    "firstName": "Dewey",
                    "lastName": "McDonald",
                    "statusId": 2,
                    "status": "In Lab"
                },
                {
                    "sampleId": 12,
                    "barcode": "193882",
                    "createdAt": "2016-01-23T00:00:00",
                    "createdBy": 8,
                    "firstName": "Blanche",
                    "lastName": "Mack",
                    "statusId": 1,
                    "status": "Accessioning"
                },
                {
                    "sampleId": 13,
                    "barcode": "502533",
                    "createdAt": "2016-03-08T00:00:00",
                    "createdBy": 2,
                    "firstName": "Cora",
                    "lastName": "Hunt",
                    "statusId": 1,
                    "status": "Accessioning"
                },
                {
                    "sampleId": 14,
                    "barcode": "371726",
                    "createdAt": "2015-04-15T00:00:00",
                    "createdBy": 8,
                    "firstName": "Blanche",
                    "lastName": "Mack",
                    "statusId": 1,
                    "status": "Accessioning"
                },
                {
                    "sampleId": 15,
                    "barcode": "807891",
                    "createdAt": "2015-05-17T00:00:00",
                    "createdBy": 2,
                    "firstName": "Cora",
                    "lastName": "Hunt",
                    "statusId": 1,
                    "status": "Accessioning"
                },
                {
                    "sampleId": 16,
                    "barcode": "845318",
                    "createdAt": "2016-03-22T00:00:00",
                    "createdBy": 7,
                    "firstName": "Kim",
                    "lastName": "Mullins",
                    "statusId": 1,
                    "status": "Accessioning"
                },
                {
                    "sampleId": 17,
                    "barcode": "601386",
                    "createdAt": "2015-11-18T00:00:00",
                    "createdBy": 3,
                    "firstName": "Brad",
                    "lastName": "Huff",
                    "statusId": 1,
                    "status": "Accessioning"
                },
                {
                    "sampleId": 18,
                    "barcode": "978804",
                    "createdAt": "2015-05-31T00:00:00",
                    "createdBy": 5,
                    "firstName": "Orlando",
                    "lastName": "Holt",
                    "statusId": 2,
                    "status": "In Lab"
                },
                {
                    "sampleId": 19,
                    "barcode": "759456",
                    "createdAt": "2015-09-23T00:00:00",
                    "createdBy": 8,
                    "firstName": "Blanche",
                    "lastName": "Mack",
                    "statusId": 2,
                    "status": "In Lab"
                },
                {
                    "sampleId": 20,
                    "barcode": "949933",
                    "createdAt": "2015-07-04T00:00:00",
                    "createdBy": 0,
                    "firstName": "Kristine",
                    "lastName": "Butler",
                    "statusId": 3,
                    "status": "Report Generation"
                },
                {
                    "sampleId": 21,
                    "barcode": "411443",
                    "createdAt": "2015-03-16T00:00:00",
                    "createdBy": 3,
                    "firstName": "Brad",
                    "lastName": "Huff",
                    "statusId": 0,
                    "status": "Received"
                },
                {
                    "sampleId": 22,
                    "barcode": "202485",
                    "createdAt": "2015-09-03T00:00:00",
                    "createdBy": 0,
                    "firstName": "Kristine",
                    "lastName": "Butler",
                    "statusId": 3,
                    "status": "Report Generation"
                },
                {
                    "sampleId": 23,
                    "barcode": "737715",
                    "createdAt": "2015-10-07T00:00:00",
                    "createdBy": 0,
                    "firstName": "Kristine",
                    "lastName": "Butler",
                    "statusId": 1,
                    "status": "Accessioning"
                },
                {
                    "sampleId": 24,
                    "barcode": "106957",
                    "createdAt": "2015-10-03T00:00:00",
                    "createdBy": 7,
                    "firstName": "Kim",
                    "lastName": "Mullins",
                    "statusId": 1,
                    "status": "Accessioning"
                },
                {
                    "sampleId": 25,
                    "barcode": "561154",
                    "createdAt": "2016-02-23T00:00:00",
                    "createdBy": 9,
                    "firstName": "Dwayne",
                    "lastName": "Pena",
                    "statusId": 1,
                    "status": "Accessioning"
                },
                {
                    "sampleId": 26,
                    "barcode": "923720",
                    "createdAt": "2015-06-09T00:00:00",
                    "createdBy": 2,
                    "firstName": "Cora",
                    "lastName": "Hunt",
                    "statusId": 1,
                    "status": "Accessioning"
                },
                {
                    "sampleId": 27,
                    "barcode": "985114",
                    "createdAt": "2015-04-17T00:00:00",
                    "createdBy": 4,
                    "firstName": "Dewey",
                    "lastName": "McDonald",
                    "statusId": 0,
                    "status": "Received"
                },
                {
                    "sampleId": 28,
                    "barcode": "544078",
                    "createdAt": "2015-06-16T00:00:00",
                    "createdBy": 6,
                    "firstName": "Clint",
                    "lastName": "Reid",
                    "statusId": 3,
                    "status": "Report Generation"
                },
                {
                    "sampleId": 29,
                    "barcode": "605315",
                    "createdAt": "2015-06-23T00:00:00",
                    "createdBy": 7,
                    "firstName": "Kim",
                    "lastName": "Mullins",
                    "statusId": 0,
                    "status": "Received"
                },
                {
                    "sampleId": 30,
                    "barcode": "588963",
                    "createdAt": "2015-02-13T00:00:00",
                    "createdBy": 7,
                    "firstName": "Kim",
                    "lastName": "Mullins",
                    "statusId": 1,
                    "status": "Accessioning"
                },
                {
                    "sampleId": 31,
                    "barcode": "646434",
                    "createdAt": "2015-08-23T00:00:00",
                    "createdBy": 0,
                    "firstName": "Kristine",
                    "lastName": "Butler",
                    "statusId": 2,
                    "status": "In Lab"
                },
                {
                    "sampleId": 32,
                    "barcode": "819931",
                    "createdAt": "2015-11-10T00:00:00",
                    "createdBy": 0,
                    "firstName": "Kristine",
                    "lastName": "Butler",
                    "statusId": 2,
                    "status": "In Lab"
                },
                {
                    "sampleId": 33,
                    "barcode": "978799",
                    "createdAt": "2015-11-06T00:00:00",
                    "createdBy": 2,
                    "firstName": "Cora",
                    "lastName": "Hunt",
                    "statusId": 3,
                    "status": "Report Generation"
                },
                {
                    "sampleId": 34,
                    "barcode": "250878",
                    "createdAt": "2016-03-14T00:00:00",
                    "createdBy": 6,
                    "firstName": "Clint",
                    "lastName": "Reid",
                    "statusId": 1,
                    "status": "Accessioning"
                },
                {
                    "sampleId": 35,
                    "barcode": "499463",
                    "createdAt": "2015-10-20T00:00:00",
                    "createdBy": 5,
                    "firstName": "Orlando",
                    "lastName": "Holt",
                    "statusId": 3,
                    "status": "Report Generation"
                },
                {
                    "sampleId": 36,
                    "barcode": "261808",
                    "createdAt": "2015-09-25T00:00:00",
                    "createdBy": 5,
                    "firstName": "Orlando",
                    "lastName": "Holt",
                    "statusId": 3,
                    "status": "Report Generation"
                },
                {
                    "sampleId": 37,
                    "barcode": "496077",
                    "createdAt": "2015-04-12T00:00:00",
                    "createdBy": 8,
                    "firstName": "Blanche",
                    "lastName": "Mack",
                    "statusId": 2,
                    "status": "In Lab"
                },
                {
                    "sampleId": 38,
                    "barcode": "939988",
                    "createdAt": "2015-05-15T00:00:00",
                    "createdBy": 4,
                    "firstName": "Dewey",
                    "lastName": "McDonald",
                    "statusId": 2,
                    "status": "In Lab"
                },
                {
                    "sampleId": 39,
                    "barcode": "142598",
                    "createdAt": "2015-06-04T00:00:00",
                    "createdBy": 7,
                    "firstName": "Kim",
                    "lastName": "Mullins",
                    "statusId": 1,
                    "status": "Accessioning"
                },
                {
                    "sampleId": 40,
                    "barcode": "648235",
                    "createdAt": "2015-12-26T00:00:00",
                    "createdBy": 6,
                    "firstName": "Clint",
                    "lastName": "Reid",
                    "statusId": 2,
                    "status": "In Lab"
                },
                {
                    "sampleId": 41,
                    "barcode": "949270",
                    "createdAt": "2015-10-22T00:00:00",
                    "createdBy": 0,
                    "firstName": "Kristine",
                    "lastName": "Butler",
                    "statusId": 0,
                    "status": "Received"
                },
                {
                    "sampleId": 42,
                    "barcode": "606179",
                    "createdAt": "2015-10-12T00:00:00",
                    "createdBy": 5,
                    "firstName": "Orlando",
                    "lastName": "Holt",
                    "statusId": 2,
                    "status": "In Lab"
                },
                {
                    "sampleId": 43,
                    "barcode": "762654",
                    "createdAt": "2016-03-04T00:00:00",
                    "createdBy": 2,
                    "firstName": "Cora",
                    "lastName": "Hunt",
                    "statusId": 0,
                    "status": "Received"
                },
                {
                    "sampleId": 44,
                    "barcode": "230403",
                    "createdAt": "2015-07-20T00:00:00",
                    "createdBy": 5,
                    "firstName": "Orlando",
                    "lastName": "Holt",
                    "statusId": 1,
                    "status": "Accessioning"
                },
                {
                    "sampleId": 45,
                    "barcode": "419103",
                    "createdAt": "2016-02-09T00:00:00",
                    "createdBy": 2,
                    "firstName": "Cora",
                    "lastName": "Hunt",
                    "statusId": 0,
                    "status": "Received"
                },
                {
                    "sampleId": 46,
                    "barcode": "105914",
                    "createdAt": "2016-01-19T00:00:00",
                    "createdBy": 5,
                    "firstName": "Orlando",
                    "lastName": "Holt",
                    "statusId": 3,
                    "status": "Report Generation"
                },
                {
                    "sampleId": 47,
                    "barcode": "292591",
                    "createdAt": "2016-04-04T00:00:00",
                    "createdBy": 0,
                    "firstName": "Kristine",
                    "lastName": "Butler",
                    "statusId": 2,
                    "status": "In Lab"
                },
                {
                    "sampleId": 48,
                    "barcode": "460439",
                    "createdAt": "2016-03-25T00:00:00",
                    "createdBy": 2,
                    "firstName": "Cora",
                    "lastName": "Hunt",
                    "statusId": 3,
                    "status": "Report Generation"
                },
                {
                    "sampleId": 49,
                    "barcode": "905492",
                    "createdAt": "2015-02-13T00:00:00",
                    "createdBy": 4,
                    "firstName": "Dewey",
                    "lastName": "McDonald",
                    "statusId": 0,
                    "status": "Received"
                },
                {
                    "sampleId": 50,
                    "barcode": "454128",
                    "createdAt": "2015-09-20T00:00:00",
                    "createdBy": 2,
                    "firstName": "Cora",
                    "lastName": "Hunt",
                    "statusId": 1,
                    "status": "Accessioning"
                },
                {
                    "sampleId": 51,
                    "barcode": "245743",
                    "createdAt": "2015-04-17T00:00:00",
                    "createdBy": 2,
                    "firstName": "Cora",
                    "lastName": "Hunt",
                    "statusId": 0,
                    "status": "Received"
                },
                {
                    "sampleId": 52,
                    "barcode": "127239",
                    "createdAt": "2015-09-24T00:00:00",
                    "createdBy": 3,
                    "firstName": "Brad",
                    "lastName": "Huff",
                    "statusId": 3,
                    "status": "Report Generation"
                },
                {
                    "sampleId": 53,
                    "barcode": "747765",
                    "createdAt": "2015-10-16T00:00:00",
                    "createdBy": 5,
                    "firstName": "Orlando",
                    "lastName": "Holt",
                    "statusId": 0,
                    "status": "Received"
                },
                {
                    "sampleId": 54,
                    "barcode": "141601",
                    "createdAt": "2015-03-31T00:00:00",
                    "createdBy": 2,
                    "firstName": "Cora",
                    "lastName": "Hunt",
                    "statusId": 1,
                    "status": "Accessioning"
                },
                {
                    "sampleId": 55,
                    "barcode": "427192",
                    "createdAt": "2015-03-01T00:00:00",
                    "createdBy": 3,
                    "firstName": "Brad",
                    "lastName": "Huff",
                    "statusId": 3,
                    "status": "Report Generation"
                },
                {
                    "sampleId": 56,
                    "barcode": "779537",
                    "createdAt": "2015-04-25T00:00:00",
                    "createdBy": 3,
                    "firstName": "Brad",
                    "lastName": "Huff",
                    "statusId": 0,
                    "status": "Received"
                },
                {
                    "sampleId": 57,
                    "barcode": "614487",
                    "createdAt": "2015-12-04T00:00:00",
                    "createdBy": 8,
                    "firstName": "Blanche",
                    "lastName": "Mack",
                    "statusId": 3,
                    "status": "Report Generation"
                },
                {
                    "sampleId": 58,
                    "barcode": "771285",
                    "createdAt": "2015-12-24T00:00:00",
                    "createdBy": 7,
                    "firstName": "Kim",
                    "lastName": "Mullins",
                    "statusId": 3,
                    "status": "Report Generation"
                },
                {
                    "sampleId": 59,
                    "barcode": "868108",
                    "createdAt": "2016-01-21T00:00:00",
                    "createdBy": 5,
                    "firstName": "Orlando",
                    "lastName": "Holt",
                    "statusId": 3,
                    "status": "Report Generation"
                },
                {
                    "sampleId": 60,
                    "barcode": "586986",
                    "createdAt": "2015-11-07T00:00:00",
                    "createdBy": 1,
                    "firstName": "Alfred",
                    "lastName": "McKenzie",
                    "statusId": 3,
                    "status": "Report Generation"
                },
                {
                    "sampleId": 61,
                    "barcode": "957210",
                    "createdAt": "2015-01-28T00:00:00",
                    "createdBy": 0,
                    "firstName": "Kristine",
                    "lastName": "Butler",
                    "statusId": 3,
                    "status": "Report Generation"
                },
                {
                    "sampleId": 62,
                    "barcode": "925265",
                    "createdAt": "2016-02-09T00:00:00",
                    "createdBy": 6,
                    "firstName": "Clint",
                    "lastName": "Reid",
                    "statusId": 2,
                    "status": "In Lab"
                },
                {
                    "sampleId": 63,
                    "barcode": "229746",
                    "createdAt": "2015-08-02T00:00:00",
                    "createdBy": 1,
                    "firstName": "Alfred",
                    "lastName": "McKenzie",
                    "statusId": 2,
                    "status": "In Lab"
                },
                {
                    "sampleId": 64,
                    "barcode": "329580",
                    "createdAt": "2015-05-07T00:00:00",
                    "createdBy": 4,
                    "firstName": "Dewey",
                    "lastName": "McDonald",
                    "statusId": 0,
                    "status": "Received"
                },
                {
                    "sampleId": 65,
                    "barcode": "398802",
                    "createdAt": "2015-11-18T00:00:00",
                    "createdBy": 3,
                    "firstName": "Brad",
                    "lastName": "Huff",
                    "statusId": 1,
                    "status": "Accessioning"
                },
                {
                    "sampleId": 66,
                    "barcode": "793846",
                    "createdAt": "2016-04-04T00:00:00",
                    "createdBy": 7,
                    "firstName": "Kim",
                    "lastName": "Mullins",
                    "statusId": 3,
                    "status": "Report Generation"
                },
                {
                    "sampleId": 67,
                    "barcode": "194543",
                    "createdAt": "2015-01-16T00:00:00",
                    "createdBy": 0,
                    "firstName": "Kristine",
                    "lastName": "Butler",
                    "statusId": 2,
                    "status": "In Lab"
                },
                {
                    "sampleId": 68,
                    "barcode": "699892",
                    "createdAt": "2016-03-06T00:00:00",
                    "createdBy": 5,
                    "firstName": "Orlando",
                    "lastName": "Holt",
                    "statusId": 2,
                    "status": "In Lab"
                },
                {
                    "sampleId": 69,
                    "barcode": "849262",
                    "createdAt": "2015-11-20T00:00:00",
                    "createdBy": 5,
                    "firstName": "Orlando",
                    "lastName": "Holt",
                    "statusId": 0,
                    "status": "Received"
                },
                {
                    "sampleId": 70,
                    "barcode": "212969",
                    "createdAt": "2016-02-23T00:00:00",
                    "createdBy": 1,
                    "firstName": "Alfred",
                    "lastName": "McKenzie",
                    "statusId": 2,
                    "status": "In Lab"
                },
                {
                    "sampleId": 71,
                    "barcode": "913224",
                    "createdAt": "2015-08-17T00:00:00",
                    "createdBy": 6,
                    "firstName": "Clint",
                    "lastName": "Reid",
                    "statusId": 3,
                    "status": "Report Generation"
                },
                {
                    "sampleId": 72,
                    "barcode": "283784",
                    "createdAt": "2015-01-23T00:00:00",
                    "createdBy": 1,
                    "firstName": "Alfred",
                    "lastName": "McKenzie",
                    "statusId": 3,
                    "status": "Report Generation"
                },
                {
                    "sampleId": 73,
                    "barcode": "964445",
                    "createdAt": "2015-03-07T00:00:00",
                    "createdBy": 1,
                    "firstName": "Alfred",
                    "lastName": "McKenzie",
                    "statusId": 1,
                    "status": "Accessioning"
                },
                {
                    "sampleId": 74,
                    "barcode": "219254",
                    "createdAt": "2015-06-11T00:00:00",
                    "createdBy": 7,
                    "firstName": "Kim",
                    "lastName": "Mullins",
                    "statusId": 2,
                    "status": "In Lab"
                },
                {
                    "sampleId": 75,
                    "barcode": "136235",
                    "createdAt": "2015-03-21T00:00:00",
                    "createdBy": 4,
                    "firstName": "Dewey",
                    "lastName": "McDonald",
                    "statusId": 3,
                    "status": "Report Generation"
                },
                {
                    "sampleId": 76,
                    "barcode": "371430",
                    "createdAt": "2015-03-19T00:00:00",
                    "createdBy": 2,
                    "firstName": "Cora",
                    "lastName": "Hunt",
                    "statusId": 2,
                    "status": "In Lab"
                },
                {
                    "sampleId": 77,
                    "barcode": "219597",
                    "createdAt": "2015-12-12T00:00:00",
                    "createdBy": 3,
                    "firstName": "Brad",
                    "lastName": "Huff",
                    "statusId": 3,
                    "status": "Report Generation"
                },
                {
                    "sampleId": 78,
                    "barcode": "721655",
                    "createdAt": "2016-04-29T00:00:00",
                    "createdBy": 5,
                    "firstName": "Orlando",
                    "lastName": "Holt",
                    "statusId": 2,
                    "status": "In Lab"
                },
                {
                    "sampleId": 79,
                    "barcode": "434154",
                    "createdAt": "2016-02-25T00:00:00",
                    "createdBy": 8,
                    "firstName": "Blanche",
                    "lastName": "Mack",
                    "statusId": 0,
                    "status": "Received"
                },
                {
                    "sampleId": 80,
                    "barcode": "290254",
                    "createdAt": "2015-11-02T00:00:00",
                    "createdBy": 9,
                    "firstName": "Dwayne",
                    "lastName": "Pena",
                    "statusId": 2,
                    "status": "In Lab"
                },
                {
                    "sampleId": 81,
                    "barcode": "736586",
                    "createdAt": "2015-05-30T00:00:00",
                    "createdBy": 4,
                    "firstName": "Dewey",
                    "lastName": "McDonald",
                    "statusId": 2,
                    "status": "In Lab"
                },
                {
                    "sampleId": 82,
                    "barcode": "622526",
                    "createdAt": "2015-11-08T00:00:00",
                    "createdBy": 0,
                    "firstName": "Kristine",
                    "lastName": "Butler",
                    "statusId": 1,
                    "status": "Accessioning"
                },
                {
                    "sampleId": 83,
                    "barcode": "693936",
                    "createdAt": "2016-03-21T00:00:00",
                    "createdBy": 1,
                    "firstName": "Alfred",
                    "lastName": "McKenzie",
                    "statusId": 0,
                    "status": "Received"
                },
                {
                    "sampleId": 84,
                    "barcode": "529728",
                    "createdAt": "2015-02-25T00:00:00",
                    "createdBy": 1,
                    "firstName": "Alfred",
                    "lastName": "McKenzie",
                    "statusId": 2,
                    "status": "In Lab"
                },
                {
                    "sampleId": 85,
                    "barcode": "963244",
                    "createdAt": "2015-11-22T00:00:00",
                    "createdBy": 9,
                    "firstName": "Dwayne",
                    "lastName": "Pena",
                    "statusId": 0,
                    "status": "Received"
                },
                {
                    "sampleId": 86,
                    "barcode": "261164",
                    "createdAt": "2015-06-26T00:00:00",
                    "createdBy": 9,
                    "firstName": "Dwayne",
                    "lastName": "Pena",
                    "statusId": 2,
                    "status": "In Lab"
                },
                {
                    "sampleId": 87,
                    "barcode": "986536",
                    "createdAt": "2016-01-07T00:00:00",
                    "createdBy": 6,
                    "firstName": "Clint",
                    "lastName": "Reid",
                    "statusId": 1,
                    "status": "Accessioning"
                },
                {
                    "sampleId": 88,
                    "barcode": "572741",
                    "createdAt": "2015-12-01T00:00:00",
                    "createdBy": 6,
                    "firstName": "Clint",
                    "lastName": "Reid",
                    "statusId": 1,
                    "status": "Accessioning"
                },
                {
                    "sampleId": 89,
                    "barcode": "125921",
                    "createdAt": "2015-08-03T00:00:00",
                    "createdBy": 2,
                    "firstName": "Cora",
                    "lastName": "Hunt",
                    "statusId": 2,
                    "status": "In Lab"
                },
                {
                    "sampleId": 90,
                    "barcode": "262858",
                    "createdAt": "2015-12-07T00:00:00",
                    "createdBy": 3,
                    "firstName": "Brad",
                    "lastName": "Huff",
                    "statusId": 0,
                    "status": "Received"
                },
                {
                    "sampleId": 91,
                    "barcode": "879489",
                    "createdAt": "2015-09-02T00:00:00",
                    "createdBy": 7,
                    "firstName": "Kim",
                    "lastName": "Mullins",
                    "statusId": 1,
                    "status": "Accessioning"
                },
                {
                    "sampleId": 92,
                    "barcode": "105797",
                    "createdAt": "2015-12-26T00:00:00",
                    "createdBy": 6,
                    "firstName": "Clint",
                    "lastName": "Reid",
                    "statusId": 1,
                    "status": "Accessioning"
                },
                {
                    "sampleId": 93,
                    "barcode": "806498",
                    "createdAt": "2015-07-26T00:00:00",
                    "createdBy": 8,
                    "firstName": "Blanche",
                    "lastName": "Mack",
                    "statusId": 3,
                    "status": "Report Generation"
                },
                {
                    "sampleId": 94,
                    "barcode": "960686",
                    "createdAt": "2016-04-07T00:00:00",
                    "createdBy": 2,
                    "firstName": "Cora",
                    "lastName": "Hunt",
                    "statusId": 2,
                    "status": "In Lab"
                },
                {
                    "sampleId": 95,
                    "barcode": "201332",
                    "createdAt": "2015-09-19T00:00:00",
                    "createdBy": 4,
                    "firstName": "Dewey",
                    "lastName": "McDonald",
                    "statusId": 0,
                    "status": "Received"
                },
                {
                    "sampleId": 96,
                    "barcode": "405572",
                    "createdAt": "2015-11-04T00:00:00",
                    "createdBy": 3,
                    "firstName": "Brad",
                    "lastName": "Huff",
                    "statusId": 0,
                    "status": "Received"
                },
                {
                    "sampleId": 97,
                    "barcode": "204617",
                    "createdAt": "2015-09-05T00:00:00",
                    "createdBy": 5,
                    "firstName": "Orlando",
                    "lastName": "Holt",
                    "statusId": 1,
                    "status": "Accessioning"
                },
                {
                    "sampleId": 98,
                    "barcode": "767548",
                    "createdAt": "2016-02-09T00:00:00",
                    "createdBy": 7,
                    "firstName": "Kim",
                    "lastName": "Mullins",
                    "statusId": 2,
                    "status": "In Lab"
                },
                {
                    "sampleId": 99,
                    "barcode": "363492",
                    "createdAt": "2015-12-18T00:00:00",
                    "createdBy": 6,
                    "firstName": "Clint",
                    "lastName": "Reid",
                    "statusId": 1,
                    "status": "Accessioning"
                },
                {
                    "sampleId": 100,
                    "barcode": "541884",
                    "createdAt": "2015-07-07T00:00:00",
                    "createdBy": 5,
                    "firstName": "Orlando",
                    "lastName": "Holt",
                    "statusId": 1,
                    "status": "Accessioning"
                }
            ];
    };
    SampleListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'djs-samples',
            templateUrl: './sample-list.component.html'
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], SampleListComponent);
    return SampleListComponent;
}());
exports.SampleListComponent = SampleListComponent;
//# sourceMappingURL=sample-list.component.js.map