<script lang="ts" setup>
import UserProfile from "@/components/UserProfile.vue";

import type {User} from "@/types/user";

defineProps<{
  user: User
}>();
</script>

<template>
  <div class="alert alert-primary">
    <UserProfile :user="user"></UserProfile>
  </div>
</template>
