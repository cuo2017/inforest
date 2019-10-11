import React,{Component} from 'react';
import { Steps,Divider,PageHeader, Form, Icon, Input, Button, Checkbox, Card} from 'antd';
import '../App.css';


import {PageFooter} from './product_display';

import AboutUs from '../Img/aboutus.jpg';
import AboutUs2 from '../Img/aboutus2.jpg';

const P1 = `
成都星亿年智慧科技有限公司创立于2019年，公司总部位于中国（四川）自由贸易区成都高新区，我们在计算机、互联网及人工智能等领域具有充足的技术储备基础和研发创新能力，并与电子科技大学、四川农业大学等高校保持充分的技术合作。
`;
const P2 = `
我们致力于将先进的互联网和人工智能技术应用于农林及其他相关行业，在智能识别、环境数据监控分析、智能预测预报等领域为客户提供有竞争力、安全可信赖的产品、解决方案与服务，持续为客户创造价值，释放行业潜能，激发组织创新。我们坚持围绕客户需求持续创新，加大研发投入，推动行业进步。
`;

export default class About extends Component {
	render(){
		return(
			<div className="page">
				<div style={{height:'1100px'}}>
					<Card bordered={false} style={{padding:0,float:'left',width:'100%',height:500}}>
						<div style={{margin:'0 auto',width:'1200px', height:'400px', textAlign:'center'}}>
							<div style={{float:'left'}}>
								<img height={500} width={800} src={AboutUs}/>
							</div>
							<div style={{float:'right',marginTop: 200,marginLeft:'50'}}>
								<h3 style={{fontWeight:'bold',color:'#333'}}>关于我们</h3>
								<p style={{fontWeight:'bold',width:350,textAlign:'left'}}>{P1}</p>
							</div>
						</div>
					</Card>

					<Card bordered={false} style={{marginTop:"100px",padding:0,float:'left',width:'100%',height:500}}>
						<div style={{margin:'0 auto',width:'1200px', height:'400px', textAlign:'center'}}>
							
							<div style={{float:'left',marginTop: 200,marginRight:'50'}}>
								<h3 style={{fontWeight:'bold',color:'#333'}}>我们的服务</h3>
								<p style={{fontWeight:'bold',width:350,textAlign:'left'}}>{P2}</p>
							</div>
							<div style={{float:'right'}}>
								<img height={500} width={800} src={AboutUs2}/>
							</div>
							
						</div>
					</Card>
				</div>
				<PageFooter />
			</div>
		);
	}
}

