import React,{Component} from 'react';
import { Card, Table, Button, Divider,Form,
	Select, 
	Modal,
	Input,
	Cascader,
	DatePicker,
	  InputNumber,
	  Switch,
	  Slider,
	  Upload,
	  Icon,
	  Rate,
	  Checkbox,
	  Row,
	  Col,PageHeader,message,Popconfirm } from 'antd';
import '../App.css';

import {options, onChange, } from './list';

import {Footer} from './home';

const data = [
  {
    key: '1',
    name: 'John Brown',
    number: 1,
    address: 'New York No. 1 Lake Park',
    phoneNumber: '130-4567-8901',
    company:'乙'
  },
  {
    key: '2',
    name: 'Jim Green',
    number: 2,
    address: 'London No. 1 Lake Park',
    phoneNumber: '130-4567-8901',
    company:'丙'
  },
  {
    key: '3',
    name: 'Joe Black',
    number: 3,
    address: 'Sidney No. 1 Lake Park',
    phoneNumber: '130-4567-8901',
    company:'甲'
  },
  {
    key: '4',
    name: 'Jim Red',
    number: 4,
    address: 'London No. 2 Lake Park',
    phoneNumber: '130-4567-8901',
    company:'甲'
  },
  {
    key: '5',
    name: 'Jim Red',
    number: 5,
    address: 'London No. 2 Lake Park',
    phoneNumber: '130-4567-8901',
    company:'甲'
  },
  {
    key: '6',
    name: 'Jim Red',
    number: 6,
    address: 'London No. 2 Lake Park',
    phoneNumber: '130-4567-8901',
    company:'甲'
  },
  {
    key: '7',
    name: 'Jim Red',
    number: 7,
    address: 'London No. 2 Lake Park',
    phoneNumber: '130-4567-8901',
    company:'甲'
  },
  {
    key: '8',
    name: 'Jim Red',
    number: 8,
    address: 'London No. 2 Lake Park',
    phoneNumber: '130-4567-8901',
    company:'甲'
  },
  {
    key: '9',
    name: 'Jim Red',
    number: 9,
    address: 'London No. 2 Lake Park',
    phoneNumber: '130-4567-8901',
    company:'甲'
  },
  {
    key: '10',
    name: 'Jim Red',
    number: 10,
    address: 'London No. 2 Lake Park',
    phoneNumber: '130-4567-8901',
    company:'甲'
  },
  {
    key: '11',
    name: 'Jim Red',
    number: 11,
    address: 'London No. 2 Lake Park',
    phoneNumber: '130-4567-8901',
    company:'甲'
  },
  {
    key: '12',
    name: 'Jim Red',
    number: 12,
    address: 'London No. 2 Lake Park',
    phoneNumber: '130-4567-8901',
    company:'甲'
  },
];
// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

class List extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
    user:[]
  };

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  setNumberSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'number',
      },
    });
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

  handleUpdate = () => {
    fetch('http://localhost:7000/handleUpdate')
      .then(response => response.json())
      .then(data => this.setState({
        user: data,
      }));
      message
        .loading('更新中..', 1)
        .then(() => message.success('更新用户信息成功', 1));
  }

  componentDidMount = () => {
    fetch('http://localhost:7000/getUser')
      .then(response => response.json())
      .then(data => this.setState({
        user: data,
      }));
  }
  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
      },
      {
        title: '项目数量',
        dataIndex:'projnum' ,
        key: 'projnum',
        defaultSortOrder: 'descend',
        sorter: (a,b) => a.projnum - b.projnum
      },
      {
        title: '地址',
        dataIndex: 'location',
        key: 'location',
      },
      {
        title: '手机号',
        dataIndex: 'phonenum',
        key: 'phonenum',
        
      },
      {
        title: '所属公司',
        dataIndex: 'company',
        key: 'company',
        
      },
      {
        title:'操作',
        dataIndex: 'action',
        render: (text, record) => (
          <span>
            <a disabled href="javascript:;">编辑</a>
            <Divider type="vertical" />
            <Popconfirm okText="确认" cancelText="取消" okType="danger" title="确认删除这个用户吗?" onConfirm={() => message.loading('删除中..', 1).then(() => message.success('删除成功', 1))}>
              <a href="javascript:;" style={{color:'#f5222d'}}>删除</a>
            </Popconfirm>
          </span>
        )
      }
    ];
    return (
      <div>
        <div className="table-operations">
          <Button disabled type="link" onClick={this.setNumberSort}>按项目数量排序</Button>
          <Button type="primary" onClick={this.handleUpdate} style={{float:'right',marginRight:5}}><Icon type="sync" />更新用户信息</Button>
          <Button disabled type="danger" onClick={this.showModal} style={{float:'right',marginRight:5}}><Icon type="user-add" />删除用户</Button>
          <Button disabled type="primary" onClick={this.showModal} style={{float:'right',marginRight:5}}><Icon type="user-add" />添加用户</Button>
          <Modal
            title="添加用户"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <ModalForm />
          </Modal>
        </div>
        <Table bordered rowSelection={rowSelection} columns={columns} dataSource={this.state.user} onChange={this.handleChange} />
      </div>
    );
  }
}




// ModalForm
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
      <Form {...formItemLayout} onSubmit={this.handleSubmit} style={{textAlign:'center'}}>

        <Form.Item label="用户名" hasFeedback>
          {getFieldDecorator('select', {
            rules: [{ required: false, message: '请输入正确的用户名' }],
          })(
            <Input placeholder="请输入用户名" />
          )}
        </Form.Item>
        <Form.Item label="项目数量">
          {getFieldDecorator('input-number', { initialValue: 0 })(<InputNumber min={0} max={100} />)}
          <span className="ant-form-text"> 个项目</span>
        </Form.Item>
        <Form.Item
          label="用户地址"
        >
          <Cascader options={options} onChange={onChange} placeholder="请选择用户地址"/>
        </Form.Item>
        <Form.Item label="手机号" hasFeedback>
          {getFieldDecorator('number', {
            rules: [{ required: false, message: '请输入正确的手机号' }],
          })(
            <Input placeholder="请输入手机号" />
          )}
        </Form.Item>
        <Form.Item label="所属公司" hasFeedback>
          {getFieldDecorator('number', {
            rules: [{ required: false, message: '请输入正确的所属公司' }],
          })(
            <Input placeholder="请输入所属公司" />
          )}
        </Form.Item>

        
        <Divider />
        <Button type="primary" htmlType="submit">
          添加用户
        </Button>
      </Form>
    );
  }
}

const ModalForm = Form.create({ name: 'validate_other' })(Demo);


class User extends Component{
	state = { visible: false };

	  
	render(){
		return (
			<div className="map" title="用户列表">
        <PageHeader title="用户列表" subTitle="实时数据的统计与整理" />
				<List />
				<Divider />
				<Footer />
			</div>
		);
	};
} 

export default User;