/* 
    *结果:{
        lx:1,
        name:"zhufeng",
        teacher:"aaa",
        HASH:"box"
    }
*/

/* //1、获取问号后面的值
let askIndex = url.indexOf('?')
let wellIndex = url.indexOf('#')
let askText = url.substring(askIndex + 1, wellIndex)
let wellText = url.substring(wellIndex + 1)
//askText  =>lx=1&name=zhufeng&teacher=aaa
// wellText =>box

//2、问号后面值的详细处理
let result = {}
let askAry = askText.split('&') //=> [ "lx=1", "name=zhufeng", "teacher=aaa" ]
askAry.forEach(item => {
    //item:当前从数组中循环的这一项:"lx=1"
    let n = item.split('=')
    let key = n[0]
    let value = n[1]
    result[key] = value

})
result['HASH'] = wellText
console.log(result) //=>{ lx: "1", name: "zhufeng", teacher: "aaa", HASH: "box" } */

/*
    *queryURLParams:获取URL地址中问号传参的信息和哈希值
    * @params
    *       url[string] 要解析的URL字符串
    * @return
    *   [object] 包含参数和哈希值信息的对象
 */

/* function queryURLParams(url) {
    //获取？和#后面的信息
    let askIn = url.indexOf('?'),
        wellIn = url.indexOf('#'),
        askText = '',
        wellText = ''
    //#不存在
    wellIn === -1 ? wellIn = url.length : null
    // ?存在
    askIn >= 0 ? askText = url.substring(askIn + 1, wellIn) : null
    wellText = url.substring(wellIn + 1)

    //2、获取每一部分信息
    let result = {}
    wellText !== '' ? result['HASH'] = wellText : null
    if (askText !== '') {
        let ary = askText.split('&')
        ary.forEach(item => {
            let itemAry = item.split('=')
            result[itemAry[0]] = itemAry[1]
        })
    }
    return result
} */


/* //用正则做
function queryURLParams(url) {
    let result = {},
        reg1 = /([^?=&#]+)=([^?=&#])/g,
        reg2 = /#([^?=&#]+)/g
    url.replace(reg1, (n, x, y) => result[x] = y)
    url.replace(reg2, (n, x) => result["HASH"] = x)
    return result
}


let url = 'http://www.zhufengpeixun.cn/index.html?lx=1&name=zhufeng&teacher=aaa#box'
let paramsObj = queryURLParams(url)
console.log(paramsObj) */