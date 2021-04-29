import React, { useRef, useState } from 'react';
import { Input, Button } from 'antd';
import {
  ChromeOutlined,
  DashOutlined,
  EditOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  FontColorsOutlined,
} from '@ant-design/icons';
export default function IndexPage() {
  //启用与禁用
  const [disabled, setDisabled] = useState<any>(false);
  const inputRef = useRef<any>();
  //启用与禁用按钮
  const handleDisabled = () => {
    setDisabled(!disabled);
  };
  //输入框内容变化时的回调
  const handleChange = (value: any) => {
    console.log(value);
  };
  //按下回车的回调
  const handlePressEnter = (value: any) => {
    console.log(value);
  };
  //resize 回调
  const handleResize = (item: { width: any; height: any }) => {
    console.log(item.width, item.height);
  };
  //点击搜索图标、清除图标，或按下回车键时的回调
  const handleSearch = (value: any, event: any) => {
    console.log(value, event);
  };
  //取消焦点
  const handleBlur = () => {
    console.log(inputRef.current);
  };
  //获取前面焦点
  const handleBeforeFocus = () => {
    inputRef.current.focus({ cursor: 'start' });
  };
  //获取后面焦点
  const handleAfterFocus = () => {
    inputRef.current.focus({ cursor: 'end' });
  };
  //获取所有焦点
  const handleAllFocus = () => {
    inputRef.current.focus({ cursor: 'all' });
  };
  return (
    <>
      <Button
        type="primary"
        onClick={handleDisabled}
        style={{ marginBottom: '10px' }}
      >
        禁用/启用
      </Button>
      <Input
        placeholder="请输入..."
        addonAfter={
          <>
            <FontColorsOutlined />
          </>
        }
        addonBefore={
          <>
            <ChromeOutlined />
          </>
        }
        allowClear={true}
        bordered={true}
        defaultValue={'默认值'}
        disabled={disabled}
        id={'yq'}
        maxLength={6}
        prefix={
          <>
            <EditOutlined />
          </>
        }
        size={'large'}
        suffix={
          <>
            <DashOutlined />
          </>
        }
        //value={'value值'}
        onChange={(e: any) => {
          handleChange(e);
        }}
        onPressEnter={handlePressEnter}
      />
      {/* <Input type={'month'} /> */}
      <Input.TextArea
        allowClear={true}
        //autoSize={true}
        maxLength={6}
        showCount={true}
        onResize={handleResize}
      />
      <Input.Search
        enterButton={<>搜索</>}
        loading={false}
        onSearch={handleSearch}
      />
      <Input.Group compact={false} size={'default'}>
        <input />
        <input />
        {/* <Input />
        <Input /> */}
      </Input.Group>
      <Input.Password
        iconRender={(visible: any) =>
          visible ? (
            <EyeOutlined spin={true} />
          ) : (
            <EyeInvisibleOutlined spin={true} />
          )
        }
        visibilityToggle={true}
      />
      <Button type="primary" onClick={handleBlur}>
        取消焦点
      </Button>
      <Button type="primary" onClick={handleBeforeFocus}>
        获取前面焦点
      </Button>
      <Button type="primary" onClick={handleAfterFocus}>
        获取后面焦点
      </Button>
      <Button type="primary" onClick={handleAllFocus}>
        获取所有焦点
      </Button>
      <Input ref={inputRef} />
    </>
  );
}
