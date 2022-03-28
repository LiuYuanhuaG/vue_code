import proxyData from './proxy'

function initState(vm) {
    var options = vm.$options

    if (options.data) {
        initData(vm)
    }
}

function initData(vm) {
    var data = vm.$options.data
    data = vm._data = typeof data === 'function' ? data.call(vm) : data || {}
    for (var key in data) {
        //使用代理处理数据 劫持数据增加访问、设置的入口
        proxyData(vm, '_data', key)
    }

}

export {
    initState
}