<script setup lang="ts">
import { reactive, onBeforeMount, defineComponent } from "vue";

const context = reactive({
	parsedValue: '',
	value: '',
})

const refresh = (params: any) => {
	updateDisplay(params);
}

const updateDisplay = (params: any) => {
	context.value = params.value;
	context.parsedValue = new URL(params.value).hostname;
}

const props = defineProps({
	params: Object
})

onBeforeMount(() => {
	console.log(props.params);
	updateDisplay(props.params);
})

</script>

<template>
	<a :href="context.value" target="_blank">{{ context.parsedValue }}</a>
</template>