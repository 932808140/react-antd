import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

export default function IndexPage() {
  //上传文件之前
  const beforeUpload = (file: any, fileList: any) => {
    //console.log(file, fileList);
  };
  //通过覆盖默认的上传行为
  const customRequest = () => {
    //console.log('通过覆盖默认的上传行为');
  };
  return (
    <>
      <Upload
        accept=".jpg,.png"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        customRequest={customRequest}
        //data={}
      >
        <Button icon={<UploadOutlined />}>点击上传</Button>
      </Upload>
    </>
  );
}
