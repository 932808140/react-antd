import React, { useState } from 'react';
import { Table, Tag, Space, Button, Input, Form } from 'antd';
import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

export default function IndexPage() {
  const [selectedRowKeys, setSelectedRowKeys] = useState<any>([]);
  const [searchText, setSearchText] = useState<any>();
  const [searchedColumn, setSearchedColumn] = useState<any>();
  const [searchKey, setSearchKey] = useState<any>(); //表单查询搜索关键字
  const [form] = Form.useForm(); //表单
  const data: any[] = [
    {
      key: '1',
      name: 'John Brown',
      //name2:'John Brown2',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      //name2:'John Brown2',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      //name2:'John Brown2',
      age: 22,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  const [dataSource, setDataSource] = useState<any>(data); //表格数据
  //搜索方法
  const handleSearch = (selectedKeys: any, confirm: any, dataIndex: any) => {
    //confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  //表单查询方法
  const onFinish = (values: any, dataIndex: any) => {
    let dataSourcTemp: any[] = [];
    data.map((item: any) => {
      if (item.address.indexOf(values.searchKey) != -1)
        dataSourcTemp.push(item);
    });
    setDataSource(dataSourcTemp);
    setSearchText(values.searchKey);
    setSearchedColumn(dataIndex);
  };
  //表单重置的方法
  const handleReset = () => {
    setDataSource(data);
    setSearchText('');
    setSearchedColumn('');
    form.setFieldsValue({ searchKey: '' });
  };
  const getColumnSearchProps = (dataIndex: any) => {
    return {
      filterDropdown: (props: any) => {
        //console.log(props);
        return (
          <div style={{ padding: 8 }}>
            <Form
              onFinish={(values: any) => {
                onFinish(values, dataIndex);
              }}
              style={{ position: 'relative' }}
              form={form}
            >
              <Form.Item name="searchKey">
                <Input
                  placeholder={'请输入你要查询的内容...'}
                  allowClear={true}
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  查询
                </Button>
              </Form.Item>
              <Button
                type="primary"
                style={{ position: 'absolute', right: '2px', bottom: '0px' }}
                onClick={handleReset}
              >
                重置
              </Button>
            </Form>
          </div>
        );
      },
      onFilter: (value: any, record: any) =>
        record.dataIndex.indexOf(searchKey) != -1,
      onFilterDropdownVisibleChange: (visible: any, dataIndex: any) => {
        if (visible) {
          //setTimeout(() => searchInput.select(), 100);
          return false;
        }
      },
      render: (text: any) =>
        searchedColumn === dataIndex ? (
          <Highlighter
            highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
            searchWords={[searchText]}
            autoEscape
            textToHighlight={text ? text.toString() : ''}
          />
        ) : (
          text
        ),
      filterIcon: (
        <>
          <SearchOutlined />
        </>
      ),
    };
  };
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
      className: 'yq123',
      colSpan: 1,
      //defaultFilteredValue:['Jim Green']
      //defaultSortOrder:'descend'
      editable: true,
      // filterDropdown:(<>123</>),
      // filterDropdownVisible:true,
      //filtered:true
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        },
        {
          text: 'Green',
          value: 'Green',
        },
        {
          text: 'Submenu',
          value: 'Submenu',
          children: [
            {
              text: 'Green2',
              value: 'Green2',
            },
            {
              text: 'Black',
              value: 'Black',
            },
          ],
        },
      ],
      onFilter: (value: any, record: any) => {
        //console.log(record);
        return record.name.indexOf(value) != -1;
      },
      onFilterDropdownVisibleChange: (visible: any) => {
        console.log('发生变化了', visible);
      },
      filterIcon: (
        <>
          <FilterOutlined />
        </>
      ),
      filtered: false,
      filterMultiple: false,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: 70,
      sorter: (a: any, b: any) => a.age - b.age,
      sortDirections: ['ascend', 'descend', 'ascend'],
      defaultSortOrder: 'ascend',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      align: 'center',
      ...getColumnSearchProps('address'),
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

  //选中后清除
  const handleSelectClear = () => {
    console.log(selectedRowKeys);
    setSelectedRowKeys([]);
  };
  return (
    <>
      <Table
        columns={columns}
        dataSource={dataSource}
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
        //rowKey={'11'}
        rowSelection={{
          type: 'checkbox',
          // columnTitle: <>自定义列表选择框标题</>,
          columnWidth: '100px',
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
          selectedRowKeys: selectedRowKeys,
          //defaultSelectedRowKeys: ['1'],
          selections: [
            Table.SELECTION_ALL,
            { key: '1', text: '名字' },
            { key: '2', text: '年龄' },
          ],
          onChange: (selectedRowKeys: any, selectedRows: any) => {
            //console.log(selectedRowKeys, selectedRows);
            setSelectedRowKeys(selectedRowKeys);
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
          //console.log(currentPageData);
          return (
            <>
              <Button onClick={handleSelectClear}>选中后清除</Button>
            </>
          );
        }}
        tableLayout={'auto'}
        onChange={(pagination: any, filters: any, sorter: any, extra: any) => {
          // console.log(pagination,filters,sorter,extra);
        }}
        onHeaderRow={(columns, index) => {
          // console.log(columns,index);
          return {
            onClick: () => {
              //console.log('点击了表头');
            }, // 点击表头行
          };
        }}
        onRow={(record) => {
          //console.log(record);
          return {
            onClick: (event) => {}, // 点击行
            onDoubleClick: (event) => {},
            onContextMenu: (event) => {},
            onMouseEnter: (event) => {}, // 鼠标移入行
            onMouseLeave: (event) => {},
          };
        }}
      />
    </>
  );
}
