import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

import MyMenu from './Component/menu';
import Map from './Component/map';
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
      <div className="App">
        
        <Router>
          <Menu
            className="nav"
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
            >
                <Menu.Item key="logo" className="logo">
                    <img src={Logo} width="20" height="20" style={{marginRight:5}}/> 主页
                </Menu.Item>
                <SubMenu className="username" title={<span className="submenu-title-wrapper"><Icon type="user" />管理员</span>}>
                    <Menu.Item key="setting:1"><Link to="/userinfo/">用户资料</Link></Menu.Item>
                    <Menu.Item key="setting:2">退出登陆</Menu.Item>
                </SubMenu>
          </Menu>
          <Menu
            className="menu"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <div>
              <img src={Heading} style={{width:200, marginBottom:10}}/>
            </div>
            <SubMenu key="sub1" title={<span><Icon type="home" /><span>系统首页</span></span>}>
                <Menu.Item key="1"><Link to="/home/">首页管理</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/map/">森林地图</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>项目管理</span></span>}>
              <Menu.Item key="5"><Link to="/list/">项目列表</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="monitor" /><span>智能监测</span></span>}>
                <Menu.Item key="7"><Link to="/monitor/">实时监控</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" title={<span><Icon type="usergroup-add" /><span>用户管理</span></span>}>
              <Menu.Item key="9"><Link to="/user/">用户列表</Link></Menu.Item>
            </SubMenu>
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
            <Route path="/home/" exact component={Home} />
            <Route path="/map/" component={Map} />
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