<template>
  <div id="app">
    <h1>Hello</h1>
    <h2>Hello</h2>
    <h3>Hello</h3>
    <h4>Hello</h4>
    <h5>Hello</h5>
    <h6>Hello</h6>
    <p>Lorem ipsum dolor sit amet</p>
    Hi
    <span v-for="item in items">
      {{ item }}
    </span>
  </div>
</template>
<script lang="ts">
export default {
  name: "ComponentName",
  data() {
    return {
      items: [
        'item',
        'item',
        'item',
        'item',
        'item',
        'item',
        'item',
        'item',
        'item',
        'item',
        'item',
      ]
    };
  }
}
</script>
