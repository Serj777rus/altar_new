<template>
  <button>
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
  border: 1px solid var(--text-color);
  background: transparent;
  font-size: 12px;
  color: var(--text-color);
  transition: all 0.3s;
  box-shadow: none;
  cursor: pointer;
  font-family: 'Roboto', serif;
  font-weight: 300;
}
button:hover {
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
}
</style>