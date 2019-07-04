import React,{Component} from 'react';
import { Descriptions, Badge, Card} from 'antd';
import pic from '../Img/sample.png';

class Detail extends Component{
  
  render(){
    const content = {
      name: '项目A',
      type: '造林',
      scale: '1000亩',
      location: '成都市XX区',
      money: '￥10,000.00',
      status:{
        badge: 'processing',
        text: '进行中',
      },
      company: 'AB种植公司',
      owner: '蔡雨昊',
      documentation: '',
      description: '宣威位于云贵高原的过度地带，深林覆盖率高，野生中药材资源丰富，素有“云药之乡”的美誉，境内1500－2500米海拔地带分布有一定数量的野生资源，较适宜滇重楼的生长。少数大户示范种植滇重楼长势较好，产品优质，为发展滇重楼促进中药材产业发展，需建立滇重楼标准化示范基地，带动全市10万亩中药材产业发展，着力将滇重楼打造成富民增收的新兴产业。',
      start: '2019/07/01',
      pic: pic,
    }
    return (
      <div className="App" style={{paddingTop:50}}>
        
        <Card title="项目详情" bordered={true} style={{
          margin:'0 auto',
          width: 1000,

        }}>
          <Descriptions bordered>
            <Descriptions.Item label="项目名称">{content.name}</Descriptions.Item>
            <Descriptions.Item label="项目类型">{content.type}</Descriptions.Item>
            <Descriptions.Item label="项目规模">{content.scale}</Descriptions.Item>
            <Descriptions.Item label="实施地点">{content.location}</Descriptions.Item>
            <Descriptions.Item label="项目资金">{content.money}</Descriptions.Item>
            <Descriptions.Item label="项目状态">
              <Badge status={content.status.badge} text={content.status.text} />
            </Descriptions.Item>
            <Descriptions.Item label="实施单位">{content.company}</Descriptions.Item>
            <Descriptions.Item label="项目负责人">{content.owner}</Descriptions.Item>
            <Descriptions.Item label="项目开始时间">{content.start}</Descriptions.Item>
            <Descriptions.Item label="项目描述" span={3}>{content.description}</Descriptions.Item>
            <Descriptions.Item label="相关文档" span={3}>{content.documentation}</Descriptions.Item>
            <Descriptions.Item label="项目示意图" span={3}>
              <img src={content.pic} style={{maxHeight:300}}/>
            </Descriptions.Item>
          </Descriptions>

        </Card>
      </div>
    );
  }
}

export default Detail;
