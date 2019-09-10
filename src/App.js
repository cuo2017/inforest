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
import About from './Component/aboutus';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Menu, Icon, Divider,Button } from 'antd';

import Logo from './Img/logo.jpg';
import Heading from './Img/heading.jpg';
import Appicon from './Img/app-icon.png';


// For development
import Detail from './Component/project_detail';

import Product from './Component/product_display';



const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;





class App extends Component{
    
  render(){
    return (
      <div height={window.outterHeight} className="App">
        
        <Router>
          <Menu
            className="nav"
            defaultSelectedKeys={['logo']}
            mode="horizontal"
            >
                <Menu.Item className="logo" style={{float:'left'}} onClick={() => window.location.reload()}>
                    <Link to="/">
                    <img src={Logo} width="20" height="20" style={{marginRight:5}}/> 
                    智慧森林
                    </Link>
                </Menu.Item>

                <Menu.Item className="logo" key="login"><Link to="/userinfo/"><Icon type="login" />登录</Link></Menu.Item>
                <Menu.Item disabled key="contact" className="logo">
                  <Link to="/">
                    <Icon type="message" />
                    联系我们
                  </Link>
                </Menu.Item>
                <Menu.Item key="team" className="logo">
                  <Link to="/aboutus">
                    <Icon type="team" />
                    关于我们
                  </Link>
                </Menu.Item>
                
                <Menu.Item key="product" className="logo">
                  <Link to="/home">
                    <Icon type="desktop" />
                    管理系统
                  </Link>
                </Menu.Item>

                <Menu.Item key="logo" className="logo" onClick={() => window.location.reload()}>
                    <Link to="/">
                    <Icon type="home" />
                    主页
                    </Link>
                </Menu.Item>


                
          </Menu>
          <div>
            <Route path="/" exact component={Product} />
            <Route path="/home" component={SystemPage} />
            <Route path="/userinfo/" component={Userinfo} />
            <Route path="/aboutus/" component={About} />
          </div>
        </Router>
      </div>
    );
  }
}


class SystemPage extends Component {
  render(){
    return(
      <div>
        <Router>
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
              <Menu.Item key="2"><Link to="/map/"><span><Icon type="global" /><span>森林地图</span></span></Link></Menu.Item>
              <Menu.Item key="3"><Link to="/list/"><span><Icon type="deployment-unit" /><span>项目管理</span></span></Link></Menu.Item>
              <Menu.Item disabled key="4"><Link to="/monitor/"><span><Icon type="dot-chart" /><span>数据分析</span></span></Link></Menu.Item>
              <Menu.Item key="5"><Link to="/user/"><span><Icon type="usergroup-add" /><span>用户管理</span></span></Link></Menu.Item>
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
              <p style={{color:'#999'}}>© 2019 Yuhao Cai</p>
            </div>
          </Menu>
          <div className="container">
            <Route path="/home/" component={Home} exact/>
            <Route path="/map/" component={MyMap} />
            <Route path="/list/" component={MyList} />
            <Route path="/monitor/" component={Monitor} />
            <Route path="/user/" component={User} />
          </div>
        </Router>
      </div>
    );
  }
}



export default App;
