import { parse } from "himalaya";

function removeEmptyNodes(nodes) {
  return nodes.filter((node) => {
    if (node.type === "element") {
      node.children = removeEmptyNodes(node.children);
      return true;
    }
    return node.content.length;
  });
}

function stripWhitespace(nodes) {
  return nodes.map((node) => {
    if (node.type === "element") {
      node.children = stripWhitespace(node.children);
    } else {
      node.content = node.content.trim();
    }
    return node;
  });
}

function removeWhitespace(nodes) {
  return removeEmptyNodes(stripWhitespace(nodes));
}

const json = parse(`<body>
<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
  Here are the biggest enterprise technology acquisitions of 2021 so far, in
  reverse chronological order.
</p>
</body>`);

//console.log("👉", json);

const j = removeWhitespace(json);

console.log(j);
