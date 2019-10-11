window.onload = function () {
    var util = {
        getStorage: function () {
            //获取本地存储:list
            return JSON.parse(window.localStorage.getItem('list') || '[]');
        },
        setStorage: function (productList) {
            //设置本地存储
            window.localStorage.setItem('list', JSON.stringify(productList))
        },
        render: function (productList, containerId, fn) {
            var container = document.getElementById(containerId);

            if (productList.length < 1) {
                container.innerHTML = '';
                return;
            }

            var str = ``;

            for (var i = 0; i < productList.length; i++) {
                str += `<tr>
                <td id='check'><input type="checkbox"></td>
                <td id='imgTd'>
                    <img src="${productList[i].img}"/>
                </td>				
                <td id='name'>${productList[i].name}</td>
                <td id='size'>${productList[i].size}</td>
                <td id='price'>${productList[i].price}</td>
                <td id="num">
                <span class="cut"></span>
                <input type="text" value="${productList[i].num}" class="nums">
                <span class="add"></span>
                </td>
                <td id='yh'>-</td>
                <td id='xj'>${parseInt(productList[i].price)*parseInt(productList[i].num)+'.00'}</td>
                <td id='delete'>
                    <span class="delete btn-info btn">删除</span>
                </td>
            </tr>`
            }
            container.innerHTML=str;

            if (fn) {
                fn()
            }
        },
        addDeleteEvent: function () {
            //对象的方法中的this指的是当前的实例对象
            var that = this;
            //给购物车添加点击删除按钮移除商品事件
            var deleteBtns = document.querySelectorAll('.delete');
            for (var i = 0; i < deleteBtns.length; i++) {
                deleteBtns[i].onclick = function () {
                    //事件函数中的this指的是当前的事件源
                    //调用deleteProduct函数,删除指定商品
                    var name = this.parentNode.parentNode.children[2].innerHTML;
                    that.deleteProduct(name);
                }
            }
        },
        addNumChangeEvent: function () {
            //在对象的方法中,this指的是当前的实例对象
            var that = this;
            //给购物车添加点击-,+按钮改变商品数量事件
            var cutBtns = document.getElementsByClassName('cut');
            var addBtns = document.getElementsByClassName('add');
            //cutBtns和addBtns的按钮数量是一样的,所以可以同时循环
            for (var i = 0; i < addBtns.length; i++) {
                addBtns[i].onclick = function () {
                    //在事件函数中this指的是当前的事件源
                    var name = this.parentNode.parentNode.children[2].innerHTML;
                    that.addNum(name);
                }
                cutBtns[i].onclick = function () {
                    var name = this.parentNode.parentNode.children[2].innerHTML;
                    that.cutNum(name)
                }
            }
        },
        deleteProduct: function (name) {
            var that = this;
            var productList = this.getStorage();
            for (var i = 0; i < productList.length; i++) {
                if (productList[i].name == name) {
                    productList.splice(i, 1);
                    //更新本地存储,更新购物车
                    this.setStorage(productList);
                    this.render(productList, 'car', function () {
                        //普通函数中的this指的是window
                        that.addDeleteEvent();
                        that.addNumChangeEvent();
                    })
                    return;
                }
            }
        },
        addNum: function (name) {
            var that = this;
            var productList = this.getStorage();
            for (var i = 0; i < productList.length; i++) {
                if (productList[i].name == name) {
                    productList[i].num = productList[i].num + 1;
                    console.log(productList[i].num)
                    //更新本地存储,更新购物车
                    this.setStorage(productList);
                    this.render(productList, 'car', function () {
                        //普通函数中的this指的是window
                        that.addDeleteEvent();
                        that.addNumChangeEvent();
                    })
                    return;
                }
            }
        },
        cutNum: function (name) {
            var that = this;
            var productList = this.getStorage();
            for (var i = 0; i < productList.length; i++) {
                if (productList[i].name == name) {
                    productList[i].num = productList[i].num - 1;
                    //如果减完以后小于等于0,就删除该商品
                    if (productList[i].num <= 0) {
                        that.deleteProduct(name);
                        return;
                    } else {
                        //更新本地存储,更新购物车
                        this.setStorage(productList);
                        this.render(productList, 'car', function () {
                            //普通函数中的this指的是window
                            that.addDeleteEvent();
                            that.addNumChangeEvent();
                        })
                        return;
                    }

                }
            }
        },
        init: function () {
            var that = this;
            //在对象的方法中,this指的是当前的对象
            //初始化购物车
            var productList = this.getStorage();
            this.render(productList, "car", function () {
                //普通函数中的this指的是window
                that.addDeleteEvent();
                that.addNumChangeEvent();
            })
        }
    }
    util.init();
}