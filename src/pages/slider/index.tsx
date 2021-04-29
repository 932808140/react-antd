import {
  FrownOutlined,
  PushpinTwoTone,
  SmileOutlined,
} from '@ant-design/icons';
import { Slider } from 'antd';
import React from 'react';
export default function IndexPage() {
  return (
    <>
      <Slider
        defaultValue={[20, 60]}
        dots={false}
        marks={{
          0: (
            <>
              <FrownOutlined />
            </>
          ),
          5: (
            <>
              <PushpinTwoTone />
            </>
          ),
          50: (
            <>
              <PushpinTwoTone />
            </>
          ),
          100: (
            <>
              <SmileOutlined />
            </>
          ),
        }}
        included={true}
        range={{ draggableTrack: true }}
        //reverse={true}
        tipFormatter={(value: any) => {
          return <>这里的值：{value}</>;
        }}
        tooltipVisible={true}
        //vertical={true}
      />
    </>
  );
}
