import { Checkbox } from 'antd';
import { useState } from 'react';
export default function IndexPage() {
  const [checkedList, setCheckedList] = useState<any>();
  const [indeterminate, setIndeterminate] = useState<any>(false);
  const [checkAll, setCheckAll] = useState<any>(false);
  //变化时回调函数
  const onChange = (checkedValue: any) => {
    console.log(checkedValue);
    setCheckedList(checkedValue);
    setIndeterminate(
      !!checkedValue.length && checkedValue.length < options.length,
    );
    setCheckAll(checkedValue.length === options.length);
  };
  //指定可选项
  const options = [
    // { label: 'A', value: 'A' },
    // { label: 'B', value: 'B' },
    // { label: 'C', value: 'C' },
    // { label: 'D', value: 'D' },
    'A',
    'B',
    'C',
    'D',
  ];
  //全选
  const onCheckAllChange = (e: any) => {
    setCheckedList(e.target.checked ? options : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };
  return (
    <>
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        全选
      </Checkbox>
      <br></br>
      <Checkbox.Group
        options={options}
        onChange={onChange}
        value={checkedList}
      />
    </>
  );
}
