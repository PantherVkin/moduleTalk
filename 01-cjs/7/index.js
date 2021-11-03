// 为了避免反复加载同一个模块，nodejs默认开启了模块缓存： 如果加载的模块已经被加载过了，则会自动使用之前的导出结果；
let util1 = require('./util.js');
let util2 = require('./util.js');
let b = require('./b.js');