const keyboardKeysArr = [
  [
    {
      code: 'Backquote',
      keyEn: ['`', '~'],
      keyRu: ['ё', 'Ё'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'Digit1',
      keyEn: ['1', '!'],
      keyRu: ['1', '!'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'Digit2',
      keyEn: ['2', '@'],
      keyRu: ['2', '"'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'Digit3',
      keyEn: ['3', '#'],
      keyRu: ['3', '№'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'Digit4',
      keyEn: ['4', '$'],
      keyRu: ['4', ';'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'Digit4',
      keyEn: ['4', '$'],
      keyRu: ['4', ';'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'Digit5',
      keyEn: ['5', '%'],
      keyRu: ['5', '%'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'Digit5',
      keyEn: ['5', '%'],
      keyRu: ['5', '%'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'Digit6',
      keyEn: ['6', '^'],
      keyRu: ['6', ':'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'Digit7',
      keyEn: ['7', '&'],
      keyRu: ['7', '?'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'Digit8',
      keyEn: ['8', '*'],
      keyRu: ['8', '*'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'Digit9',
      keyEn: ['9', '('],
      keyRu: ['9', '('],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'Digit0',
      keyEn: ['0', ')'],
      keyRu: ['0', ')'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'Minus',
      keyEn: ['-', '_'],
      keyRu: ['-', '_'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'Equal',
      keyEn: ['=', '+'],
      keyRu: ['=', '+'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'Backspace',
      key: 'Backspace',
      keyClass: 'keyboard__key keyboard__key_backspace',
    },
  ],
  [
    {
      code: 'Tab',
      key: 'Tab',
      keyClass: 'keyboard__key keyboard__key_tab',
    },
    {
      code: 'KeyQ',
      keyEn: ['q', 'Q'],
      keyRu: ['й', 'Й'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'KeyW',
      keyEn: ['w', 'W'],
      keyRu: ['ц', 'Ц'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'KeyE',
      keyEn: ['e', 'E'],
      keyRu: ['у', 'У'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'KeyR',
      keyEn: ['r', 'R'],
      keyRu: ['к', 'К'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'KeyT',
      keyEn: ['t', 'T'],
      keyRu: ['е', 'Е'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'KeyY',
      keyEn: ['y', 'Y'],
      keyRu: ['н', 'Н'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'KeyU',
      keyEn: ['u', 'U'],
      keyRu: ['г', 'Г'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'KeyI',
      keyEn: ['i', 'I'],
      keyRu: ['ш', 'Ш'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'KeyO',
      keyEn: ['o', 'O'],
      keyRu: ['щ', 'Щ'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'KeyP',
      keyEn: ['p', 'P'],
      keyRu: ['з', 'З'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'BracketLeft',
      keyEn: ['[', '{'],
      keyRu: ['х', 'Х'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'BracketRight',
      keyEn: [']', '}'],
      keyRu: ['ъ', 'Ъ'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'Backslash',
      keyEn: ['\\', '|'],
      keyRu: ['\\', '/'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'Delete',
      key: 'Del',
      keyClass: 'keyboard__key keyboard__key_del',
    },
  ],
  [
    {
      code: 'CapsLock',
      key: 'Caps Lock',
      keyClass: 'keyboard__key keyboard__key_caps-lock',
    },
    {
      code: 'KeyA',
      keyEn: ['a', 'A'],
      keyRu: ['ф', 'Ф'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'KeyS',
      keyEn: ['s', 'S'],
      keyRu: ['ы', 'Ы'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'KeyD',
      keyEn: ['d', 'D'],
      keyRu: ['в', 'В'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'KeyF',
      keyEn: ['f', 'F'],
      keyRu: ['а', 'А'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'KeyG',
      keyEn: ['g', 'G'],
      keyRu: ['п', 'П'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'KeyH',
      keyEn: ['h', 'H'],
      keyRu: ['р', 'Р'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'KeyJ',
      keyEn: ['j', 'J'],
      keyRu: ['о', 'О'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'KeyK',
      keyEn: ['k', 'K'],
      keyRu: ['л', 'Л'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'KeyL',
      keyEn: ['l', 'L'],
      keyRu: ['д', 'Д'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'Semicolon',
      keyEn: [';', ':'],
      keyRu: ['ж', 'Ж'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'Quote',
      keyEn: ["'", '"'],
      keyRu: ['э', 'Э'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'Enter',
      key: 'Enter',
      keyClass: 'keyboard__key keyboard__key_enter',
    },
  ],
  [
    {
      code: 'ShiftLeft',
      key: 'Shift',
      keyClass: 'keyboard__key keyboard__key_shift keyboard__key_shift-left',
    },
    {
      code: 'KeyZ',
      keyEn: ['z', 'Z'],
      keyRu: ['я', 'Я'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'KeyX',
      keyEn: ['x', 'X'],
      keyRu: ['ч', 'Ч'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'KeyC',
      keyEn: ['c', 'C'],
      keyRu: ['с', 'С'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'KeyV',
      keyEn: ['v', 'V'],
      keyRu: ['м', 'М'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'KeyB',
      keyEn: ['b', 'B'],
      keyRu: ['и', 'И'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'KeyN',
      keyEn: ['n', 'N'],
      keyRu: ['т', 'Т'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'KeyM',
      keyEn: ['m', 'M'],
      keyRu: ['ь', 'Ь'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'Comma',
      keyEn: [',', '<'],
      keyRu: ['б', 'Б'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'Period',
      keyEn: ['.', '>'],
      keyRu: ['ю', 'Ю'],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'Slash',
      keyEn: ['/', '?'],
      keyRu: ['.', ','],
      keyClass: 'keyboard__key',
      keyForPrint: true,
    },
    {
      code: 'ArrowUp',
      key: '🢑',
      keyEn: ['↑', '↑'],
      keyRu: ['↑', '↑'],
      keyClass: 'keyboard__key keyboard__key_up',
    },
    {
      code: 'ShiftRight',
      key: 'Shift',
      keyClass: 'keyboard__key keyboard__key_shift keyboard__key_shift-right',
    },
  ],
  [
    {
      code: 'ControlLeft',
      key: 'Ctrl',
      keyClass: 'keyboard__key keyboard__key_ctrl keyboard__key_ctrl-left',
    },
    {
      code: 'MetaLeft',
      key: 'Win',
      keyClass: 'keyboard__key keyboard__key_win',
    },
    {
      code: 'AltLeft',
      key: 'Alt',
      keyClass: 'keyboard__key keyboard__key_alt keyboard__key_alt-left',
    },
    {
      code: 'Space',
      key: ' ',
      keyClass: 'keyboard__key keyboard__key_space"',
    },
    {
      code: 'AltRight',
      key: 'Alt',
      keyClass: 'keyboard__key keyboard__key_alt keyboard__key_alt-right',
    },
    {
      code: 'ArrowLeft',
      key: '🢐',
      keyEn: ['←', '←'],
      keyRu: ['←', '←'],
      keyClass: 'keyboard__key keyboard__key_left',
    },
    {
      code: 'ArrowDown',
      key: '🢓',
      keyEn: ['↓', '↓'],
      keyRu: ['↓', '↓'],
      keyClass: 'keyboard__key keyboard__key_down',
    },
    {
      code: 'ArrowRight',
      key: '🢒',
      keyEn: ['→', '→'],
      keyRu: ['→', '→'],
      keyClass: 'keyboard__key keyboard__key_right',
    },
    {
      code: 'ControlRight',
      key: 'Ctrl',
      keyClass: 'keyboard__key keyboard__key_ctrl keyboard__key_ctrl-right',
    },
  ],
];

class Key {
  constructor(textContent, className, id, print = false, printValue) {
    this.textContent = textContent;
    this.className = className;
    this.id = id;
    this.print = print;
    this.printValue = printValue;
  }

  createKey(parent) {
    const keyElement = createElement('div', this.className, parent);
    keyElement.id = this.id;
    if (this.print) {
      keyElement.dataset.print = true;
    }
  }
}

const body = document.querySelector('body');
let langValue = 'en'

function createElement(tagName, className, parent) {
  const element = document.createElement(tagName);
  element.className = className;
  parent.prepend(element);

  return element;
}

const container = createElement('div', 'container', body);
const keyboardWrapper = createElement('div', 'keyboard__wrapper', container);
const keyboardKeys = createElement('div', 'keyboard__keys', keyboardWrapper);
const fifthRow = createElement('div', 'keyboard__row', keyboardKeys);
fifthRow.id = 'fifthRow';
const fourthRow = createElement('div', 'keyboard__row', keyboardKeys);
fourthRow.id = 'fourthRow';
const thirdRow = createElement('div', 'keyboard__row', keyboardKeys);
thirdRow.id = 'thirdRow';
const secondRow = createElement('div', 'keyboard__row', keyboardKeys);
secondRow.id = 'secondRow';
const firstRow = createElement('div', 'keyboard__row', keyboardKeys);
firstRow.id = 'firstRow';
keyboardKeysArr[0].forEach((keyValue) => {
  if (langValue === 'en') {

    new Key(textContent, className, id, dataAtribute = false)
  }
})

