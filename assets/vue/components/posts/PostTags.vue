<script setup lang="ts">

defineProps<{
  tags: Array<any>
}>();
</script>

<template>
  <p v-if="tags.length > 0" class="post-tags">
    <a
        v-for="tag in tags"
        :href="`/en/blog?tag=${tag}`"
       class="badge badge-secondary"
    >
      <i class="fa fa-tag"></i> {{ tag }}
    </a>
  </p>
</template>
