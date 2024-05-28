/**
 * title.zh-CN: 自定义 mathJax 面板内容
 * title.en-US: Customize MathJax Panel Content
 * description.zh-CN: 您可以自定义 mathJax 面板中预设的符号和公式，按照 schema 格式的对象，即可渲染您想要的效果。$INS(insertedPosition)：当插入 mathJax 前有选中内容，会讲选中的内容填充到 $INS 所在的位置，如果没有选中内容，$INS 为插入后光标所在的位置。$CURSOR(cursorPosition)：当 $INS 填充内容后光标所在的位置。
 * description.en-US: You can customize the preset symbols and formulas in the mathJax panel to render objects in schema format to the effect you want.  $INS(insertedPosition)：If the content is selected before mathJax is inserted, the selected content is filled to the position where $INS is located; if the content is not selected, $INS is the position of the cursor after insertion.  $CURSOR(cursorPosition)：The position of the cursor when $INS fills the contents.
 */

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

const schema: Schema[] = [
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
      <MathJaxEditor schema={schema} placeholder="mathJax placeholder" />
      <MathJaxPanel schema={schema} />
    </Space>
  );
};
