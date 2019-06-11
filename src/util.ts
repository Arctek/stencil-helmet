import { VNode } from './types';

const isObject = (val: any) =>
  !Array.isArray(val) && val !== null && typeof val === 'object';

export const hasChildren = ({ $children$ }: VNode) =>
  Array.isArray($children$);

export const hasAttributes = ({ $attrs$ }: VNode, requiredAttrs: string[] = []) =>
  isObject($attrs$) && requiredAttrs.every($attrs$.hasOwnProperty.bind($attrs$));

export const isTextNode = ({ $text$ }: VNode) =>
  typeof $text$ === 'string';

export const isElement = (val: any) =>
  val instanceof HTMLElement;

export const isElementArray = (val: any) =>
  Array.isArray(val) && val.every(isElement);
