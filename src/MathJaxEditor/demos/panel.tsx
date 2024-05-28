/**
 * title.zh-CN: machJax 输入面板
 * title.en-US: MachJax Input Panel
 * description.zh-CN: machJax 输入面板，可以放入任何你放的地方，搭配公式渲染器使用
 * description.en-US: MachJax input panel, you can put it anywhere you want, with formula renderer
 */

import React, { useState } from 'react';
import { MathJax, MathJaxContext, MathJaxPanel } from 'react-mathjax-editor';

export default () => {
  const [value, setValue] = useState<string>();
  return (
    <>
      <div>
        formula:
        <MathJaxContext>
          <MathJax inline dynamic>
            {`$$ ${value} $$`}
          </MathJax>
        </MathJaxContext>
      </div>
      <MathJaxPanel value={value} onChange={setValue} />
    </>
  );
};
