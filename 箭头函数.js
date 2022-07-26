function sum(n, m) {
    return n + m;
}

//改写成箭头函数
let sum = (n, m) => {
    return n + m;
}
//如果函数体当中只有一行return，可以省略return和大括号
let sum = (n, m) => n + m;


function fn(n) {
    return function (m) {
        return n + m
    }
}
//改写成箭头函数
let fn = n => m => n + m

function sum(n, m) {
    if (typeof n === 'undefined') {
        n = 0;
    }
    if (typeof m === 'undefined') {
        m = 0;
    }
    return n + m;
}

//改写成箭头函数
let sum = (n = 0, m = 0) => n + m;
