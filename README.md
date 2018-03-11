# string-batch-replace

## installation
```bash
# npm
npm install string-batch-replace


# yarn
yarn install string-batch-replace
```


## usage
```javascript
import {strintBatchReplace, EDIT_TYPE} from 'string-batch-replace'

let nextText = stringBatchReplace("abc",[
    {
        type: EDIT_TYPE.insert,
        text:"x",
        start:1
    },
    {
        type:EDIT_TYPE.replace,
        text:"yy",
        start:2,
        end:3
    }
])

// should output axbyy
console.log(newText)
```