import React, { useState } from 'react';
//组件
import { Checkbox, List } from 'antd';

export default function IndexPage() {
  const [checkList, setCheckList] = useState<any[]>();
  const data = [
    {
      title: 'Amazon Answers',
      content: 'Can you answer this question about C...',
      time: '12-23',
    },
    {
      title: 'Ant Design Title 2',
      content: 'Can you answer this question about C...',
      time: '12-23',
    },
    {
      title: 'Ant Design Title 3',
      content: 'Can you answer this question about C...',
      time: '12-23',
    },
    {
      title: 'Ant Design Title 4',
      content: 'Can you answer this question about C...',
      time: '12-23',
    },
  ];
  //选中框调用
  const onChange = (item: any) => {
    console.log(item);
  };
  return (
    <>
      <Checkbox.Group onChange={onChange}>
        <List
          itemLayout="horizontal"
          dataSource={data}
          bordered={true}
          split={true}
          style={{ width: '384px' }}
          renderItem={(item) => (
            <Checkbox value={item} style={{ marginLeft: '5px' }}>
              <List.Item
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#c8e2fb',
                  height: '76px',
                  flexWrap: 'wrap',
                  alignContent: 'space-between',
                  borderBottom: '1px solid #9c9c9c',
                }}
              >
                <h4 style={{ marginLeft: '-165px' }}>{item.title}</h4>

                <div>
                  <span style={{ marginRight: '15px' }}>{item.content}</span>

                  <span style={{ color: '#aaa' }}>{item.time}</span>
                </div>
              </List.Item>
            </Checkbox>
          )}
        />
      </Checkbox.Group>
    </>
  );
}
