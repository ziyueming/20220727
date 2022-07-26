var tabBox = document.getElementById('tabBox');
var tabList = tabBox.getElementsByTagName('div');
var navBox = document.getElementById('navBox');
var navList = navBox.getElementsByTagName('li');

// 解决办法一：自定义属性解决办法
//循环三个LI，给每一个LI都绑定点击事件
for (var i = 0; i < navList.length; i++) {
    //navList[i]: 当前循环下我们要操作的那个LI
    //在循环给每个LI绑定点击事件的时候，我们给每一个LI（元素对象）设置一个自定义属性myindex，属性值
    //存储的是当前LI的索引
    navList[i].myIndex = i;
    navList[i].onclick = function () {
        //想用的是点击这个LI的索引，但I不是 
        //this是当前点击的这个元素li，this.myindex就是之前绑定在元素自定义属性上的索引值
        changeTab(this.myIndex);
    }
}

/*=======================其他方式===============*/
//闭包解决方案
/* for (var i = 0; i < navList.length; i++) {
    navList[i].onclick = (function (i) {
        return function () {
            changeTab(i);
        }
    })(i);
} */

//ES6中的let解决方案
/* for (let i = 0; i < navList.length; i++) {
    navList[i].onclick = function () {
        changeTab(i);
    }
}
 */
/*
    只有JS代码加载完成才能看到页面，只有看到页面用户才能点击
    加载到循环这个代码了 i=0 i<3 i++
    *i=0 navList[0].onclick=function(){} 绑定事件的时候方法没有执行，点击第一个LI的时候才执行 i++ =>1
    *i=1 navList[1].onclick=function(){} 绑定事件的时候方法没有执行，点击第二个LI的时候才执行 i++ =>2
    *i=2 navList[2].onclick=function(){} 绑定事件的时候方法没有执行，点击第三个LI的时候才执行 i++ =>3
    * 3<3 不通过，循环结束，此时i已经是3了
    * 循环结束看到了页面，用户点击一个页卡，接下来执行绑定的方法，但此时的I已经是循环结束的3
*/

//封装函数实现选项卡的切换
//clickIndex:创建函数的时候还不知道点的是谁，所以
//定义一个入口clickIndex(存储点击这一项的索引)，执行方法的时候把点击这一项的索引传递进来即可
function changeTab(clickIndex) {
    //1、先让所有的li和div都没有选中的样式
    for (var i = 0; i < navList.length; i++) {
        navList[i].className = '';
        tabList[i].className = '';
    }

    //2、点击的是谁就给谁加选中样式类
    navList[clickIndex].className = 'active';
    tabList[clickIndex].className = 'active';
}