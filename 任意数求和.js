/*
    任意数求和：
        1、传递实参的个数不定
        2、传递的值是否为有效数字不定
        =>把传递的有效数字相加求和

    arguments:函数内置的实参集合
        1、类数组集合，集合中存储着所有函数执行时，传递的实参信息
        2、不论是否设置形参，arguments都存在
        3、不论是否传递实参，arguments也都存在
 */

function sum() {
    let total = null;
    for (let i = 0; i < arguments.length; i++) {
        //获取的每一项的结果都要转换为数字(数学运算)
        let item = Number(arguments[i]);
        //非有效数字不加
        if (isNaN(item)) {
            continue
        }
        total += item
    }
    return total
}

let total = sum(10, 10, '30', 'AA', '10')
console.log(total)