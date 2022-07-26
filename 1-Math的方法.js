console.log(typeof Math) //=> "object"
console.dir(Math)

/*
    Math = {
        PI: 3.141592653589793,
        abs:function(){[native code]},
        ceil:function(){[native code]},
        ...
    }

    Math.abs();
    Math.PI;
 */

/*
console.log(Math.abs(-12.5)) //=> 12.5
console.log(Math.abs(12))  //=>12
console.log(Math.abs(0))  //=> 0

//传递的不是数字类型的值：先基于Number()转换为数字再处理
console.log(Math.abs('-1')) //=>1
console.log(Math.abs('-1px')) //=>NaN
console.log(Math.abs(true)) //=> 1
 */

/* console.log(Math.ceil(12)) //=> 12
console.log(Math.ceil(12.1)) //=> 13
console.log(Math.ceil(12.9)) //=>13
console.log(Math.ceil(-12.1)) //=>-12
console.log(Math.ceil(-12.9)) //=>-12

console.log(Math.floor(12)) //=> 12
console.log(Math.floor(12.1)) //=> 12
console.log(Math.floor(12.9)) //=>12
console.log(Math.floor(-12.1)) //=>-13
console.log(Math.floor(-12.9)) //=>-13 */

/* console.log(Math.round(12)) //=>12
console.log(Math.round(12.1))//=>12
//正数点5是入
console.log(Math.round(12.5))//=>13
console.log(Math.round(12.9))//=>13
console.log(Math.round(-12.1))//=>-12
//负数点5是舍
console.log(Math.round(-12.5))//=>-12
console.log(Math.round(-12.9))//=>-13 */

/* console.log(Math.max(12, 5, 23, 68, 45)) //=>68
console.log(Math.min(12, 5, 23, 68, 45)) //=>5 */

/* console.log(Math.sqrt(9)) //=>3 符合N*N =M 这样的M才能整开平方
console.log(Math.pow(2, 10)) //=> 1024 */

/* for (let i = 1; i <= 10; i++) {
    console.log(Math.random())
} */

//获取1-10之间的随机整数
console.log(Math.round(Math.random() * 9 + 1))
