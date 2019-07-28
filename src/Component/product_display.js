import React,{Component} from 'react';
import { Menu,Icon  } from 'antd';
import '../App.css';


import Logo from '../Img/logo.jpg';
import Heading from '../Img/heading_offwhite.png';
import BgVideo from '../Img/Trees.mp4';

const SubMenu = Menu.SubMenu;

export default class Product extends Component {
	render(){
		return (
			<div>
				<video style={{position:'absolute',left:0,zIndex:0}} object-fit="fill" width="100%" src={BgVideo} autoPlay loop>您的浏览器不支持视频播放,推荐您下载最新版Chrome浏览器</video>
				<div style={{zIndex:1, position:'relative',width:'100%',textAlign:'center',paddingTop:150}}>
					<img width={800} src={Heading} />
				</div>
			</div>
		);
	}
}


