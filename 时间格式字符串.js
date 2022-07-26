let time = '2022-7-19 15:54:50'
//=> 变为自己需要呈现的格式，例如：
// "2022年07月19日 15时54分50秒"
// "2022年07月19日"
//"07/19 15:54"

//方案一:replace
/* time = time.replace('-', '年').replace('-', '月').replace(' ', '日 ').replace(':', '时').replace(':', '分') + '秒'
console.log(time) //=>2022年7月19日 15时54分50秒
 */

//方案二：获取到年月日小时分钟秒后，最后想拼成啥就拼成啥

//不足十位补0
let addZero = val => val.length < 2 ? '0' + val : val
/*  if (val.length < 2) {
     val = "0" + val
 }
 return val */

let ary = time.split(/(?: |-|:)/g) //=>[ "2022", "7", "19", "15", "54", "50" ]
time = ary[0] + '年' + addZero(ary[1]) + '月' + addZero(ary[2]) + '日'   //=>2022年07月19日
console.log(time)

/* let n = time.indexOf('-')
let m = time.lastIndexOf('-')
let x = time.indexOf(' ')
let y = time.indexOf(':')
let z = time.lastIndexOf(':')

let year = time.substring(0, n)
let month = time.substring(n + 1, m)
let day = time.substring(m + 1, x)

console.log(year, month, day)
 */

//获取值的方法：基于split一项项的拆分
/* let n = time.split(' ') //=>[ "2022-7-19", "15:54:50" ]
let m = n[0].split('-') //=>[ "2022", "7", "19" ]
let x = n[1].split(':') //=>[ "15", "54", "50" ]
console.log(x) */




