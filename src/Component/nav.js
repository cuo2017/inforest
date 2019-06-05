import React,{Component} from 'react';
import { Menu, Icon } from 'antd';
import '../App.css';

import Logo from '../Img/logo.jpg';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Nav extends Component{
	state = {
    	current: 'mail',
    }

    handleClick = (e) => {
	    console.log('click ', e);
	    this.setState({
	      current: e.key,
	    });
    }
	render(){
		return (
			<Menu
				className="nav"
		        onClick={this.handleClick}
		        selectedKeys={[this.state.current]}
		        mode="horizontal">
	            <Menu.Item key="logo" className="logo">
		            <img src={Logo} width="30" height="30" style={{marginRight:10}}/> 智慧森林
		        </Menu.Item>
		        <SubMenu className="username" title={<span className="submenu-title-wrapper"><Icon type="user" />管理员</span>}>
	            	<Menu.Item key="setting:1">用户资料</Menu.Item>
	            	<Menu.Item key="setting:2">退出登陆</Menu.Item>
		        </SubMenu>
		    </Menu>
		);
	};
} 

export default Nav;