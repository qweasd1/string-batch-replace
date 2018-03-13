# string-batch-update

## installation
```bash
# npm
npm install string-batch-update


# yarn
yarn install string-batch-update
```


## usage
```javascript
import {strintBatchUpdate, EDIT_TYPE} from 'string-batch-update'

let nextText = stringBatchReplace("abc",[
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

// should output axyy
console.log(newText)
```