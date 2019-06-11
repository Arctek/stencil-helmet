import { hasAttributes, hasChildren, isTextNode } from './util';
import { createElement } from './dom';
export function title(node, head) {
    if (hasChildren(node) && isTextNode(node.$children$[0])) {
        return [
            createElement(node),
            head.querySelector('title')
        ];
    }
}
export function meta(node, head) {
    if (hasAttributes(node, ['name', 'content'])) {
        const existingElement = head.querySelector(`meta[name="${node.$attrs$.name}"]`);
        if (existingElement !== null) {
            return [
                createElement(node),
                existingElement
            ];
        }
        else {
            return createElement(node);
        }
    }
}
export function link(node, head) {
    if (!hasChildren(node)) {
        if (hasAttributes(node, ['rel'])) {
            const existingElement = head.querySelector(`link[rel="${node.$attrs$.rel}"]`);
            if (existingElement !== null) {
                return [
                    createElement(node),
                    existingElement
                ];
            }
        }
        return createElement(node);
    }
}
export function style(node) {
    if (hasChildren(node) && isTextNode(node.$children$[0])) {
        return createElement(node);
    }
}
export function script(node) {
    if (hasChildren(node) || hasAttributes(node)) {
        return createElement(node);
    }
}
export function base(node) {
    if (!hasChildren(node) && hasAttributes(node)) {
        return createElement(node);
    }
}
export const template = createElement;
export const noscript = createElement; // SSR only
