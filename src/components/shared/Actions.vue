<template>
  <div class="container">
    <div>
      <img @click="pausarCancion" src="@/assets/Images/music/icons8-pause-squared-100.png" />
    </div>
    <div>
      <img
        class="bigger"
        @click="continuarCancion"
        src="@/assets/Images/music/icons8-play-button-circled-100.png"
      />
    </div>
    <div>
      <img @click="detenerCancion" src="@/assets/Images/music/icons8-stop-squared-100.png" />
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Actions",
  methods: {
    pausarCancion() {
      this.$emit("pause", 'pausa');
    },
    continuarCancion(){
      this.$emit("play", 'continuar');
    },
    detenerCancion(){
      this.$emit("stop", 'stop');
    }
  },
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
  width: 32px;
  height: 32px;
}

img.bigger {
  width: 48px;
  height: 48px;
}
</style>
