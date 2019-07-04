import React,{Component} from 'react';
import { Card, Statistic, Row, Col, Button, Icon, Descriptions, Divider,Carousel, PageHeader } from 'antd';
import '../App.css';
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util, 
} from "bizcharts";

import DataSet from "@antv/data-set";
import Slider from "bizcharts-plugin-slider";

import $ from 'jquery';

import {Footer} from './home'; 




let data;
$.ajax({
  url: "https://alifd.alibabausercontent.com/materials/@bizcharts/g2-peking-aqi/0.2.7/mock.json",
  async : false,
  success: (iData) => { data = iData;}
});

let data1 = [{
	'date':'2019-01-01',
	'city':'Chengdu',
	'temp': 25
},
{
	'date':'2019-01-02',
	'city':'Chengdu',
	'temp': 27
},
{
	'date':'2019-01-03',
	'city':'Chengdu',
	'temp': 21
},
{
	'date':'2019-01-04',
	'city':'Chengdu',
	'temp': 27
},
{
	'date':'2019-01-05',
	'city':'Chengdu',
	'temp': 37
},
{
	'date':'2019-01-06',
	'city':'Chengdu',
	'temp': 32
},
{
	'date':'2019-01-07',
	'city':'Chengdu',
	'temp': 30
},
];



data = data1;


function getComponent(data) {
  const { Region } = Guide;
  const ds = new DataSet({
    state: {
      start: new Date("2019-01-01").getTime(),
      end: new Date("2019-01-07").getTime()
    }
  });
  $(
    '<h4 style="text-align: center;margin-bottom: 5px;">北京市 2010-2015 年 AQI 指数</h4>'
  ).appendTo($("#mountNode"));
  var dv = ds.createView().source(data);
  dv.transform({
    type: "filter",

    callback(obj) {
      const time = new Date(obj.date).getTime(); // !注意：时间格式，建议转换为时间戳进行比较

      return time >= ds.state.start && time <= ds.state.end;
    }
  });
  var ticks = [-10, 0, 20, 30, 40];
  var colors = [
    "#5AC405",
    "#F9C709",
    "#FD942C",
    "#e4440D",
    "#810043"
  ];
  const scale = {
    date: {
      type: "time",
      mask: "YYYY-MM-DD",
      tickCount: 4,
      alias: "日期",
      nice: false
    },
    temp: {
      min: 0,
      ticks: ticks,
      alias: "摄氏度(温度)"
    }
  };

  class SliderChart extends React.Component {
    onChange(obj) {
      const { startValue, endValue } = obj;
      ds.setState("start", startValue);
      ds.setState("end", endValue);
    }

    render() {
      return (
        <div>
          <Chart
            height={300}
            data={dv}
            scale={scale}
            forceFit
            padding={[20, 20, 40, 80]}
          >
            <Tooltip />
            <Axis />
            <Geom type="line" position="date*temp" opacity={0.75} />
            <Guide>
              <Region
                start={["min", -10]}
                end={["max", 0]}
                style={{
                  fill: "#5AC405",
                  fillOpacity: 0.4
                }}
              />
              <Region
                start={["min", 0]}
                end={["max", 20]}
                style={{
                  fill: "#F9C709",
                  fillOpacity: 0.4
                }}
              />
              <Region
                start={["min", 20]}
                end={["max", 30]}
                style={{
                  fill: "#FD942C",
                  fillOpacity: 0.4
                }}
              />
              <Region
                start={["min", 30]}
                end={["max", 40]}
                style={{
                  fill: "#e4440D",
                  fillOpacity: 0.4
                }}
              />
            </Guide>
          </Chart>
          <div>
            <Slider
              width="auto"
              height={30}
              start="2019-01-01"
              end="2019-01-02"
              xAxis="date"
              yAxis="temp"
              scales={{
                time: {
                  type: "time",
                  tickCount: 10,
                  mask: "YYYY-MM-DD"
                }
              }}
              data={data}
              backgroundChart={{
                type: "line"
              }}
              onChange={this.onChange.bind(this)}
            />
          </div>
        </div>
      );
    }
  }
  return SliderChart;
}

class Pekingaqi extends React.Component {
  render() {
    const SliderChart = getComponent(data);
    return (
      <div>
        <SliderChart />
      </div>
    );
  }
}


function onChange(a, b, c) {
  console.log(a, b, c);
}



class Basiccolumn extends React.Component {
  render() {
    const data = [
      {
        year: "1951 年",
        sales: 38
      },
      {
        year: "1952 年",
        sales: 52
      },
      {
        year: "1956 年",
        sales: 61
      },
      {
        year: "1957 年",
        sales: 145
      },
      {
        year: "1958 年",
        sales: 48
      },
      {
        year: "1959 年",
        sales: 38
      },
      {
        year: "1960 年",
        sales: 38
      }
    ];
    const cols = {
      sales: {
        tickInterval: 20
      }
    };
    return (
      <div style={{padding:0}}>
        <Chart height={400} data={data} scale={cols} forceFit>
          <Axis name="year" />
          <Axis name="sales" />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom type="interval" position="year*sales" />
        </Chart>

      </div>
    );
  }
}



class Monitor extends Component {
	

	
	render(){

		return (
			<div className="map" title="监测图表">
				<PageHeader title="实时监控" subTitle="实时数据的统计与整理" />
				<div className="homebottom" style={{height:450}}>
				  		<PageHeader
						    title="温度数据"
						    extra={[
						      <p key="1" type="link">
						        折线图每日中午12:00更新前一日数据
						      </p>,
						    ]}
						/>
						<Pekingaqi />
			    </div>
			    <div className="homebottom" style={{height:450}}>
				  		<PageHeader
						    title="湿度数据"
						    extra={[
						      <p key="1" type="link">
						        折线图每日中午12:00更新前一日数据
						      </p>,
						    ]}
						/>
						<Pekingaqi />
			    </div>
			    <div className="homebottom" style={{height:450}}>
				  		<PageHeader
						    title="光照数据"
						    extra={[
						      <p key="1" type="link">
						        折线图每日中午12:00更新前一日数据
						      </p>,
						    ]}
						/>
						<Pekingaqi />
			    </div>
			    <div className="homebottom" style={{height:450}}>
				  		<PageHeader
						    title="水分数据"
						    extra={[
						      <p key="1" type="link">
						        折线图每日中午12:00更新前一日数据
						      </p>,
						    ]}
						/>
						<Pekingaqi />
			    </div>
			    <div className="homebottom" style={{height:450}}>
				  		<PageHeader
						    title="土壤温度数据"
						    extra={[
						      <p key="1" type="link">
						        折线图每日中午12:00更新前一日数据
						      </p>,
						    ]}
						/>
						<Pekingaqi />
			    </div>
			    <div className="homebottom" style={{height:450}}>
				  		<PageHeader
						    title="土壤肥力数据"
						    extra={[
						      <p key="1" type="link">
						        折线图每日中午12:00更新前一日数据
						      </p>,
						    ]}
						/>
						<Pekingaqi />
			    </div>
				<Divider />
				<Footer />
			</div>
		)
	};
} 





export default Monitor;