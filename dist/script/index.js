'use strict';

// $('.title,.subtitle').addClass('bounceInRight');

var powerdata = [];
var now = +new Date(2017, 9, 14);
var oneDay = 24 * 3600 * 1000;

function randomData() {
  now = new Date(+now + oneDay);
  var value = Math.random() * 10;
  return {
    name: now.toString(),
    value: [[now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'), Math.round(value)]
  };
}

for (var i = 0; i < 10; i++) {
  powerdata.push(randomData());
}
var powerEchart = echarts.init(document.getElementById('power'));
var powerOption = {
  grid: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 1
  },
  toolbox: {
    show: false
  },
  // xAxis: {
  //   type: 'time',
  //   boundaryGap: false,
  //   axisLine: {
  //     lineStyle: {
  //       color: '#42494d',
  //     }
  //   }
  // },
  xAxis: {
    type: 'time',
    splitLine: {
      show: false
    }
  },
  yAxis: {
    type: 'value',
    splitLine: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: '#42494d'
      }
    }
  },
  series: [{
    name: '最高气温',
    type: 'line',
    itemStyle: {
      normal: {
        color: 'green'
      }
    },
    showSymbol: true,
    hoverAnimation: false,
    areaStyle: {
      normal: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0, color: '#094720' // 0% 处的颜色
          }, {
            offset: 0.4, color: '#072a17' // 0% 处的颜色
          }, {
            offset: 1, color: '#050e0e' // 100% 处的颜色
          }],
          globalCoord: false // 缺省为 false
        }
      }
    },
    data: powerdata
  }]
  // series: [{
  //   name: '模拟数据',
  //   type: 'line',
  //   showSymbol: false,
  //   hoverAnimation: false,
  //   data: powerdata
  // }]
};
powerEchart.setOption(powerOption);

setInterval(function () {
  powerdata.shift();
  powerdata.push(randomData());

  powerEchart.setOption({
    series: [{
      data: powerdata
    }]
  });
}, 2000);

var waterEnergyEchart = echarts.init(document.getElementById('waterEnergy'));
var waterEnergyOption = {
  title: {
    text: '7天用水总量:357',
    textStyle: {
      color: '#d4d4d5',
      fontSize: '14px'
    },
    right: 0
  },
  color: ['#3398DB'],
  grid: {
    left: 20,
    right: 0,
    top: 30,
    bottom: 20
  },
  xAxis: [{
    type: 'category',
    data: ['8-31', '9-01', '9-02', '9-03', '9-04', '9-05', '9-06'],
    axisTick: {
      alignWithLabel: true
    },
    axisLine: {
      lineStyle: {
        color: '#42494d'
      }
    }
  }],
  yAxis: {
    type: 'value',
    splitLine: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: '#42494d'
      }
    }
  },
  series: [{
    type: 'bar',
    barWidth: 10,
    barGap: '-100%',
    itemStyle: {
      normal: { color: '#2e373f' }
    },
    data: [8, 8, 8, 8, 8, 8, 8],
    animation: false
  }, {
    name: '直接访问',
    type: 'bar',
    barWidth: 10,
    axisLine: {
      lineStyle: {
        color: '#42494d'
      }
    },
    itemStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: '#237c30' }, { offset: 0.5, color: '#206c2e' }, { offset: 1, color: '#152b25' }])
      },
      emphasis: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: '#2378f7' }, { offset: 0.7, color: '#2378f7' }, { offset: 1, color: '#83bff6' }])
      }
    },
    data: [2, 6, 8, 6, 2.5, 5, 7]
  }]
};
waterEnergyEchart.setOption(waterEnergyOption);

