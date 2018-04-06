"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stringBatchUpdate_1 = require("../lib/stringBatchUpdate");
it('test replace', function () {
    var newText = stringBatchUpdate_1.stringBatchUpdate("abc", [
        {
            type: stringBatchUpdate_1.EDIT_TYPE.replace,
            start: 1,
            end: 3,
            text: "yy"
        }
    ]);
    expect(newText).toEqual("ayy");
});
it('test insert', function () {
    var newText = stringBatchUpdate_1.stringBatchUpdate("abc", [
        {
            type: stringBatchUpdate_1.EDIT_TYPE.insert,
            start: 1,
            text: "x"
        }
    ]);
    expect(newText).toEqual("axbc");
});
it('test delete', function () {
    var newText = stringBatchUpdate_1.stringBatchUpdate("abc", [
        {
            type: stringBatchUpdate_1.EDIT_TYPE.delete,
            start: 1,
            end: 2
        }
    ]);
    expect(newText).toEqual("ac");
});
it('test delete (delete is longer than next insert)', function () {
    var newText = stringBatchUpdate_1.stringBatchUpdate("import 'a'\n", [
        {
            type: stringBatchUpdate_1.EDIT_TYPE.delete,
            start: 0,
            end: 12
        },
        {
            type: stringBatchUpdate_1.EDIT_TYPE.insert,
            start: 11,
            text: "import 'b'"
        }
    ]);
    expect(newText).toEqual("import 'b'");
});
it('test together', function () {
    var newText = stringBatchUpdate_1.stringBatchUpdate("abc", [
        {
            type: stringBatchUpdate_1.EDIT_TYPE.insert,
            start: 1,
            text: "x"
        },
        {
            type: stringBatchUpdate_1.EDIT_TYPE.delete,
            start: 1,
            end: 2
        },
        {
            type: stringBatchUpdate_1.EDIT_TYPE.replace,
            start: 2,
            end: 3,
            text: "yy"
        }
    ]);
    expect(newText).toEqual("axyy");
});
it('test reorder together', function () {
    var newText = stringBatchUpdate_1.stringBatchUpdate("abc", [
        {
            type: stringBatchUpdate_1.EDIT_TYPE.replace,
            start: 2,
            end: 3,
            text: "yy"
        },
        {
            type: stringBatchUpdate_1.EDIT_TYPE.insert,
            start: 1,
            text: "x"
        },
        {
            type: stringBatchUpdate_1.EDIT_TYPE.delete,
            start: 1,
            end: 2
        }
    ]);
    expect(newText).toEqual("axyy");
});
//# sourceMappingURL=allTest.js.map