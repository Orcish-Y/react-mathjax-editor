<div align="center">

# react-mathjax-editor

[![NPM version](https://img.shields.io/npm/v/react-mathjax-editor.svg?style=flat)](https://npmjs.org/package/react-mathjax-editor)
[![NPM downloads](http://img.shields.io/npm/dm/react-mathjax-editor.svg?style=flat)](https://npmjs.org/package/react-mathjax-editor)

<div align="start">

## mathjax editor for react

#### Note: The full documentation is available at https://github.com/Orcish-Y/react-mathjax-editor

&emsp;&emsp;This library provides a user-friendly React component for visualizing mathematical formulas. Users can build the desired mathematical formulas by clicking and interacting with an intuitive input panel, and these formulas will be displayed in real-time on the interface. Additionally, by adjusting schema (configuration) parameters, you can customize the formula symbols in the input panel, making this component better suited to your project. Whether it's mathematical, chemical, or other scientific symbols, this component can provide you with a flexible and convenient formula input experience. Installing and using this component is very simple, without complex configuration or knowledge of mathjax. Simply follow the provided guidelines, and you can easily integrate this powerful mathematical formula input component into your React project.

</div>
English · [中文](./README.md)

#### Mathjax editor demo

![Mathjax editor demo](assets\images\mathjaxEditor.gif 'Mathjax editor demo')

#### Mathjax editor panel demo

![Mathjax editor panel demo](assets\images\mathjaxEditorPanel.gif 'Mathjax editor panel demo')

</div>

## Basic Usage

### 📦 Install

```bash
npm i react-mathjax-editor --save
```

```bash
yarn add react-mathjax-editor
```

```bash
pnpm add react-mathjax-editor
```

### 🔨 Usage

#### Mathjax Editor

```tsx
import React, { useState } from 'react';
import { MathJaxEditor } from 'react-mathjax-editor';

export default () => {
  const [value, setValue] = useState<string>();
  return <MathJaxEditor value={value} onChange={setValue} />;
};
```

#### Use with forms

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

#### Mathjax Panel

```tsx
import React, { useState } from 'react';
import { MathJax, MathJaxContext, MathJaxPanel } from 'react-mathjax-editor';

export default () => {
  const [value, setValue] = useState<string>();
  return <MathJaxPanel value={value} onChange={setValue} />;
};
```

#### Rendering formula

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

#### Custom Mathjax Panel

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

| Parameters        | Explanation                                                            | Type                     | Default Value         |
| ----------------- | ---------------------------------------------------------------------- | ------------------------ | --------------------- |
| value             | Input field content                                                    | string                   | -                     |
| onChange          | Callback when the contents of the input field change                   | (value?: string) => void | -                     |
| schema            | The large object that displays symbols and code in the rendering panel | Schema[]                 | Predefined content    |
| placeholder       | placeholder                                                            | string                   | '请添加 mathJax 公式' |
| className         | Semantic structure class                                               | string                   | -                     |
| style             | Semantic structure style                                               | React.CSSProperties      | -                     |
| disabled          | Whether to disable the state                                           | boolean                  | false                 |
| ghost             | Whether to hide the border of the input border                         | boolean                  | false                 |
| mathJaxPanelWidth | Panel width                                                            | number \| string         | 334                   |
| mathJaxSetWidth   | Width of the mathJax collection popover                                | number \| string         | 334                   |

#### MathJaxPanel API

| Parameters       | Explanation                                                            | Type                     | Default Value      |
| ---------------- | ---------------------------------------------------------------------- | ------------------------ | ------------------ |
| value            | Input field content                                                    | string                   | -                  |
| onChange         | Callback when the contents of the input box change                     | (value?: string) => void | -                  |
| schema           | The large object that displays symbols and code in the rendering panel | Schema[]                 | Predefined content |
| style            | Semantic structure style                                               | React.CSSProperties      | -                  |
| width            | Panel width                                                            | number \| string         | 334                |
| mathJaxSetWidth  | Width of the mathJax collection popover                                | number \| string         | 334                |
| autoFocusOnMount | Whether the component hangs on completion automatically gets focus     | boolean                  | false              |

#### better-react-mathjax API

better-react-mathjax API Please check [official documentation](https://www.npmjs.com/package/better-react-mathjax)

#### schema explain

```ts
/** Symbols used to customize the panel */
export type Schema = {
  key: string;
  /** The tab name on the panel */
  label: string;
  /** Panel tab data */
  machJaxSeries: {
    key: string;
    /** Collection name */
    label: string;
    /** Collection Icon */
    illustrate: string;
    /** Collection data */
    mathJaxGroup: {
      /** Group name */
      groupName: string;
      /** Grouped data */
      mathJax: (
        | string
        | {
            /** demo */
            demo: string;
            /** mathjax */
            mathJax: string;
          }
      )[];
    }[];
  }[];
}[];
```

![schema schematic diagram](assets\images\schemaSchematicDiagram.jpg 'Magic Gardens')

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

1. Component internationalization
2. Remove antd to make components more generic

## LICENSE

MIT
