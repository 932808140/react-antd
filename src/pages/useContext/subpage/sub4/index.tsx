import { FC, useContext } from 'react';
export interface Sub1Props {
  count: number;
}
const Sub4: FC<Sub1Props> = (props) => {
  const { count } = props;
  return (
    <>
      <p>count:{count}</p>
    </>
  );
};
export default Sub4;
