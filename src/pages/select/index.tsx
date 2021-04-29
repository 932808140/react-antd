import { CheckCircleTwoTone, TagTwoTone } from '@ant-design/icons';
import { Select } from 'antd';
import React, { ReactNode } from 'react';
export default function IndexPage() {
  //自定义下拉框内容
  const dropdownRender = (originNode: any) => {
    return (
      <>
        {originNode}
        <a style={{ marginLeft: '11px', color: '#0084ff' }}>选择更多</a>
      </>
    );
  };
  //搜索时对筛选结果项的排序函数
  const filterSort = (optionA: any, optionB: any) => {
    //console.log(optionA, optionB);
    return 1;
  };
  //选中 option，或 input 的 value 变化时
  const onChange = (value: any, options: any) => {
    console.log(value, options);
  };
  //取消选中时调用
  const onDeselect = (value: any, option: any) => {
    //console.log(value, option);
  };
  //展开下拉菜单的回调
  const onDropdownVisibleChange = (open: any) => {
    //console.log(open);
  };
  //被选中时调用
  const onSelect = (value: any, option: any) => {
    //console.log(value, option);
  };
  return (
    <>
      <Select
        allowClear
        style={{ width: '120px' }}
        mode={'tags'}
        autoClearSearchValue={false}
        defaultOpen={false}
        dropdownClassName={'yq'}
        dropdownRender={dropdownRender}
        //dropdownStyle={{ background: 'red' }}
        //filterSort={filterSort}
        //listHeight={30}
        //loading={true}
        menuItemSelectedIcon={
          <>
            <CheckCircleTwoTone />
          </>
        }
        open={true}
        optionFilterProp="value"
        optionLabelProp="label"
        options={[
          { label: '青山七海', value: '青山七海', className: 'qsqh' },
          { label: '椎名真白', value: '椎名真白' },
          { label: '神田空太', value: '神田空太' },
        ]}
        //searchValue="123"
        tagRender={(props: any) => {
          return (
            <>
              <TagTwoTone />
              {props.value}
            </>
          );
        }}
        tokenSeparators={[',']}
        onChange={(value: any, options: any) => {
          onChange(value, options);
        }}
        onDeselect={(value: any, option: any) => {
          onDeselect(value, option);
        }}
        onDropdownVisibleChange={(open: any) => {
          onDropdownVisibleChange(open);
        }}
        onSelect={(value: any, option: any) => {
          onSelect(value, option);
        }}
      >
        {/* <Select.Option value="青山七海">青山七海</Select.Option>
        <Select.Option value="椎名真白">椎名真白</Select.Option>
        <Select.Option value="神田空太">神田空太</Select.Option> */}
      </Select>
    </>
  );
}
