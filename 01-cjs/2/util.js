// util.js 需要隐藏的内部实现
const count = 100;

const getNumber = () => {
    count ++;
    return count;
}

// 要暴露给外部的接口
exports.getNumber = getNumber;