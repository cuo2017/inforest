import React,{Component} from 'react';
import { Input, Radio,
  Modal, Card, Form, DatePicker, TimePicker, Button,List, 
  Avatar, Table, Tag, Divider, Cascader,
  Select, 
  InputNumber,
  Switch,
  Slider,
  Upload,
  Icon,
  Rate,
  Checkbox,
  Progress,
  Row,
  Col,PageHeader, Dropdown,Menu,Popconfirm,message} from 'antd';
import '../App.css';

import {Footer} from './home'; 

import $, {jQuery} from 'jquery';

// ====== For Redux ====== //

import { createStore } from 'redux';
import frontApp from '../data/reducers';
import {updateHome} from '../data/actions';

let store = createStore(frontApp);

// ============= //

const { MonthPicker, RangePicker } = DatePicker;
const {Search} = Input;

class TimeRelatedForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }

      // Should format date value before submit.
      const rangeTimeValue = fieldsValue['range-time-picker'];
      const values = {
        ...fieldsValue,
        'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
        'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
        'range-time-picker': [
          rangeTimeValue[0].format('YYYY-MM-DD'),
          rangeTimeValue[1].format('YYYY-MM-DD'),
        ],
      };
      console.log('Received values of form: ', values);
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const config1 = {
      rules: [{ type: 'object', required: false, message: '请选择日期' }],
    };
    const config2 = {
      rules: [{ type: 'object', required: false, message: '请选择月份' }],
    };
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit} className="listform" >
        
        <Form.Item
          label="选择日期"
        >
          {getFieldDecorator('date-time-picker', config1)(
            <DatePicker showTime format="YYYY-MM-DD" placeholder="请选择日期"/>
          )}
        </Form.Item>
        <Form.Item
          label="选择月份"
        >
          {getFieldDecorator('month-picker', config2)(
            <MonthPicker placeholder="请选择月份"/>
          )}
        </Form.Item>
        <Form.Item
          label="实施地点"
        >
          <Cascader options={options} onChange={onChange} placeholder="请选择实施地点"/>
        </Form.Item>
        <Divider />
        <Button type="primary" htmlType="submit">查询</Button>
        
      </Form>
    );
  }
}

const WrappedTimeRelatedForm = Form.create({ name: 'time_related_controls' })(TimeRelatedForm);




const columns = [
  {
    title: '项目名称',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
  },
  {
    title: '开始日期',
    dataIndex: 'start',
    key: 'start',
  },
  {
    title: '项目种类',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '项目规模',
    dataIndex: 'size',
    key: 'size',
  },
  {
    title: '实施单位',
    dataIndex: 'company',
    key: 'company',
  },
  {
    title: '状态',
    key: 'progress',
    dataIndex: 'progress',
    render: progress => {
        if (progress === '1')
          {
            return (
              <Tag color={'green'} key={progress} type='line'>
                已完成
              </Tag>
            ); 
          }
        else if (progress === '0')
          {
            return (
              <Tag color={'volcano'} key={progress} type='line'>
                已停止
              </Tag>
            );
          }
          else {
            return (
              <Progress percent={100*progress} status="active" />
            );
          }
      },
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <a disabled href="javascript:;">编辑</a>
        <Divider type="vertical" />
        
        <Popconfirm okText="确认" cancelText="取消" okType="danger" title="确认删除这个项目吗?" onConfirm={() => message.loading('删除中..', 1).then(() => message.success('删除成功', 1))}>
          <a href="javascript:;" style={{color:'#f5222d'}}>删除</a>
        </Popconfirm>
      </span>
    ),
  },
];



// Modal Form
const { Option } = Select;

class Demo extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit} style={{textAlign:'left'}}>

        <Form.Item label="项目名称" hasFeedback>
            <Input placeholder="请输入项目名称" />
        </Form.Item>
        <Form.Item label="项目类型">
          <Select defaultValue="造林" style={{ width: 120 }}>
            <Option value="造林">造林</Option>
            <Option value="抚育管护">抚育管护</Option>
          </Select>
        </Form.Item>
        
        <Form.Item label="项目规模">
            {getFieldDecorator('input-number2', { initialValue: 0 })(<InputNumber placeholder="请输入项目规模"  min={1} max={1000} />)}
            <span className="ant-form-text">亩</span>
        </Form.Item>
        <Form.Item
          label="实施地点"
        >
          <Input placeholder="请输入实施地点" />
        </Form.Item>
        <Form.Item
          label="开始日期"
        >
            <DatePicker showTime format="YYYY-MM-DD" placeholder="请选择开始日期"/>
        </Form.Item>
        <Form.Item label="财政资金">
          {getFieldDecorator('input-number', { initialValue: 0 })(<InputNumber min={0} max={1000000} />)}
          <span className="ant-form-text">元</span>
        </Form.Item>
        <Form.Item label="项目负责人" hasFeedback>
            <Input placeholder="请输入项目负责人" />
        </Form.Item>
        <Form.Item label="实施单位" hasFeedback>
            <Input placeholder="请输入实施单位" />
        </Form.Item>


        <Form.Item label="两证一签">
          <div className="dropbox">
              <Upload.Dragger name="files" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">点击或拖拽至此上传文件</p>
                <p className="ant-upload-hint">支持一个或多个文件上传</p>
              </Upload.Dragger>
          </div>
        </Form.Item>

      

      </Form>
    );
  }
}

const ModalForm = Form.create({ name: 'validate_other' })(Demo);


