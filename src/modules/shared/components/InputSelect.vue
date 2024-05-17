<script setup>
defineProps({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="relative">
    <select
      id="{{ id }}"
      name="{{ name }}"
      class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option disabled selected>{{ placeholder }}</option>
      <slot></slot>
    </select>
  </div>
</template>
