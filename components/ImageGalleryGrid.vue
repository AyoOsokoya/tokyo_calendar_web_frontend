<script lang="ts">
export default {
  name: "ImageGalleryGrid",
  layout: 'default',
  props: {
    events: Array,
  },
  data() {
    return {
      imageLayout: [
        {cols: 4},
        {cols: 8},
        {
          cols: 7,
          children: [{cols: 12}, {cols: 12}],
        },
        {cols: 9},
        {cols: 3},
        {cols: 4},
        {cols: 8},
        {cols: 7},
        {cols: 5},
      ]
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<template>
  <v-row>
    <template v-for="(event,event_index) in events" :key="event_index">
      <v-col :cols="event.cols">
        <v-card class="w-100 h-100 rounded d-inline-flex flex-direction: column align-end">
          <v-img
              :src="`${event.url_image}`"
              cover
              height="100%"
              class="rounded"
          >
            <v-col class="backdrop-blur-20 d-flex align-end">
              <v-card-title>{{ event.name }}</v-card-title>
              <v-card-subtitle>{{ event.starts_at }}</v-card-subtitle>
              <v-card-text v-html="event.description"></v-card-text>
              <v-card-actions class="align-bottom">
                <v-btn>Follow</v-btn>
                <v-btn>See more</v-btn>
              </v-card-actions>
            </v-col>
          </v-img>
          <v-card-actions>
            <v-btn>Curious</v-btn>
            <v-btn>Invite Friends</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </template>
  </v-row>
</template>

<style scoped>
* {
  text-shadow: 1px 1px 10px #000000, 1px 1px 13px #000000, 1px 1px 15px #000000;
}

</style>