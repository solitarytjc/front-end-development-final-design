let template = document.createElement('template');
template.innerHTML = `
<style>
ul{
    margin:0;
}
.container{ width: 1000px;margin: 0 auto;}

/*页眉logo*/
#logo{position:absolute;left:90px;}
#logo a{font-size:1.8em;color:#503;text-decoration:none;}
#logo a h1{font-weight: normal;}
#logo a h1:first-letter{font-size:140%;}

/*搜索*/
#search{position:absolute;top:111px;left:730px;text-align:right;}
#search input[type="search"] {
    font-family: "微软雅黑";background: #f3f3f3;border: solid 1px #ccc;
    height: 30px;line-height: 30px;width: 200px;font-size:1.6em;
    padding-left: 5px;display: inline-block;vertical-align: top;
}
#search input[type="submit"] {
    font-family: "微软雅黑";
    background-color: #b4b4b4;color: #fff;border: solid 1px #b4b4b4;
    height: 30px;display: inline-block;font-size:1.6em;
    vertical-align: top;padding: 0 10px;
}

/*水平导航菜单*/
nav ul li{display: inline-block;}
nav ul a{
    display: inline-block;
    line-height: 60px; width: 100px;text-align: center;
    border-right: solid 1px #834524;
    color: #ffffff;text-decoration: none;font-size:1.8em;
    transition:background 0.5s linear;
}
nav ul a:hover{background-color: #834524;}
/*多级菜单*/
#nav nav ul li{position: relative;}
#nav nav ul ul li{background-image:url("images/navbg.jpg");}
#nav nav ul ul li a{border-left: solid 1px #834524;border-right: solid 1px #834524;border-bottom: solid 1px #834524;}
#nav nav ul ul{visibility: hidden;position: absolute;left:-1px;background-image:url("images/navbg.jpg");}
#nav nav ul li:hover ul{visibility: visible; z-index: 100;}

/*日期时间*/
#displaydate{position:absolute;top:20px; left:650px;color:#FFF;}
#displaytime{position:absolute;top:20px; left:810px;color:#FFF;}

/*购物车菜单*/
#nav nav{position: relative;}
#menu-logo{position: absolute; right:0px;top: 10px;}
#menu-logo a{
    display: inline-block;color: #000000;text-decoration: none;font-size:1.8em;line-height: 40px;text-align: center;padding-left: 40px;padding-right: 15px;
    background-image: url("images/cart.gif");background-repeat: no-repeat;background-position: 10px 12px;background-color: #f3f3f3;
}
#menu-logo a:hover{color:#FF0000;}

/*文本*/
body{ font: 62.5%/1.4 "微软雅黑", Verdana, Arial, Helvetica, sans-serif;}
h1, h2, h3, h4, h5, h6 {font-size:1.6em;}
p, a, span {font-size:1.4em}
p {text-indent:2em;text-align: justify;}
ul{list-style-type: none;}
img{border:none;}
mark{background-color: #e3b503;color: #FFFFFF;}
/*页眉*/
header{height: 150px;background-image:url("images/header.png");position: relative;}

#nav{ background-image:url("images/navbg.jpg"); height: 60px;}

</style>


    <div id="header-wrapper">
        <!--网站logo-->
        <header class="container" id="advaddr">
            <div id="logo">
                <a href="index.html">
                    <h1>手机交易</h1>
                </a>
            </div>
            <div id="search">
                <form action="index.html" method="get">
                    <input type="search" placeholder="站内搜索"><input type="submit" value="搜索">
                </form>
            </div>
        </header>
        <!--导航菜单-->
        <div id="nav">
            <nav class="container">
                <ul>
                    <li><a href="index.html">首页</a></li>
                    <li>
                        <a href="category.html">书籍分类</a>
                        <ul>
                            <li><a href="#">编程语言</a></li>
                            <li>
                                <a href="#">数据库</a>
                            </li>
                            <li>
                                <a href="#">图形图像</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="specials.html">特刊降价</a>
                    </li>
                    <li>
                        <a href="contact.html">联系我们</a>
                    </li>
                    <li>
                        <a href="about.html">关于我们</a>
                    </li>
                </ul>
                <div id="displaydate"></div>
                <div id="displaytime"></div>
                <div id="menu-logo">
                    <a href="cart.html">购物车</a>
                </div>
            </nav>
        </div>
    </div>
`;

class header extends HTMLElement {
    constructor() {
        super();
        this._sd = this.attachShadow({ mode: "open" });
        this._sd.appendChild(template.content.cloneNode(true));
        this.itemid = this.getAttribute('itemid');//获取 itemId属性 的 值
    }
    addEvent() {
        
    }
    close() {
     
    }
    open() {

    }

}
customElements.define('header-bar', header);
