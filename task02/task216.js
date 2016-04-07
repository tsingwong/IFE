/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 实现trim()方法，去除首尾两头空格
 */
function trimStr(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}


/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    //获取填入的原始数据
    var address = document.getElementById('aqi-city-input').value;
    var aqiNum = document.getElementById('aqi-value-input').value;



    //去掉首尾空格
    address = trimStr(address);
    aqiNum = trimStr(aqiNum);



    var zhEn = /^[\u4e00-\u9fa5_a-zA-Z]+$/gm;
    if (!zhEn.test(address)) {
        alert('城市名必须为中英文字符！');
        return;
    }
    var integer = /^\d*$/;
    if (!integer.test(aqiNum)) {
        alert('空气质量指数必须为整数！');
        return;
    }
    aqiNum = parseInt(aqiNum);
    aqiData[address] = aqiNum;
}


/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var innerHTMLs = '<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>';
    for (address in aqiData) {
        innerHTMLs += '<tr><td>' + address + '</td><td>' + aqiData[address] + '</td><td><button onclick="delBtnHandle(this)">删除</button></td></tr>';
    }
    document.getElementById('aqi-table').innerHTML = innerHTMLs;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(obj) {
    // do sth.
    console.log(aqiData);
    city = obj.parentNode.parentNode.firstChild;
    city = city.innerHTML;
   	delete aqiData[city];
    renderAqiList();
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    document.getElementById('add-btn').onclick = function() {
            addBtnHandle();
        }
        // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();
