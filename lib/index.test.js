"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
describe("commafy", function () {
    it("should add commas to a number", function () {
        expect((0, _1.commafy)("123456789")).toBe("123,456,789");
    });
});
