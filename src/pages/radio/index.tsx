import { Radio, Button } from 'antd';
import React, { useRef } from 'react';
export default function IndexPage() {
  const radioRef = useRef<any>();
  //选项变化时的回调函数
  const onChange = (e: any) => {
    console.log(e);
  };
  //获取方法
  const getMethods = () => {
    console.log(radioRef.current);
  };
  return (
    <>
      <Radio.Group
        name={'yq'}
        buttonStyle={'solid'}
        size={'large'}
        defaultValue={3}
        onChange={onChange}
      >
        <Radio.Button value={1} ref={radioRef}>
          A
        </Radio.Button>
        <Radio.Button value={2}>B</Radio.Button>
        <Radio.Button value={3}>C</Radio.Button>
        <Radio.Button value={4}>D</Radio.Button>
      </Radio.Group>
      <Button onClick={getMethods}>获取方法</Button>
    </>
  );
}
