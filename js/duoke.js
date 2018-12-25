var OPrev = document.getElementsByClassName("prev");
var ONext = document.getElementsByClassName("next");
var OUl = document.getElementById("banner-ul");
var OImg = document.getElementById("banner");
var OText = document.getElementById("banner-title");
var OP = document.getElementById("banner-describe");
var OULList = document.getElementsByClassName("menu-list");
var OLi = OULList[0].getElementsByTagName("li");


// 一般存在数组，可以设置一个常量，可以用该常量对数组进行操作
var num = 0;

var arrUrl = ["images/flash-01.jpg","images/flash-02.jpg","images/flash-03.jpg"];
var arrText = ["因为专业，所以值得信赖","多克，一家与众不同的IT服务商","我们是从事多年web开发的前端工程师"];
var arrP = ["多克的开发与运维服务拥有高质量和轻重量的优势，去除了传统外包技术公司高价格、低效率的缺点， 同时拥有不亚于其他传统外包技术公司的技术实力和高于其他外包公司的客户对接服务能力。 术业有专攻，多克坚信将点的技术服务做到极致，将收获面的回报。多克期待与您的合作。",
            "互联网IT技术外包是一门技术，也是一门艺术。现在中国干这行的人，层出不穷，但客户作为一个外行， 却不明白其中的鱼目混珠。就因为有太多的三流技术人员，即使得这个行业一直处于打价格战的惨 烈状态，也使得一些客户,在刚建设完自己公司网站或网络系统后不久，不得不面临重建或改版的后悔局面， 最后还会因此与不靠谱的公司或人僵持不下。如何让我们获得您的信任呢？",
            "在做过那么多项目中，我们深知前端开发环节在整个项目中的重要性以及前端技术人才在市场的稀缺性， 所以我们组建工作室，力求为客户提供最优的前端解决方案。在一线城市，招聘一位全职前端开发人员， 我们中的成员均有5年以上的网页制作经验，其中部分成员曾在BAT公司就职过，每个队员擅长的侧重点也各不尽相同 （移动端,pc端,性能优化,等等）,我们相信术业有专攻且有能力提供最完美的WEB前端解决方案，如果您需要这方面的业务需求， 那么请毫不犹豫的联系我们。"];
          
// 初始化
function fnTab(){
    OImg.src = arrUrl[num];
    OText.innerHTML = arrText[num];
    OP.innerHTML = arrP[num];
    OImg.style.opacity = 1;
}
fnTab();//上面函数被包起来，不会主动执行，需要调用才会执行

//淡入
function show(){
    var i = 0;
    var st = setInterval(function(){
        i++;
        OUl.style.opacity = i/10;
        if(i>=10){
            clearInterval(st);
        }
    }
        ,100)
}  
//淡出
function hide(){
    var i = 10;
    var st = setInterval(function(){
        i--;
        OUl.style.opacity = i/10;
        if(i<=0){
            clearInterval(st);
        }
    }
        ,100)
}
//图片跳转下一张
ONext[0].onclick = function(){//因为next按钮用的是className，所以需要添加下标
    num++;
    if(num == arrUrl.length){//不能超过数组的长度，超过时从第一张开始
        num = 0;
    }
    fnTab();
    hide();
    show();
}

//图片跳转上一张
OPrev[0].onclick = function(){
    num--;
    if(num == -1){//向上选择时，num最小为0，再继续点，跳转到最后一张图片，即数组长度减1
        num = arrUrl.length - 1;
    }
    fnTab();
    hide();
    show();
}

// 下拉菜单点击时背景切换

for(i = 0 ;i < OLi.length; i++){//遍历当前点击的 li 
    //OLi[i].index = i;
    OLi[i].onclick = function(){
        for(j = 0; j < OLi.length; j++){//点击时，遍历li，并添加和删除class
            OLi[j].className = '';
            this.className = "home";
        }
    }
}

