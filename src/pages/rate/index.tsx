import React from 'react';
import { Rate } from 'antd';
import { FireOutlined } from '@ant-design/icons';

export default function IndexPage() {
  //选择时的回调
  const onChange = (value: number) => {
    console.log(value);
  };
  return (
    <>
      <Rate
        allowHalf={true}
        character={
          <>
            <FireOutlined />
          </>
        }
        count={10}
        tooltips={['第1个火焰！', '第2个火焰！', '第3个火焰！', '第4个火焰！']}
        onChange={onChange}
      />
    </>
  );
}
