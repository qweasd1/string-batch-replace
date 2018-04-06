import {stringBatchUpdate, EDIT_TYPE} from "../lib/stringBatchUpdate";

it('test replace', function () {
  let newText = stringBatchUpdate("abc",[
    {
      type:EDIT_TYPE.replace,
      start:1,
      end:3,
      text:"yy"
    }])
  expect(newText).toEqual("ayy")
});

it('test insert', function () {
  let newText = stringBatchUpdate("abc",[
    {
      type:EDIT_TYPE.insert,
      start:1,
      text:"x"
    }])
  expect(newText).toEqual("axbc")
});

it('test delete', function () {
  let newText = stringBatchUpdate("abc",[
    {
      type:EDIT_TYPE.delete,
      start:1,
      end:2
    }])
  expect(newText).toEqual("ac")
});

it('test delete (delete is longer than next insert)', function () {
  let newText = stringBatchUpdate("import 'a'\n",[
    {
      type:EDIT_TYPE.delete,
      start:0,
      end:12
    },
    {
      type:EDIT_TYPE.insert,
      start:11,
      text:"import 'b'"
    }
  ])
  expect(newText).toEqual("import 'b'")
});

it('test together', function () {
  let newText = stringBatchUpdate("abc",[
    {
      type:EDIT_TYPE.insert,
      start:1,
      text:"x"
    },
    {
      type:EDIT_TYPE.delete,
      start:1,
      end:2
    },
    {
      type:EDIT_TYPE.replace,
      start:2,
      end:3,
      text:"yy"
    }
    ])
  expect(newText).toEqual("axyy")
});



it('test reorder together', function () {
  let newText = stringBatchUpdate("abc",[
    {
      type:EDIT_TYPE.replace,
      start:2,
      end:3,
      text:"yy"
    },
    {
      type:EDIT_TYPE.insert,
      start:1,
      text:"x"
    },
    {
      type:EDIT_TYPE.delete,
      start:1,
      end:2
    }
  ])
  expect(newText).toEqual("axyy")
});




