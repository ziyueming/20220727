var name = 10
var obj = {
    name: '珠峰培训'
}

//获取OBJ这个对象的name的属性值
console.log(obj.name) //=> "珠峰培训"

//一个对象的属性名只有两个格式：数字或者字符串
console.log(obj['name']) //=> "珠峰培训"

//obj[name变量代表的值]
console.log(obj[name])  //=> undefined 

var name = "珠峰培训"
var obj = {
    //name: name
    name,  // => ES6的简化，和name:name 一样
    age: 1 === 1 ? 100 : 200
}
console.log(obj['name'])

// for in 循环: 用来循环遍历对象中的键值对(continue和break同样适用)
var obj = {
    name: "纯良",
    age: 52,
    friends: "王鹏，志刚",
    1: 30,
    2: 149,
    3: 140
}
//for (var 变量(key) in 对象)
//对象中有多少组键值对，循环就执行几次(除非break结束)
//for in 在遍历的时候，优先循环数字属性名(从小到大)
for (var key in obj) {
    //每一次循环key变量存储的值：当前对象的属性名
    //获取属性值: obj[属性名] => obj[key]
    console.log('属性名' + key + '属性值' + obj[key])
}