import Vue from 'vue'

let vm = new Vue({
    el: '#app',
    data() {
        return {
            title: '测试',
            list: [{
                name: '张三',
                age: 50
            }],
            user: {
                zhangsan: {
                    name: '张三',
                    age: 18
                },
                lisi: {
                    name: '李四',
                    age: 50,
                    haizi: {
                        name: '张三',
                        age: 18
                    }
                }
            }
        }
    }
})
vm.list.push({ a: 1 })
// vm.title = 55
// console.log(vm.title, 'vms');
// console.log(vm, 'vm');
// console.log(vm.user.zhangsan, 'vms'); // 这样调用会触发三次监听者vm vm.user vm.user.zhangsan