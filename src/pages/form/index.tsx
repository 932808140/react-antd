import { Form, Input, Button, Select } from 'antd';
import React, { useState } from 'react';
import { MinusCircleOutlined } from '@ant-design/icons';
import './index.css';
export default function IndexPage() {
  const [dispaly, setDisplay] = useState<any>(false);
  const [form] = Form.useForm();
  // const filterFunc=(meta: { touched: boolean, validating: boolean })=>{
  //   console.log(meta.touched,meta.validating);
  // }
  const onFinish = (values: any) => {
    //获取对应字段名的错误信息
    console.log('getFieldError', form.getFieldError('username'));
    //获取对应字段实例
    console.log('getFieldInstance', form.getFieldInstance('username'));
    //获取一组字段名对应的错误信息，返回为数组形式
    console.log(
      'getFieldsError',
      form.getFieldsError(['username', 'password']),
    );
    //获取一组字段名对应的值
    console.log('getFieldsValue', form.getFieldsValue(true));
    //获取对应字段名的值
    console.log('getFieldValue', form.getFieldValue('password'));
    //检查一组字段是否被用户操作过
    console.log('isFieldsTouched', form.isFieldsTouched(true));
    //检查一组字段是否正在校验
    console.log('isFieldValidating', form.isFieldValidating('password'));
    //触发表单验证
    console.log(
      'validateFields',
      form
        .validateFields(['password'])
        .then((values: any) => {
          console.log(values);
        })
        .catch((reason: any) => {
          console.log(reason);
        }),
    );
  };
  //重置一组字段到 initialValues
  const handlerReset = () => {
    form.resetFields(['username', 'password', 'surepassword']);
  };
  //滚动到对应字段位置
  const handlerScroll = () => {
    form.scrollToField('username');
  };
  //设置表单的值
  const handlerSetFields = () => {
    form.setFieldsValue({ username: 'yang轻飏', password: '123456' });
  };
  //提交表单，与点击 submit 按钮效果相同
  const handlerSubmit = () => {
    form.submit();
  };
  //验证提示模板
  const validateMessages = {
    required: '${label} 是必选字段',
    // ...
  };
  //字段更新时触发回调事件
  const onFieldsChange = (changedFields: any, allFields: any) => {
    console.log(changedFields, allFields);
  };
  //提交表单且数据验证失败后回调事件
  const onFinishFailed = (item: {
    values: any;
    errorFields: any;
    outOfDate: any;
  }) => {
    console.log(item.values, item.errorFields, item.outOfDate);
  };
  //字段值更新时触发回调事件
  const onValuesChange = (changedValues: any, allValues: any) => {
    console.log(changedValues, allValues);
  };
  //设置如何将 event 的值转换成字段值
  const getValueFromEvent = (value: any) => {
    console.log(value);
  };
  //为子元素添加额外的属性
  const getValueProps = (value: any) => {
    console.log(value);
    return { div: 'yangyang' };
  };
  //显示/隐藏确认密码
  const handlerDisplay = () => {
    setDisplay(!dispaly);
  };
  //组件获取值后进行转换，再放入 Form 中
  const normalize = (value: any, prevValue: any, prevValues: any) => {
    console.log(value, prevValue, prevValues);
  };
  //FormList提交
  const onFormListFinish = (values: any) => {
    console.log(values);
  };
  return (
    <>
      <Form
        form={form}
        onFinish={onFinish}
        labelCol={{ span: '6', offset: '3' }}
        wrapperCol={{ span: '6' }}
        initialValues={{ username: '和泉纱雾', password: '123456' }}
        labelAlign={'right'}
        layout={'horizontal'}
        name={'yq'}
        requiredMark={true}
        scrollToFirstError={true}
        size={'middle'}
        validateMessages={validateMessages}
        onFieldsChange={onFieldsChange}
        onFinishFailed={onFinishFailed}
        onValuesChange={onValuesChange}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            { required: true },
            { type: 'enum', enum: ['和泉纱雾', '艾米莉亚', '御坂美琴'] },
          ]}
          colon={false}
          //getValueProps={getValueProps}
          hasFeedback={true}
          help={<>用户名在此填写</>}
          //htmlFor={'qwer'}
          //initialValue="admin"
          //label={<>用户名（标签文本）</>}
          //messageVariables={{ label: '用户名' }}
          //normalize={normalize}
          noStyle={false}
          validateFirst="parallel"
          //validateStatus="warning"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[
            { required: true },
            { type: 'string', max: 6, message: '最大长度不能高于6' },
            { type: 'string', min: 3, message: '最小长度不能低于3' },
            { whitespace: true, message: '所填内容不能全是空格！' },
          ]}
          hasFeedback={true}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="确认密码"
          name="surepassword"
          dependencies={['password']}
          rules={[
            { required: true },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('密码不一致!'));
              },
            }),
          ]}
          extra={<>要与上面的密码一致！</>}
          //getValueFromEvent={getValueFromEvent}
          hasFeedback={true}
          hidden={dispaly}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="性别"
          name="sex"
          rules={[{ required: true }]}
          hasFeedback={true}
        >
          <Select>
            <Select.Option value="boy">男</Select.Option>
            <Select.Option value="girl">女</Select.Option>
            <Select.Option value="other">其他</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.sex !== currentValues.sex
          }
        >
          {({ getFieldValue }) =>
            getFieldValue('sex') === 'other' ? (
              <Form.Item
                name="otherSex"
                label="其他性别"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            ) : null
          }
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginLeft: '360px' }}
          >
            登录
          </Button>
        </Form.Item>
      </Form>
      <Button type="primary" onClick={handlerReset}>
        重置
      </Button>
      <Button
        type="primary"
        style={{ marginLeft: '10px' }}
        onClick={handlerScroll}
      >
        滚到上面
      </Button>
      <Button
        type="primary"
        style={{ marginLeft: '10px' }}
        onClick={handlerSetFields}
      >
        设置值
      </Button>
      <Button
        type="primary"
        style={{ marginLeft: '10px' }}
        onClick={handlerSubmit}
      >
        另一个登录
      </Button>
      <Button
        type="primary"
        style={{ marginLeft: '10px' }}
        onClick={handlerDisplay}
      >
        显示/隐藏确认密码
      </Button>
      <h2>Form.List为字段提供数组化管理</h2>
      <Form
        labelCol={{ span: '6', offset: '3' }}
        wrapperCol={{ span: '6' }}
        onFinish={onFormListFinish}
      >
        <Form.List name="formList">
          {(fields, { add, remove }, { errors }) => (
            <>
              <Form.Item>
                <Button
                  type="primary"
                  onClick={() => {
                    add();
                  }}
                  style={{ marginBottom: '20px' }}
                >
                  添加一行
                </Button>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  style={{ position: 'relative', top: '-75px', left: '110px' }}
                  htmlType="submit"
                >
                  Submit
                </Button>
              </Form.Item>
              {fields.map((field) => {
                return (
                  <>
                    <Form.Item
                      {...field}
                      style={{ marginTop: '-25px' }}
                      // initialValue={'默认值'}
                      rules={[
                        {
                          required: true,
                          message: '不能为空!',
                        },
                      ]}
                    >
                      <Input style={{ width: '60%' }} />
                    </Form.Item>
                    <MinusCircleOutlined
                      className="dynamic-delete-button"
                      onClick={() => remove(field.name)}
                    />
                  </>
                );
              })}
            </>
          )}
        </Form.List>
      </Form>
    </>
  );
}
