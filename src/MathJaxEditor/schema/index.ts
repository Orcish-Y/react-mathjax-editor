import { formulaTemplate } from './formulaTemplate';
import { shortcutTool } from './shortcutTool';

export type MathJaxData =
  | string
  | {
      demo: string;
      mathJax: string;
    };

export type MathJaxGroup = {
  mathJax: MathJaxData[];
  groupName: string;
};

export type MathJaxSet = {
  label: string;
  key: string;
  illustrate: string;
  mathJaxGroup: MathJaxGroup[];
};

export type Schema = {
  key: string;
  label: string;
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
