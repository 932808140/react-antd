import React, { useState } from 'react';
//组件
import { InboxOutlined, MedicineBoxOutlined } from '@ant-design/icons';
import { Button, Input, Tree } from 'antd';
//样式
import './index.css';

export default function IndexPage() {
  const [expandedKeys, setExpandedKeys] = useState<any[]>([]);
  const [searchValue, setSearchValue] = useState<any>();
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>();

  const treeData = [
    {
      title: '收件箱',
      key: 'inbox',
      children: [
        {
          title: '家书',
          key: 'letter',
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
      children: [
        {
          title: '垃圾邮件',
          key: 'junkMail',
        },
      ],
    },
  ];
  const getParentKey = (key: any, tree: any) => {
    let parentKey;
    for (let i = 0; i < tree.length; i++) {
      const node = tree[i];
      if (node.children) {
        if (node.children.some((item: any) => item.key === key)) {
          parentKey = node.key;
        } else if (getParentKey(key, node.children)) {
          parentKey = getParentKey(key, node.children);
        }
      }
    }
    return parentKey;
  };
  const dataList: any[] = [];
  const generateList = (data: any) => {
    for (let i = 0; i < data.length; i++) {
      const node = data[i];
      const { key, title } = node;
      dataList.push({ key, title: title });
      if (node.children) {
        generateList(node.children);
      }
    }
  };
  generateList(treeData);
  const onExpand = (expandedKeys: any) => {
    setExpandedKeys(expandedKeys);
    setAutoExpandParent(false);
  };
  const onChange = (e: any) => {
    const { value } = e.target;
    const expandedKeys = dataList
      .map((item: any) => {
        if (item.title.indexOf(value) > -1) {
          return getParentKey(item.key, treeData);
        }
        return null;
      })
      .filter(
        (item: any, i: any, self: any) => item && self.indexOf(item) === i,
      );
    setExpandedKeys(expandedKeys);
    setSearchValue(value);
    setAutoExpandParent(true);
  };
  const loop = (data: any) =>
    data.map((item: any) => {
      const index = item.title.indexOf(searchValue);
      const beforeStr = item.title.substr(0, index);
      const afterStr = item.title.substr(index + searchValue?.length);
      const title =
        index > -1 ? (
          <span>
            {beforeStr}
            <span className="site-tree-search-value">{searchValue}</span>
            {afterStr}
          </span>
        ) : (
          <span>{item.title}</span>
        );
      if (item.children) {
        return { title, key: item.key, children: loop(item.children) };
      }

      return {
        title,
        key: item.key,
      };
    });
  //自定义渲染节点
  const titleRender = (nodeData: any) => {
    if (nodeData.key === 'inbox') {
      return (
        <>
          {nodeData.title}
          <Button size={'small'} style={{ marginLeft: '15px' }}>
            inbox按钮
          </Button>
        </>
      );
    } else if (nodeData.key === 'outbox') {
      return (
        <>
          {nodeData.title}
          <Button size={'small'} style={{ marginLeft: '15px' }}>
            outbox按钮
          </Button>
        </>
      );
    } else {
      return (
        <>
          {nodeData.title}
          <Button size={'small'} style={{ marginLeft: '15px' }}>
            按钮
          </Button>
        </>
      );
    }
  };
  return (
    <>
      <Input.Search
        style={{ marginBottom: 8 }}
        placeholder="Search"
        onChange={onChange}
      />
      <Tree
        onExpand={onExpand}
        expandedKeys={expandedKeys}
        autoExpandParent={autoExpandParent}
        treeData={loop(treeData)}
        titleRender={titleRender}
      />
    </>
  );
}
