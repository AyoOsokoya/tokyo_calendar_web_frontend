<template>
  <v-col class="ml-auto mr-auto w-12">
    <div id="app">
<!--      <h1>Hello</h1>-->
<!--      <h2>Hello</h2>-->
<!--      <h3>Hello</h3>-->
<!--      <h4>Hello</h4>-->
<!--      <h5>Hello</h5>-->
<!--      <h6>Hello</h6>-->
<!--      <p>Lorem ipsum dolor sit amet</p>-->
<!--      <EventTileComponent v-for="item in items"/>-->
      <ImageGalleryGrid/>
<!--      <ImageGalleryGrid/>-->
<!--      <ImageGalleryGrid/>-->
<!--      <ImageGalleryGrid/>-->
<!--      <ImageGalleryGrid/>-->
<!--      <v-btn>Hello!</v-btn>-->
<!--      <v-btn>Click Me!!</v-btn>-->
<!--      <v-card>-->
<!--        <v-card-title>Title</v-card-title>-->
<!--      </v-card>-->
<!--      <v-chip>chip</v-chip>-->
<!--      <v-icon icon="$vuetify"></v-icon>-->
    </div>
  </v-col>
</template>
<script lang="ts">
import { EventTileComponent, ImageGalleryGrid } from "#components";
export default {
  name: "ComponentName",
  layout: 'default',
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
