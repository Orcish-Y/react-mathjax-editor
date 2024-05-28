/**
 * title.zh-CN: 基本使用
 * title.en-US: Basic Use
 * description.zh-CN: 基本使用方法，提供基本的一些操作，比如数据的受控，禁用等功能
 * description.en-US: Basic use method, provide some basic operations, such as data control, disable and other functions
 */

import { Space } from 'antd';
import React, { useState } from 'react';
import { MathJaxEditor } from 'react-mathjax-editor';

const placeholder = 'mathJax placeholder';

export default () => {
  const [value, setValue] = useState<string>();
  return (
    <Space direction="vertical" style={{ width: 300 }}>
      <MathJaxEditor placeholder={placeholder} />
      <MathJaxEditor
        placeholder={placeholder}
        mathJaxPanelWidth={480}
        mathJaxSetWidth={500}
        value={value}
        onChange={setValue}
      />
      <MathJaxEditor placeholder={placeholder} ghost />
      <MathJaxEditor placeholder={placeholder} disabled />
    </Space>
  );
};
