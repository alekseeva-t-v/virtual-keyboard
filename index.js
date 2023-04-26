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
      keyClass: 'keyboard__key keyboard__key_space',
      keyForPrint: true,
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
  constructor(textContent, className, id, print = false, printShift = '') {
    this.textContent = textContent;
    this.className = className;
    this.id = id;
    this.print = print;
    this.printShift = printShift;
  }

  createKey(parent) {
    const keyElement = createElement('div', this.className, parent);
    keyElement.id = this.id;
    keyElement.textContent = this.textContent;
    keyElement.dataset.print = this.print;
    keyElement.dataset.printShift = this.printShift;
  }
}

const body = document.querySelector('body');
let langValue = 'en';
let capsLockPressed = false;
let shiftPressed = false;

function createElement(tagName, className, parent) {
  const element = document.createElement(tagName);
  element.className = className;
  parent.prepend(element);
  return element;
}

function createKeyboard(keyValue, parent) {
  let text = '';
  let printKey = '';
  if (langValue === 'en') {
    text = keyValue.key ? keyValue.key : keyValue.keyEn[0].toUpperCase();
    printKey = keyValue.keyEn ? keyValue.keyEn[1] : '';
  } else {
    text = keyValue.key ? keyValue.key : keyValue.keyRu[0].toUpperCase();
    printKey = keyValue.keyRu ? keyValue.keyRu[1] : '';
  }
  const key = new Key(
    text,
    keyValue.keyClass,
    keyValue.code,
    keyValue.keyForPrint,
    printKey
  );
  key.createKey(parent);
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

const textField = createElement('textarea', 'text', container);

keyboardKeysArr[0]
  .reverse()
  .forEach((keyValue) => createKeyboard(keyValue, firstRow));
keyboardKeysArr[1]
  .reverse()
  .forEach((keyValue) => createKeyboard(keyValue, secondRow));
keyboardKeysArr[2]
  .reverse()
  .forEach((keyValue) => createKeyboard(keyValue, thirdRow));
keyboardKeysArr[3]
  .reverse()
  .forEach((keyValue) => createKeyboard(keyValue, fourthRow));
keyboardKeysArr[4]
  .reverse()
  .forEach((keyValue) => createKeyboard(keyValue, fifthRow));

const keys = document.querySelectorAll('.keyboard__key');
const keysForPrint = document.querySelectorAll(
  '.keyboard__key[data-print = true]'
);
const spaceKey = document.querySelector('.keyboard__key_space');
const shiftLeftKey = document.querySelector('.keyboard__key_shift-left');
const shiftRightKey = document.querySelector('.keyboard__key_shift-right');
const capsLockKey = document.querySelector('.keyboard__key_caps-lock');
const deleteKey = document.querySelector('.keyboard__key_del');
const arrowUpKey = document.querySelector('.keyboard__key_up');
const arrowDownKey = document.querySelector('.keyboard__key_down');
const arrowLeftKey = document.querySelector('.keyboard__key_left');
const arrowRightKey = document.querySelector('.keyboard__key_right');
const controlLeftKey = document.querySelector('.keyboard__key_ctrl-left');
const controlRightKey = document.querySelector('.keyboard__key_ctrl-right');
const winKey = document.querySelector('.keyboard__key_win');
const altLeftKey = document.querySelector('.keyboard__key_alt-left');
const altRightKey = document.querySelector('.keyboard__key_alt-right');

function addedActiveClass(key) {
  key.classList.add('active');
}

function removedClass(code, key) {
  if (event.code === code) {
    key.classList.remove('active');
    key.classList.add('remove');
  }
}

function addedCancelClass(code, oppositeKey) {
  if (event.code === code) {
    oppositeKey.classList.remove('active');
  }
}

function removedCancelClass(code, key, oppositeKey) {
  if (event.code === code) {
    key.classList.remove('active');
    oppositeKey.classList.remove('remove');
  }
}

function addingTextToTextField(text) {
  if (capsLockPressed) {
    textField.textContent += text;
  } else {
    textField.textContent += text.toLowerCase();
  }
}

function executeOnClickCapsLock() {
  if (!capsLockKey.classList.contains('active')) {
    setTimeout(() => {
      capsLockKey.classList.add('active');
      capsLockPressed = true;
    }, 200);
  } else {
    setTimeout(() => {
      capsLockKey.classList.remove('active');
      capsLockPressed = false;
    }, 200);
  }
}

window.addEventListener('keydown', function (event) {
  keys.forEach((key) => {
    if (event.code === key.id && event.code !== 'CapsLock') {
      addedActiveClass(key);
    }
  });

  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    shiftPressed = true;
  }

  keysForPrint.forEach((key) => {
    if (event.code === key.id && !shiftPressed) {
      addingTextToTextField(key.textContent);
    }

    if (event.code === key.id && shiftPressed) {
      addingTextToTextField(key.dataset.printShift);
    }
  });

  if (
    (event.code === 'ControlRight' || event.code === 'ControlLeft') &&
    shiftPressed
  ) {
    if (langValue === 'en') {
      langValue = 'ru';
    } else {
      langValue = 'en';
    }
  }

  if (event.code === 'ArrowUp') {
    addingTextToTextField('↑');
  }

  if (event.code === 'ArrowDown') {
    addingTextToTextField('↓');
  }

  if (event.code === 'ArrowLeft') {
    addingTextToTextField('←');
  }

  if (event.code === 'ArrowRight') {
    addingTextToTextField('→');
  }

  if (event.code === 'CapsLock') {
    executeOnClickCapsLock();
  }
});

// Назначаем действия при отжатии клавиш
window.addEventListener('keyup', function (event) {
  keys.forEach((key) => {
    if (event.code === key.id && event.code !== 'CapsLock') {
      key.classList.remove('active');
      key.classList.add('remove');
    }

    setTimeout(() => {
      key.classList.remove('remove');
    }, 200);
  });

  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    setTimeout(() => {
      shiftPressed = false;
    }, 200);
  }
});

// keysForPrint.forEach((key) => {
//   key.addEventListener('click', function () {
//     addingTextToTextField(key.getAttribute('keyName'));
//   });
// });

// spaceKey.addEventListener('click', function () {
//   addingTextToTextField(' ');
// });

capsLockKey.addEventListener('click', function () {
  executeOnClickCapsLock();
});

altLeftKey.addEventListener('click', function () {
  if (shiftPressed) {
    console.log('message');
    if (langValue === 'en') {
      langValue = 'ru';
    } else {
      langValue = 'en';
    }
  }
});

console.log(langValue);

// arrowUpKey.addEventListener('click', function () {
//   addingTextToTextField('↑');
// });

// arrowDownKey.addEventListener('click', function () {
//   addingTextToTextField('↓');
// });

// arrowLeftKey.addEventListener('click', function () {
//   addingTextToTextField('←');
// });

// arrowRightKey.addEventListener('click', function () {
//   addingTextToTextField('→');
// });
