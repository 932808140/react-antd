import { PlusOutlined } from '@ant-design/icons';
import { Button, Tabs } from 'antd';
import React from 'react';

const { TabPane } = Tabs;

export default function IndexPage() {
  return (
    <>
      <Tabs
        defaultActiveKey="1"
        addIcon={<PlusOutlined />}
        animated={true}
        centered={true}
      >
        <TabPane tab="标签1" key="1">
          内容1
        </TabPane>
        <TabPane tab="标签2" key="2">
          内容2
        </TabPane>
        <TabPane tab="标签3" key="3">
          内容3
        </TabPane>
      </Tabs>
    </>
  );
}
