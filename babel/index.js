module.exports = function (babel) {
  const { types: t } = babel;

  function isShedTag(node) {
    return (node &&
      node.openingElement &&
      node.openingElement.name &&
      node.openingElement.name.property &&
      node.openingElement.name.property.name === 'shed')
      ||
      (node &&
        node.closingElement &&
        node.closingElement.name &&
        node.closingElement.name.property &&
        node.closingElement.name.property.name === 'shed')
  }

  return {
    name: "ast-transform", // not required
    visitor: {
      JSXElement(path) {
        const tag = path.node;
        if (isShedTag(tag)) {
          const element = path.node.openingElement.name.object.name;
          console.log(element);
          const firstLetter = element[0];
          if(firstLetter === firstLetter.toLowerCase()) {
            path.replaceWith(
              t.JSXElement(
                t.JSXOpeningElement(
                  t.JSXIdentifier('Shed'),
                  [
                    t.JSXAttribute(
                      t.JSXIdentifier('component'),
                      t.StringLiteral(element)
                    )
                  ]
                ),
                t.JSXClosingElement(
                  t.JSXIdentifier('Shed')
                ),
                path.node.children
              ));
          }
        }
      }
    }
  };
}
