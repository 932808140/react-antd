import { FolderOpenOutlined } from '@ant-design/icons';
import { Mentions, Button } from 'antd';
import React, { useRef, useState } from 'react';
export default function IndexPage() {
  const mentionsRef = useRef<any>();
  const [prefix, setPrefix] = useState<any>('@');
  const filterOption = (input: any, option: any) => {
    console.log(input, option);
    return true;
  };
  //自定义触发验证逻辑
  const validateSearch = (text: any, props: any) => {
    //console.log(text, props);
    return true;
  };
  //值改变时触发
  const onChange = (text: string) => {
    //console.log(text);
  };
  //搜索时触发
  const onSearch = (text: string, prefix: string) => {
    //console.log(prefix);
    setPrefix(prefix);
  };
  //选择选项时触发
  const onSelect = (option: any, prefix: string) => {
    // console.log(option, prefix);
  };
  //获取方法
  const getMethods = () => {
    mentionsRef.current.onBlur();
    // console.log(mentionsRef.current);
  };
  //自定义触发字符
  const MOCK_DATA: any = {
    '@': ['青山七海', '椎名真白', '神田空太'],
    '#': ['1.0', '2.0', '3.0'],
  };
  return (
    <>
      <Mentions
        autoFocus={true}
        //defaultValue={'123'}
        //filterOption={filterOption}
        notFoundContent={<>没有要提及的数据！</>}
        placement={'top'}
        split={'，'}
        validateSearch={validateSearch}
        onChange={onChange}
        autoSize={false}
        onSearch={onSearch}
        onSelect={onSelect}
        ref={mentionsRef}
        prefix={['@', '#']}
      >
        {/* <Mentions.Option value="青山七海">青山七海</Mentions.Option>
        <Mentions.Option value="椎名真白">椎名真白</Mentions.Option>
        <Mentions.Option value="神田空太">神田空太</Mentions.Option> */}
        {(MOCK_DATA[prefix] || []).map((value: any) => (
          <Mentions.Option key={value} value={value}>
            {value}
          </Mentions.Option>
        ))}
      </Mentions>
      <Button onClick={getMethods}>获取方法</Button>
    </>
  );
}
