import React,{Component} from 'react';
import { Card, Carousel,Typography,PageHeader, Icon, Button, Tag, Tabs, Divider,Statistic, Row, Col, Skeleton } from 'antd';
import '../App.css';
import {
  G2,Chart,Geom,Axis,Tooltip,Coord,Label,Legend,View,Guide,Shape,Facet,Util, 
} from "bizcharts";


import img1 from '../Img/news1.png';
import img2 from '../Img/news2.jpg';
import img3 from '../Img/news3.jpeg';
import img4 from '../Img/news4.jpg';


// ====== For Redux ====== //

import { createStore } from 'redux';
import frontApp from '../data/reducers';
import {updateHome} from '../data/actions';

let store = createStore(frontApp);

// console.log(store.getState());
// On Watch
// console.log(store.getState());
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// );

// store.dispatch(addSize('Learn about actions'));

// unsubscribe();

//=========//



const { Paragraph} = Typography;
const { TabPane } = Tabs;

class Basiccolumn extends React.Component {
	constructor(props){
		super(props);
	}
  	render() {
	    
	    const cols = {
	      value: {
	        tickInterval: 1
	      }
	    };
	    return (
	      <div style={{padding:50}}>
	        <Chart height={350} data={this.props.data} scale={cols} forceFit>
	          <Axis name="date" />
	          <Axis name="value" />
	          <Tooltip
	            crosshairs={{
	              type: "y"
	            }}
	          />
	          <Geom type="interval" position="date*value" />
	        </Chart>
	      </div>
	    );
  	}
}


