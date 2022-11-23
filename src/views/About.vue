<template>
  <div class="container">
    <div>
      <h1>Pagina en progreso</h1>
      <h2>Inspirada en la necesidad de hacer algo bonito y con cariño</h2>
      <p>
        Usalo a tu conveniencia, no hay mucho código pero es algo que se va
        aprendiendo
      </p>
      <img src="@/assets/pngwing.com.png" alt="" />
      <router-link :to="{ name: 'search' }">Volver</router-link>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "About",
};
</script>

<style scoped>
.container {
  display: flex;
  height: 81vh;
  align-items: center;
  justify-content: center;
}

.container > div {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}

img {
  max-width: 20vh;
}
</style>
