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

function onChange(a, b, c) {
  console.log(a, b, c);
}

class Monitor extends Component {
	

	
	render(){

		return (
			<div className="map" title="监测图表">
				<PageHeader title="实时监控" subTitle="实时数据的统计与整理" />
				<Meter />
				<Divider>图表统计</Divider>
				<Carousel afterChange={onChange}>
				    <div>
				      <h3 style={{margin:0,padding:0,height:10,}}>最近一周温度走势</h3>
				      <Basiccolumn />
				    </div>
				    <div>
				    	<h3 style={{margin:0,padding:0,height:10,}}>最近一周光照走势</h3>
				      <Basiccolumn />
				    </div>
				    <div>
				    	<h3 style={{margin:0,padding:0,height:10,}}>最近一周湿度走势</h3>
				      <Basiccolumn />
				    </div>
				    <div>
				    	<h3 style={{margin:0,padding:0,height:10,}}>最近一周土壤水分走势</h3>
				      <Basiccolumn />
				    </div>
				    <div>
				    	<h3 style={{margin:0,padding:0,height:10,}}>最近一周土壤温度走势</h3>
				      <Basiccolumn />
				    </div>
				    <div>
				    	<h3 style={{margin:0,padding:0,height:10,}}>最近一周土壤肥力走势</h3>
				      <Basiccolumn />
				    </div>
				</Carousel>
				
			</div>
		)
	};
} 

class Meter extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<Row gutter={24}>
				
			    <Col span={3}>
			      <Statistic title="温度（°C）" valueStyle={{ color: '#cf1322' }} suffix={<Icon type="arrow-up" />} value={30} precision={1}/>
			    </Col>
			    <Col span={3}>
			      <Statistic title="光照（Lx）" valueStyle={{ color: '#000' }} suffix={<Icon type="arrow-right" />} value={112893} precision={0} />
			    </Col>
			    <Col span={3}>
			      <Statistic title="湿度（%）" valueStyle={{ color: '#3f8600' }} suffix={<Icon type="arrow-down" />} value={58.20} precision={2} />
			    </Col>
			    <Col span={3}>
			      <Statistic title="土壤水分（pF）" valueStyle={{ color: '#000' }} suffix={<Icon type="arrow-right" />} value={47} precision={2} />
			    </Col>
			    <Col span={3}>
			      <Statistic title="土壤温度（%）" valueStyle={{ color: '#3f8600' }} suffix={<Icon type="arrow-down" />} value={58} precision={2} />
			    </Col>
			    <Col span={3}>
			      <Statistic title="土壤肥力（g/kg）" valueStyle={{ color: '#cf1322' }} suffix={<Icon type="arrow-up" />} value={192} precision={2} />
			    </Col>
			    
				<Col span={6} >
					<Col span={1}>
					<Divider type="vertical" style={{float:'left', height:100}} ></Divider>
					</Col>
					<Col span={20}>
				      <Descriptions>
					    <Descriptions.Item label="上次更新时间">2019/01/01 8:00AM</Descriptions.Item>
					  </Descriptions>
					</Col>
			    </Col>

			</Row>
		);
	}
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
      <div style={{padding:40}}>
        <Chart height={350} data={data} scale={cols} forceFit>
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

export default Monitor;