"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var process = require('process');
it('create root', function () {
    var f = root.get("generate/b/a.txt");
    f.write("nice!");
    f.parent.parent.get("c.txt").write("nice");
    expect(f.read()).toEqual("nice!");
});
//# sourceMappingURL=RootTest.js.map