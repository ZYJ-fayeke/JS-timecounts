var t;
var Deom=setInterval(Time ,1000);
function Time() {
    var now = new Date();
    var lotime=document.getElementById("lotime").innerHTML = now.toLocaleString();
        lotime.innerHTML=t;
        t=now.toLocaleString();
}
var btn = document.getElementById("btn");
var spn = document.getElementById("second");
var hours = document.getElementById("hours");
var  minute = document.getElementById("minute");
var  Second= 0;
var  timer = null;
var   Hours = 0;
var  Minute = 0;
var run = false;
var recordtime;
var interval = setInterval(function () { st() }, 1000);
function changeRun() {
    if (btn.value == '开始') {
        btn.value = '暂停';
        run = true;
    } else {
        btn.value = '开始';
        run = false;
    }
}
function stopCount() {
    clearTimeout(timer);
}
function cs() {
    Second = 0;
    Hours=0;
    Minute=0;
    document.getElementById('timer').value = 0;
}
function st() {
    if (run) {
        Second += 1;
        spn.innerHTML = Second;
        if(Second > 59){
            Second = 0;
            Minute++;
            if(Minute >59){
                Minute = 0;
                Hours++;
            }
        }
        if(Second < 10)
        {
            second.innerText = "0" + Second;
        }else
        {
            second.innerText = Second;
        }
        if(Minute < 10)
        {
            minute.innerText = "0" + Minute;
        }else {
            minute.innerText = Minute;
        }
        if(Hours < 10){
            hours.innerText = "0" + Hours;
        }else{
            hours.innerText = Hours;
        }
    }
}
function timedCount(){
    timer = setInterval(function(){
        Second++;
        if(Second > 59){
            Second = 0;
            Minute++;
            if(Minute >59){
                Minute = 0;
                Hours++;
            }
        }
        if(Second < 10){
            second.innerText = "0" + Second;
        }else{
            second.innerText = Second;
        }
        if(Minute < 10){
            minute.innerText = "0" + Minute;
        }else{
            minute.innerText = Minute;
        }
        if(Hours < 10){
            hours.innerText = "0" + Hours;
        }else{
            hours.innerText = Hours;
        }
    },1000)
    recordtime = t;
}
function entertime() {
    var u = document.getElementById('u');
    var li;
    var li = document.createElement('li');
    document.getElementById('u').appendChild(li);
    li.innerHTML = recordtime + '-' + t;
    var button = document.createElement('button');
    li.appendChild(button);
    button.innerHTML = '删除';
    button.onclick=function () {
        var u = document.getElementById('u');
        u.removeChild(li);
    }
}

