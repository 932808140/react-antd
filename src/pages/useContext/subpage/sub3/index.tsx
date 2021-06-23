import { FC, useContext } from 'react';
//组件
import { Button } from 'antd';

export interface sub3Props {
  countUp: () => void;
}
const Sub3: FC<sub3Props> = (props) => {
  const { countUp } = props;
  return (
    <>
      <Button onClick={countUp}>+1</Button>
    </>
  );
};
export default Sub3;
