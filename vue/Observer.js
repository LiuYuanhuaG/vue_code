import defineReactiveData from './reactive'
import { arrayMethods } from './array'
import observeArray from './observeArray'

function Observer(data) {
    if (Array.isArray(data)) {
        data.__proto__ = arrayMethods // 为原型链上添加我们处理过的方法 方法调用查找时优先找到这里
        observeArray(data)
    } else {

        this.walk(data)
    }
}
// 添加walk方法 处理对象数据
Observer.prototype.walk = function (data) {
    var keys = Object.keys(data)
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i]
        var value = data[key]
        defineReactiveData(data, key, value)
    }
}

export default Observer