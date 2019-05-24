const isObject = (val) => !Array.isArray(val) && val !== null && typeof val === 'object';
export const hasChildren = ({ vchildren }) => Array.isArray(vchildren);
export const hasAttributes = ({ vattrs }, requiredAttrs = []) => isObject(vattrs) && requiredAttrs.every(vattrs.hasOwnProperty.bind(vattrs));
export const isTextNode = ({ vtext }) => typeof vtext === 'string';
export const isElement = (val) => val instanceof HTMLElement;
export const isElementArray = (val) => Array.isArray(val) && val.every(isElement);
