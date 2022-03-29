import observe from "./observe";
// import array from './array'


function observeArray(data) {

    for (var i = 0; i < data.length; i++) {
        observe(data[i]) // 观察数组每一项元素 
    }
}

export default observeArray