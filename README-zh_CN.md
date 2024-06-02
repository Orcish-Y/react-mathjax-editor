<div align="center">

# react-mathjax-editor

[![NPM version](https://img.shields.io/npm/v/react-mathjax-editor.svg?style=flat)](https://npmjs.org/package/react-mathjax-editor)
[![NPM downloads](http://img.shields.io/npm/dm/react-mathjax-editor.svg?style=flat)](https://npmjs.org/package/react-mathjax-editor)

<div align="start">

## react 数学公式输入组件

#### 完整文档可在 https://github.com/Orcish-Y/react-mathjax-editor 上获得

&emsp;&emsp;本库提供了一个易于使用的 React 组件，用于数学公式的可视化输入。用户可以通过点击操作，在直观的输入面板上构建所需的数学公式，并且这些公式会实时地在界面上展示。此外，通过调整 schema（配置）参数，您可以定制输入面板中的公式符号，让这个组件更契合您的项目。无论是数学、化学还是其余科研符号，这款组件都能为您提供灵活、便捷的公式输入体验。安装和使用本组件非常简单，无需复杂的配置和 mathjax 知识。只需按照提供的指南进行操作，即可轻松将这款强大的数学公式输入组件集成到您的 React 项目中。

</div>
[English](./README.md) · 中文

#### Mathjax editor 实例

![Mathjax editor 实例](https://raw.githubusercontent.com/Orcish-Y/react-mathjax-editor/main/assets/images/mathjaxEditor.gif 'Mathjax editor 实例')

#### Mathjax editor panel 实例

![Mathjax editor panel 实例](https://raw.githubusercontent.com/Orcish-Y/react-mathjax-editor/main/assets/images/mathjaxEditorPanel.gif 'Mathjax editor panel 实例')

</div>

## 基本使用方法

### 📦 安装

```bash
npm i react-mathjax-editor --save
```

```bash
yarn add react-mathjax-editor
```

```bash
pnpm add react-mathjax-editor
```

### 🔨 用法

#### mathjax 编辑器

```tsx
import React, { useState } from 'react';
import { MathJaxEditor } from 'react-mathjax-editor';

export default () => {
  const [value, setValue] = useState<string>();
  return <MathJaxEditor value={value} onChange={setValue} />;
};
```

#### 配合表单使用

```tsx
import { Button, Form } from 'antd';
import React from 'react';
import { MathJaxEditor } from 'react-mathjax-editor';

export default  () => {
  return (
    <Form onFinish={(value) => console.log('do something')}>
      <Form.Item label="MachJax" name="machJax" rules={[{ required: true }]}>
        <MathJaxEditor  />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
```

#### mathjax 面板

```tsx
import React, { useState } from 'react';
import { MathJax, MathJaxContext, MathJaxPanel } from 'react-mathjax-editor';

export default () => {
  const [value, setValue] = useState<string>();
  return <MathJaxPanel value={value} onChange={setValue} />;
};
```

#### 渲染公式

```tsx
import React from 'react';
import { MathJax, MathJaxContext } from 'react-mathjax-editor';

export default () => {
  const methJaxString = `\\left( \\sum_{k=1}^n a_k b_k \\right)^{\\!\\!2}\\leq
\\left( \\sum_{k=1}^n a_k^2 \\right) \\left( \\sum_{k=1}^n b_k^2 \\right) `;

  return (
    <MathJaxContext>
      <MathJax inline dynamic>
        {`$$ ${methJaxString} $$`}
      </MathJax>
    </MathJaxContext>
  )
```

#### 自定义面板

```tsx
import { Space } from 'antd';
import React from 'react';
import {
  MathJaxEditor,
  MathJaxPanel,
  cursorPosition,
  insertedPosition,
  type Schema,
} from 'react-mathjax-editor';
import symbolPicUrl from '../assets/images/symbol.png';

const exampleSchema: Schema[] = [
  {
    key: 'machJax-series1',
    label: 'machJax-series1',
    machJaxSeries: [
      {
        label: 'mathJax-set1',
        key: 'mathJax-set1',
        illustrate: symbolPicUrl,
        mathJaxGroup: [
          {
            groupName: 'demo same as value',
            mathJax: ['+', '-', '\\times', '{\\div}'],
          },
          {
            groupName: 'demo same as value',
            mathJax: [
              {
                demo: '\\mathbb{ABC}',
                mathJax: `\\mathbb{${insertedPosition}}`,
              },
              {
                demo: '\\frac{a}{b}',
                mathJax: `\\\\frac{${insertedPosition}}{${cursorPosition}}`,
              },
            ],
          },
        ],
      },
      {
        label: 'mathJax-set2',
        key: 'mathJax-set2',
        illustrate:
          'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        mathJaxGroup: [
          {
            groupName: 'mathJax-group1',
            mathJax: ['\\prec', '\\subseteq', '\\perp'],
          },
        ],
      },
    ],
  },
  {
    key: 'machJax-series2',
    label: 'machJax-series2',
    machJaxSeries: [
      {
        label: 'mathJax-set3',
        key: 'mathJax-set3',
        illustrate: '',
        mathJaxGroup: [
          {
            groupName: 'mathJax-group1',
            mathJax: [
              '\\left(x-1\\right)\\left(x+3\\right)',
              '\\sqrt{a^2+b^2}',
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'machJax-series3',
    label: 'machJax-series3',
    machJaxSeries: [],
  },
];

export default () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <MathJaxEditor schema={exampleSchema} placeholder="mathJax placeholder" />
      <MathJaxPanel schema={exampleSchema} />
    </Space>
  );
};
```

### API

#### MathJaxEditor API

| 参数              | 说明                             | 类型                     | 默认值                |
| ----------------- | -------------------------------- | ------------------------ | --------------------- |
| value             | 输入框内容                       | string                   | -                     |
| onChange          | 输入框内容变化时的回调           | (value?: string) => void | -                     |
| schema            | 渲染面板中展示符号和代码的大对象 | Schema[]                 | 预设内容              |
| placeholder       | placeholder                      | string                   | '请添加 mathJax 公式' |
| className         | 语义化结构 class                 | string                   | -                     |
| style             | 语义化结构 style                 | React.CSSProperties      | -                     |
| disabled          | 是否禁用状态                     | boolean                  | false                 |
| ghost             | 不显示输入框的边框               | boolean                  | false                 |
| mathJaxPanelWidth | 面板的宽度                       | number \| string         | 334                   |
| mathJaxSetWidth   | mathJax 集合 popover 的宽度      | number \| string         | 334                   |

#### MathJaxPanel API

| 参数             | 说明                             | 类型                     | 默认值   |
| ---------------- | -------------------------------- | ------------------------ | -------- |
| value            | 输入框内容                       | string                   | -        |
| onChange         | 输入框内容变化时的回调           | (value?: string) => void | -        |
| schema           | 渲染面板中展示符号和代码的大对象 | Schema[]                 | 预设内容 |
| style            | 语义化结构 style                 | React.CSSProperties      | -        |
| width            | 面板的宽度                       | number \| string         | 334      |
| mathJaxSetWidth  | mathJax 集合 popover 的宽度      | number \| string         | 334      |
| autoFocusOnMount | 是否在组件挂在完成自动获得焦点   | boolean                  | false    |

#### better-react-mathjax API

better-react-mathjax API 请查看 [官方文档](https://www.npmjs.com/package/better-react-mathjax)

#### schema 说明

```ts
/** 用于定制 panel 面板的符号 */
export type Schema = {
  key: string;
  /** panel 上的 tab 的名字 */
  label: string;
  /** panel 上的 tab 的数据 */
  machJaxSeries: {
    key: string;
    /** 集合名 */
    label: string;
    /** 集合图标 */
    illustrate: string;
    /** 集合数据 */
    mathJaxGroup: {
      /** 分组名 */
      groupName: string;
      /** 分组数据 */
      mathJax: (
        | string
        | {
            /** 示例 */
            demo: string;
            /** mathjax */
            mathJax: string;
          }
      )[];
    }[];
  }[];
}[];
```

![schema 示意图](https://raw.githubusercontent.com/Orcish-Y/react-mathjax-editor/main/assets/images/schemaSchematicDiagram.jpg 'schema Schematic Diagram')

## Development

```bash
# install dependencies
$ yarn install

# develop library by docs demo
$ yarn start

# build library source code
$ yarn run build

# build library source code in watch mode
$ yarn run build:watch

# build docs
$ yarn run docs:build

# Locally preview the production build.
$ yarn run docs:preview

# check your project for potential problems
$ yarn run doctor
```

## 未来计划

1. 组件国际化
2. 将 antd 剔除

## LICENSE

MIT
