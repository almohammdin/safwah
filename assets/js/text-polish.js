(() => {
  'use strict';

  const dashPattern = /[-‐‑‒–—―]+/g;

  function clean(root = document.documentElement) {
    if (!root) return;
    const scope = root.nodeType === Node.ELEMENT_NODE ? root : root.parentElement;
    if (scope) {
      if (scope.matches?.('.eyebrow > span:first-child:empty')) scope.remove();
      else scope.querySelectorAll?.('.eyebrow > span:first-child:empty').forEach(node => node.remove());
    }
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) {
      const node = walker.currentNode;
      const parent = node.parentElement;
      const value = node.nodeValue || '';
      const isAddress = /@|\.[a-z]{2,}$/i.test(value.trim());
      if (parent && !parent.closest('script,style,code') && !isAddress && dashPattern.test(value)) nodes.push(node);
      dashPattern.lastIndex = 0;
    }
    nodes.forEach(node => { node.nodeValue = node.nodeValue.replace(dashPattern, ' '); });
  }

  function start() {
    clean();
    new MutationObserver(mutations => mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => clean(node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement));
    })).observe(document.documentElement, {childList: true, subtree: true});
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, {once: true});
  else start();
})();
