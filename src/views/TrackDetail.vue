<template>
  <div class="container">
    <div class="columns">
      <div class="column is-5 has-text-centered">
        <figure class="media-left">
          <p class="image">
            <img :src="track.album.images[0].url" alt="" />
          </p>
        </figure>
      </div>
      <div class="column is-7">
        <div class="panel">
          <div class="panel-heading">
            <h1 class="title">
              {{ track.name }}
            </h1>
            <img
                  class="header-play-button"
                  @click="selectTrack"
                  src="@/assets/Images/music/icons8-play-button-circled-100.png"
                />
          </div>
          <div class="panel-block">
            <article class="media">
              <p>Album : {{ track.album.name }}</p>
              <p>Fecha de lanzamiento: {{track.album.release_date}} </p>
              <p>Artistas: {{this.artistsNames}}</p>
              <div class="popularity-box">
                <p>Popularidad:  </p>
                <star-rating
                  :rating="this.ratingConvertion"
                  :read-only="true"
                  :star-points=8
                  :fixed-points=1
                  :star-size=20
                >
                </star-rating>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import StarRating from 'vue-star-rating'
import trackMixin from "@/mixins/track";

export default {
  name: "TrackDetail",
  mixins: [trackMixin],
  components: {
    StarRating
  },
  data() {
    return {
      track: {},
    };
  },
  computed: {
    ...mapState(["tracks"]),
    artistsNames(){
      return this.track.album.artists.map(artist => artist.name).join(" - ");
    },
    ratingConvertion(){
      return (this.track.popularity * 5) / 100;
    }
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
* {
  color: aliceblue;
}

.container {
  display: flex;
  height: 81vh;
  align-items: center;
  justify-content: center;
}

.title,
.panel-heading {
  background-color: #181624;
}

.media {
  display: grid;
  grid-template-columns: 1fr;
}

.popularity-box {
  display: flex;
  gap: 5px;
}

.header-play-button {
  max-height: 36px;
}

.panel-heading {
  display: flex;
  align-items: center;
  gap: 12px;
}

.panel-heading > h1 {
  margin-bottom: unset;
}

.panel-block {
  font-size: x-large;
}
</style>
