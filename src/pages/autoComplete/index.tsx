import { AutoComplete } from 'antd';
export default function IndexPage() {
  return (
    <>
      <AutoComplete
        style={{ width: 200 }}
        allowClear={true}
        options={[
          { label: '111', value: '111' },
          { label: '222', value: '222' },
        ]}
      />
    </>
  );
}
