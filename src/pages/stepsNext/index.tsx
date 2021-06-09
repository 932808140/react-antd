import { useState } from 'react';
//组件
import { Steps, Button, message } from 'antd';
//样式
import './index.css';

export default function IndexPage() {
  const { Step } = Steps;
  const [current, setCurrent] = useState<number>(0);
  const steps = [
    {
      title: '第一步',
      content: '第一步的内容',
    },
    {
      title: '第二步',
      content: '第二步的内容',
    },
    {
      title: '第三步',
      content: '第三步的内容',
    },
    {
      title: '第四步',
      content: '第四步的内容',
    },
  ];
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const onChange = (current: number) => {
    setCurrent(current);
  };
  return (
    <>
      <Steps current={current} onChange={onChange}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            下一步
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('已完成!')}>
            确定
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            上一步
          </Button>
        )}
      </div>
    </>
  );
}
