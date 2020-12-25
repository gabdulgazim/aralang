<template>
  <div>
    <div class="card">
      <span class="span">Card title</span>
      <button @click="$emit('action-btn:clicked')">Action</button>
    </div>

    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
