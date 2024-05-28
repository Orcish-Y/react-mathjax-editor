import { Image, Popover, Space } from 'antd';
import { MathJaxContext } from 'better-react-mathjax';
import classNames from 'classnames';
import React, { useState } from 'react';
import { MathJaxSet as MathJaxSetData } from '../schema';
import { applyMathJax } from '../utils';
import MathJaxSpread, { handleClickMathJax } from './MathJaxSpread';
import CaretDownPicUrl from '../assets/images/AntDesignCaretDownFilled.png';

const MathJaxSet: React.FC<{
  mathJaxSet: MathJaxSetData;
  onClick: handleClickMathJax;
  prefixCls?: string;
  width?: number | string;
  maxHeight?: number | string;
}> = ({ mathJaxSet, onClick, prefixCls = '', width, maxHeight }) => {
  const [active, setActive] = useState(false);
  return (
    <Popover
      className={classNames([
        `${prefixCls}-mathJax-group`,
        { [`${prefixCls}-mathJax-set-active`]: active },
      ])}
      key={mathJaxSet.key}
      onOpenChange={setActive}
      overlayStyle={{
        width,
        maxHeight,
      }}
      content={
        <MathJaxSpread
          onClick={onClick}
          mathJaxGroup={mathJaxSet.mathJaxGroup}
        />
      }
    >
      <Image
        width={50}
        height={50}
        src={mathJaxSet.illustrate}
        preview={false}
      />
      <div className={`${prefixCls}-mathJax-group-label`}>
        {mathJaxSet.label}
      </div>
      <div className={`${prefixCls}-mathJax-group-cart-down`}>
        <Image height={8} src={CaretDownPicUrl} preview={false} />
      </div>
    </Popover>
  );
};

interface MachJaxSeriesPanelProps {
  machJaxSeries: MathJaxSetData[];
  editorRef: any;
  mathJaxSetWidth?: number | string;
  mathJaxSetMaxHeight?: number | string;
}

const MachJaxSeriesPanel: React.FC<MachJaxSeriesPanelProps> = ({
  machJaxSeries,
  editorRef,
  mathJaxSetWidth,
  mathJaxSetMaxHeight,
}) => {
  const prefixCls = 'mathjax-editor-panel-series-panel';
  const handleClick: handleClickMathJax = (mathJax) => {
    applyMathJax(editorRef.current, mathJax);
  };

  return (
    <div className={prefixCls}>
      <MathJaxContext>
        <Space>
          {machJaxSeries.map((item) => (
            <MathJaxSet
              prefixCls={prefixCls}
              key={item.key}
              onClick={handleClick}
              mathJaxSet={item}
              width={mathJaxSetWidth}
              maxHeight={mathJaxSetMaxHeight}
            />
          ))}
        </Space>
      </MathJaxContext>
    </div>
  );
};

export default MachJaxSeriesPanel;
