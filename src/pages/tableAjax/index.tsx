import { Table } from 'antd';
import { useEffect, useState } from 'react';
import reqwest from 'reqwest';

export default function IndexPage() {
  const [data, setData] = useState<any>([]);
  const [pagination, setPagination] = useState<any>({
    current: 1,
    pageSize: 10,
  });
  const [loading, setLoading] = useState<any>(false);
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      render: (name: { first: any; last: any }) => `${name.first} ${name.last}`,
      width: '20%',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      filters: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
      ],
      width: '20%',
    },
    {
      title: '年龄',
      dataIndex: 'dob',
      sorter: true,
      render: (text: any, record: any, index: any) => {
        return <>{text.age}</>;
      },
      width: '20%',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
  ];
  const getRandomuserParams = (params: any) => ({
    results: params.pagination.pageSize,
    page: params.pagination.current,
    ...params,
  });
  const fetch = (params = {}) => {
    setLoading(true);
    reqwest({
      url: 'https://randomuser.me/api',
      method: 'get',
      type: 'json',
      data: getRandomuserParams(params),
    }).then((data: { results: any }) => {
      setLoading(false);
      setData(data.results);
      setPagination({ ...params.pagination, total: 200 });
    });
  };
  useEffect(() => {
    fetch({ pagination });
  }, []);
  const handleTableChange = (pagination: any, filters: any, sorter: any) => {
    console.log(sorter);
    fetch({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters,
    });
  };
  return (
    <>
      <Table
        columns={columns}
        rowKey={(record) => record.login.uuid}
        dataSource={data}
        pagination={pagination}
        loading={loading}
        onChange={handleTableChange}
        summary={() => (
          <>
            <h3>远程加载数据-服务端排序有问题-比如“年龄”</h3>
          </>
        )}
      />
    </>
  );
}
