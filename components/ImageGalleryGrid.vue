<template>
  <v-row>
    <template v-for="(event,event_index) in events" :key="event_index">
      <v-card @click="`${showEvent(event)}`" class="w-100 h-100 mb-4">
        <v-img
            :src="`${event.url_image}`"
            height="100%"
            class="rounded d-flex flex-direction: column align-end"
        >
          <v-col class="event-details-blurred">
            <v-card-actions class="">
              <v-btn @click="`${followEvent(event)}`">Follow</v-btn>
              <v-btn @click="`${showEvent(event)}`">See more</v-btn>
            </v-card-actions>
            <v-card-title>{{ event.name }}</v-card-title>
            <v-card-text v-html="`${shortenDescription(event.description)}`"></v-card-text>
          </v-col>
        </v-img>
      </v-card>
    </template>
  </v-row>
</template>

<script lang="ts">
export default {
  name: "ImageGalleryGrid",
  emits: ['showEvent', 'followEvent'],
  layout: 'default',
  props: {
    events: Array,
  },
  data() {
    return {}
  },
  mounted() {
  },
  methods: {
    showEvent(event: object) {
      this.$emit('showEvent', event);
    },
    followEvent(event: object) {
      this.$emit('followEvent', event);
    },
    shortenDescription(string: description) {
      return string.substring(0, 230) + '...';
    }
  }
}
</script>

<style scoped>
* {
  text-shadow: 1px 1px 10px #000000, 1px 1px 13px #000000, 1px 1px 15px #000000;
}

.event-details-blurred {
  background: rgba(255, 255, 255, 10%) !important;
  backdrop-filter: blur(5px) !important;
}

</style>