import { isElement, isElementArray } from './util';
export const createElement = ({ $tag$, $attrs$, $children$, $text$ }) => {
    if ($text$ != null) {
        return document.createTextNode($text$);
    }
    const element = document.createElement($tag$);
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
export const shouldApplyToHead = (val) => isElement(val) || isElementArray(val) && val.length === 2;
export const applyToHead = (element) => {
    if (Array.isArray(element)) {
        return document.head.replaceChild.apply(document.head, element);
    }
    return document.head.appendChild(element);
};
