import React,{Component} from 'react';
import { Card, Descriptions, Badge, PageHeader} from 'antd';
import '../App.css';




class Userinfo extends Component{
	render(){
		return (
			<div className="map" >
				<PageHeader title="管理员资料" subTitle="管理员的个人资料" />
				<Descriptions bordered>
				    <Descriptions.Item label="管理员名">Admin</Descriptions.Item>
				    <Descriptions.Item label="管理员手机号">180-1234-9876</Descriptions.Item>
				    <Descriptions.Item label="账号建立时间">2018-04-24 18:00:00</Descriptions.Item>
				    <Descriptions.Item label="权限" span={3}>
				      <Badge status="processing" text="管理权限" />
				    </Descriptions.Item>
				  </Descriptions>
			</div>
		);
	};
} 

export default Userinfo;