var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, chart1Prop);

let i = 1;
let j = 0;
let n = 0;
const labelq = [];
const data = [];
let interval = setInterval(drawChart,1);
// for (let index = 0; index <= 514; index++) {
//     drawChart();
// }

// drawChart();

function drawChart(){
    // while(n<257){
    if (i == 0){
        i=1;
    }
    else if(i == 1 ){
        i=0;
    }
    for (let k = 0; k<3; k++){
            labelq.push(j);
            data.push(i);
            j=+1;
    }
    // console.log(i);
    if(i==0){
        n++;
        console.log(`jumlah siklus ${n-1}`);
        if(n==10){
            chart.data.datasets[0].data = data;
            chart.data.labels = labelq;
            chart.update();
            clearInterval(interval);
            // chart.stop();
        }
    }
    // }
}


