import { Table } from 'antd';
import React from 'react';

export default function IndexPage() {
  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: '商品名称', dataIndex: 'goodsName', key: 'goodsName' },
    {
      title: '商品构成',
      dataIndex: 'commodityComposition',
      key: 'commodityComposition',
    },
    {
      title: '商品描述',
      dataIndex: 'productsDescription',
      key: 'productsDescription',
    },
    { title: '支付方式', dataIndex: 'payment', key: 'payment' },
    { title: '渠道', dataIndex: 'trench', key: 'trench' },
    {
      title: '状态',
      dataIndex: 'state',
      key: 'state',
      render: (text: any) => {
        if (text === '下架')
          return (
            <>
              <span style={{ color: 'red' }}>{text}</span>
            </>
          );
        else
          return (
            <>
              <span style={{ color: 'green' }}>{text}</span>
            </>
          );
      },
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      render: () => {
        return (
          <>
            <a>修改</a>
            <a style={{ marginLeft: '5px' }}>上架</a>
          </>
        );
      },
    },
  ];
  const data = [
    {
      key: 1,
      id: 1,
      goodsName: '工商注册',
      commodityComposition: '脉兽2',
      productsDescription: '注册地址',
      payment: '全款',
      trench: '共道',
      state: '下架',
    },
    {
      key: 2,
      id: 2,
      goodsName: '工商注册2',
      commodityComposition: '脉兽22',
      productsDescription: '注册地址2',
      payment: '全款2',
      trench: '共道2',
      state: '下架',
    },
  ];
  const expandedRowRender = () => {
    const columns = [
      { title: '城市', dataIndex: 'city', key: 'city' },
      { title: '成本价', dataIndex: 'costPrice', key: 'costPrice' },
      { title: '售出价', dataIndex: 'tmoney', key: 'tmoney' },
      { title: '折扣价', dataIndex: 'discountPrice', key: 'discountPrice' },
      { title: '上架时间', dataIndex: 'upTime', key: 'upTime' },
      { title: '下架时间', dataIndex: 'downTime', key: 'downTime' },
      {
        title: '状态',
        dataIndex: 'state',
        key: 'state',
        render: (text: any) => {
          if (text === '下架')
            return (
              <>
                <span style={{ color: 'red' }}>{text}</span>
              </>
            );
          else
            return (
              <>
                <span style={{ color: 'green' }}>{text}</span>
              </>
            );
        },
      },
      {
        title: '新增',
        dataIndex: 'operation',
        key: 'operation',
        render: () => {
          return (
            <>
              <a>修改</a>
              <a style={{ marginLeft: '5px' }}>下架</a>
            </>
          );
        },
      },
    ];
    const data = [
      {
        key: 1,
        city: '测试',
        costPrice: '1',
        tmoney: '2',
        discountPrice: '0',
        upTime: '2019-10-28',
        downTime: '2099-01-01',
        state: '上架',
      },
      {
        key: 2,
        city: '广州市',
        costPrice: '6000',
        tmoney: '3000',
        discountPrice: '0',
        upTime: '0000-00-00',
        downTime: '0000-00-00',
        state: '上架',
      },
      {
        key: 3,
        city: '上海市',
        costPrice: '6400',
        tmoney: '3200',
        discountPrice: '0',
        upTime: '0000-00-00',
        downTime: '0000-00-00',
        state: '上架',
      },
    ];
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };
  return (
    <>
      <Table
        columns={columns}
        expandable={{ expandedRowRender }}
        dataSource={data}
      />
      <h3>问题：每行的可展开的内容都一样...</h3>
    </>
  );
}
