import React,{Component} from 'react';
import { Statistic,Avatar,message, Menu, Dropdown, Typography, Row, Col ,Steps,Divider,PageHeader, Form, Icon, Input, Button, Checkbox, Card, Descriptions, Carousel, Tag, } from 'antd';
import '../App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import {PageFooter} from './product_display';

import $, {jQuery} from 'jquery';

const { Step } = Steps;
const { Paragraph } = Typography;



export default class Userinfo extends Component{
	render(){
		return (
      <Router>
			<div className="page">
        <Route path="/userinfo/" exact component={LogIn} />
        <Route path="/userinfo/register" exact component={Register} />
        <Route path="/userinfo/user-page" exact component={PersonalPage} />
        <PageFooter />
			</div>
      </Router>
		);
	};
} 


class PersonalPage extends Component {
  render(){
    return(
      <div style={{paddingTop:50,minHeight:520,marginBottom:50}}>
        <UserContainer />
      </div>
    );
  }
}


const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);


class UserContainer extends Component {
  render(){
    return(
      <div className="user-page">
        <div style={{textAlign:'left'}}>
          <div style={{width:'100%',float:'left'}}>
            <h2>欢迎回来，用户</h2>
          </div>
          <Card style={{width:'100%',float:'left'}}>
            <Row type="flex" justify="left" align="bottom">
              <Col span={3}>
                <Avatar style={{float:'left'}} size="large" icon="user" src="https://avatars1.githubusercontent.com/u/8186664?s=460&v=4" />
                <h2 style={{float:'left',marginTop:10, marginLeft:10}}>用户</h2>
              </Col>
              <Col span={4}>
                <p>智慧森林用户</p>
              </Col>
              <Col span={14}/>
              <Col span={3}>
                <Link to="/userinfo/">
                 <Button type="danger" icon="logout">退出登录</Button>
                </Link>
              </Col>

            </Row> 
            <Divider />
            <PageHeader title="基本信息" />
            <div>
             <Row type="flex" justify="center" align="top">
              <Col span={4}>
                <Statistic title="地址" value={112893} />
              </Col>
              <Col span={4}>
                <Statistic title="手机号" value={112893} />
              </Col>
              <Col span={4}>
                <Statistic title="公司" value={112893} />
              </Col>
              <Col span={4}>
                <Statistic title="项目数量" value={112893} />
              </Col>
             </Row>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}


//===== Register ===== //


const steps = [
  {
    title: '用户名',
    content: 'First-content',
  },
  {
    title: '密码',
    content: 'Second-content',
  },
  {
    title: '手机号',
    content: 'Last-content',
  },
];


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <div style={{width:'100%',paddingTop:50,paddingLeft:"15%",paddingRight:"15%",textAlign:'left'}}>
        
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action" style={{textAlign:'center'}}>
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              下一步
            </Button>
          )}
          {current === steps.length - 1 && (
            <Link to="/userinfo/user-page">
            <Button type="primary" onClick={() => message.success('注册完成')}>
              完成注册
            </Button>
            </Link>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              上一步
            </Button>
          )}
        </div>
      </div>
    );
  }
}


//===== LogIn ===== //

class LogIn extends Component {
  render(){
    return(
      <div style={{paddingTop:50,minHeight:520,marginBottom:50}}>
        <PageHeader title="用户登录" style={{marginBottom:10}}/>
          <Card style={{margin:'0 auto',maxWidth:340,padding:20}}>
            <WrappedNormalLoginForm />
          </Card>
      </div>
    );
  }
}

class NormalLoginForm extends React.Component {
  state={
    data:{}
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values.username);
        $.ajax({
          url: 'http://localhost:7000/validateUser',
          type: 'POST',
          dataType: 'json',
          data:{
              username:values.username,
              password:values.password
          },
          success: data => this.setState({
            data:data,
          }),
          crossDomain: true,
        });
      }
    });

  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form" style={{maxWidth:300,margin:"0 auto",textAlign:'left'}}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="用户名"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="密码"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>记住我</Checkbox>)}
          <a className="login-form-forgot" style={{float:'right'}} href="">
            忘记密码
          </a>
          <Link to="/userinfo/user-page">
          <Button type="primary" htmlType="submit" className="login-form-button" style={{width:'100%'}}>
            登录
          </Button>
          </Link>
          或者 <Link to="/userinfo/register"><a href="">创建账号</a></Link>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
