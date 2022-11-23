<template>
  <div v-if="track && track.album" class="content">
    <div class="image-holder">
      <img :src="track.album.images[0].url" />
    </div>
    <div class="text-holder">
      <strong> {{ artistsNames }}</strong>
      <p>{{ track.name }}</p>
    </div>
    <div class="player">
      <p>{{ track.duration_ms | msToMm }}</p>
      <p @click="goToTrack(track.id)">detalles</p>
      <img
        src="@/assets/Images/music/icons8-play-button-circled-100.png"
        @click="selectTrack"
      />
    </div>
  </div>
</template>

<script>
import trackMixin from "@/mixins/track";
import { mapState } from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Track",
  mixins: [trackMixin],
  props: {
    track: {
      type: Object,
      required: true,
    },
  },
  computed: {
    artistsNames() {
      const names = this.track.artists.map((artist) => artist.name);
      return `${names.join(" - ")}`;
    },
  },
  methods: {
    goToTrack(id) {
      if (this.track.preview_url) {
        this.$router.push({ name: "track-detail", params: { id: id } });
      } else {
        return;
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  height: 81vh;
  align-items: center;
  justify-content: center;
}

.content {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding: 1px;
  border-radius: 4px;
}

.content > .text-holder,
.content > .player {
  padding-left: 20px;
  padding-right: 20px;
}

.container > div {
  display: flex;
  max-width: 50%;
}

.text-holder {
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  color: white;
  max-width: 250px;
  white-space: normal;
  overflow: hidden;
  text-overflow: clip;
}

strong {
  color: white;
}

.player {
  display: flex;
  justify-content: space-between;
}

.player > img {
  max-width: 32px;
  max-height: 32px;
  min-width: unset;
}
</style>
