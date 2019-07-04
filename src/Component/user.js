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
	  Col,PageHeader } from 'antd';
import '../App.css';

import {options, onChange} from './list';

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
    number: 4,
    address: 'London No. 1 Lake Park',
    phoneNumber: '130-4567-8901',
    company:'丙'
  },
  {
    key: '3',
    name: 'Joe Black',
    number: 2,
    address: 'Sidney No. 1 Lake Park',
    phoneNumber: '130-4567-8901',
    company:'甲'
  },
  {
    key: '4',
    name: 'Jim Red',
    number: 3,
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
  };

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
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

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: '用户名',
        dataIndex: 'name',
        key: 'name',
        filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
      },
      {
        title: '项目数量',
        dataIndex: 'number',
        key: 'number',
        sorter: (a, b) => a.number - b.number,
        sortOrder: sortedInfo.columnKey === 'number' && sortedInfo.order,
      },
      {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
        filters: [{ text: 'London', value: 'London' }, { text: 'New York', value: 'New York' }],
        filteredValue: filteredInfo.address || null,
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
      },
      {
        title: '手机号',
        dataIndex: 'phoneNumber',
        key: 'phoneNumber',
        
      },
      {
        title: '所属公司',
        dataIndex: 'company',
        key: 'company',
        
      },
    ];
    return (
      <div>
        <div className="table-operations">
          <Button onClick={this.setNumberSort}>按项目数量排序</Button>
          <Button onClick={this.clearFilters}>清除过滤</Button>
          <Button onClick={this.clearAll}>清除过滤与排序</Button>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} onChange={this.handleChange} />
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
			<div className="map" title="用户列表">
        <PageHeader title="用户列表" subTitle="实时数据的统计与整理" />
				<List />
				<Divider />
				<Button type="primary" onClick={this.showModal} style={{marginRight:5}}>添加用户</Button>
				<Button type="primary" style={{marginRight:5,borderColor:'#f5222d',backgroundColor:'#f5222d'}}>删除用户</Button>
				<Modal
		            title="添加用户"
		            visible={this.state.visible}
		            onOk={this.handleOk}
		            onCancel={this.handleCancel}
		          >
		            <ModalForm />
		          </Modal>
			</div>
		);
	};
} 

export default User;