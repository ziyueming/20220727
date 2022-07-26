/* let ary = [1, 2, 3, 1, 2, 1, 2, 3, 2, 1, 2, 3]

//创建一个空对象
let obj = {}

//循环数组中的每一项，把每一项向对象中进行存储 => item:item
for (let i = 0; i < ary.length; i++) {
    let item = ary[i]
    //每一次存储之前进行判断：验证obj中是否存在这一项
    if (obj[item] !== undefined) {
        //说明这项已经存在
        ary.splice(i, 1)
        //解决数组塌陷问题
        i--
        continue
    }
    obj[item] = item
}
console.log(ary) //=>[1,2,3] */

let ary = [12, 23, 12, 15, 25, 23, 25, 14, 16]
ary = [...new Set(ary)]
console.log(ary)