import createDomElement from "./createDomElement";

export default function patch(oldVNode, newVNode) {
  console.log('oldVNode here', oldVNode);
  console.log('oldVNode dom here', oldVNode.dom);
  console.log('newVNode here', newVNode);

  // Case 1: vnode.type is different -> replace entire sub-tree
  if (oldVNode.type !== newVNode.type) {
    console.log('vnode type diff');
    const newDom = createDomElement(newVNode);
    
    // patch real dom
    oldVNode.dom.replaceWith(newDom);

    // update dom ref
    oldVNode.dom = newDom;

    // sync old vdom (vnode obj) with new
    oldVNode.type = newVNode.type;
    oldVNode.children = newVNode.children;
    oldVNode.props = newVNode.props;

    // job done
    return;
  }

  // Case 2: same html element -> compare children
  else if (typeof newVNode.type === 'string') {
    patch(oldVNode.children[0], newVNode.children[0])
    
  }

}