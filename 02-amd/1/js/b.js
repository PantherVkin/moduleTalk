define(function () {
    //模块内部的代码
    console.log("b模块的内部代码")
    var a = 1;
    var b = 234;

    // 返回值：导出的内容
    return {
        name: "b模块",
        data: "b模块的数据"
    }
})
