import observe from "./observe";
import observeArray from "./observeArray";


// 处理对象数据 添加响应式
function defineReactiveData(data, key, value) {

    observe(value) // 递归添加观察者 监听数据

    Object.defineProperty(data, key, {
        set(newValue) {
            // 判断是否新值 是则替换旧值
            if (newValue === value) return;
            observeArray(newValue) // 在设置值得时候也有能是对象 所以在此需要在地调用观察者
            value = newValue
        },
        get() {
            // console.log('获取响应式数据：key ' + key + '; value ', value);
            return value
        }
    })
}

export default defineReactiveData