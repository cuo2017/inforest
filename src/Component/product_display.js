import React,{Component} from 'react';
import { Menu,Icon,Typography,Card,PageHeader,Divider,Row,Col,Button} from 'antd';
import '../App.css';


import Logo from '../Img/logo.jpg';
import Heading from '../Img/heading_offwhite.png';
import BgVideo from '../Img/Trees-low.mp4';
import Img1 from '../Img/data-search.png';
import Img2 from '../Img/data-collect.png';
import Img3 from '../Img/data-find.png';

const SubMenu = Menu.SubMenu;
const { Meta } = Card;
const { Title } = Typography;

export default class Product extends Component {
	render(){
		return (
			<div style={{height:window.innerHeight}}>
				<Page1 />
				<Page2 />
				<PageFooter />
			</div>
		);
	}
}



const Page1 = () => (
	<div style={{height:'100%'}}>
		<video style={{position:'absolute',left:0,zIndex:0}} object-fit="fill" width="100%" src={BgVideo} autoPlay loop>您的浏览器不支持视频播放,推荐您下载最新版Chrome浏览器</video>
		<div style={{zIndex:1, position:'relative',width:'100%',textAlign:'center',paddingTop:150}}>
			<img width={800} src={Heading} />
		</div>
	</div>	
);

const Page2 = () => (
	<div style={{width:'100%',marginTop:60, height:'50%'}}>
		<Title level={3} style={{marginBottom:50}}>我们的服务</Title>
		<div style={{margin:'0 auto',width:1230}}>
			<Card 
				className="page2-card"
				hoverable
				bordered={false}
				cover={
			       	<img src={Img1} />
			       }
			>
				<Meta
				className="page2-meta"
			      title="数据采集"
			      description="精密的传感器套组在龙泉驿的森林园区，实时采集六维天气数据"
			    />
			    <Button type="link">了解更多</Button>
			</Card>
			<Card 
				className="page2-card"
				hoverable
				bordered={false}
			 	cover={
			       	<img src={Img2} />
			       }
			>
				<Meta
				className="page2-meta"
			      title="实时监控"
			      description="远程监控不同项目所属森林范围，在地图上直观为管理员展示"
			    />
			    <Button type="link">了解更多</Button>
			</Card>
			<Card 
				className="page2-card"
				hoverable
				bordered={false}
			 	cover={
			       	<img src={Img3} />
			       }
			>
				<Meta
					className="page2-meta"
			      title="森林溯源"
			      description="统计并记录各项目历史记录与实时进度"
			    />
			    <Button type="link">了解更多</Button>
			</Card>
		</div>
	</div>
);

export const PageFooter = () => (
	<div style={{backgroundColor:'#333',width:'100%',marginTop:60, height:0.25*window.innerHeight, paddingTop:30}}>
		<Row type="flex" justify="start" style={{textAlign:'center',height:20}}>
	      	<Col style={{textAlign:'center'}} span={8}>
	      		
	      		<Title level={4} style={{backgroundColor:'#333',color:'#fff'}}>相关资源</Title>
	      		<div style={{margin:'0 auto',width:100,textAlign:'center'}}>
		      		<Button size="small" type="link" style={{color:'#ccc',textAlign:'center'}}><Icon type="android" />安卓 App</Button>
			      	<Button  size="small" type="link" style={{color:'#ccc',textAlign:'center'}}><Icon type="apple" />iOS App</Button>
		      	</div>
	      	</Col>
	      	<Col span={8}>
	      		<Title level={4} style={{backgroundColor:'#333',color:'#fff'}}>网站反馈</Title>
	      		<div style={{margin:'0 auto',width:100,textAlign:'center'}}>
		      		<Button size="small" type="link" style={{color:'#ccc',textAlign:'center'}}>智慧森林</Button>
			      	<Button  size="small" type="link" style={{color:'#ccc',textAlign:'center'}}>反馈建议</Button>
			      	<Button size="small" type="link" style={{color:'#ccc',textAlign:'center'}}>帮助中心</Button>
			      	<Button size="small" type="link" style={{color:'#ccc',textAlign:'center'}}>权限系统</Button>
		      	</div>
	      	</Col>
	      	<Col style={{textAlign:'center'}} span={8}>
	      		<Title level={4} style={{backgroundColor:'#333',color:'#fff'}}>联系我们</Title>
	      		<div style={{margin: '0 auto', width:200,color:'#ccc',textAlign:'center'}}>
		      		
		      		<Button size="small" type="link" style={{color:'#ccc',textAlign:'center'}}>
		      			<Icon type="qq" />
		      			<Divider type="vertical" />
		      			<Icon type="wechat" />
		      			<Divider type="vertical" />
		      			<Icon type="weibo" />
	      			</Button>
		      		<Button size="small" type="link" style={{color:'#ccc',textAlign:'center'}}><Icon type="mail" />联系我们</Button>
		      		<Button size="small" type="link" style={{color:'#ccc',textAlign:'center'}}>Copyright © 2019 Yuhao Cai</Button>
      			</div>
  		  	</Col>
	    </Row>
	</div>
);