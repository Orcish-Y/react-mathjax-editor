/**
 * title.zh-CN: machJax 公式展示
 * title.en-US: MachJax Formula Display
 * description.zh-CN: 这个包中导出了所有 [better-react-mathjax](https://www.npmjs.com/package/better-react-mathjax) 的组件，可用公式的渲染
 * description.en-US: This package exports all of the [better-react-mathjax](https://www.npmjs.com/package/better-react-mathjax) components for formula rendering
 */

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
  );
};
