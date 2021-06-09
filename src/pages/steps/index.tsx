import React from 'react';
//组件
import { Steps } from 'antd';
import { AliwangwangOutlined } from '@ant-design/icons';

export default function IndexPage() {
  const { Step } = Steps;
  //点击切换步骤时触发
  const onChange = (current: any) => {
    console.log(current);
  };
  return (
    <>
      <Steps
        current={1}
        direction={'horizontal'}
        initial={0}
        labelPlacement={'vertical'}
        percent={50}
        // progressDot={(iconDot: any, e: any) => {
        //   console.log(iconDot, e);
        //   return (
        //     <>
        //       {iconDot}
        //       {e.title}
        //     </>
        //   );
        // }}
        responsive={true}
        size={'small'}
        status={'error'}
        type={'default'}
        onChange={onChange}
      >
        <Step
          title="第一步"
          description={'这是第一步的一段描述'}
          disabled={true}
          subTitle={'第一步的子标题'}
        />
        <Step title="第二步" />
        <Step
          title="第三步"
          icon={
            <>
              <AliwangwangOutlined />
            </>
          }
        />
        <Step title="第四步" />
      </Steps>
    </>
  );
}
