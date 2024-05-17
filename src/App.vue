<script setup>
import { useSharedStore } from '@s/store'

import loadingSpinner from '@s/components/loadingSpinner.vue'

const shared = useSharedStore()
</script>

<template>
  <loadingSpinner v-if="shared.loading"></loadingSpinner>
  <RouterView />
</template>
