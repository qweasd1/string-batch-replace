const editInfoSorter = (x,y)=>x.start - y.start
export function stringBatchUpdate(originText:string, editInfos:EditInfo[]){
  editInfos = editInfos.sort(editInfoSorter)

  let newTextCache = []
  let cursor = 0
  for(let edit of editInfos){
    newTextCache.push(originText.substring(cursor,edit.start))

    switch (edit.type){
      case EDIT_TYPE.insert:
        newTextCache.push(edit.text)
        cursor = edit.start
        break
      case EDIT_TYPE.replace:
        newTextCache.push(edit.text)
        cursor = edit.end
        break
      case EDIT_TYPE.delete:
        cursor = edit.end
        break
    }


  }

  newTextCache.push(originText.substr(cursor))
  return newTextCache.join("")
}

export interface EditInfo {
  type:EDIT_TYPE
  text?:string
  start:number
  end?:number
}

export enum EDIT_TYPE{
  replace = 0,
  insert = 1,
  delete = 2
}


