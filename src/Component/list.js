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
  Col,PageHeader} from 'antd';
import '../App.css';

const { MonthPicker, RangePicker } = DatePicker;

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
    title: '项目负责人',
    dataIndex: 'resp',
    key: 'resp',
  },
  {
    title: '实施单位',
    dataIndex: 'comp',
    key: 'comp',
  },
  {
    title: '状态',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          if (tag !== '进行中')
          {
            return (
              <Tag color={tag==='已完成'?'green':'volcano'} key={tag} type='line'>
                {tag}
              </Tag>
            );
          }
          else {
            return (
              <Progress percent={50} status="active" />
            );
          }
          
        })}
      </span>
    ),
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="javascript:;">编辑</a>
        <Divider type="vertical" />
        <a href="javascript:;" style={{color:'#f5222d'}}>删除</a>
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    name: '一号种植计划',
    start: '2019/01/01',
    resp: '甲老板',
    comp: '甲公司',
    tags: ['进行中'],
  },
  {
    key: '2',
    name: '二号种植计划',
    start: '2019/03/02',
    resp: '乙老板',
    comp: '乙公司',
    tags: ['已完成'],
  },{
    key: '3',
    name: '三号种植计划',
    start: '2019/04/05',
    resp: '丙老板',
    comp: '丙公司',
    tags: ['已停止'],
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

        <Divider>基本信息</Divider>
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
          <Cascader options={options} onChange={onChange} placeholder="请选择实施地点"/>
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
        <Form.Item label="资金来源">
          <Select defaultValue="县" style={{ width: 120 }}>
            <Option value="县">县</Option>
            <Option value="市">市</Option>
            <Option value="省">省</Option>
            <Option value="中央">中央</Option>
          </Select>
        </Form.Item>
        <Form.Item label="项目负责人" hasFeedback>
            <Input placeholder="请输入项目负责人" />
        </Form.Item>
        <Form.Item label="实施单位" hasFeedback>
            <Input placeholder="请输入实施单位" />
        </Form.Item>

        <Divider>相关文档</Divider>

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
  state = { visible: false };

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

	render(){
		return (

			<div className="map" title="项目管理">
        <PageHeader title="项目列表" subTitle="项目编辑管理" />
				<Card title="高级搜索" className="filter">
					<WrappedTimeRelatedForm />
				</Card>
				<Card title="项目列表" className="list">
				  <Table dataSource={data} columns={columns} />
          <Divider />
          <Button type="primary" onClick={this.showModal}>添加项目</Button>
          <Modal
            title="添加项目"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <ModalForm />
          </Modal>
				 </Card>
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