var lightEnergyEchart1 = echarts.init(document.getElementById('lightEnergy1'));
var lightEnergyOption1 = {
  grid: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  series: [{
    name: '办公室',
    type: 'pie',
    selectedMode: 'single',
    radius: ['80%', '91%'],
    label: {
      normal: {
        show: false,
        position: 'inside'
      }
    },
    fontSize: 10,
    data: [{
      value: 76, name: '76%',
      itemStyle: {
        normal: {
          color: {
            type: 'linear',
            x: 0,
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: [{
              offset: 0, color: '#1b532a'
            }, {
              offset: 0.35, color: '#0a1519'
            }, {
              offset: 1, color: '#0a151d'
            }],
            globalCoord: false
          }
        }
      }
    }, {
      value: 24, name: '24%',
      itemStyle: {
        normal: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: '#050c12'
            }, {
              offset: 0.29, color: '#102234'
            }, {
              offset: 0.3, color: '#133e61'
            }, {
              offset: 0.65, color: '#152a37'
            }, {
              offset: 1, color: '#142b3a'
            }],
            globalCoord: false
          }
        }
      }
    }]
  }, {
    name: '',
    type: 'pie',
    radius: ['95%', '100%'],
    label: {
      normal: {
        show: true,
        position: 'center',
        formatter: '{b} : {d}%\n',
        color: '#fff'
      }
    },
    data: [{
      value: 76, name: '使用中',
      itemStyle: {
        normal: {
          color: {
            type: 'linear',
            x: 0,
            y: 1,
            x2: 0,
            y2: 0.2,
            colorStops: [{
              offset: 0, color: '#35dd3e'
            }, {
              offset: 0.6, color: '#35dd3e'
            }, {
              offset: 0.61, color: '#070c14'
            }, {
              offset: 1, color: '#070d15'
            }],
            globalCoord: false
          }
        }
      }
    }, {
      value: 24, name: '节约',
      itemStyle: {
        normal: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: '#050c12'
            }, {
              offset: 0.29, color: '#050c12'
            }, {
              offset: 0.3, color: '#144d7d'
            }, {
              offset: 1, color: '#144d7d'
            }],
            globalCoord: false
          }
        }
      }
    }],
    animationDuration: 4000
  }]
};
lightEnergyEchart1.setOption(lightEnergyOption1);

var lightEnergyEchart2 = echarts.init(document.getElementById('lightEnergy2'));
var lightEnergyOption2 = {
  grid: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  series: [{
    name: '会议室',
    type: 'pie',
    selectedMode: 'single',
    radius: ['80%', '91%'],
    label: {
      normal: {
        show: false
      }
    },
    fontSize: 10,
    data: [{
      value: 40, name: '40%',
      itemStyle: {
        normal: {
          color: {
            type: 'linear',
            x: 0,
            y: 1,
            x2: 0,
            y2: 0.1,
            colorStops: [{
              offset: 0, color: '#162f2f'
            }, {
              offset: 0.4, color: '#1b532a'
            }, {
              offset: 0.6, color: '#091518'
            }, {
              offset: 1, color: '#070f15'
            }],
            globalCoord: false
          }
        }
      }
    }, {
      value: 60, name: '60%',
      itemStyle: {
        normal: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: '#0a121a'
            }, {
              offset: 0.3, color: '#122332'
            }, {
              offset: 0.85, color: '#134269'
            }, {
              offset: 1, color: '#152f31'
            }],
            globalCoord: false
          }
        }
      }
    }]
  }, {
    name: '',
    type: 'pie',
    radius: ['95%', '100%'],
    label: {
      normal: {
        show: true,
        position: 'center',
        formatter: '{b} : {d}%\n',
        color: '#fff'
      }
    },
    data: [{
      value: 40, name: '使用中',
      itemStyle: {
        normal: {
          color: {
            type: 'linear',
            x: 0,
            y: 1,
            x2: 0,
            y2: 0.2,
            colorStops: [{
              offset: 0, color: '#35dd3e'
            }, {
              offset: 0.8, color: '#35dd3e'
            }, {
              offset: 0.81, color: '#070c14'
            }, {
              offset: 1, color: '#070c14'
            }],
            globalCoord: false
          }
        }
      }
    }, {
      value: 60, name: '节约',
      itemStyle: {
        normal: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: '#050c12'
            }, {
              offset: 0.29, color: '#14202a'
            }, {
              offset: 0.3, color: '#144d7d'
            }, {
              offset: 1, color: '#144d7d'
            }],
            globalCoord: false
          }
        }
      }
    }],
    animationDuration: 4000
  }]
};
lightEnergyEchart2.setOption(lightEnergyOption2);

