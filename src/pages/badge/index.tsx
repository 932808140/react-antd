import { Badge } from 'antd';

export default function IndexPage() {
  return (
    <>
      <Badge
        count={0}
        offset={[0, 0]}
        overflowCount={999}
        showZero={true}
        size={'default'}
      >
        <div
          style={{
            backgroundColor: 'lightpink',
            width: '50px',
            height: '50px',
          }}
        />
      </Badge>
      <Badge dot status={'default'}>
        <div
          style={{
            backgroundColor: 'lightpink',
            width: '50px',
            height: '50px',
            marginLeft: '20px',
          }}
        />
      </Badge>
      <Badge
        offset={[0, 0]}
        overflowCount={999}
        showZero={true}
        size={'default'}
        status={'error'}
        //text={<>请注意</>}
        title={'注意错误！'}
      >
        <div
          style={{
            backgroundColor: 'lightpink',
            width: '50px',
            height: '50px',
            marginLeft: '20px',
          }}
        />
      </Badge>
      <Badge dot status={'processing'}>
        <div
          style={{
            backgroundColor: 'lightpink',
            width: '50px',
            height: '50px',
            marginLeft: '20px',
          }}
        />
      </Badge>
      <Badge
        offset={[0, 0]}
        overflowCount={999}
        showZero={true}
        size={'default'}
        status={'success'}
      >
        <div
          style={{
            backgroundColor: 'lightpink',
            width: '50px',
            height: '50px',
            marginLeft: '20px',
          }}
        />
      </Badge>
      <Badge
        offset={[0, 0]}
        overflowCount={999}
        showZero={true}
        size={'default'}
        status={'warning'}
      >
        <div
          style={{
            backgroundColor: 'lightpink',
            width: '50px',
            height: '50px',
            marginLeft: '20px',
          }}
        />
      </Badge>
      <Badge.Ribbon
        color={'geekblue'}
        placement={'end'}
        text={'这是一条缎带！'}
        style={{ marginRight: '405px' }}
      >
        <div
          style={{
            border: '1px solid red',
            width: '150px',
            height: '50px',
            margin: '0 auto',
          }}
        />
      </Badge.Ribbon>
    </>
  );
}
