import { InputNumber, Button } from 'antd';
import React, { useRef } from 'react';
export default function IndexPage() {
  const inputNumberRef = useRef<any>();
  //指定输入框展示值的格式
  const formatter = (value: any) => {
    return '￥' + value;
  };
  //点击上下箭头的回调
  const onStep = (value: any, info: { offset: any; type: 'up' | 'down' }) => {
    console.log(value, info.offset);
  };
  //方法
  const onClick = () => {
    console.log(inputNumberRef);
  };
  return (
    <>
      <InputNumber
        min={1}
        max={100}
        defaultValue={3}
        //decimalSeparator={'2'}
        formatter={formatter}
        precision={2}
        readOnly={false}
        size={'large'}
        step={0.01}
        onStep={onStep}
        ref={inputNumberRef}
      />
      <Button onClick={onClick}>获取方法</Button>
    </>
  );
}
