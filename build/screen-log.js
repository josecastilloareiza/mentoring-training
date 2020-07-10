"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenLog = void 0;
var ScreenLog = /** @class */ (function () {
    function ScreenLog() {
        var _this = this;
        this.log = '';
        this.add = function (msg) {
            _this.log += msg + '\n';
        };
        this.show = function () {
            alert(_this.log);
            _this.log = '';
        };
    }
    return ScreenLog;
}());
exports.ScreenLog = ScreenLog;
