import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      message: "Ready for changes",
    };
  },
  methods: {
    shuffle(str) {
      var a = str.split(""),
        n = a.length;

      for (var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
      }
      return a.join("");
    },
    randomize: function (str) {
      this.message = this.shuffle(this.message);
    },
  },
}).mount("#app2");
