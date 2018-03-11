export declare function strintBatchReplace(originText: string, editInfos: EditInfo[]): string;
export interface EditInfo {
    type: EDIT_TYPE;
    text: string;
    start: number;
    end?: number;
}
export declare enum EDIT_TYPE {
    replace = 0,
    insert = 1,
}
