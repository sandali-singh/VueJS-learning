# Vue.js

Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces.
It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based
programming model that helps you efficiently develop user interfaces, be they simple or complex.

## Depending on your use case, Vue can be used in different ways:

- Enhancing static HTML without a build step
- Embedding as Web Components on any page
- Single-Page Application (SPA)
- Fullstack / Server-Side Rendering (SSR)
- Jamstack / Static Site Generation (SSG)
- Targeting desktop, mobile, WebGL, and even the terminal

## setup using CDN:
`<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>`

`<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>`

## Mouse Events:
- v-on:click="handler"
- @click="handler"
- v-on:dblclick="handler"
  
  ### Event Modifiers:
  - stop:  
  - prevent
  - capture
  - self
  - passive
  - once
  
    
  combine modifiers like `@submit.prevent` ` @click.stop.prevent`

## Vue structure 
(for single vue instances)

`new Vue({ el: "#vue-app", data: { }, methods: {} });`
