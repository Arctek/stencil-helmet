import * as render from './render';
import { shouldApplyToHead, applyToHead } from './dom';
const headExists = document && document.head;
const validTagNames = Object.keys(render);
const isValidNode = (node) => validTagNames.indexOf(node.vtag) > -1;
const renderNode = (node) => render[node.vtag](node, document.head);
export const Helmet = (props = null, children = []) => {
    if (headExists) {
        try {
            children
                .filter(isValidNode)
                .map(renderNode)
                .filter(shouldApplyToHead)
                .forEach(applyToHead);
        }
        catch (err) { }
    }
    return null;
};
export default Helmet;
