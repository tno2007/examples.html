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

const json = parse(`  <div class="p-4">
    <div class="mb-4">
      <label
        for="html"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Your html</label
      >
      <MonacoEditor
        v-model="data.html"
        lang="html"
        class="w-full h-96"
        theme="vs-dark"
        :options="{ theme: 'vs-dark' }"
      />
    </div>

    <button
      type="button"
      @click="convert"
      class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      Convert
    </button>

    <div>
      <label
        for="json"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >JSON output</label
      >
      <MonacoEditor
        v-model="data.json"
        lang="json"
        class="w-full h-96"
        theme="vs-dark"
        :options="{ theme: 'vs-dark', readOnly: true }"
      />
    </div>
  </div>`);

//console.log("👉", json);

const j = removeWhitespace(json);

console.log(j);
