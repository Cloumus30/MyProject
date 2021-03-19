// Clock
var chart = Chartist.Line('#clock-chart', data1, options);
data1.series[0]=[];
let clockInterval;
let x = 0;
let y = 1;
let n = 0;
let input={x1:0,x2:0,x3:0, x4:0, x5:0};
let x2=1;
let x3=1;
let x4 =1;
let x5 =1;
let dat1=[0];
let dat4=[];

function clock(){
    if (y==0){
        y=1;
        // console.log('raise');
        controlInput();
        n++;
    }
    else{
        y=0;
        input1(input.x1);
        input2(input.x2);
        input3(input.x3);
        input4(input.x4);
        input5(input.x5);
    }
    data1.series[0].push({x:x,y:y});
    data1.labels.push(x);
    chart.update();
    if (n==256){
        clearInterval(clockInterval);
    }
    x++;
}

// ========= Functional ==========
function stopGraph(){
    clearInterval(clockInterval);
}

function playGraph(){
    clockInterval = setInterval(clock,100);
}

function controlInput(){
    // Input 1
    if(input.x1==0){
        input.x1=1;
        x2++;
    }else{
        input.x1=0;
        x2++;
    }
    dat1.push(input.x1);
    dat4.push(input.x4);
    // console.log(dat1);
    // console.log(input.x1);
    input1(input.x1);
    input2(input.x2);
    input3(input.x3);
    input4(input.x4);
    input5(input.x5);
// Input 2
    if(x2==3){
        if(input.x2==0){
            input.x2=1;
            x3++;
        }else{
            input.x2=0;
            x3++;
        }
        input2(input.x2);
        x2=1;
    }
// Input 3
    if(x3==3){
        if(input.x3==0){
            input.x3=1;
            x4++;
        }else{
            input.x3=0;
            x4++;
        }
        input3(input.x3);
        x3=1;
    }

    // Input 4
    if(x4==3){
        if(input.x4==0){
            input.x4=1;
            x5++;
        }else{
            input.x4=0;
            x5++;
        }
        input4(input.x4);
        x4=1;
    }

    // Input 5
    if(x5==3){
        if(input.x5==0){
            input.x5=1;
        }else{
            input.x5=0;
        }
        input5(input.x5);
        x5=1;
    }
}
// ========= Functional =========

// Input 1
var chart2 = Chartist.Line('#x1-chart', data2, options);
data2.series[0]=[];
// let y1=1;
function input1(y1){
    // if(y1==0){
    //     y1=1;
    // }
    // else{
    //     y1=0;
    // }
    data2.series[0].push({x:x,y:y1});
    data2.labels.push(x);
    chart2.update();
}



// Input 2 X2
var chart3 = Chartist.Line('#x2-chart', data3, options);
data3.series[0]=[];
function input2(y){
    data3.series[0].push({x:x,y:y});
    data3.labels.push(x);
    chart3.update();
}

// Input 3 X3
var chart4 = Chartist.Line('#x3-chart', data4, options);
data4.series[0]=[];
function input3(y){
    data4.series[0].push({x:x,y:y});
    data4.labels.push(x);
    chart4.update();
}

var chart5 = Chartist.Line('#x4-chart', data5, options);
data5.series[0]=[];
function input4(y){
    data5.series[0].push({x:x,y:y});
    data5.labels.push(x);
    chart5.update();
}

var chart6 = Chartist.Line('#x5-chart', data6, options);
data6.series[0]=[];
function input5(y){
    data6.series[0].push({x:x,y:y});
    data6.labels.push(x);
    chart6.update();
}