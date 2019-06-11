import * as render from './render';
import { VNode, Props } from './types';
import { shouldApplyToHead, applyToHead } from './dom';

const validTagNames = Object.keys(render);

const isValidNode = (node: VNode) =>
  validTagNames.indexOf(node.$tag$ as string) > -1;

const renderNode = (node: VNode) =>
  render[node.$tag$](node, document.head);

export const Helmet = (props: Props = null, children: VNode[] = []) => {
  if (document && document.head) {
    try {
      children
        .filter(isValidNode)
        .map(renderNode)
        .filter(shouldApplyToHead)
        .forEach(applyToHead);
    } catch (err) {
      console.log(err)
    }
  }
  return null;
};

export default Helmet;
