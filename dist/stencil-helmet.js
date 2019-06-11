import * as render from './render';
import { shouldApplyToHead, applyToHead } from './dom';
const validTagNames = Object.keys(render);
const isValidNode = (node) => validTagNames.indexOf(node.$tag$) > -1;
const renderNode = (node) => render[node.$tag$](node, document.head);
export const Helmet = (props = null, children = []) => {
    if (document && document.head) {
        try {
            children
                .filter(isValidNode)
                .map(renderNode)
                .filter(shouldApplyToHead)
                .forEach(applyToHead);
        }
        catch (err) {
            console.log(err);
        }
    }
    return null;
};
export default Helmet;
