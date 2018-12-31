var timeHtml=document.querySelector(".time");
var lastTime=localStorage.getItem("time");
if(lastTime)
    timeHtml.innerText="最後更新時間 : "+lastTime;
function DateTimezone(offset) {

    // 建立現在時間的物件
    d = new Date();
    
    // 取得 UTC time
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    // 新增不同時區的日期資料
    return new Date(utc + (3600000*offset));

}

// 計算當地時區的時間
function calcTime(city="台北", offset=8) {

    // 建立現在時間的物件
    d = new Date();

    // 取得 UTC time
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    // 新增不同時區的日期資料
    nd = new Date(utc + (3600000*offset));

    // 顯示當地時間
    return  city + " 時間 " + nd.toLocaleString();
}
function updateLastTime()
{
    d = new Date();
    // 取得 UTC time
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    now = new Date(utc)
    localStorage.setItem("time",calcTime());
}

var inputs=document.querySelectorAll("input");
for(var i in inputs)
{
    if(i=="length")
        break;
    var input=inputs[i]
    var value=localStorage.getItem(i);
    if(value)
        input.value=value;
    input.dataset.i=i;
    input.addEventListener("change",function(){localStorage.setItem(this.dataset.i,this.value);updateLastTime();})
}