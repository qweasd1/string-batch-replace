"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
console.log(lib_1.strintBatchReplace("abcend", [
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
]));
//# sourceMappingURL=FileTest.js.map