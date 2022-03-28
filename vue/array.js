import observeArray from './observeArray'
import { OBSERVE_ARRAY } from './config'


var orgArrMethods = Array.prototype;// 获取数组方法
var arrayMethods = Object.create(orgArrMethods);//创建数组对象

OBSERVE_ARRAY.map(function (m) {
    arrayMethods[m] = function () {
        console.log(1);
        var methodsArg = Array.prototype.slice.call(arguments); //获取方法传入的数据
        var rt = orgArrMethods[m].apply(this, methodsArg) //调用相应方法 这里不能使用arrayMethods数组对象的方法 会死循环
        var newArray;
        switch (m) {
            case 'push':
            case 'unshift':
                newArray = rt
                break;
            case 'splice':
                newArray = methodsArg.slice(2)
                break;
            default:
                break;
        }
        newArray && observeArray(newArray)
        return rt
    }
})

export {
    arrayMethods
}