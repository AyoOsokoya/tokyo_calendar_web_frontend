<template>
  <v-col class="ml-auto mr-auto w-12">
    <div id="app">
      <ImageGalleryGrid :events="events" @show-event="showEvent"/>
    </div>
  </v-col>
</template>
<script lang="ts">
import {EventTileComponent, ImageGalleryGrid} from "#components";

export default {
  name: "IndexPage",
  layout: 'default',
  data() {
    return {
      events: []
    };
  },
  mounted() {
    this.mounted();
  },
  methods: {
    async mounted() {
      const {data: results, error: error} = await useFetch('http://localhost/api/v1/events/');
      useFetch('http://localhost/api/v1/events/')
          .then((results) => {
            this.events = results.data.value;
          }).catch((error) => {
            console.log(error);
      })
    },
    showEvent(event) {
      console.log(event);
      // this.$router.push({name: 'event', params: {id: 1}});
    }
  }

}
</script>
