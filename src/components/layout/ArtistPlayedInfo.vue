<template>
  <div class="content" v-if="!placeHolder">
    <div v-if="placeHolder" class="image-holder">
      <img src="https://via.placeholder.com/48x48.png" />
    </div>
    <div v-else class="image-holder">
      <img :src="track.album.images[2].url" />
    </div>
    <div v-if="placeHolder" class="text-holder">
      <strong> Felipe Letelier </strong>
      <p>Cancion para programar</p>
    </div>
    <div v-else class="text-holder">
      <strong> {{ artistsNames }}</strong>
      <p>{{ track.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArtistPlayedInfo",
  props: {
    placeHolder: {
      type: Boolean,
      default: true,
    },
    track: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    artistsNames() {
      const names = this.track.artists.map((artist) => artist.name);
      return `${names.join(" - ")}`;
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
  gap: 10px;
  max-width: 75%;
}

.image-holder {
}

img {
  min-width: 48px;
}

.text-holder {
  display: flex;
  flex-flow: column;
  color: white;
  max-width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
}

strong {
  color: white;
}

.animate {
  position: relative;
  animation: leftright 3s infinite alternate ease-in-out;
}

@keyframes leftright {
  0%,
  20% {
    transform: translateX(0%);
    left: 0%;
  }
  80%,
  100% {
    transform: translateX(-100%);
    left: 100%;
  }
}
</style>
