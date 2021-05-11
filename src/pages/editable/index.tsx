import React, { useRef, useState } from 'react';
import type { ProColumns } from '@ant-design/pro-table';
import { EditableProTable } from '@ant-design/pro-table';
import type { ActionType } from '@ant-design/pro-table';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

type DataSourceType = {
  id: React.Key;
  title?: string;
  decs?: string;
  state?: string;
  created_at?: string;
  children?: DataSourceType[];
};

const defaultData: DataSourceType[] = [
  {
    id: 624748504,
    title: '活动名称一',
    decs: '这个活动真好玩',
    state: 'open',
    created_at: '2020-05-26T09:42:56Z',
  },
  {
    id: 624691229,
    title: '活动名称二',
    decs: '这个活动真好玩',
    state: 'closed',
    created_at: '2020-05-26T08:19:22Z',
  },
];

export default function IndexPage() {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() =>
    defaultData.map((item) => item.id),
  );
  const [dataSource, setDataSource] = useState<DataSourceType[]>(
    () => defaultData,
  );
  const [disabled, setDisabled] = useState<any>(true);
  const actionRef = useRef<ActionType>();

  const handleAdd = () => {
    // actionRef.current?.addEditRecord({
    //   id: (Math.random() * 1000000).toFixed(0),
    // });
  };
  const columns: ProColumns<DataSourceType>[] = [
    {
      title: '活动名称',
      dataIndex: 'title',
      width: '30%',
      editable: disabled,
      formItemProps: {
        rules: [
          {
            required: true,
            whitespace: true,
            message: '此项是必填项',
          },
        ],
      },
    },
    {
      title: '状态',
      key: 'state',
      editable: disabled,
      dataIndex: 'state',
      valueType: 'select',
      valueEnum: {
        all: { text: '全部', status: 'Default' },
        open: {
          text: '未解决',
          status: 'Error',
        },
        closed: {
          text: '已解决',
          status: 'Success',
        },
      },
    },
    {
      title: '描述',
      editable: disabled,
      dataIndex: 'decs',
    },
    {
      title: (
        <>
          <PlusOutlined onClick={handleAdd} />
        </>
      ),
      valueType: 'option',
      width: 250,
      render: () => {
        return null;
      },
    },
  ];
  return (
    <>
      <EditableProTable<DataSourceType>
        headerTitle="可编辑表格"
        columns={columns}
        actionRef={actionRef}
        rowKey="id"
        value={dataSource}
        onChange={setDataSource}
        //recordCreatorProps={false}
        recordCreatorProps={{
          newRecordType: 'dataSource',
          record: () => ({
            id: Date.now(),
          }),
        }}
        toolBarRender={() => {
          return [
            <Button
              type="primary"
              key="detail"
              onClick={() => {
                setDisabled(!disabled);
              }}
            >
              详情/编辑
            </Button>,
            <Button
              type="primary"
              key="save"
              onClick={() => {
                // dataSource 就是当前数据，可以调用 api 将其保存
                console.log(dataSource);
              }}
            >
              保存数据
            </Button>,
          ];
        }}
        editable={{
          type: 'multiple',
          editableKeys,
          actionRender: (row, config, defaultDoms) => {
            return [defaultDoms.delete];
          },
          onValuesChange: (record, recordList) => {
            setDataSource(recordList);
          },
          onChange: setEditableRowKeys,
        }}
      />
    </>
  );
}
