// 导入
define(["b", "a"], function (b, a) {
    //等b.js加载完成后（生成script元素加载）运行该函数
    //模块内部的代码
    console.log(b, a)
})