import React, { createRef, useRef, useState } from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import Draggable from 'react-draggable';

export default function IndexPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });
  const draggleRef = createRef<any>();
  const showModal = () => {
    setIsModalVisible(true);
  };
  const confirmModal = () => {
    Modal.confirm({
      title: 'This is an confirm message',
      content: <>some messages...some messages...</>,
      okText: '确定',
      closable: true,
      cancelText: '取消',
    });
  };
  const successModal = () => {
    let count: number = 5;
    const timer = setInterval(() => {
      count -= 1;
      modal.update({
        content: <>该弹框还有{count}秒之后关闭</>,
      });
    }, 1000);
    const modal = Modal.success({
      title: '可自动关闭弹框',
      content: <>该弹框还有{count}秒之后关闭</>,
      okText: '确定',
      closable: true,
    });
    setTimeout(() => {
      clearInterval(timer);
      modal.destroy();
    }, count * 1000);
  };
  const handleOk = () => {
    setIsModalVisible(false);
    setVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setVisible(false);
  };
  //Modal 完全关闭后的回调
  const handleAfterClose = () => {
    //console.log('value');
  };
  const showDraggableModal = () => {
    setVisible(true);
  };
  const onStart = (event: any, uiData: any) => {
    const { clientWidth, clientHeight } = window?.document?.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    //console.log(targetRect)
    setBounds({
      left: -targetRect?.left + uiData?.x,
      right: clientWidth - (targetRect?.right - uiData?.x),
      top: -targetRect?.top + uiData?.y,
      bottom: clientHeight - (targetRect?.bottom - uiData?.y),
    });
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Button
        type="primary"
        onClick={confirmModal}
        style={{ marginLeft: '5px' }}
      >
        confirm Modal
      </Button>
      <Button
        type="primary"
        onClick={successModal}
        style={{ marginLeft: '5px' }}
      >
        自动关闭弹窗
      </Button>
      <Button
        type="primary"
        onClick={showDraggableModal}
        style={{ marginLeft: '5px' }}
      >
        任意拖拽弹窗
      </Button>
      <Modal
        title="自定义标题"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        afterClose={handleAfterClose}
        //cancelButtonProps={{ type: 'primary' }}
        cancelText={'关闭'}
        //centered={true}
        closeIcon={
          <>
            <CloseCircleOutlined />
          </>
        }
        //confirmLoading={true}
        //destroyOnClose={true}
        focusTriggerAfterClose={true}
        //footer={<>自定义底部</>}
        //forceRender={true}
        //maskStyle={{ background: 'yellow' }}
        // modalRender={(node: React.ReactNode) => {
        //   //console.log(node);
        //   return <>{node}123</>;
        // }}
        okText={'确认'}
      >
        123
      </Modal>
      <Modal
        title={
          <div
            style={{
              width: '100%',
              cursor: 'move',
            }}
            onMouseOver={() => {
              if (disabled) {
                setDisabled(false);
              }
            }}
            onMouseOut={() => {
              setDisabled(true);
            }}
            onFocus={() => {}}
            onBlur={() => {}}
          >
            可拖拽弹框
          </div>
        }
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        modalRender={(modal) => {
          return (
            <Draggable
              disabled={disabled}
              bounds={bounds}
              onStart={(event, uiData) => {
                onStart(event, uiData);
              }}
            >
              <div ref={draggleRef}>{modal}</div>
            </Draggable>
          );
        }}
      >
        123
      </Modal>
    </>
  );
}
