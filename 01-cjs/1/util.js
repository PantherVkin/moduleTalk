// util.js 需要隐藏的内部实现
let count = 100;

const getNumber = () => {
    count ++;
    return count;
}

// 要暴露给外部的接口
// module.exports = {
//     getNumber: getNumber
// }
module.exports.getNumber = getNumber