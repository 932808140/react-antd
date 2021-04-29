import {
  AppstoreOutlined,
  DownSquareTwoTone,
  TagTwoTone,
} from '@ant-design/icons';
import { TreeSelect } from 'antd';
import React, { JSXElementConstructor, Key, ReactElement } from 'react';
export default function IndexPage() {
  const { TreeNode } = TreeSelect;
  //选中树节点时调用此函数
  const onChange = (value: any, label: any, extra: any) => {
    //console.log(value, label, extra);
  };
  //被选中时调用
  const onSelect = (value: any, option: any) => {
    //console.log(value, option);
  };
  return (
    <>
      <TreeSelect
        style={{ width: '180px' }}
        allowClear={true}
        multiple={true}
        autoClearSearchValue={true}
        //defaultValue={['parent 1', 'leaf2']}
        dropdownClassName={'yq'}
        dropdownRender={(
          menu: ReactElement<any, string | JSXElementConstructor<any>>,
        ) => {
          return (
            <>
              {menu}
              <a style={{ marginLeft: '11px', color: '#0084ff' }}>选择更多</a>
            </>
          );
        }}
        filterTreeNode={(inputValue: string, treeNode: any) => {
          if (inputValue === 'p') {
            return false;
          } else {
            return true;
          }
        }}
        maxTagCount={2}
        maxTagPlaceholder={(omittedValues: any) => {
          console.log(omittedValues);
          return <>...</>;
        }}
        placeholder={'请选择'}
        showArrow={true}
        treeCheckable={true}
        // suffixIcon={
        //   <>
        //     <AppstoreOutlined />
        //   </>
        // }
        // switcherIcon={
        //   <>
        //     <DownSquareTwoTone />
        //   </>
        // }
        treeData={[
          {
            value: 'parent 1',
            title: 'parent 1',
            children: [
              {
                value: 'parent 1-0',
                title: 'parent 1-0',
                children: [
                  { value: 'leaf1', title: 'leaf1' },
                  { value: 'leaf2', title: 'leaf2' },
                ],
              },
            ],
          },
          {
            value: 'parent 2',
            title: 'parent 2',
            children: [{ value: 'leaf3', title: 'leaf3' }],
          },
        ]}
        treeDefaultExpandAll={true}
        treeIcon={true}
        onChange={onChange}
        onSelect={onSelect}
        onTreeExpand={(expandedKeys: Key[]) => {
          console.log(expandedKeys);
        }}
      >
        {/* <TreeNode value="parent 1" title="parent 1">
          <TreeNode value="parent 1-0" title="parent 1-0">
            <TreeNode value="leaf1" title="leaf1" />
            <TreeNode value="leaf2" title="leaf2" />
          </TreeNode>
          <TreeNode value="parent 1-1" title="parent 1-1">
            <TreeNode
              value="leaf3"
              title={<b style={{ color: '#08c' }}>leaf3</b>}
            />
          </TreeNode>
        </TreeNode> */}
      </TreeSelect>
    </>
  );
}
