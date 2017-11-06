
window.onload=function(){ 
    
        var wrap=document.getElementById('wrap');
        var boxes=wrap.getElementsByTagName('div');
        waterfall(wrap, boxes);
    }

// 函數
function waterfall(wrap, boxes) {

    // 取得每一個盒子的寬度，使用 offsetWidth 並加上 nargin 的左右兩邊的像素
    var boxWidth=boxes[0].offsetWidth + 20;
    // 獲取整個螢幕的寬度
     var windowWidth=document.documentElement.clientWidth;
    //  獲取屏幕可以放入多少個的 boxes
    //  Math.floor 取正整數值
     var colsNumber=Math.floor(windowWidth / boxWidth);
    //  設置容器的寬度
    wrap.style.width=boxWidth*colsNumber + 'px';
    // 定義一個數組並存儲每一列的高度
    var boxHeight=new Array();
    for (i=0;i<boxes.length;i++) {
        if (i < colsNumber) {
            boxHeight[i]=boxes[i].offsetHeight + 20;
        } else {
            var minHeight=Math.min.apply(null, boxHeight);
            var minIndex=getIndex(minHeight,boxHeight);
            var leftValue=boxes[minIndex].offsetLeft-10;
            boxes[i].style.position="absolute";
            console.log(minHeight)
            boxes[i].style.top=minHeight + 'px';
            boxes[i].style.left=leftValue + 'px';
            boxHeight[minIndex] += boxes[i].offsetHeight + 20;
        }
    }
};

// 獲取最小列的索引
function getIndex(minHeight, boxHeight) {
    for (index in boxHeight) {
        if (boxHeight[index] === minHeight) {
            return index;
        }
    }
}
