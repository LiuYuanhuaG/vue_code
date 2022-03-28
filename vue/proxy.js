function proxyData(vm, target, key) {

    //数据劫持将 vm._data.xxx 变为 vm.xxx
    Object.defineProperty(vm, key, {
        get() {
            return vm[target][key]
        },
        set(newValue) {
            return vm[target][key] = newValue
        }
    })
}

export default proxyData