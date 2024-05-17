<template>
    <!-- Multiple root elements allowed in Vue3 -->
    <div>{{ salutation }}</div>
    <button v-if="isAdmin" @click="onButtonClicked">Click Me</button>
  </template>