(() => {
  'use strict';

  const dashPattern = /[-‐‑‒–—―]+/g;
  const digitMap = {'٠':'0','١':'1','٢':'2','٣':'3','٤':'4','٥':'5','٦':'6','٧':'7','٨':'8','٩':'9','۰':'0','۱':'1','۲':'2','۳':'3','۴':'4','۵':'5','۶':'6','۷':'7','۸':'8','۹':'9'};
  const nonLatinDigitPattern = /[٠-٩۰-۹]/g;

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
      if (parent && !parent.closest('script,style,code') && ((!isAddress && dashPattern.test(value)) || nonLatinDigitPattern.test(value))) nodes.push(node);
      dashPattern.lastIndex = 0;
      nonLatinDigitPattern.lastIndex = 0;
    }
    nodes.forEach(node => {
      node.nodeValue = node.nodeValue.replace(dashPattern, ' ').replace(nonLatinDigitPattern, digit => digitMap[digit]);
    });
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
