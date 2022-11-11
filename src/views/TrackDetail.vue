<template>
  <div class="container">
    <div class="columns">
      <div class="column is-3 has-text-centered">
        <figure class="media-left">
          <p class="image">
            <img :src="track.album.images[0].url" alt="" />
          </p>
          <p>
            <a class="button is-primary is-large">
              <span class="icon" @click="selectTrack"></span>
            </a>
          </p>
        </figure>
      </div>
      <div class="column is-8">
        <div class="panel">
          <div class="panel-heading">
            <h1 class="title">
              {{ track.name }}
            </h1>
          </div>
          <div class="panel-block">
            <article class="media"></article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import trackMixin from "@/mixins/track";

export default {
  name: "TrackDetail",
  mixins: [trackMixin],
  data() {
    return {
      track: {},
    };
  },
  computed: {
    ...mapState(["tracks"]),
  },
  async created() {
    const id = this.$route.params.id;
    this.track = this.tracks.find((track) => track.id === id);
  },
  methods: {
    ...mapActions(["getTrackById"]),
  },
};
</script>

<style scoped>
.container {
  display: flex;
  height: 87vh;
  align-items: center;
  justify-content: center;
}
</style>
