import React from 'react'
import { MathJaxData, MathJaxGroup } from '../schema';
import { MathJax, MathJaxContext } from 'better-react-mathjax';

export type handleClickMathJax = (value: MathJaxData) => void;

const MathJaxSpread: React.FC<{
    mathJaxGroup: MathJaxGroup[];
    onClick: handleClickMathJax;
  }> = ({ mathJaxGroup, onClick }) => {
  const prefixCls = 'mathjax-editor-panel-spread';
    const getMathJaxNode = (mathJax: MathJaxData) => {
      const demo = typeof mathJax === 'object' ? mathJax.demo : mathJax;
      return (
        <div>
          <MathJax
            onClick={() => {
              onClick(mathJax);
            }}
          >
            {`$$ ${demo} $$`}
          </MathJax>
        </div>
      );
    };
    return (
      <div className={prefixCls}>
        <MathJaxContext>
          {mathJaxGroup.map((item) => (
            <div key={item.groupName}>
              {item.groupName && <div className={`${prefixCls}-title`}>{item.groupName}</div>}
              <div className={`${prefixCls}-group-container`}>{item.mathJax.map(getMathJaxNode)}</div>
            </div>
          ))}
        </MathJaxContext>
      </div>
    );
  };

  export default MathJaxSpread
