import { FC, useRef } from 'react';
import { Link } from 'umi';
import { Layout, Menu } from 'antd';
//import '../pages/index.css';

const { Content, Sider } = Layout;

const LayoutsIndex: FC = (props) => {
  const { children } = props;
  // if (history.location.pathname === '/login') {
  //   return children;
  // }
  return (
    <>
      <Layout style={{ height: '100%' }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          className={'yqSider'}
          style={{
            background: '#fff',
            height: '100%',
            position: 'fixed',
            left: 0,
            overflowY: 'auto',
            overflowX: 'hidden',
          }}
        >
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={['19']}
            style={{ height: '100%' }}
          >
            <Menu.Item key="1">
              <Link to="/form">Form 表单</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/input">Input 输入框</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/InputNumber">InputNumber 数字输入框</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/mentions">Mentions 提及</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/radio">Radio 单选框</Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/rate">Rate 评分</Link>
            </Menu.Item>
            <Menu.Item key="7">
              <Link to="/select">Select 选择器</Link>
            </Menu.Item>
            <Menu.Item key="8">
              <Link to="/slider">Slider 滑动输入条</Link>
            </Menu.Item>
            <Menu.Item key="9">
              <Link to="/switch">Switch 开关</Link>
            </Menu.Item>
            <Menu.Item key="10">
              <Link to="/timePicker">TimePicker 时间选择框</Link>
            </Menu.Item>
            <Menu.Item key="11">
              <Link to="/treeSelect">TreeSelect 树选择</Link>
            </Menu.Item>
            <Menu.Item key="12">
              <Link to="/autoComplete">AutoComplete 自动完成</Link>
            </Menu.Item>
            <Menu.Item key="13">
              <Link to="/cascader">Cascader 级联选择</Link>
            </Menu.Item>
            <Menu.Item key="14">
              <Link to="/checkbox">Checkbox 多选框</Link>
            </Menu.Item>
            <Menu.Item key="15">
              <Link to="/datePicker">DatePicker 日期选择框</Link>
            </Menu.Item>
            <Menu.Item key="16">
              <Link to="/table">Table 表格</Link>
            </Menu.Item>
            <Menu.Item key="17">
              <Link to="/tableAjax">Table 表格-远程加载数据</Link>
            </Menu.Item>
            <Menu.Item key="18">
              <Link to="/tableExpand">Table 表格-可展开</Link>
            </Menu.Item>
            <Menu.Item key="19">
              <Link to="/tableColspanRowspan">Table 表格-行列合并</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '24px 180px 0' }}>
            <div
              //className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {children}
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default LayoutsIndex;
