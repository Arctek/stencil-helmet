const isObject = (val) => !Array.isArray(val) && val !== null && typeof val === 'object';
export const hasChildren = ({ $children$ }) => Array.isArray($children$);
export const hasAttributes = ({ $attrs$ }, requiredAttrs = []) => isObject($attrs$) && requiredAttrs.every($attrs$.hasOwnProperty.bind($attrs$));
export const isTextNode = ({ $text$ }) => typeof $text$ === 'string';
export const isElement = (val) => val instanceof HTMLElement;
export const isElementArray = (val) => Array.isArray(val) && val.every(isElement);
