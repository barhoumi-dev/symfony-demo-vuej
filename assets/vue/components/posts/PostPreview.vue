<script setup lang="ts">
import {Post} from "@/types/post";
import PostTags from "@/components/posts/PostTags.vue";

defineProps<{
  post: Post
}>();
</script>

<template>
  <article class="post">
    <h2>
      <a :href="`/posts/${post.slug}`">
        {{ post.title }}
      </a>
    </h2>

    <p class="post-metadata">
      <span class="metadata"><i class="fa fa-calendar"></i> {{ post.publishedAt }}</span>
      <span class="metadata"><i class="fa fa-user"></i> {{ post.author.fullName }}</span>
    </p>

    <p>{{ post.summary }}</p>

    <post-tags v-if="post.tags" :tags="post.tags"/>
  </article>
</template>

<style scoped>

</style>
