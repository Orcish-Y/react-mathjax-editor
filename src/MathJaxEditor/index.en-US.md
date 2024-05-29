# mathjax-editor

Through the mouse or keyboard input mathJax syntax text, rendering the corresponding formula picture.

## Demo

<code src="./demos/basic.tsx"></code>
<code src="./demos/mathJaxEditorWithForm.tsx"></code>
<code src="./demos/panel.tsx"></code>
<code src="./demos/customizePanelContent.tsx"></code>
<code src="./demos/mathJaxDisplay.tsx"></code>

## API

### MathJaxEditor API

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

### MathJaxPanel API

| Parameters       | Explanation                                                            | Type                     | Default Value      |
| ---------------- | ---------------------------------------------------------------------- | ------------------------ | ------------------ |
| value            | Input field content                                                    | string                   | -                  |
| onChange         | Callback when the contents of the input box change                     | (value?: string) => void | -                  |
| schema           | The large object that displays symbols and code in the rendering panel | Schema[]                 | Predefined content |
| style            | Semantic structure style                                               | React.CSSProperties      | -                  |
| width            | Panel width                                                            | number \| string         | 334                |
| mathJaxSetWidth  | Width of the mathJax collection popover                                | number \| string         | 334                |
| autoFocusOnMount | Whether the component hangs on completion automatically gets focus     | boolean                  | false              |

### better-react-mathjax API

better-react-mathjax API Please check [official documentation](https://www.npmjs.com/package/better-react-mathjax)

### schema 说明

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

![schema schematic diagram](./assets/images/schemaSchematicDiagram.jpg 'schema schematic diagram')
