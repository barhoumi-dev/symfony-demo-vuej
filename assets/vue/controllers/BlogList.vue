<script setup lang="ts">
import {ref} from "vue";
import PostPreview from "@/components/posts/PostPreview.vue";

const posts = ref([])
const isLoading = ref(false)
const page = ref(1)

const props = defineProps<{
  tag?: String
}>();

async function getData() {
  isLoading.value = true
  const response = await fetch(`/api/posts?page=${page.value}&itemsPerPage=10&tags=[${props?.tag??""}]`)
  posts.value = await response.json()
  isLoading.value = false
}

function updatePage(pageIndex: Int) {
  console.log(pageIndex);
  page.value = pageIndex;

  getData()
}

getData()
</script>

<template>
  <div v-if="isLoading === true">
    Loading ....
  </div>
  <div v-else>
    <div v-if="posts['hydra:totalItems'] > 0">
      <div v-for="post in posts['hydra:member']">
        <post-preview :post="post"/>
      </div>

      <VPagination v-model="page" :length="posts['hydra:totalItems'] / 10" @update:modelValue="updatePage"/>
    </div>
    <div v-else>
      <div class="jumbotron">No posts found</div>
    </div>
  </div>
</template>

<style scoped>

</style>
