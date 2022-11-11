<template>
  <div class="container">
    <img
      class="bigger"
      src="@/assets/Images/music/icons8-add-to-favorites-96.png"
    />

    <img class="bigger" src="@/assets/Images/music/icons8-volume-100.png" />
  </div>
</template>

<script>
export default {
  name: "FavAction",
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

img {
  min-width: 32px;
  height: 32px;
}
</style>
