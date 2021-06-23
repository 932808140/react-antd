import React, { useReducer } from 'react';
//组件
import Sub1 from './subpage/sub1';
import Sub2 from './subpage/sub2';
import Sub3 from './subpage/sub3';
import Sub4 from './subpage/sub4';

export default function IndexPage() {
  const AppContext = React.createContext({});
  const myReducer = (state: any, action: any) => {
    switch (action.type) {
      case 'countUp':
        return {
          ...state,
          count: state.count + 1,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(myReducer, { count: 0 });
  const countUp = () => {
    dispatch({ type: 'countUp' });
  };
  return (
    <>
      <AppContext.Provider
        value={{
          sub1Message: 'sub1的信息',
          sub2Message: 'sub2的信息',
          count: 1,
        }}
      >
        <Sub1 AppContext={AppContext} />
        <Sub2 AppContext={AppContext} />
        <br />
        <Sub3 countUp={countUp} />
        <Sub4 count={state.count} />
      </AppContext.Provider>
    </>
  );
}
