var options = {
  high:5,
  low:0,
  scaleMinSpace:50,
  referenceValue:5,
  lineSmooth: Chartist.Interpolation.step(),
  axisX: {
    type: Chartist.AutoScaleAxis,
    // type: Chartist.StepScaleAxis,
  },
  axisY: {
    type: Chartist.AutoScaleAxis,
  },
  plugins: [
    Chartist.plugins.zoom({resetOnRightMouseBtn: true})
  ]
};


var data1 = {
labels:[],
series: [[
    { x: 1, y: 100 },
    { x: 2, y: 50 },
    { x: 3, y: 25 },
    { x: 4, y: 66 },
    { x: 5, y: 30 },
    { x: 6, y: 22 }
  ]]
  };
  
var data2 = {
  labels : [],
  series: [[
      { x: 1, y: 100 },
      { x: 2, y: 50 },
      { x: 3, y: 25 },
      { x: 4, y: 66 },
      { x: 5, y: 30 },
      { x: 6, y: 22 }
    ]]
    };

var data3 = {
  labels : [],
  series: [[
      { x: 1, y: 100 },
      { x: 2, y: 50 },
      { x: 3, y: 25 },
      { x: 4, y: 66 },
      { x: 5, y: 30 },
      { x: 6, y: 22 }
    ]]
    };

var data4 = {
  labels : [],
  series: [[
      { x: 1, y: 100 },
      { x: 2, y: 50 },
      { x: 3, y: 25 },
      { x: 4, y: 66 },
      { x: 5, y: 30 },
      { x: 6, y: 22 }
    ]]
    };

var data5 = {
  labels : [],
  series: [[
      { x: 1, y: 100 },
      { x: 2, y: 50 },
      { x: 3, y: 25 },
      { x: 4, y: 66 },
      { x: 5, y: 30 },
      { x: 6, y: 22 }
    ]]
    };
var data6 = {
  labels : [],
  series: [[
      { x: 1, y: 100 },
      { x: 2, y: 50 },
      { x: 3, y: 25 },
      { x: 4, y: 66 },
      { x: 5, y: 30 },
      { x: 6, y: 22 }
    ]]
    };