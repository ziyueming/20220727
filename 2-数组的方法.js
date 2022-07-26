/* let ary = [12, 23, 34, 45]
console.log(typeof ary) //=>"object"
console.dir(ary) */

/*
    ary = {
        0:12,
        1:23,
        3:45
        length:4
    }

    数字作为索引（KEY属性名）
    length代表长度

    ary[0] 根据索引获取指定项的内容
    ary.length 获取数组的长度
    ary.length-1 最后一项的索引
 */

/* let ary = [10, 20];
let res = ary.push(30, 'AA', { name: 'aa' });
console.log(res, ary)
 */

/* let ary = [10, 20, 30, 40];
ary.length--;
console.log(ary) */

/* let ary = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let res = ary.splice(2, 4)
console.log(res, ary)
 */

/* let ary = [10, 20, 30, 40, 50];
let res = ary.splice(1, 2, "珠峰")
ary.splice(2, 0, "hh")
ary.splice(ary.length, 0, "aaa")
ary.splice(0, 0, "bbb")
console.log(res, ary) */

//==============================================================
/* let ary = [10, 20, 30, 40, 50];
let res = ary.slice(1, 3)
console.log(res) */

/* let ary = [10, 20, 30]
let res = ary.toString()
console.log(res)
 */
/* let ary = [10, 20, 30]
let res = ary.join('')
console.log(res) //=> "102030"

res = ary.join()
console.log(res) //=> "10,20,30"

res = ary.join('|')
console.log(res) //=> "10|20|30"

res = ary.join('+')
console.log(res) //=> "10+20+30"
console.log(eval(res)) //=>60   eval把字符串变为JS表达式执行 */

/* let ary = [10, 20, 30, 10, 20, 30]
console.log(ary.indexOf(20)) //=>1
console.log(ary.lastIndexOf(20)) //=>4

//想验证ary中是否包含"珠峰培训"
if (ary.indexOf('珠峰培训') === -1) {
    //不包含
    console.log('不包含')
} else {
    console.log('包含')
}
//也可以直接使用ES6新提供的includes方法判断
console.log(ary.includes(30)) //=> true
 */

/* let ary = [12, 15, 9, 28, 10, 22]
ary.reverse()
console.log(ary) //=> [22,10,28,9,15,12] */

/* //想要实现多位数正常排序，需要给sort传递一个函数，函数中返回a-b实现升序，返回b-a实现降序
let ary = [12, 15, 9, 28, 10, 22];
//a和b是相邻的两项
ary.sort((a, b) => a - b);
console.log(ary) //=> [9,10,12,15,22,28] */

/*
    forEach:遍历数组中的每一项内容
    @params
        回调函数
    @return
 */
//原来数组不变
let ary = [12, 15, 9, 28, 10, 22];

/* //基于原生JS中的循环可以实现
for (let i = 0; i < ary.length; i++) {
    //i:当前循环这一项的索引
    //ary[i]:根据索引获取循环的这一项
    console.log('索引:' + i + '内容:' + ary[i])
} */

ary.forEach((item, index) => {
    //数组当中有多少项，函数就会被默认执行多少次
    //每一次执行函数，item是数组中当前要操作的一项，index是当前项的索引
    console.log('索引:' + index + '内容:' + item)
})

