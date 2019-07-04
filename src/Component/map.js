import React,{Component} from 'react';
import { Card,PageHeader } from 'antd';
import '../App.css';

class Map extends Component{
	render(){
		return (
			<div className="map" title="监控地图">
				<PageHeader title="森林地图" subTitle="种植区域分布" />
			</div>
		);
	};
} 

export default Map;