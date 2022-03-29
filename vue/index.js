import { initState } from './init'
function Vue(options) {

    //初始化
    this._init(options)
}

Vue.prototype._init = function (options) {
    var vm = this;

    vm.$options = options;

    initState(vm)
}
window.Vue = Vue

export default Vue