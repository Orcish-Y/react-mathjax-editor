import { formulaTemplate } from './formulaTemplate';
import { shortcutTool } from './shortcutTool';

/** mathjax 符号 */
export type MathJaxData =
  | string
  | {
      /** 实例 */
      demo: string;
      /** mathjax */
      mathJax: string;
    };

/** 集合中的分组 */
export type MathJaxGroup = {
  /** 分组名 */
  groupName: string;
  /** 分组数据 */
  mathJax: MathJaxData[];
};

/** panel tab 中的集合 */
export type MathJaxSet = {
  key: string;
  /** 集合名 */
  label: string;
  /** 集合图标 */
  illustrate: string;
  /** 集合数据 */
  mathJaxGroup: MathJaxGroup[];
};

/** 用于定制 panel 面板的符号 */
export type Schema = {
  key: string;
  /** panel 上的 tab 的名字 */
  label: string;
  /** panel 上的 tab 的数据*/
  machJaxSeries: MathJaxSet[];
};

export const schema: Schema[] = [
  {
    key: 'shortcut-tool',
    label: '快捷输入',
    machJaxSeries: shortcutTool,
  },
  {
    key: 'formula-template',
    label: '公式模板',
    machJaxSeries: formulaTemplate,
  },
];
