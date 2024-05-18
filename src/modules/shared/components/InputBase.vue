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
  type: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: false
  },
  label: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="relative">
    <input autocomplete="off" id="{{ id }}" name="{{ name }}" type="{{ type }}"
      class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
      placeholder="{{ placeholder }}" @input="$emit('update:modelValue', $event.target.value)" />
    <label for="{{ id }}"
      class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">{{
        label }}</label>
  </div>
</template>
