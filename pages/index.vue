<template>
  <v-col class="ml-auto mr-auto w-12">
    <div id="app">
      Page.
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
    console.log('mounted')
    this.mounted();
  },
  methods: {
    async mounted() {
      console.log('fetching events')
      useFetch('http://localhost/api/v1/events/')
          .then((results) => {
            console.log('then');
            this.events = results.data.value;
            console.log(JSON.stringify(results.data))
          }).catch((error) => {
            console.log(error);
      })
    },
    showEvent(event: any) {
      console.log(event);
      // this.$router.push({name: 'event', params: {id: 1}});
    }
  }

}
</script>
