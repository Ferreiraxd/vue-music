<template>
  <div class="container">
    <div class="notified" :class="notificationClass">
      <p v-if="notificationClass === 'wrong'">No se encontraron resultados</p>
      <p v-else>{{ `Se encontraron ${results} canciones` }}</p>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Notificacion",
  props: {
    notificationType: {
      type: String,
      default: "",
    },
    results: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    notificationClass() {
      switch (this.notificationType) {
        case "wrong":
          return "wrong";
          break;

        case "madeit":
          return "madeit";
          break;

        default:
          return "";
          break;
      }
    },
  },
};
</script>

<style scoped>
.container {
  min-width: 100%;
}

.notified {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2em;
  color: white;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  letter-spacing: 0.001in;
  background-color: black;
  transition-delay: 1s;
  position: absolute;
}

.wrong {
  background: rgb(244, 67, 54);
  background: linear-gradient(
    180deg,
    rgba(244, 67, 54, 1) 95%,
    rgba(24, 22, 36, 0.7794468129048494) 100%
  );
  transition: all 2s;
  transition-delay: 1s;
}

.madeit {
  background-color: rgba(8, 168, 8, 0.951);
}
</style>