class Home extends Component{
	state = {};
	componentDidMount = () => {
		let data = {
			totalsize: 172.6,
			totalsizeincrement: 37.42,
			project_1: 58,
			project_1increment: 3,
			project_2: 23,
			project_2increment: 6,
			doneproject: 35,
			doneprojectincrement: 7,
			inprogressproject: 11,
			inprogressprojectincrement: 2,

			temp: 32,
			illu: 12000,
			humi: 71.3,
			soilwater: 47,
			soiltemp: 25,
			soilfert: 192,

			userincrement:[
		      
		      {
		        date: "06-05",
		        value: 4
		      },
		      {
		        date: "06-06",
		        value: 3
		      },
		      {
		        date: "06-07",
		        value: 4
		      },
		      {
		        date: "06-08",
		        value: 9
		      },
		      {
		        date: "06-09",
		        value: 3
		      },
		      {
		        date: "06-10",
		        value: 6
		      },
		      {
		        date: "06-10",
		        value: 3
		      },
		      {
		        date: "06-11",
		        value: 1
		      },
		      {
		        date: "06-12",
		        value: 3
		      },
		      {
		        date: "06-13",
		        value: 7
		      },
	        ],
		};

      	store.dispatch(updateHome(data));
      	this.setState(store.getState().home[0].data);
      	// console.log(store.getState().home[0].data.realdata.temp);
    };
	render(){
		return (
			<div className="map" >
				<PageHeader title="主版面" subTitle="信息的集合" />
				<Carousel className="carousel" autoplay>
				    <div style={{position:'absolute'}}>
				    	<img src={img1} height='100%' width='100%' style={{float:'left'}}/>
				    	<h3 width='30%' style={{float:'center'}}>龙泉驿森林</h3>
				    	<p style={{float:'center',color:'#666',width:'30%',float:'right',wordBreak:'break-all'}}>白云回望合，青霭入看无。
				    	</p>
			    	</div>
				    <div style={{position:'absolute'}}>
				    	<img src={img2} height='100%' width='100%' style={{float:'left'}}/>
				    	<h3 width='30%' style={{float:'center'}}>桃花漫山红</h3>
				    	<p style={{float:'center',color:'#666',width:'30%',float:'right',wordBreak:'break-all'}}>这几日，蓉城阳光温暖。龙泉驿桃花漫山红遍。
				    	</p>
			    	</div>
				    <div style={{position:'absolute'}}>
				    	<img src={img3} height='100%' width='100%' style={{float:'left'}}/>
				    	<h3 width='30%' style={{float:'center'}}>蔷薇花美得太“童话”</h3>
				    	<p style={{float:'center',color:'#666',width:'30%',float:'right',wordBreak:'break-all'}}>清润风光雨后天,蔷薇花谢绿窗前
				    	</p>
			    	</div>
				    <div style={{position:'absolute'}}>
				    	<img src={img4} height='100%' width='100%' style={{float:'left'}}/>
				    	<h3 width='30%' style={{float:'center'}}>青龙湖湿地公园</h3>
				    	<p style={{float:'center',color:'#666',width:'30%',float:'right',wordBreak:'break-all'}}>龙泉驿市民出了家门，就能望山、见水、观田、游林、赏花
				    	</p>
			    	</div>
				  </Carousel>
				  <div>
				  	<div className="homebottom" style={{height:300}}>
				  		<PageHeader
						    title="项目数据总览"
						    tags={<Tag color="orange">每月更新</Tag>}
						    extra={[
						      <Button key="1" type="link">
						        查看更多<Icon type="right" />
						      </Button>,
						    ]}
						  />
					  	<Card style={{width:'200px',float:'left',marginLeft:20,marginBottom:20}}>
					  		
				            <Statistic
					            title="项目总规模"
					            value={this.state.totalsize}
					            precision={2}
					            valueStyle={{ color: '#108ee9' }}
					            prefix=""
					            suffix="亩"
					            style={{marginBottom:10}}
					        />
				            <Statistic 
				            	title="上月增量"
					            value={this.state.totalsizeincrement}
					            precision={2}
					            valueStyle={{ color: '#00a652' }}
					            prefix=""
					            suffix="亩"
				            />
				        </Card>
				        <Card style={{width:'200px',float:'left',marginLeft:20,marginBottom:20}}>
				          <Statistic
				            title="造林项目"
				            value={this.state.project_1}
				            precision={0}
				            valueStyle={{ color: '#108ee9' }}
				            prefix=""
				            suffix=""
				            style={{marginBottom:10}}
				          />
				          <Statistic title="上月增量"
				            value={this.state.project_1increment}
				            precision={0}
				            valueStyle={{ color: '#00a652' }}
				            prefix=""
				            suffix=""
				            />
				        </Card>
				        <Card style={{width:'200px',float:'left',marginLeft:20,marginBottom:20}}>
				          <Statistic
				            title="抚育管护项目"
				            value={this.state.project_2}
				            precision={0}
				            valueStyle={{ color: '#108ee9' }}
				            prefix=""
				            suffix=""
				            style={{marginBottom:10}}
				          />
				          <Statistic title="上月增量"
				            value={this.state.project_2increment}
				            precision={0}
				            valueStyle={{ color: '#00a652' }}
				            prefix=""
				            suffix=""
				            />
				        </Card>
				        <Card style={{width:'200px',float:'left',marginLeft:20,marginBottom:20}}>
				          <Statistic
				            title="已完结项目"
				            value={this.state.doneproject}
				            precision={0}
				            valueStyle={{ color: '#108ee9' }}
				            prefix=""
				            suffix=""
				            style={{marginBottom:10}}
				          />
				          <Statistic title="上月增量"
				            value={this.state.doneprojectincrement}
				            precision={0}
				            valueStyle={{ color: '#00a652' }}
				            prefix=""
				            suffix=""
				            />
				        </Card>
				        <Card style={{width:'200px',float:'left',marginLeft:20,marginBottom:20}}>
				          <Statistic
				            title="进行中项目"
				            value={this.state.inprogressproject}
				            precision={0}
				            valueStyle={{ color: '#108ee9' }}
				            prefix=""
				            suffix=""
				            style={{marginBottom:10}}
				          />
				          <Statistic title="上月增量"
				            value={this.state.inprogressprojectincrement}
				            precision={0}
				            valueStyle={{ color: '#00a652' }}
				            prefix=""
				            suffix=""
				            />
				        </Card>
				  	</div>
				  	<Divider />
				  	<div  className="homebottom" style={{height:230}}>
				  		<PageHeader
						    title="实时监测总览"
						    tags={<Tag color="blue">实时更新</Tag>}
						    extra={[
						      <Button key="1" type="link">
						        查看更多<Icon type="right" />
						      </Button>,
						    ]}
						  />
					  	<Card style={{width:'160px',float:'left',marginLeft:20,marginBottom:20}}>
				        	<Statistic title="温度" valueStyle={{ color: '#cf1322' }} suffix='°C' value={this.state.temp} precision={1}/>
				        </Card>
				        <Card style={{width:'160px',float:'left',marginLeft:20,marginBottom:20}}>
			      			<Statistic title="光照" valueStyle={{ color: '#000' }} suffix='Lx' value={this.state.illu} precision={0} />
				        </Card>
				        <Card style={{width:'160px',float:'left',marginLeft:20,marginBottom:20}}>
			      			<Statistic title="湿度" valueStyle={{ color: '#3f8600' }} suffix='%' value={this.state.humi} precision={2} />
				        </Card>
				        <Card style={{width:'160px',float:'left',marginLeft:20,marginBottom:20}}>
			      			<Statistic title="土壤水分" valueStyle={{ color: '#000' }} suffix='pF' value={this.state.soilwater} precision={2} />
				        </Card>
				        <Card style={{width:'160px',float:'left',marginLeft:20,marginBottom:20}}>
			      			<Statistic title="土壤温度" valueStyle={{ color: '#3f8600' }} suffix='°C' value={this.state.soiltemp} precision={2} />
				        </Card>
				        <Card style={{width:'160px',float:'left',marginLeft:20,marginBottom:20}}>
			      			<Statistic title="土壤肥力" valueStyle={{ color: '#cf1322' }} suffix='g/kg' value={this.state.soilfert} precision={2} />
				        </Card>
				  	</div>
				  	<Divider />
				  	<div  className="homebottom" style={{height:450}}>
				  		<PageHeader
						    title="用户增量数据总览"
						    extra={[
						      <p key="1" type="link">
						        折线图每日中午12:00更新前一日数据，此处展示最近10天数据
						      </p>,
						    ]}
						/>
						<Basiccolumn data={this.state.userincrement}/>
				  	</div>
				  	<Divider />
				  	<Footer />
				  </div>
			</div>
		);
	};
} 


