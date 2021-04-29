import { Switch } from 'antd';
export default function IndexPage() {
  return (
    <>
      <Switch
        checkedChildren={'开启'}
        unCheckedChildren={'关闭'}
        defaultChecked={true}
      />
    </>
  );
}
