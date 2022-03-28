import Observer from './Observer'

function observe(data) {
    console.log(data, 'prototype');
    if (typeof data !== 'object' || data === null) return;

    // 当数据没有问题交由观察者进行观察
    new Observer(data)
}

export default observe