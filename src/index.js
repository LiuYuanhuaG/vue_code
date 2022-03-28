import Vue from 'vue'
let vm = new Vue({
    el: '#app',
    data() {
        return {
            title: '测试',
            list: [{
                name: '张三',
                age: 50
            }]
        }
    }
})
vm.title = 55
console.log(vm.title, 'vms');
console.log(vm, 'vms');