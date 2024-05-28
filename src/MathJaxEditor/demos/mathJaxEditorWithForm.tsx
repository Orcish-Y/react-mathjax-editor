/**
 * title.zh-CN: 自定义表单控件
 * title.en-US: Customized Form Controls
 * description.zh-CN: 配合表单使用，直接 Form.Item 组件中（只在 antd form 中验证过，其他 ui 库尚未验证）
 * description.en-US: Used with forms, directly in the Form.Item component (only verified in antd form, not in other ui libraries)
 */

import { Button, Form, Input } from 'antd';
import React from 'react';
import { MathJaxEditor } from 'react-mathjax-editor';

const App: React.FC = () => {
  return (
    <Form onFinish={(value) => console.log(value)}>
      <Form.Item label="Field A" name="fieldA" rules={[{ required: true }]}>
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="MachJax" name="machJax" rules={[{ required: true }]}>
        <MathJaxEditor placeholder="mathJax placeholder" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