export const Footer = () => (
	<div  className="homebottom" style={{height:20,marginBottom:50,marginLeft:20}}>
  		<Row type="flex" justify="start" style={{textAlign:'center',height:20}}>
	      <Col style={{textAlign:'center',height:20}} span={2}><Button size="small" type="link" style={{color:'#999',textAlign:'center'}}>智慧森林</Button> </Col>
	      <Col style={{textAlign:'center',height:20}} span={1}><Divider style={{height:'100%'}} type="vertical"/></Col>
	      <Col style={{textAlign:'center',height:20}} span={2}><Button  size="small" type="link" style={{color:'#999',textAlign:'center'}}>反馈与建议</Button></Col>
	      <Col style={{textAlign:'center',height:20}} span={1}><Divider style={{height:'100%'}} type="vertical"/></Col>
	      <Col style={{textAlign:'center',height:20}} span={2}><Button size="small" type="link" style={{color:'#999',textAlign:'center'}}>帮助中心</Button></Col>
	      <Col style={{textAlign:'center',height:20}} span={1}><Divider style={{height:'100%'}} type="vertical"/></Col>
	      <Col style={{textAlign:'center',height:20}} span={2}><Button size="small" type="link" style={{color:'#999',textAlign:'center'}}>权限系统</Button></Col>
	      <Col span={7}></Col>
	      <Col style={{textAlign:'center',height:20}} span={6}><Button size="small" type="link" style={{color:'#999',textAlign:'center'}}><Icon type="qq" /><Divider type="vertical"/><Icon type="wechat" /><Divider type="vertical"/><Icon type="weibo" /><Divider type="vertical"/><Icon type="mail" />联系我们</Button></Col>
	    </Row>
  	</div>
);
export default Home;


