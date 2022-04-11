"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const cucumber_1 = require("@cucumber/cucumber");
const classGreeter_1 = require("../../src/classGreeter");
(0, cucumber_1.When)("the greeter says hello", function () {
    this.whatIHeard = new classGreeter_1.Greeter().sayHello();
});
(0, cucumber_1.Then)("I should have heard {string}", function (expectedResponse) {
    assert_1.default.equal(this.whatIHeard, expectedResponse);
});
//# sourceMappingURL=steps.js.map