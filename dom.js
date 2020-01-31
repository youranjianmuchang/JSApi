window.dom = {
    find(node, wrapper) {
        return (wrapper || document).querySelectorAll(node);
    },
    style(node, styles, value) {
        if (arguments.length === 3) {
            node.style[styles] = value;
        } else if (arguments.length === 2) {
            if (typeof styles === 'string') {
                return node.style[styles];
            } else if (styles instanceof Object) {
                for (let cStyle in styles) {
                    node.style[cStyle] = styles[cStyle];
                }
            }
        }
    },
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i]);
        }
    }
}