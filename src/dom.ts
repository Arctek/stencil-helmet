import { VNode } from './types';
import { isElement, isElementArray } from './util';

export const createElement = ({ $tag$, $attrs$, $children$, $text$ }: VNode) => {
  if ($text$ != null) {
    return document.createTextNode($text$);
  }

  const element = document.createElement($tag$ as string);

  if ($attrs$ != null) {
    for (const key in $attrs$) {
      element.setAttribute(key, $attrs$[key]);
    }
  }

  if ($children$ != null) {
    for (const child of $children$) {
      element.appendChild(createElement(child));
    }
  }

  return element;
};

export const shouldApplyToHead = (val: any) =>
  isElement(val) || isElementArray(val) && val.length === 2;

export const applyToHead = (element: HTMLElement | HTMLElement[]) => {
  if (Array.isArray(element)) {
    return document.head.replaceChild.apply(document.head, element);
  }
  return document.head.appendChild(element);
}
