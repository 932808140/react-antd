import { FC, useContext } from 'react';
export interface Sub1Props {
  AppContext: any;
}
const Sub2: FC<Sub1Props> = (props) => {
  const { AppContext } = props;
  const { sub2Message } = useContext(AppContext);
  return (
    <>
      <p>{sub2Message}</p>
    </>
  );
};
export default Sub2;
