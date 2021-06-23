import { FC, useContext } from 'react';
//组件
import { Button } from 'antd';

export interface Sub1Props {
  AppContext: any;
}
const Sub1: FC<Sub1Props> = (props) => {
  const { AppContext } = props;
  const { sub1Message } = useContext(AppContext);
  const handleClick = () => {};
  return (
    <>
      <Button onClick={handleClick}>{sub1Message}</Button>
    </>
  );
};
export default Sub1;
