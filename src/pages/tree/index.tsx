import { Tree } from 'antd';
import { DataNode } from 'antd/lib/tree';

export default function IndexPage() {
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
      />
    </>
  );
}
