import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { singin } from '../../api/login';

const onFinish = async(values: any) => {
//   console.log('Success:', values);
const {data}=await singin(values)
console.log(data)
localStorage.setItem("user",JSON.stringify(data))

};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
const Singin = () => {
  return (
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="email"
      name="email"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

   

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  )
}

export default Singin