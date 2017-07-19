"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SampleUserFilterPipe = (function () {
    function SampleUserFilterPipe() {
    }
    SampleUserFilterPipe.prototype.transform = function (value, filterBy) {
        if (!filterBy)
            return value;
        filterBy = filterBy.toLocaleLowerCase();
        return value.filter(function (sample) {
            return sample.createdBy.toLocaleLowerCase().includes(filterBy);
        });
    };
    SampleUserFilterPipe = __decorate([
        core_1.Pipe({
            name: 'sampleUserFilter'
        })
    ], SampleUserFilterPipe);
    return SampleUserFilterPipe;
}());
exports.SampleUserFilterPipe = SampleUserFilterPipe;
var SampleStatusFilterPipe = (function () {
    function SampleStatusFilterPipe() {
    }
    SampleStatusFilterPipe.prototype.transform = function (value, filterBy) {
        if (!filterBy)
            return value;
        filterBy = filterBy.toLocaleLowerCase();
        return value.filter(function (sample) {
            return sample.status.toLocaleLowerCase().includes(filterBy);
        });
    };
    SampleStatusFilterPipe = __decorate([
        core_1.Pipe({
            name: 'sampleStatusFilter'
        })
    ], SampleStatusFilterPipe);
    return SampleStatusFilterPipe;
}());
exports.SampleStatusFilterPipe = SampleStatusFilterPipe;
//# sourceMappingURL=sample-filter.pipe.js.map