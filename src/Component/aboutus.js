import React,{Component} from 'react';
import { Steps,Divider,PageHeader, Form, Icon, Input, Button, Checkbox, Card} from 'antd';
import '../App.css';


import {PageFooter} from './product_display';


const P1 = `
成都星亿年智慧科技有限公司创立于2019年，公司总部位于中国（四川）自由贸易区成都高新区，我们在计算机、互联网及人工智能等领域具有充足的技术储备基础和研发创新能力，并与电子科技大学、四川农业大学等高校保持充分的技术合作。
`;
const P2 = `
我们致力于将先进的互联网和人工智能技术应用于农林及其他相关行业，在智能识别、环境数据监控分析、智能预测预报等领域为客户提供有竞争力、安全可信赖的产品、解决方案与服务，持续为客户创造价值，释放行业潜能，激发组织创新。我们坚持围绕客户需求持续创新，加大研发投入，推动行业进步。
`;

export default class About extends Component {
	render(){
		return(
			<div style={{marginTop:40, paddingTop:150,width:'100%'}}>
				<div style={{width:820,margin:'0 auto',height:400}}>
					<Card title="关于我们" style={{float:'left',width:400,margin:5,height:300}}>
						<div>
						{P1}
						</div>
					</Card>

					<Card title="我们的服务" style={{float:'left',width:400,margin:5,height:300}}>
						<div>
						{P2}
						</div>
					</Card>
				</div>
				<PageFooter />
			</div>
		);
	}
}