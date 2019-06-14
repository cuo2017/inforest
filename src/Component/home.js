import React,{Component} from 'react';
import { Card, Carousel,Typography } from 'antd';
import '../App.css';

import img1 from '../Img/news1.png';
import img2 from '../Img/news2.jpg';
import img3 from '../Img/news3.jpeg';
import img4 from '../Img/news4.jpg';


const { Paragraph} = Typography;


class Home extends Component{
	render(){
		return (
			<Card className="map" title="主版面">
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
				  	<div  className="homebottom">
				  		<Card hoverable title="森林地图"
				  		/>
				  	</div>
				  	<div  className="homebottom">
				  		<Card hoverable title="项目管理"/>
				  	</div>
				  	<div  className="homebottom">
				  		<Card hoverable title="实时监控"/>
				  	</div>
				  	<div  className="homebottom">
				  		<Card hoverable title="用户列表"/>
				  	</div>
				  </div>
			</Card>
		);
	};
} 

export default Home;