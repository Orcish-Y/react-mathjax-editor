import { type MathJaxSet } from '.';
import symbolPicUrl from '../assets/images/symbol.png';
import greekPicUrl from '../assets/images/greek.png';
import { cursorPosition, insertedPosition } from '../constants';

export const shortcutTool: MathJaxSet[] = [
  {
    label: '常用符号',
    key: 'symbol',
    illustrate: symbolPicUrl,
    mathJaxGroup: [
      {
        mathJax: [
          '+',
          '-',
          '\\times',
          '{\\div}',
          '\\pm',
          '\\mp',
          '\\triangleleft',
          '\\triangleright',
          '\\cdot',
          '\\setminus',
          '\\star',
          '\\ast',
          '\\cup',
          '\\cap',
          '\\sqcup',
          '\\sqcap',
          '\\vee',
          '\\wedge',
          '\\circ',
          '\\bullet',
          '\\oplus',
          '\\ominus',
          '\\odot',
          '\\oslash',
          '\\otimes',
          '\\bigcirc',
          '\\diamond',
          '\\uplus',
          '\\bigtriangleup',
          '\\bigtriangledown',
          '\\lhd',
          '\\rhd',
          '\\unlhd',
          '\\unrhd',
          '\\amalg',
          '\\wr',
          '\\dagger',
          '\\ddagger',
        ],
        groupName: '二元运算符 Binary operations',
      },
      {
        mathJax: [
          '<',
          '>',
          '=',
          '\\le',
          '\\ge',
          '\\equiv',
          '\\ll',
          '\\gg',
          '\\doteq',
          '\\prec',
          '\\succ',
          '\\sim',
          '\\preceq',
          '\\succeq',
          '\\simeq',
          '\\approx',
          '\\subset',
          '\\supset',
          '\\subseteq',
          '\\supseteq',
          '\\sqsubset',
          '\\sqsupset',
          '\\sqsubseteq',
          '\\sqsupseteq',
          '\\cong',
          '\\Join',
          '\\bowtie',
          '\\propto',
          '\\in',
          '\\ni',
          '\\vdash',
          '\\dashv',
          '\\models',
          '\\mid',
          '\\parallel',
          '\\perp',
          '\\smile',
          '\\frown',
          '\\asymp',
          ':',
          '\\notin',
          '\\ne',
        ],
        groupName: '二元关系符 Binary relations',
      },
      {
        mathJax: [
          '\\gets',
          '\\to',
          '\\longleftarrow',
          '\\longrightarrow',
          '\\uparrow',
          '\\downarrow',
          '\\updownarrow',
          '\\leftrightarrow',
          '\\Uparrow',
          '\\Downarrow',
          '\\Updownarrow',
          '\\longleftrightarrow',
          '\\Leftarrow',
          '\\Longleftarrow',
          '\\Rightarrow',
          '\\Longrightarrow',
          '\\Leftrightarrow',
          '\\Longleftrightarrow',
          '\\mapsto',
          '\\longmapsto',
          '\\nearrow',
          '\\searrow',
          '\\swarrow',
          '\\nwarrow',
          '\\hookleftarrow',
          '\\hookrightarrow',
          '\\rightleftharpoons',
          '\\iff',
          '\\leftharpoonup',
          '\\rightharpoonup',
          '\\leftharpoondown',
          '\\rightharpoondown',
        ],
        groupName: '箭头符号 Arrows',
      },
      {
        mathJax: [
          '\\because',
          '\\therefore',
          '\\dots',
          '\\cdots',
          '\\vdots',
          '\\ddots',
          '\\forall',
          '\\exists',
          '\\nexists',
          '\\Finv',
          '\\neg',
          '\\prime',
          '\\emptyset',
          '\\infty',
          '\\nabla',
          '\\triangle',
          '\\Box',
          '\\Diamond',
          '\\bot',
          '\\top',
          '\\angle',
          '\\measuredangle',
          '\\sphericalangle',
          '\\surd',
          '\\diamondsuit',
          '\\heartsuit',
          '\\clubsuit',
          '\\spadesuit',
          '\\flat',
          '\\natural',
          '\\sharp',
        ],
        groupName: '其他符号 Others',
      },
    ],
  },
  {
    label: '希腊字母',
    key: 'greek',
    illustrate: greekPicUrl,
    mathJaxGroup: [
      {
        mathJax: [
          '\\alpha',
          '\\beta',
          '\\gamma',
          '\\delta',
          '\\epsilon',
          '\\varepsilon',
          '\\zeta',
          '\\eta',
          '\\theta',
          '\\vartheta',
          '\\iota',
          '\\kappa',
          '\\lambda',
          '\\mu',
          '\\nu',
          '\\xi',
          'o',
          '\\pi',
          '\\varpi',
          '\\rho',
          '\\varrho',
          '\\sigma',
          '\\varsigma',
          '\\tau',
          '\\upsilon',
          '\\phi',
          '\\varphi',
          '\\chi',
          '\\psi',
          '\\omega',
        ],
        groupName: '小写 Lowercase',
      },
      {
        mathJax: [
          '\\Gamma',
          '\\Delta',
          '\\Theta',
          '\\Lambda',
          '\\Xi',
          '\\Pi',
          '\\Sigma',
          '\\Upsilon',
          '\\Phi',
          '\\Psi',
          '\\Omega',
        ],
        groupName: '大写 Uppercase',
      },
      {
        mathJax: [
          '\\hbar',
          '\\imath',
          '\\jmath',
          '\\ell',
          '\\Re',
          '\\Im',
          '\\aleph',
          '\\beth',
          '\\gimel',
          '\\daleth',
          '\\wp',
          '\\mho',
          '\\backepsilon',
          '\\partial',
          '\\eth',
          '\\Bbbk',
          '\\complement',
          '\\circledS',
          '\\S',
          {
            demo: '\\mathbb{ABC}',
            mathJax: `\\mathbb{${insertedPosition}}`,
          },
          {
            demo: '\\mathfrak{ABC}',
            mathJax: `\\mathfrak{${insertedPosition}}`,
          },
          {
            demo: '\\mathcal{ABC}',
            mathJax: `\\mathcal{${insertedPosition}}`,
          },
          {
            demo: '\\mathrm{def}',
            mathJax: `\\mathrm{def}`,
          },
        ],
        groupName: '其他 Others',
      },
    ],
  },
  {
    label: '分数积分',
    key: 'greek',
    illustrate: greekPicUrl,
    mathJaxGroup: [
      {
        mathJax: [
          {
            demo: '\\frac{a}{b}',
            mathJax: `\\frac{${insertedPosition}}{${cursorPosition}}`,
          },
          {
            demo: 'x\\tfrac{a}{b}',
            mathJax: `${insertedPosition}\\tfrac{${cursorPosition}}{}`,
          },
          '\\mathrm{d}t',
          '\\frac{\\mathrm{d} y}{\\mathrm{d} x}',
          '\\partial t',
          '\\frac{\\partial y}{\\partial x}',
          '\\nabla\\psi',
          '\\frac{\\partial^2}{\\partial x_1\\partial x_2}y',
          '\\cfrac{1}{a + \\cfrac{7}{b + \\cfrac{2}{9}}} =c',
          `\\begin{equation}
   x = a_0 + \\cfrac{1}{a_1 
           + \\cfrac{1}{a_2 
           + \\cfrac{1}{a_3 + \\cfrac{1}{a_4} } } }
 \\end{equation}`,
        ],
        groupName: '分数 Fractions',
      },
      {
        mathJax: [
          {
            demo: '\\dot{a}',
            mathJax: `\\dot{${insertedPosition}}`,
          },
          {
            demo: '\\ddot{a}',
            mathJax: `\\ddot{${insertedPosition}}`,
          },
          {
            demo: `{f}'`,
            mathJax: `{${insertedPosition}}'`,
          },
          {
            demo: `{f}''`,
            mathJax: `{${insertedPosition}}''`,
          },
          {
            demo: '{f}^{(n)}',
            mathJax: `{${insertedPosition}}^{(${cursorPosition})}`,
          },
        ],
        groupName: '导数 Derivative',
      },
      {
        mathJax: [
          'a \\bmod b',
          'a \\equiv b \\pmod{m}',
          '\\gcd(m, n) ',
          '\\operatorname{lcm}(m, n)',
        ],
        groupName: '模算术 Modular arithmetic',
      },
    ],
  },
];
