import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

import MyMenu from './Component/menu';
import MyMap from './Component/map';
import MyList from './Component/list';
import Monitor from './Component/monitor';
import User from './Component/user';
import Home from './Component/home';
import Userinfo from './Component/userinfo';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Menu, Icon, Divider } from 'antd';

import Logo from './Img/logo.jpg';
import Heading from './Img/heading.jpg';
import Appicon from './Img/app-icon.png';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;





class App extends Component{
    
  render(){
    return (
      <div className="App">
        
        <Router>
          <Menu
            className="nav"
            selectedKeys={['logo']}
            mode="horizontal"
            >
                <Menu.Item key="logo" className="logo">
                    <img src={Logo} width="20" height="20" style={{marginRight:5}}/> 主页
                </Menu.Item>
                <Menu.Item disabled key="product" className="logo">
                    <Icon type="tablet" />产品页
                </Menu.Item>
                <SubMenu disabled className="username" title={<span className="submenu-title-wrapper"><Icon type="user" />管理员</span>}>
                    <Menu.Item key="setting:1"><Link to="/userinfo/">用户资料</Link></Menu.Item>
                    <Menu.Item key="setting:2">退出登陆</Menu.Item>
                </SubMenu>
          </Menu>
          <Menu
            className="menu"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['1']}
            mode="inline"
          >
            <div>
              <img src={Heading} style={{width:200, marginBottom:10}}/>
            </div>
              <Menu.Item key="1"><Link to="/home/"><span><Icon type="home" /><span>首页管理</span></span></Link></Menu.Item>
              <Menu.Item key="2"><Link to="/map/"><span><Icon type="appstore" /><span>森林地图</span></span></Link></Menu.Item>
              <Menu.Item key="3"><Link to="/list/"><span><Icon type="setting" /><span>项目管理</span></span></Link></Menu.Item>
              <Menu.Item disabled key="4"><Link to="/monitor/"><span><Icon type="dot-chart" /><span>数据分析</span></span></Link></Menu.Item>
              <Menu.Item key="5"><Link to="/user/"><span><Icon type="user" /><span>用户管理</span></span></Link></Menu.Item>
            <div style={{paddingLeft:40,paddingRight:40,height:80}}>
              <Divider/>
              <div style={{cursor:'pointer'}}>
                <img src={Appicon} style={{width:50,float:'left'}}/>
                <div style={{marginTop:10,float:'left'}}>
                  <h4 ><Divider type="vertical"/>安卓客户端</h4>
                  <p style={{marginTop:10,color:'#999'}}>V0.0.1</p>
                </div>
              </div>
            </div>
            <div style={{paddingLeft:40,paddingRight:40,height:200}}>
              <Divider style={{marginBottom:40}}/>
              <div style={{position:'relative',height:50}}>
                <a style={{width:'100%',color:'#999'}}>反馈与建议</a>
              </div>
              <div style={{position:'relative',height:50}}>
                <a style={{width:'100%',color:'#999'}}>帮助中心</a>
              </div>
              <div style={{position:'relative',height:50}}>
                <a style={{width:'100%',color:'#999'}}>权限系统</a>
              </div>
              <div style={{position:'relative',height:50}}>
                <a style={{width:'100%',color:'#999'}}>联系我们</a>
              </div>
            </div>
            <div style={{paddingLeft:40,paddingRight:40,height:50,}}>
              <Divider/>
              <p style={{color:'#999'}}>©2019 智慧森林</p>
            </div>
          </Menu>
          <div className="container">
            <Route path="/" exact component={Home} />
            <Route path="/home/" component={Home} />
            <Route path="/map/" component={MyMap} />
            <Route path="/list/" component={MyList} />
            <Route path="/monitor/" component={Monitor} />
            <Route path="/user/" component={User} />
            <Route path="/userinfo/" component={Userinfo} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
