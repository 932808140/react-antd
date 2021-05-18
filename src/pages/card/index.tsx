import { Avatar, Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { useState } from 'react';

export default function IndexPage() {
  const [key, setKey] = useState<any>(1);
  const contentList = {
    1: <p>tab1</p>,
    2: <p>tab2</p>,
    3: <p>tab3</p>,
  };
  const onTabChange = (key: any) => {
    console.log(key);
    setKey(key);
  };
  return (
    <>
      <Card
        title="卡片标题"
        extra={<a>操作区域</a>}
        style={{ width: 300 }}
        actions={[<>第一组</>, <>第二组</>, <>第三组</>, <>第四组</>]}
        bordered={true}
        //cover={<>卡片封面</>}
        hoverable={true}
        //loading={true}
        tabList={[
          { key: '1', tab: <>tab1</> },
          { key: '2', tab: <>tab2</> },
          { key: '3', tab: <>tab3</> },
        ]}
        onTabChange={onTabChange}
        //activeTabKey={'2'}
        defaultActiveTabKey={'1'}
        tabBarExtraContent={<>额外的元素</>}
        type={'inner'}
      >
        {contentList[key]}
      </Card>
      {/* <Card.Grid style={{ marginTop: '8px', marginLeft: '308px' }}>
        <p>Card.Grid的内容</p>
      </Card.Grid> */}
      <Card style={{ width: 300 }}>
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title="Cardx title"
          description="This is the description"
        />
      </Card>
      <Card
        style={{ width: 300 }}
        // cover={
        //   <img
        //     alt="example"
        //     src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        //   />
        // }
      >
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title="Card title"
          description="This is the description"
        />
      </Card>
    </>
  );
}
