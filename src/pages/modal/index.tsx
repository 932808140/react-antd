import React, { useState } from 'react';
import { Modal, Button } from 'antd';

export default function IndexPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  //Modal 完全关闭后的回调
  const handleAfterClose = () => {
    console.log('value');
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        afterClose={handleAfterClose}
        //cancelButtonProps={{ type: 'primary' }}
        cancelText={'不行'}
        //centered={true}
        closeIcon={<></>}
      ></Modal>
    </>
  );
}
