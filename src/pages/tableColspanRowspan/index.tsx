import { Table } from 'antd';

export default function IndexPage() {
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      tel: '0571-22098909',
      phone: 18889898989,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      tel: '0571-22098333',
      phone: 18889898888,
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      tel: '0575-22098909',
      phone: 18900010002,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 18,
      tel: '0575-22098909',
      phone: 18900010002,
      address: 'London No. 2 Lake Park',
    },
    {
      key: '5',
      name: 'Jake White',
      age: 18,
      tel: '0575-22098909',
      phone: 18900010002,
      address: 'Dublin No. 2 Lake Park',
    },
  ];
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text: any, record: any, index: any) => {
        const obj = {
          children: text,
          props: { colSpan: 1 },
        };
        if (index === 4) {
          obj.props.colSpan = 5;
        }
        return obj;
      },
    },
    {
      title: 'Age',
      dataIndex: 'age',
      render: (text: any, record: any, index: any) => {
        const obj = {
          children: text,
          props: { colSpan: 1 },
        };
        if (index === 4) {
          obj.props.colSpan = 0;
        }
        return obj;
      },
    },
    {
      title: 'Home phone',
      dataIndex: 'tel',
      colSpan: 2,
      render: (text: any, record: any, index: any) => {
        const obj = {
          children: text,
          props: { rowSpan: 1, colSpan: 1 },
        };
        if (index === 2) {
          obj.props.rowSpan = 2;
        }
        if (index === 3) {
          obj.props.rowSpan = 0;
        }
        if (index === 4) {
          obj.props.colSpan = 0;
        }
        return obj;
      },
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      colSpan: 0,
      render: (text: any, record: any, index: any) => {
        const obj = {
          children: text,
          props: { rowSpan: 1, colSpan: 1 },
        };
        if (index === 2) {
          obj.props.rowSpan = 2;
        }
        if (index === 3) {
          obj.props.rowSpan = 0;
        }
        if (index === 4) {
          obj.props.colSpan = 0;
        }
        return obj;
      },
    },
    {
      title: 'Address',
      dataIndex: 'address',
      render: (text: any, record: any, index: any) => {
        const obj = {
          children: text,
          props: { colSpan: 1 },
        };
        if (index === 4) {
          obj.props.colSpan = 0;
        }
        return obj;
      },
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={data} bordered />
    </>
  );
}
