<script lang="ts">
export default {
  name: 'EventTile',
  props: {
    // EventObjectClass
  },
  data() {
    return {
      'id': 0,
      'name': 'Event Name',
      'description': 'Loreum ipsum dolor sit amet',
      'longitude': null,
      'latitude': null,
      'starts_at': 'DateTime',
      'ends_at': 'DateTime',
      'url': 'www.1234567.com',
      'url_image': 'https://imagesomething.com',
      'event_status': 'ACTIVE',
      'event_source_id': 0,
      'event_source': {},
      'users': [],
      'event_category': 'MUSIC',
    }
  },
  methods: {
  },
  watched: {
  },
  computed: {
  }
}
</script>

<template>
<div class="event-tile">
  <div> {{ url_image }}</div>
  <div> {{ name }}</div>
  <div> {{ description }}</div>
  <div> {{ starts_at }}</div>
</div>
</template>

<style scoped>

</style>