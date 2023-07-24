<script setup lang="ts">
const imageLayout = [
  {cols: 4},
  {cols: 8},
  {
    cols: 6,
    children: [{cols: 12}, {cols: 12}],
  },
  {cols: 9},
  {cols: 3},
  {cols: 4},
  {cols: 8},
  {cols: 7},
  {cols: 5},
]
</script>

<template>
  <v-row>
    <template v-for="(image,image_index) in imageLayout" :key="image_index">
      <v-col :cols="image.cols">
        <v-img
            :src="`https://picsum.photos/500/300?image=${image.cols * 20 + 1}`"
            cover
            height="100%"
            class="rounded"
        ></v-img>
      </v-col>

      <v-col v-if="image.children" :cols="image.cols - 12" class="d-flex flex-column">
        <v-row>
          <v-col v-for="(children,childIdx) in image.children" :key="childIdx" :cols="children.cols">
            <v-img
                :src="`https://picsum.photos/500/300?image=${children.cols + childIdx}`"
                cover
                height="100%"
                class="rounded"
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
    </template>
  </v-row>
</template>

<style scoped>

</style>