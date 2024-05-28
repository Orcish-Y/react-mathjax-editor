import { cursorPosition, insertedPosition } from './constants';
import { type MathJaxData } from './schema';

const executeEdit = (
  editor: any,
  range: any,
  text: any,
  cursorPosition?: { lineNumber: number; column: number },
) => {
  const option = { range, text };
  editor.executeEdits('mathJaxCommend', [option]);

  // 如果未选中文本，将光标位置设置到占位符中间
  if (cursorPosition) {
    editor.setPosition(cursorPosition);
    editor.focus();
  }
};

/**
 * 
 * @param editor 当前编辑器
 * @param mathJaxData 公式数据
 * @param placeholder 占位文本
 */
export const applyMathJax = (
  editor: any,
  mathJaxData: MathJaxData,
  placeholder = '',
) => {
  const selection = editor.getSelection();
  const selectedText = editor.getModel().getValueInRange(selection);

  // 如果没有选中文本，使用占位符替代
  const testToInsert = selectedText || placeholder;

  if (typeof mathJaxData === 'object') {
    
    const splitMathJax = mathJaxData.mathJax.split(insertedPosition);
    const replaceText = ` ${splitMathJax[0]}${testToInsert}${splitMathJax[1]} `;

    let cursorColumnNumber = selection.startColumn;
    if (testToInsert) {
      cursorColumnNumber =
        selection.startColumn + replaceText.split(cursorPosition)[0].length;
    } else {
      cursorColumnNumber = selection.startColumn + splitMathJax[0].length + 1;
    }

    executeEdit(editor, selection, replaceText.replace(cursorPosition, ''), {
      lineNumber: selection.startLineNumber,
      column: cursorColumnNumber,
    });
  } else {
    const replaceText = ` ${mathJaxData} `;
    executeEdit(editor, selection, replaceText, {
      lineNumber: selection.startLineNumber,
      column: selection.startColumn + replaceText.length,
    });
  }
};
