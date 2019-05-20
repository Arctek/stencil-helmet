import * as render from './render';
import { VNode, Props } from './types';
import { shouldApplyToHead, applyToHead } from './dom';

const headExists = document && document.head;

const validTagNames = Object.keys(render);

const isValidNode = (node: VNode) =>
  validTagNames.indexOf(node.vtag as string) > -1;

const renderNode = (node: VNode) =>
  render[node.vtag](node, document.head);

export const Helmet = (props: Props = null, children: VNode[] = []) => {
  if (headExists) {
    try {
      children
        .filter(isValidNode)
        .map(renderNode)
        .filter(shouldApplyToHead)
        .forEach(applyToHead);
    } catch (err) {}
  }
  return null;
};

export default Helmet;
