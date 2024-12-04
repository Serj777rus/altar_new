<template>
  <button @click="$emit('openContact')">
    <slot></slot>
  </button>
</template>

<script>
export default {

}
</script>

<style scoped>
button {
  box-sizing: border-box;
  padding: 8px 20px;
  border-radius: 50px;
  border: none;
  background: var(--text-color);
  font-size: 12px;
  color: #fff;
  transition: all 0.3s;
  cursor: pointer;
  font-family: 'Roboto', serif;
  font-weight: 300;
}
button:hover {
  background: #535353;
}
</style>