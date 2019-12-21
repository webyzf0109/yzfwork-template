class Function {
    constructor() {

    }

    /**获取数组下标 */
    getArrayIndex(arr,val) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == val) return i;
        }
        return -1;
    }

    /**删除数组某一项 */
    removeArrayItem(arr,val) {
        var index = this.getArrayIndex(arr,val);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    }
}
let obj = new Function();
export default obj;