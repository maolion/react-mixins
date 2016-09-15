"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const index_1 = require('../index');
const chai_1 = require('chai');
const TargetA = {
    method1: function () {
        return true;
    }
};
const TargetB = {
    method2: function () {
        return true;
    }
};
const TargetC = {
    mixins: [TargetB],
    method3: function () {
        return true;
    }
};
const TargetD = {
    mixins: [TargetC],
    method4: function () {
        return this;
    }
};
function createInstance(classic) {
    var obj = new (new classic().render().type);
    return obj;
}
describe("@reactMixins(...mixins)", () => {
    it("传入空参数", () => {
        let TestComponent = class TestComponent {
        };
        TestComponent = __decorate([
            index_1.default(null)
        ], TestComponent);
        return true;
    });
    it("单个简单目标对象混合", () => {
        let TestComponent = class TestComponent {
        };
        TestComponent = __decorate([
            index_1.default([TargetA])
        ], TestComponent);
        return true;
    });
    it("多个简单目标对象混合", () => {
        let TestComponent = class TestComponent {
        };
        TestComponent = __decorate([
            index_1.default([TargetA, TargetB])
        ], TestComponent);
        return true;
    });
    it("多数量/多层依赖目标对象混合", () => {
        let TestComponent = class TestComponent {
        };
        TestComponent = __decorate([
            index_1.default([TargetA, TargetD])
        ], TestComponent);
        return true;
    });
});
describe('混合结果使用测试', () => {
    it("在类实例中调用混合目标对象的方法", () => {
        let TestComponent = class TestComponent {
            constructor() {
                this.method1();
            }
        };
        TestComponent = __decorate([
            index_1.default([TargetA])
        ], TestComponent);
        return createInstance(TestComponent);
    });
    it("在类实例中调用多混合目标对象的方法", () => {
        let TestComponent = class TestComponent {
            constructor() {
                this.method1();
                this.method2();
                this.method3();
                chai_1.expect(this.method4()).to.be.equal(this);
            }
        };
        TestComponent = __decorate([
            index_1.default([TargetA, TargetD])
        ], TestComponent);
        return createInstance(TestComponent);
    });
    it("同名方法的调用", () => {
        let result = [];
        const TargetA = {
            method1: function () {
                result.push("TargetA.method1");
            }
        };
        const TargetB = {
            method1: function () {
                result.push("TargetB.method1");
            }
        };
        const TargetC = {
            mixins: [TargetB],
            method1: function () {
                result.push("TargetC.method1");
            }
        };
        let TestComponent = class TestComponent {
            constructor() {
                this.method1();
            }
            method1() {
                result.push("TestComponent.method1");
            }
        };
        TestComponent = __decorate([
            index_1.default([TargetA, TargetC])
        ], TestComponent);
        var obj = createInstance(TestComponent);
        return result.join(',') == [
            "TargetA.method1",
            "TargetB.method1",
            "TargetC.method1",
            "TestComponent.method1"
        ].join(',');
    });
});
