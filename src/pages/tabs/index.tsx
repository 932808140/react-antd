import { HeartOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Tabs } from 'antd';
import React, { useState } from 'react';

const { TabPane } = Tabs;

export default function IndexPage() {
  const [tabPane, setTabPane] = useState<any>([
    { key: 1, tab: '标签1', content: '内容1' },
    { key: 2, tab: '标签2', content: '内容2' },
    { key: 3, tab: '标签3', content: '内容3' },
  ]);
  const [count, setCount] = useState<any>(4);
  //切换面板的回调
  const onChange = (activeKey: any) => {
    //console.log(activeKey);
  };
  //新增和删除页签的回调
  const onEdit = (targetKey: any, action: any) => {
    if (action === 'add') {
      let tabPaneTemp = tabPane;
      tabPaneTemp.push({
        key: count,
        tab: '标签' + count,
        content: '内容' + count,
      });
      let countTemp = count;
      countTemp++;
      setCount(countTemp);
    }
    if (action === 'remove') {
      let tabPaneTemp: any[] = [];
      tabPane.map((itam: any) => {
        if (itam.key != targetKey) {
          tabPaneTemp.push(itam);
        }
      });
      setTabPane(tabPaneTemp);
    }
  };
  //tab 被点击的回调
  const onTabClick = (key: string, event: any) => {
    //console.log(key, event);
  };
  return (
    <>
      <Tabs
        defaultActiveKey="1"
        addIcon={<PlusOutlined />}
        animated={true}
        centered={true}
        hideAdd={false}
        renderTabBar={(props: any, DefaultTabBar: any) => {
          //console.log(props, DefaultTabBar);
          //props.id = 123;
          return <DefaultTabBar {...props} />;
        }}
        size={'large'}
        tabBarExtraContent={{
          left: (
            <>
              <HeartOutlined />
            </>
          ),
          right: (
            <>
              <HeartOutlined />
            </>
          ),
        }}
        tabBarGutter={20}
        tabBarStyle={{ color: 'lightpink' }}
        type={'editable-card'}
        onChange={onChange}
        onEdit={onEdit}
        onTabClick={onTabClick}
      >
        {tabPane.map((item: any) => {
          return (
            <TabPane tab={item.tab} key={item.key}>
              {item.content}
            </TabPane>
          );
        })}
      </Tabs>
    </>
  );
}