class MyList extends Component{
  state = { 
    visible: false,
    data: [],
   };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  componentDidMount = () => {
    fetch('http://localhost:7000/getProject')
      .then(response => response.json())
      .then(data => this.setState({
        data: data,
        number: data.length,
      }));



    $.ajax({
        url: 'http://localhost:7000/findProject',
        type: 'POST',
        dataType: 'json',
        data:{
            type:'造林'
        },
        success: data => this.setState({
          num1: data.length,
      }),
    });
    $.ajax({
        url: 'http://localhost:7000/findProject',
        type: 'POST',
        dataType: 'json',
        data:{
            type:'抚育管护'
        },
        success: data => this.setState({
          num2: data.length,
      }),
    });

    $.ajax({
        url: 'http://localhost:7000/findProject',
        type: 'POST',
        dataType: 'json',
        data:{
            progress:'1'
        },
        success: data => this.setState({
          numdone: data.length,
      }),
    });

    $.ajax({
        url: 'http://localhost:7000/findProject',
        type: 'POST',
        dataType: 'json',
        data:{
            $nor: [ { progress: '1' }, { progress: '0' } ]  
        },
        success: data => this.setState({
          numprogress: data.length,
      }),
    });

      
  };

  handleDone = (e) => {
    if(e){
      $.ajax({
          url: 'http://localhost:7000/findProject',
          type: 'POST',
          dataType: 'json',
          data:{
              progress:'1'
          },
          success: data => this.setState({
            data: data,
        }),
      });
    }
    
  };
  handleProgress = (e) => {
    if(e){
      $.ajax({
          url: 'http://localhost:7000/findProject',
          type: 'POST',
          dataType: 'json',
          data:{
              $nor: [ { progress: '1' }, { progress: '0' } ]  
          },
          success: data => this.setState({
            data: data,
        }),
      });
    }
    
  };

  handleAll = (e) => {
    if(e){
      $.ajax({
          url: 'http://localhost:7000/findProject',
          type: 'POST',
          dataType: 'json',
          data:{
          },
          success: data => this.setState({
            data: data,
        }),
      });
    }
    
  };
  handle1 = (e) => {
    if(e){
      $.ajax({
          url: 'http://localhost:7000/findProject',
          type: 'POST',
          dataType: 'json',
          data:{
            type:'造林'
          },
          success: data => this.setState({
            data: data,
        }),
      });
    }
    
  };
  handle2 = (e) => {
    if(e){
      $.ajax({
          url: 'http://localhost:7000/findProject',
          type: 'POST',
          dataType: 'json',
          data:{
            type:'抚育管护'
          },
          success: data => this.setState({
            data: data,
        }),
      });
    }
    
  };

	render(){
		return (

			<div className="map" title="项目管理">
        <PageHeader title="项目列表" subTitle="项目编辑管理" />
				<div title="项目列表" className="list">
          <div style={{
            textAlign:'left'
          }}>
            <Button type="link" onClick={this.handleAll}>全部项目({this.state.number})</Button>
            <Button type="link" onClick={this.handleProgress}>进行中({this.state.numprogress})</Button>
            <Button type="link" onClick={this.handleDone}>已完结({this.state.numdone})</Button>
            <Dropdown overlay={<Menu>
              <Menu.Item>
                <Button type="link" onClick={this.handle1}>
                  造林({this.state.num1})
                </Button>
              </Menu.Item>
              <Menu.Item>
                <Button type="link" onClick={this.handle2}>
                  抚育管护({this.state.num2})
                </Button>
              </Menu.Item>
            </Menu>}>
              <Button type="link">
                按项目种类排序 <Icon type="down" />
              </Button>
            </Dropdown>
            <Dropdown disabled overlay={<Menu>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="#">
                  2016
                </a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="#">
                  2017
                </a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="#">
                  2018
                </a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="#">
                  2019
                </a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="#">
                  2020
                </a>
              </Menu.Item>
            </Menu>}>
              <Button type="link">
                按年份排序 <Icon type="down" />
              </Button>
            </Dropdown>
            <Button disabled type="primary" onClick={this.showModal} style={{marginLeft:20,float:'right',}}><Icon type="upload" />添加项目</Button>
            <Search
              disabled
              placeholder="输入项目名称"
              onSearch={value => console.log(value)}
              style={{float:'right', width: 200 }}
            />
            <Modal
              title="添加项目"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              okText="添加"
              cancelText="取消"
            >
              <ModalForm />
            </Modal>
          </div>
				  <Table bordered style={{marginTop:20}} dataSource={this.state.data} columns={columns} />
          <Divider />
          <Footer />

          
				 </div>
			</div>
		);
	};
} 





export const options = [
  {
    value: '成都市',
    label: '成都市',
    children: [
      {
        value: 'A区',
        label: 'A区',
        children: [
          {
            value: 'A镇',
            label: 'A镇',
            children: [
              {
                value: 'A村',
                label: 'A村', 
              },
              {
                value: 'B村',
                label: 'B村', 
              }
            ]
          },
          {
            value: 'B镇',
            label: 'B镇',
          },
          {
            value: 'C镇',
            label: 'C镇',
          },
        ],
      },
      {
        value: 'B区',
        label: 'B区',
        children: [
          {
            value: 'D镇',
            label: 'D镇',
          },
          {
            value: 'E镇',
            label: 'E镇',
          },
          {
            value: 'F镇',
            label: 'F镇',
          },
        ],
      },
      {
        value: 'C区',
        label: 'C区',
        children: [
          {
            value: 'G镇',
            label: 'G镇',
          },
          {
            value: 'H镇',
            label: 'H镇',
          },
          {
            value: 'I镇',
            label: 'I镇',
          },
        ],
      },
    ],
  },
];

export function onChange(value) {
  console.log(value);
}

export default MyList;