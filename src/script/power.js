let subItem = echarts.init(document.getElementById('sub-item'))
let subItemOption = {
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },

  visualMap: {
    show: false,
    min: 80,
    max: 600,
    inRange: {
      colorLightness: [0, 1]
    }
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: '55%',
      center: ['50%', '50%'],
      data: [
        {
          value: 335, name: '空调', itemStyle: {
          normal: {
            color: '#139431'
          }
        }
        },
        {
          value: 310, name: '动力', itemStyle: {
          normal: {
            color: '#0e6224'
          }
        }
        },
        {
          value: 274, name: '特殊', itemStyle: {
          normal: {
            color: '#cdcecf'
          }
        }
        },
        {
          value: 235, name: '照明', itemStyle: {
          normal: {
            color: '#384b5d'
          }
        }
        }
      ],
      roseType: 'radius',
      label: {
        normal: {
          textStyle: {
            color: '#d4d4d5'
          }
        }
      },
      labelLine: {
        normal: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.3)'
          },
          smooth: 0.2,
          length: 10,
          length2: 20
        }
      },
      itemStyle: {
        normal: {
          shadowBlur: 200,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      },
      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function (idx) {
        return Math.random() * 200;
      }
    }
  ]
};
subItem.setOption(subItemOption)

let floor = echarts.init(document.getElementById('floor'))
let floorOption = {
  color: ['#3398DB'],
  grid: {
    left: 20,
    right: 0,
    top: 30,
    bottom: 20
  },
  xAxis: [
    {
      type: 'category',
      data: ['一', '二', '三', '四', '五', '六'],
      axisTick: {
        alignWithLabel: true
      },
      axisLine: {
        lineStyle: {
          color: '#42494d'
        }
      }
    }
  ],
  yAxis: {
    type: 'value',
    splitLine: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: '#42494d'
      }
    },
  },
  series: [
    {
      type: 'bar',
      barWidth: 10,
      barGap: '-100%',
      itemStyle: {
        normal: {color: '#2e373f'}
      },
      data: [400, 400, 400, 400, 400, 400],
      animation: false
    },
    {
      name: '',
      type: 'bar',
      barWidth: 10,
      axisLine: {
        lineStyle: {
          color: '#42494d'
        }
      },
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              {offset: 0, color: '#237c30'},
              {offset: 0.5, color: '#206c2e'},
              {offset: 1, color: '#152b25'}
            ]
          )
        },
        emphasis: {
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              {offset: 0, color: '#2378f7'},
              {offset: 0.7, color: '#2378f7'},
              {offset: 1, color: '#83bff6'}
            ]
          )
        }
      },
      data: [100, 300, 400, 310, 150, 250]
    }
  ]
};
floor.setOption(floorOption)

let loadCurve = echarts.init(document.getElementById('loadCurve'))
let loadCurveOption = {
  color: ['#3581ff', '#35ff6b'],
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
    data: ['', '03', '06', '09', '12', '15', '18', '21', ''],
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
    max: 400,
    intever: 100,
    splitLine: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: '#42494d'
      }
    },
  },
  series: [
    {
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
          color: '#1e3f72',
        }
      },
      data: [180, 320, 200, 185, 280, 330, 200, 175, 260]
    },
  ]
};
loadCurve.setOption(loadCurveOption);

let floorSubUse = echarts.init(document.getElementById('floorSubUse'))
let floorSubUseOption = {
  radar: [
    {
      indicator: [
        {text: '办公室', max: 200},
        {text: '会议室', max: 200},
        {text: '洽谈室', max: 200},
        {text: '洗手间', max: 200},
        {text: '茶水间', max: 200}
      ],
      radius: 60,
      axisLine: {
        lineStyle: {
          type: 'dotted',
          color: ['#38424a']
        }
      },
      splitLine: {
        lineStyle: {
          color: ['#22303c']
        }
      },
      splitArea: {
        areaStyle: {
          color: ['#1e262c']
        }
      }
    },

  ],
  series: [
    {
      type: 'radar',
      tooltip: {
        trigger: 'item'
      },
      symbolSize: 0,
      lineStyle: {
        normal: {
          color: '#02f103'
        }
      },
      itemStyle: {
        normal: {
          color: '#1e4537'
        }
      },
      areaStyle: {
        normal: {
          color: '#1e4537'
        }
      },
      label: {
        normal: {
          show: true,
          color: '#ffffff'
        }
      },
      data: [
        {
          value: [150, 80, 76, 176, 100],
          name: '某软件'
        }
      ]
    }
  ]
};
floorSubUse.setOption(floorSubUseOption);

let powercurvedata = [];
let now = +new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(),new Date().getHours(),new Date().getMinutes());
let tenMinutes = 10*60 * 1000;

function randomData() {
  now = new Date(+now + tenMinutes)
  let value = Math.random() * 600
  return {
    value: [
      now.getHours()+': '+(now.getMinutes()>9?now.getMinutes().toString().replace(now.getMinutes().toString().substr(now.getMinutes().toString().length - 1,1),'0'):'00'),
      Math.round(value)
    ]
  }
}

for (let i = 0; i < 20; i++) {
  powercurvedata.push(randomData());
}
var secondArr=[];
for (let i = 0; i < 20; i++) {
  secondArr.push(Math.random()* 600)
}
let powercurve = echarts.init(document.getElementById('powercurvechart'))
let powercurveOption = {
  grid: {
    left: 30,
    right: 0,
    top:30,
    bottom: 20
  },
  toolbox: {
    show: false
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    splitLine: {
      show: false
    },
    data: powercurvedata.map(function (item) {
      return item.value[0];
    }),
    axisLine: {
      lineStyle: {
        color: '#ccc',
        fontSize:16
      }
    },
  },
  yAxis: {
    type: 'value',
    splitLine: {
      show: false
    },

    min:0,
    max:600,
    interval:50,
    axisLine: {
      lineStyle: {
        color: '#ccc',
        fontSize:16
      }
    },

  },
  series: [
    {
      name: '最高气温',
      type: 'line',
      itemStyle: {
        normal: {
          color: '#18f40d'
        }
      },
      lineStyle: {
        normal: {
          width:1
        }
      },
      zlevel:1,
      z:1,
      showSymbol: true,
      symbol:'rect',
      symbolSize:6,
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
              offset: 0, color: '#123122' // 0% 处的颜色
            }, {
              offset: 0.4, color: '#112520' // 0% 处的颜色
            }, {
              offset: 1, color: '#142225' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
          }
        }
      },
      data: powercurvedata.map(function (item) {
        return item.value[1];
      }),
    },
    {
      type: 'line',
      itemStyle: {
        normal: {
          color: '#0e89fc'
        }
      },
      lineStyle: {
        normal: {
          width:1
        }
      },
      zlevel:0,
      z:0,
      showSymbol: true,
      symbol:'rect',
      symbolSize:6,
      hoverAnimation: false,
      areaStyle: {
        normal: {
          color: '#0e2432'
        }
      },
      data: secondArr
    }
  ]
};
powercurve.setOption(powercurveOption);