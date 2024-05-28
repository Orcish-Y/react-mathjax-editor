import { Popover } from 'antd';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import MathJaxPanel, { MathJaxPanelRef } from './MathJaxPanel';
import { Schema } from './schema';

interface MathJaxPanelEditor {
  className?: string;
  value?: string;
  onChange?: (value?: string) => void;
  ['aria-invalid']?: string;
  ghost?: boolean;
  mathJaxPanelWidth?: number | string;
  mathJaxSetWidth?: number  | string;
  disabled?: boolean;
  style?: React.CSSProperties;
  placeholder?: string;
  schema?: Schema[];
}

const MathJaxEditor: React.FC<MathJaxPanelEditor> = ({
  value: propsValue,
  onChange,
  ghost = false,
  mathJaxPanelWidth = 334,
  mathJaxSetWidth,
  disabled,
  style,
  placeholder,
  schema,
  ...otherProps
}) => {
  const prefixCls = 'mathjax-editor-editor';
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>();
  const mathJaxRef = useRef<MathJaxPanelRef>(null);

  const hideMathJaxPanel = () => {
    setOpen(false);
  };

  return (
    <Popover
      open={disabled === true ? false : open}
      destroyTooltipOnHide
      overlayClassName={`${prefixCls}-popover`}
      overlayInnerStyle={{
        padding: 0,
        overflow: 'hidden',
        backgroundColor: '#fafafb',
      }}
      trigger="click"
      onOpenChange={(newOpen) => {
        setOpen(newOpen);
        // 打开面板时自动获得焦点
        if (newOpen && mathJaxRef?.current) {
          // 需要在 newOpen 改变的下一帧才能获取到 mathJax 面板
          setTimeout(() => {
            mathJaxRef?.current?.focus?.();
          });
        }
      }}
      content={
        <MathJaxPanel
          value={value}
          onChange={(value) => {
            setValue(value);
            onChange?.(value);
          }}
          ref={mathJaxRef}
          width={mathJaxPanelWidth}
          hideMathJaxPanel={hideMathJaxPanel}
          mathJaxSetWidth={mathJaxSetWidth}
          autoFocusOnMount
          schema={schema}
        />
      }
    >
      <div
        className={classNames([
          prefixCls,
          { [`${prefixCls}-active`]: open },
          // form 表单校验错误的红色边框
          { [`${prefixCls}-invalid`]: otherProps['aria-invalid'] },
          { [`${prefixCls}-ghost`]: ghost },
          { [`${prefixCls}-disabled`]: disabled },
        ])}
        style={style}
        onClick={() => {
          setOpen(true);
        }}
      >
        {propsValue ?? value ? (
          <MathJaxContext>
            <MathJax inline dynamic>
              {`$$ ${propsValue ?? value} $$`}
            </MathJax>
          </MathJaxContext>
        ) : (
          <span className={`${prefixCls}-placeholder`}>
            {placeholder ?? '请添加 mathJax 公式'}
          </span>
        )}
      </div>
    </Popover>
  );
};

export default MathJaxEditor;
