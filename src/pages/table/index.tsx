import React from 'react';
import { Table, Tag, Space } from 'antd';

export default function IndexPage() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: any) => (
        <>
          {tags.map((tag: any) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        bordered={true}
        footer={(currentPageData: any) => {
          let nameAll: any[] = [];
          currentPageData.map((item: any) => {
            nameAll.push(item.name);
          });
          return <>表格尾部：{nameAll.join('，')}</>;
        }}
        // getPopupContainer={(triggerNode: HTMLElement) => {
        //   console.log(triggerNode);
        // }}
        loading={false}
        pagination={{ position: ['bottomCenter'] }}
        rowClassName={(record: any, index: any) => {
          return 'yq' + '-' + index;
        }}
        rowSelection={{
          type: 'checkbox',
          // columnTitle: <>自定义列表选择框标题</>,
          hideSelectAll: false,
          renderCell: (
            value: boolean,
            record: {
              key: string;
              name: string;
              age: number;
              address: string;
              tags: string[];
            },
            index: number,
            originNode: React.ReactNode,
          ) => {
            return (
              <>
                <div>请选择</div>
                <br />
                {originNode}
              </>
            );
          },
          defaultSelectedRowKeys: ['1'],
          onChange: (selectedRowKeys: any, selectedRows: any) => {
            //console.log(selectedRowKeys, selectedRows);
          },
          onSelect: (
            record: any,
            selected: any,
            selectedRows: any,
            nativeEvent: any,
          ) => {
            //console.log(record, selected, selectedRows, nativeEvent);
          },
          onSelectAll: (selected: any, selectedRows: any, changeRows: any) => {
            //console.log(selected, selectedRows, changeRows);
          },
          onSelectInvert: (selectedRowKeys: any) => {
            //console.log(selectedRowKeys);
          },
          onSelectNone: () => {
            //console.log('用户清空选择的回调');
          },
        }}
        showHeader={true}
        sticky={true}
        summary={(currentData: any) => {
          //console.log(currentData);
          return <>总结栏：</>;
        }}
        title={(currentPageData: any) => {
          console.log(currentPageData);
          return <>表格标题</>;
        }}
        tableLayout={'auto'}
      />
    </>
  );
}
