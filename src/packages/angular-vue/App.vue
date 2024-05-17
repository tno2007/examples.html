<script setup lang="ts">
import { ref } from "vue";
import { ngVueComponent, useNgVue } from "@jaredmcateer/ngvue3";
import angular from "angular";
import MyComponent from "./MyComponent.vue";

const ngVue = useNgVue();

angular
  .module("vue.components", [ngVue])
  .controller(
    "MainController",
    class MainController {
      person: { firstName: string; lastName: string; description: string } = {
        firstName: "Lilly",
        lastName: "Ara",
        description: "ngVue 3 supports components using the Composition API",
      };

      foo = "my-class";

      updateDescription(description: string) {
        this.person.description = description;
      }
    }
  )
  .directive(...ngVueComponent("myComponent", MyComponent));

const name = ref("asdf");

name.value = "asdereref";
</script>

<template>
  <FormKit type="text" label="First name:"></FormKit>
  <FormKit type="text" label="Last name:"></FormKit>

  <div ng-app="vue.components">
    <div ng-controller="MainController as ctrl">
      <input ng-model="ctrl.person.firstName" />
      <textarea ng-model="ctrl.person.firstName"></textarea>
    </div>
  </div>
</template>
