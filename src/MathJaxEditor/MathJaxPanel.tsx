import MonacoEditor, { loader, type EditorProps } from '@monaco-editor/react';
import { Tabs } from 'antd';
import React, {
  ForwardRefExoticComponent,
  RefAttributes,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import MachJaxSeriesPanel from './component/MachJaxSeriesPanel';
import './index.less';
import { Schema, schema as schemaMeta } from './schema';

interface MathJaxPanelProps {
  value?: string;
  onChange?: (value?: string) => void;
  style?: React.CSSProperties;
  width?: number | string;
  mathJaxSetWidth?: number | string;
  mathJaxSetMaxHeight?: number | string;
  autoFocusOnMount?: boolean;
  schema?: Schema[];
}

export interface MathJaxPanelRef {
  focus: () => void;
}

loader.config({
  'vs/nls': {
    availableLanguages: {
      '*': 'zh-cn',
    },
  },
});

const monacoOptions = {
  fontSize: 14,
  lineNumbers: 'off',
  mouseWheelZoom: false,
  scrollBeyondLastLine: false,
  minimap: {
    enabled: false,
  },
  scrollbar: {
    verticalScrollbarSize: 8,
    horizontalScrollbarSize: 8,
  },
};

const MathJaxPanel: ForwardRefExoticComponent<
  MathJaxPanelProps & RefAttributes<MathJaxPanelRef>
> = forwardRef(
  (
    {
      value: propsValue,
      onChange,
      width = '100%',
      mathJaxSetMaxHeight,
      mathJaxSetWidth: propsMathJaxSetWidth,
      autoFocusOnMount,
      schema = schemaMeta,
    },
    ref,
  ) => {
    const prefixCls = 'mathjax-editor-panel';
    const [value, setValue] = useState<string>();

    const editorRef = useRef<any>(null);
    useImperativeHandle(ref, () => ({
      focus: () => {
        if (editorRef?.current) {
          editorRef.current.focus();
        }
      },
    }));

    let mathJaxSetWidth: string | number = propsMathJaxSetWidth!;
    if (!propsMathJaxSetWidth) {
      if (width === '100%') {
        mathJaxSetWidth = 480;
      } else if (typeof width === 'number') {
        mathJaxSetWidth = Math.min(width, 480);
      } else {
        mathJaxSetWidth = width;
      }
    }

    const tabItems = schema.map((item) => ({
      key: item.key,
      label: item.label,
      children: (
        <MachJaxSeriesPanel
          mathJaxSetWidth={mathJaxSetWidth}
          mathJaxSetMaxHeight={mathJaxSetMaxHeight}
          editorRef={editorRef}
          machJaxSeries={item.machJaxSeries}
        />
      ),
    }));

    const handleChange = (value?: string) => {
      setValue(value);
      onChange?.(value);
    };

    const handleMound: EditorProps['onMount'] = (editor) => {
      editorRef.current = editor;
      if (autoFocusOnMount) {
        editor.focus();
      }
    };

    return (
      <div style={{ width }} className={prefixCls}>
        <Tabs className={`${prefixCls}-tabs`} items={tabItems} />
        <div className={`${prefixCls}-monaco-editor`}>
          <MonacoEditor
            language="text"
            value={propsValue ?? value}
            onChange={handleChange}
            onMount={handleMound}
            options={monacoOptions}
          />
        </div>
      </div>
    );
  },
);

export default MathJaxPanel;
