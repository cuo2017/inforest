import React,{Component} from 'react';
import { Steps,Divider,PageHeader, Form, Icon, Input, Button, Checkbox, Card} from 'antd';
import '../App.css';

const { Step } = Steps;


export default class Userinfo extends Component{
	render(){
		return (
			<div className="page">
				<div style={{marginTop:50}}>
					<PageHeader title="用户登录" style={{marginBottom:20}}/>
				    <Card style={{margin:'0 auto',maxWidth:340,padding:20}}>
				    	<WrappedNormalLoginForm />
				    </Card>
				</div>
			</div>
		);
	};
} 


class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
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
          <Button type="primary" htmlType="submit" className="login-form-button" style={{width:'100%'}}>
            登录
          </Button>
          或者 <a href="">注册账号</a>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
