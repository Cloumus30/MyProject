let chart1Prop={
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        // scales: {
        //     xAxes:[{
        //         // type:'linear',
        //         scaleLabel:{
        //             display:true,
        //             labelString:'Date'
        //         },
        //         ticks:{
        //             maxRotation:0
        //         }
        //     }],
        //     yAxes:[{
        //         scaleLabel:{
        //             display:true,
        //             labelString:'value'
        //         }
        //     }]
        // },
        maintainAspectRatio: false,
        plugins: {
            zoom: {
                // pan: {
                //     enabled: true,
                //     mode: 'xy',
                //     overScaleMode: 'xy'
                // },
                zoom: {
                    enabled: true,
                    drag:true,
                    mode: 'x',
                    overScaleMode:'xy',
                    rangeMin:{
                        x:2,
                        y:2
                    },
                    rangeMax:{
                        x:8,
                        y:9
                    }
                }
            }
        }
        
    },
};