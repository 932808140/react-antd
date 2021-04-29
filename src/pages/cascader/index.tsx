import {
  ArrowRightOutlined,
  DollarCircleTwoTone,
  EnvironmentTwoTone,
} from '@ant-design/icons';
import { Cascader } from 'antd';
import React from 'react';
export default function IndexPage() {
  const options = [
    {
      value: '福建省',
      label: '福建省',
      children: [
        {
          value: '福州市',
          label: '福州市',
          children: [
            {
              value: '仓山区',
              label: '仓山区',
            },
            {
              value: '台江区',
              label: '台江区',
            },
          ],
        },
        { value: '泉州市', label: '泉州市' },
        { value: '厦门市', label: '厦门市' },
      ],
    },
  ];
  //选择后展示的渲染函数
  const displayRender = (label: any, selectedOptions: any) => {
    //console.log(label, selectedOptions);
    return <>{label.join('/')}</>;
  };
  //自定义下拉框内容
  const dropdownRender = (menus: any) => {
    return (
      <>
        {menus}
        <a style={{ marginLeft: '11px', color: '#0084ff' }}>选择更多</a>
      </>
    );
  };
  //用于动态加载选项
  const loadData = (selectedOptions: any) => {
    //console.log(selectedOptions);
  };
  //选择完成后的回调
  const onChange = (value: any, selectedOptions: any) => {
    //console.log(value, selectedOptions);
  };
  //显示/隐藏浮层的回调
  const onPopupVisibleChange = (value: any) => {
    console.log(value);
  };
  return (
    <>
      <Cascader
        options={options}
        placeholder="请选择"
        changeOnSelect={true}
        displayRender={displayRender}
        dropdownRender={dropdownRender}
        expandIcon={<ArrowRightOutlined />}
        expandTrigger={'hover'}
        loadData={loadData}
        popupClassName={'yq'}
        //popupVisible={false}
        showSearch={{
          filter: (inputValue: any, path: any, names: any) => {
            console.log(inputValue, path, names);
            return true;
          },
          // render: (inputValue: any, path: any) => {
          //   return { path };
          // },
        }}
        // suffixIcon={
        //   <>
        //     <DollarCircleTwoTone />
        //   </>
        // }
        onChange={onChange}
        onPopupVisibleChange={onPopupVisibleChange}
        //changeOnSelect={false}
      ></Cascader>
    </>
  );
}