var humanTaffic = echarts.init(document.getElementById('humanTaffic'));
var humanTafficOption = {
  color: ['#3581ff', '#35ff6b'],
  legend: {
    right: 0,
    textStyle: {
      color: '#ccc'
    },
    data: [{ name: '上午', icon: 'bar' }, { name: '下午', icon: 'bar' }]
  },
  grid: {
    left: 40,
    right: 0,
    top: 20,
    bottom: 20
  },
  toolbox: {
    show: false
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['', '入口一', '', '入口二', '', '入口三', '', '入口4', ''],
    splitLine: {
      lineStyle: {
        show: true,
        color: ['#42494d']
      }
    },
    axisLine: {
      lineStyle: {
        color: '#42494d',
        fontWeight: 'bold'
      }
    }
  },
  yAxis: {
    type: 'value',
    min: 0,
    max: 2000,
    intever: 500,
    splitLine: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: '#42494d'
      }
    }
  },
  series: [{
    name: '上午',
    type: 'line',
    symbol: 'none',
    smooth: true,
    lineStyle: {
      normal: {
        color: '#3581ff',
        width: 0
      }
    },
    areaStyle: {
      normal: {
        color: '#1e3f72'
      }
    },
    data: [900, 1600, 1000, 1000, 1300, 1600, 1200, 800, 1300]
  }, {
    name: '下午',
    type: 'line',
    symbol: 'none',
    smooth: true,
    lineStyle: {
      normal: {
        color: '#35ff6b',
        width: 0
      }
    },
    areaStyle: {
      normal: {
        color: '#237164'
      }
    },
    data: [550, 1100, 800, 500, 900, 1000, 850, 600, 900]
  }]
};
humanTaffic.setOption(humanTafficOption);

lightEnergyEchart1.setOption(lightEnergyOption1);

var data = [{
  color: '#35ff6b',
  value: 31
}, {
  color: '#3581ff',
  value: 52
}, {
  color: '#35ff6b',
  value: 21
}, {
  color: '#3581ff',
  value: 45
}, {
  color: '#fe4148',
  value: 82
}, {
  color: '#3581ff',
  value: 42
}, {
  color: '#fe4148',
  value: 74
}, {
  color: '#ffffff',
  value: 10
}, {
  color: '#35ff6b',
  value: 29
}];

for (var _i = 0; length = data.length, _i < length; _i++) {
  var value1 = 100 - data[_i].value;
  var parkingLot = echarts.init(document.getElementById('pie' + _i));
  var parkingLotOption = {
    grid: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    label: {
      normal: {
        show: true,
        position: 'center',
        formatter: '{d}%',
        color: '#fff'
      }
    },
    series: [{
      name: '',
      type: 'pie',
      radius: ['90%', '100%'],
      fontSize: 12,
      data: [{
        value: data[_i].value, name: '',
        itemStyle: {
          normal: {
            color: data[_i].color
          }
        },
        label: {
          normal: {
            position: 'center'
          }
        }
      }, {
        value: value1, name: '',
        itemStyle: {
          normal: {
            color: '#272b2e'
          }
        },
        label: {
          normal: {
            show: false
          }
        }
      }],
      animationDuration: 4000
    }]
  };
  parkingLot.setOption(parkingLotOption);
}

function refreshData() {
  if (!waterEnergyEchart) {
    return;
  }
  //更新数据
  var dataArray = [];
  for (var _i2 = 0; _i2 < 7; _i2++) {
    dataArray.push(Math.random() * 10);
  }

  // let option = waterEnergyEchart.getOption();
  // option.series[1].data = dataArray;

  waterEnergyEchart.setOption({
    series: [{
      type: 'bar',
      barWidth: 10,
      barGap: '-100%',
      itemStyle: {
        normal: { color: '#111a22' }
      },
      data: [10, 10, 10, 10, 10, 10, 10],
      animation: false
    }, {
      name: '直接访问',
      type: 'bar',
      barWidth: 10,
      axisLine: {
        lineStyle: {
          color: '#42494d'
        }
      },
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: '#237c30' }, { offset: 0.5, color: '#206c2e' }, { offset: 1, color: '#152b25' }])
        },
        emphasis: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: '#2378f7' }, { offset: 0.7, color: '#2378f7' }, { offset: 1, color: '#83bff6' }])
        }
      },
      data: dataArray
    }]
  });
}

window.setInterval(refreshData, 3000);

function sequenceImgFun(num, bool, pic, name) {
  var i = 0;
  name = window.setInterval(function () {
    var src1;
    if (i < 10) {
      src1 = "../image/VRV000" + i;
    } else if (i >= 10 && i < 100) {
      src1 = "../image/VRV00" + i;
    } else {
      src1 = "../image/VRV0" + i;
    }
    if (i < num) {
      var src = src1 + pic;
      var esrc = $('#chuansuo').attr('src');
      if (src != esrc) {
        $('#chuansuo').attr('src', src);
        $('#chuansuo').css('height', $('.m-root').height());
        $('#chuansuo').css('width', $('.m-root').width());
      }
      i++;
    } else {
      if (bool) {
        i = 0;
      } else {
        window.clearInterval(name);
      }
    }
  }, 70);
  return name;
}

sequenceImgFun(719, true, '.jpg', 'guangImg');