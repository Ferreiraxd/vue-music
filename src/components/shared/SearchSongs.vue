<template>
  <div class="container" @click="searchElement">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SearchSongs",
  methods: {
    searchElement() {
      this.$emit("buscar-cancion");
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #202339d9;
  color: antiquewhite;
  border-radius: 12px;
  max-width: 80px !important;
  align-self: center;
  margin: unset;
  cursor: pointer;
  border: 1px solid #202339;
  height: 40px;
}

.container:hover {
  background-color: #141d4cd9;
  border: 1px solid #1a2041;
  box-shadow: 2px 2px 2px 1px solid #1a2041;
  transition: all 0.5s;
}

p {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  max-width: 90%;
}
</style>
