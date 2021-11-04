// 合并两个模块
// ./src/a.js
// ./src/index.js

// 1. 用一个对象保存所有的模块，以及模块对象的代码
//   以模块名作为属性名，模块代码放在函数里面

let modules = {
    './src/a.js': function (module, exports, require) {
        // 模块代码
        console.log("this is module a")
        module.exports = "a";
    },
    './src/index.js': function (module, exports, require) {
        console.log("this is module index")
        // require(路径)：路径要和属性名一致
        var a = require("./src/a.js")
        console.log(a)
    }
}


// 2. 封装一个函数，处理保存所有模块的对象
function deal(modules) {

    let moduleExports = {}; // 用于缓存模块的导出结果

    // 封装my_require：运行一个模块，得到模块导出结果
    function my_require(moduleId) { // 模块Id： 就是模块的路径
        // 检查是否有缓存
        if (moduleExports[moduleId]) {
            return moduleExports[moduleId]
        }
        let func = modules[moduleId]; // 得到该模块Id对应的函数

        // 构造一个空 module对象
        let module = {
            exports: {}
        }

        func(module, module.exports, my_require); // 运行模块,func 函数中 有对module赋值导出
        let result = module.exports;
        moduleExports[moduleId] = result;
        return result;
    }

    // 执行入口模块：require函数相当于是运行一个模块，得到模块导出结果
    my_require('./src/index.js')
    my_require('./src/a.js')

    my_require('./src/a.js')

}

deal(modules)