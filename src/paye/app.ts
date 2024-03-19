import { reactive, html, template } from "arrow-js/core"

const data = reactive({
  price: 25,
  quantity: 10,
  logTotal: true
})

const t = html`
  <ul>
    <li>Hello ${data.location} (🪨 static expression)</li>
    <li>Hello ${() => data.location} (⚡ dynamic expression)</li>
  </ul>
`

const appElement = document.getElementById('app');

template(appElement, data, t)