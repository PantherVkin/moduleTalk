// 不能直接将 exports 变量指向一个值，因为这样等于切断了 exports 与 module.exports 的引用。
console.log('before>>>', exports === module.exports)        // true

exports = {
    a: 111
}

console.log('after>>>', exports === module.exports)         // false