<script setup lang="ts">
  const response = await fetch('/en/blog/json/page/1?_format=json')
  const posts = await response.json()
  console.log(posts)
</script>

<template>
<div>
  <div>Loading finished</div>
</div>
</template>

<style scoped>

</style>
