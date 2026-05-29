import { visit } from 'unist-util-visit';

export default function remarkLinkTarget() {
  return (tree) => {
    visit(tree, 'link', (node) => {
      if (node.url && node.url.startsWith('http')) {
        node.data = node.data || {};
        node.data.hProperties = node.data.hProperties || {};

        node.data.hProperties.target = '_self';
        node.data.hProperties.rel = undefined;
      }
    });
  };
}