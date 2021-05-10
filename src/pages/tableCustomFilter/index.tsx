import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';

export default function IndexPage() {
  const [searchText, setSearchText] = useState<any>();
  const [searchedColumn, setSearchedColumn] = useState<any>();
  let searchInput: any;
  //表格数据
  const data: any[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Joe Black',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Jim Green',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ];
  const [dataSource, setDataSource] = useState<any>(data); //表格数据
  //搜索方法
  const handleSearch = (
    selectedKeys: any[],
    confirm: () => void,
    dataIndex: any,
  ) => {
    //confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
    let dataSourcTemp: any[] = [];
    data.map((item: any) => {
      if (item[dataIndex].indexOf(selectedKeys[0]) != -1)
        dataSourcTemp.push(item);
    });
    setDataSource(dataSourcTemp);
  };
  //重置方法
  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };
  //自定义过滤菜单参数
  const getColumnSearchProps = (dataIndex: any) => ({
    filterDropdown: (props: {
      setSelectedKeys: any;
      selectedKeys: any;
      confirm: any;
      clearFilters: any;
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            console.log(node);
            searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={props.selectedKeys[0]}
          onChange={(e) =>
            props.setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(props.selectedKeys, confirm, dataIndex)
          }
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(props.selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(props.clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              //confirm({ closeDropdown: false });
              setSearchText(props.selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: any) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    // onFilter: (
    //   value: string,
    //   record: { [x: string]: { toString: () => string } },
    // ) =>
    //   record[dataIndex]
    //     ? record[dataIndex]
    //         .toString()
    //         .toLowerCase()
    //         .includes(value.toLowerCase())
    //     : '',
    onFilterDropdownVisibleChange: (visible: any) => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: (text: { toString: () => string }) =>
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
  });
  //表格列配置
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: '20%',
      ...getColumnSearchProps('age'),
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      ...getColumnSearchProps('address'),
    },
  ];
  return (
    <>
      <Table columns={columns} dataSource={dataSource} />
    </>
  );
}
