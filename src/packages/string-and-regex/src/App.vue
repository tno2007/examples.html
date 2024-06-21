<script setup lang="ts">
import { ref, onBeforeMount, defineComponent } from "vue";
import isRegExp from "lodash/isRegExp";
import isString from "lodash/isString";
import type { Header, Item } from "vue3-easy-data-table";

import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { AgGridVue } from "ag-grid-vue3"; // Vue Data Grid Component

import LinkRenderer from "./components/grid/link-renderer.vue"


const list = ["/a", "/b/c/", /^d\/e\/\d+/];
const items = ref([]);

// console.log(isRegExp(/^abcd/));
// console.log(isRegExp(/^d\/e\/\d+/));

for (let i = 0; i <= list.length - 1; i++) {
	const value = list[i];

	if (isString(value)) {
		items.value.push({
			id: i,
			value: value,
			type: "string"
		})
	} else if (isRegExp(value)) {
		items.value.push({
			id: i,
			value: value,
			type: "RegExp"
		})
	}
}

const headers: Header[] = [
	{ text: "Value", value: "value" },
	{ text: "Type", value: "type", sortable: true },
];

// ag grid
// Row Data: The data to be displayed.
const rowData = ref([
	{ make: "Tesla", model: "Model Y", price: 64950, electric: true, website: "https://www.google.com" },
	{ make: "Ford", model: "F-Series", price: 33850, electric: false, website: "https://www.google.com" },
	{ make: "Toyota", model: "Corolla", price: 29600, electric: false, website: "https://www.google.com" },
]);

// Column Definitions: Defines the columns to be displayed.
const colDefs = ref([
	{ field: "make" },
	{ field: "model" },
	{ field: "price" },
	{ field: "electric" },
	{ field: "website", cellRenderer: LinkRenderer },
]);

</script>


<template>
	<h1>Hello</h1>

	<ag-grid-vue :rowData="rowData" :columnDefs="colDefs" style="height: 500px" class="ag-theme-quartz">
	</ag-grid-vue>

	<EasyDataTable :headers="headers" :items="items" />
</template>