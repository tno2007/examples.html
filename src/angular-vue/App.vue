<script setup lang="ts">
import { ref } from "vue";

const name = ref("asdf");

name.value = "asdereref";
</script>

<template>
  <div>dudjddjdj</div>
  <div>Hello {{ name }}!</div>
  <FormKit type="text" label="First name:"></FormKit>
</template>
