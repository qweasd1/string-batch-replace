"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
it('test replace', function () {
    var newText = lib_1.strintBatchReplace("abc", [
        {
            type: lib_1.EDIT_TYPE.replace,
            start: 1,
            end: 3,
            text: "yy"
        }
    ]);
    expect(newText).toEqual("ayy");
});
it('test insert', function () {
    var newText = lib_1.strintBatchReplace("abc", [
        {
            type: lib_1.EDIT_TYPE.insert,
            start: 1,
            text: "x"
        }
    ]);
    expect(newText).toEqual("axbc");
});
it('test together', function () {
    var newText = lib_1.strintBatchReplace("abc", [
        {
            type: lib_1.EDIT_TYPE.insert,
            start: 1,
            text: "x"
        },
        {
            type: lib_1.EDIT_TYPE.replace,
            start: 2,
            end: 3,
            text: "yy"
        }
    ]);
    expect(newText).toEqual("axbyy");
});
it('test reorder together', function () {
    var newText = lib_1.strintBatchReplace("abc", [
        {
            type: lib_1.EDIT_TYPE.replace,
            start: 2,
            end: 3,
            text: "yy"
        },
        {
            type: lib_1.EDIT_TYPE.insert,
            start: 1,
            text: "x"
        }
    ]);
    expect(newText).toEqual("axbyy");
});
//# sourceMappingURL=allTest.js.map