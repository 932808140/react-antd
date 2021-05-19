import { CloseSquareTwoTone, QqOutlined } from '@ant-design/icons';
import { Tag } from 'antd';
import React, { useState } from 'react';

export default function IndexPage() {
  const [checked, setChecked] = useState<any>(false);
  const { CheckableTag } = Tag;
  //关闭时的回调
  const onClose = (e: any) => {
    console.log(e);
  };
  //点击标签时触发的回调
  const onChange = (checked: any) => {
    console.log(checked);
    setChecked(checked);
  };
  return (
    <>
      <Tag>Tag 1</Tag>
      <Tag>
        <a href="https://www.baidu.com">百度</a>
      </Tag>
      <Tag
        closable
        closeIcon={
          <>
            <CloseSquareTwoTone />
          </>
        }
        onClose={onClose}
      >
        可关闭
      </Tag>
      <Tag color={'pink'}>粉色</Tag>
      <Tag
        icon={
          <>
            <QqOutlined />
          </>
        }
      >
        图标
      </Tag>
      <CheckableTag checked={checked} onChange={onChange}>
        可选择
      </CheckableTag>
      <br />
      <br />
      <Tag color="success">success</Tag>
      <Tag color="processing">processing</Tag>
      <Tag color="error">error</Tag>
      <Tag color="warning">warning</Tag>
      <Tag color="default">default</Tag>
    </>
  );
}
