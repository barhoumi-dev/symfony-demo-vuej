<script lang="ts" setup>
import type {User} from "@/types/user";

defineProps<{
  user: User
}>();
</script>

<template>
  <div>
    <div>Hello {{ user.name }}!</div>
    <div>{{ user.email }}</div>
  </div>
</template>
