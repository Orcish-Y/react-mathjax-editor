import { MathJaxSet } from '.';
import algebraPicUrl from '../assets/images/algebra.png';

export const formulaTemplate: MathJaxSet[] = [
  {
    label: '代数',
    key: 'algebra',
    illustrate: algebraPicUrl,
    mathJaxGroup: [
      {
        mathJax: [
          '\\left(x-1\\right)\\left(x+3\\right)',
          '\\sqrt{a^2+b^2}',
          `\\begin{array}{l} 
        a\\mathop{{x}}\\nolimits^{{2}}+bx+c=0 \\\\ 
        \\Delta =\\mathop{{b}}\\nolimits^{{2}}-4ac \\\\ 
        \\left\\{\\begin{matrix} 
        \\Delta \\gt 0\\text{方程有两个不相等的实根} \\\\ 
        \\Delta = 0\\text{方程有两个相等的实根} \\\\ 
        \\Delta \\lt 0\\text{方程无实根} 
      \\end{matrix}\\right.    
      \\end{array} `,
        ],
        groupName: '',
      },
    ],
  },
];
