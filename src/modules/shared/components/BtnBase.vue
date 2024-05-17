<script setup>
defineProps({
  id: {
    type: String,
    required: false
  },
  type: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="relative">
    <button id="{{ id }}" type="{{ type }}" class="bg-blue-500 text-white rounded-md px-2 py-1">
      {{ text }}
    </button>
  </div>
</template>
