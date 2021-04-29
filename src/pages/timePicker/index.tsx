import { DeleteTwoTone, FieldTimeOutlined } from '@ant-design/icons';
import { TimePicker } from 'antd';
import moment from 'moment';
import React from 'react';
export default function IndexPage() {
  return (
    <>
      <TimePicker
        clearIcon={
          <>
            <DeleteTwoTone />
          </>
        }
        defaultValue={moment('13:30:56', 'HH:mm:ss')}
        disabledHours={() => {
          return [1, 2];
        }}
        disabledMinutes={(hour: any) => {
          return [hour, 3, 4];
        }}
        disabledSeconds={(hour: number, minute: number) => {
          return [hour, minute, 55];
        }}
        format={'HH:mm:ss	'}
        hourStep={1}
        placeholder={'请选择时间'}
        popupClassName={'yq'}
        // popupStyle={{ background: 'pink' }}
        renderExtraFooter={() => {
          return <>请选择时间</>;
        }}
        showNow={true}
        suffixIcon={
          <>
            <FieldTimeOutlined />
          </>
        }
        use12Hours={true}
        onChange={(value: any, datestring: any) => {
          console.log(value, datestring);
        }}
      />
    </>
  );
}
