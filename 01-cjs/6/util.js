let counter = 3;
function incCounter() {
  counter++;
}

// 输出内部变量 counter 和改写这个变量的内部方法 incCounter。
module.exports = {
  counter: counter,
  incCounter: incCounter,
};