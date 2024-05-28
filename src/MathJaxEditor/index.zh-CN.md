# mathjax-editor

通过鼠标或键盘输入 mathJax 语法文本，渲染出对应公式图片。

## 代码演示

<code src="./demos/basic.tsx"></code>
<code src="./demos/mathJaxEditorWithForm.tsx"></code>
<code src="./demos/panel.tsx"></code>
<code src="./demos/customizePanelContent.tsx"></code>
<code src="./demos/mathJaxDisplay.tsx"></code>

## API

### MathJaxEditor API

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

### MathJaxPanel API

| 参数             | 说明                             | 类型                     | 默认值   |
| ---------------- | -------------------------------- | ------------------------ | -------- |
| value            | 输入框内容                       | string                   | -        |
| onChange         | 输入框内容变化时的回调           | (value?: string) => void | -        |
| schema           | 渲染面板中展示符号和代码的大对象 | Schema[]                 | 预设内容 |
| style            | 语义化结构 style                 | React.CSSProperties      | -        |
| width            | 面板的宽度                       | number \| string         | 334      |
| mathJaxSetWidth  | mathJax 集合 popover 的宽度      | number \| string         | 334      |
| autoFocusOnMount | 是否在组件挂在完成自动获得焦点   | boolean                  | false    |

### better-react-mathjax API

better-react-mathjax API 请查看[官方文档](https://www.npmjs.com/package/better-react-mathjax)
