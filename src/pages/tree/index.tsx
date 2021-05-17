import {
  DownSquareOutlined,
  InboxOutlined,
  MailOutlined,
  MedicineBoxOutlined,
} from '@ant-design/icons';
import { Tree } from 'antd';
import { DataNode } from 'antd/lib/tree';
import React, { useState } from 'react';

export default function IndexPage() {
  const [selected, setSelected] = useState<string>('letter');
  const { DirectoryTree } = Tree;
  const treeData = [
    {
      title: '收件箱',
      key: 'inbox',
      selectable: false,
      checkable: false,
      icon: (
        <>
          <InboxOutlined style={{ fontSize: '19px' }} />
        </>
      ),
      children: [
        {
          title: '家书',
          key: 'letter',
          //isLeaf: false,
        },
        {
          title: '朋友',
          key: 'friend',
        },
        {
          title: '商务',
          key: 'business',
        },
      ],
    },
    {
      title: '发件箱',
      key: 'outbox',
      selectable: false,
      checkable: false,
      icon: (
        <>
          <MedicineBoxOutlined style={{ fontSize: '17px' }} />
        </>
      ),
      children: [
        {
          title: '垃圾邮件',
          key: 'junkMail',
        },
      ],
    },
  ];
  //点击复选框触发
  const onCheck = (checkedKeys: any, e: any) => {
    //console.log(checkedKeys,e);
  };
  //drop 触发时调用
  const onDrop = (e: any) => {
    //console.log(e);
  };
  //展开/收起节点时触发
  const onExpand = (expandedKeys: any, e: any) => {
    //console.log(expandedKeys,e);
  };
  //节点加载完毕时触发
  const onLoad = (loadedKeys: any, e: any) => {
    //console.log(loadedKeys,e);
  };
  //响应右键点击
  const onRightClick = (e: any) => {
    //console.log(e);
  };
  //点击树节点触发
  const onSelect = (selectedKeys: any, e: any) => {
    console.log(selectedKeys, e);
    setSelected(e.node.key);
  };
  return (
    <>
      <Tree
        treeData={treeData}
        // allowDrop={(options: {
        //   dropNode: DataNode;
        //   dropPosition: 0 | 1 | -1;
        // }) => {
        //   return true;
        // }}
        autoExpandParent={true}
        checkable={true}
        defaultExpandAll={true}
        //defaultExpandedKeys={['outbox']}
        //defaultExpandParent={false}
        //disabled={true}
        draggable={(node: DataNode) => {
          //console.log(node);
          return true;
        }}
        //expandedKeys={['outbox']}
        filterTreeNode={(node: any) => {
          //console.log(node);
          return true;
        }}
        //height={100}
        icon={<MailOutlined />}
        showIcon={true}
        multiple={false}
        //selectable={false}
        showLine={{ showLeafIcon: false }}
        //switcherIcon={<DownSquareOutlined />}
        // titleRender={(nodeData:any)=>{
        //   console.log(nodeData);
        //   return 1
        // }}
        //defaultSelectedKeys={[selected]}
        selectedKeys={[selected]}
        onCheck={onCheck}
        onDrop={onDrop}
        onExpand={onExpand}
        onLoad={onLoad}
        onRightClick={onRightClick}
        onSelect={onSelect}
      />
    </>
  );
}
