/*
    charAt：根据索引获取指定位置的字符
    charCodeAt:获取指定字符的ASCII码值(Unicode编码值)
    @params
        n [number] 获取字符指定的索引
    @return
        返回查找到的字符
        找不到返回的是空字符串不是undefined，或者对应的编码值
 */

/* let str = 'ZhuFengPeiXun'
console.log(str.charAt(0)) //=>"z"
console.log(str[0]) //=>"z"
console.log(str.charAt(10000)) //=>""
console.log(str[10000]) //=>undefined */

/* console.log(str.charCodeAt(0)) //=>122
console.log(String.fromCharCode(122)) //=>"z" */

/* console.log(str.substr(3, 7)) //=>"fengpei"
console.log(str.substring(3, 7)) //=>"feng"
console.log(str.substr(3)) //=>"fengpeixun" 截取到末尾
console.log(str.substring(3, 10000)) //=>"fengpeixun" 截取到末尾（超过索引的也只截取到末尾 ）

console.log(str.substring(3, 7)) //=>"feng"
console.log(str.slice(3, 7)) //=>"feng"
console.log(str.substring(-7, -3)) //=>"" substring不支持负数索引
console.log(str.slice(-7, -3)) //=>"gpei" slice支持负数索引
// 快捷查找：负数索引。我们可以按照str.length+负索引的方式找 =>slice(13-7,13-3) */

/*
    验证字符是否存在
        indexOf(x,y):获取x第一次出现位置的索引，y是控制查找的起始位置索引
        lastIndexOf(x):最后一次出现位置的索引
        => 没有这个字符，返回的结果是-1

 */
/* console.log(str.indexOf('n')) //=>5
console.log(str.lastIndexOf('n')) //=>12
console.log(str.indexOf('@')) //=>-1 不存在返回-1

if (str.indexOf('@') === -1) {
    //字符串中不包含@这个字符
}

console.log(str.indexOf('feng')) //=>3 验证整体第一次出现得位置，返回得索引是第一个字符所在位置得索引值
console.log(str.indexOf('peiy')) //=>-1

console.log(str.indexOf('n', 7)) //=>12 查找字符串索引7及之后的字符串中，n第一次出现的位置索引

if (!str.includes('@')) {
    console.log("不包含")
} */

/*
    字符串中字母大小写的转换
    toUpperCase():转大写
    toLowerCase():转小写
 */

/* let str = 'ZhuFengPeiXun'
str = str.toUpperCase()
console.log(str) //=>ZHUFENGPEIXUN

str = str.toLowerCase()
console.log(str) //=>zhufengpeixun

//首字母大写
str = str.substr(0, 1).toUpperCase() + str.substr(1)
console.log(str) //=>Zhufengpeixun */

/*
    split([分隔符]):把字符串按照指定的分隔符拆分成数组(和数组中的join对应)
    split支持传递正则表达式
 */

//需求：把|分隔符变为，分隔符
let str = 'music|movie|eat|sport'
let ary = str.split('|')
console.log(ary) //=>[ "music", "movie", "eat", "sport" ]

/* 
    replace(老字符,新字符):实现字符串的替换(经常伴随着正则而用)
 */
/* let str = '珠峰@培训@扬帆@起航'
/* str = str.replace('@', '-')
console.log(str) //=> "珠峰-培训@扬帆@起航"  
//在不使用正则表达式的情况下，执行一次repalce只能替换一次字符 */

/* str = str.replace(/@/g, '-')
console.log(str) //=>珠峰-培训-扬帆-起航 */ 