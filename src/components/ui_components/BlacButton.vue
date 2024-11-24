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
  padding: 12px 24px;
  border-radius: 50px;
  border: none;
  background: var(--text-color);
  font-size: 16px;
  color: #fff;
  transition: all 0.3s;
  cursor: pointer;
}
button:hover {
  background: #535353;
}
</style>