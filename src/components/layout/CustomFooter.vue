<template>
  <footer>
    <div class="principal">
      <div class="music-info">
        <artist-played-info
          :track="track"
          :placeHolder="placeHolder"
        ></artist-played-info>
      </div>
      <div class="actions">
        <actions
          @pause="pauseCurrentSong"
          @stop="stopCurrentSong"
          @play="playCurrentSong"
        ></actions>
      </div>
      <div class="options">
        <fav-action></fav-action>
        <input type="range" v-model="volume" min="0" max="100" />
      </div>
    </div>
  </footer>
</template>
<script>
import Actions from "../shared/Actions.vue";
import ArtistPlayedInfo from "./ArtistPlayedInfo.vue";
import FavAction from "./FavAction.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "CustomFooter",
  components: { ArtistPlayedInfo, Actions, FavAction },
  props: {
    song: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      volume: 50,
      placeHolder: true,
    };
  },
  computed: {
    ...mapState(["track", "cancion"]),
    audioVolume() {
      return Number(this.volume) / 100;
    },
  },
  watch: {
    track() {
      if (this.track.id) {
        this.placeHolder = false;
      }
    },
    volume(){
      this.changeSongVolume(this.audioVolume);
    }
  },
  async created() {
    this.changeSongVolume(this.audioVolume);
  },
  async mounted() {},
  methods: {
    ...mapActions([
      'changeSongVolume',
      'pauseCurrentSong',
      'playCurrentSong',
      'stopCurrentSong'
    ]),
    async playPreview() {},
  },
};
</script>

<style scoped>
.principal {
  width: 100%;
  height: 12vh;
  display: grid;
  justify-content: space-evenly;
  grid-template-columns: 1fr 1fr 1fr;
}

.options {
  display: grid !important;
  grid-template-columns: 1fr 2fr !important;
  gap: 5px;
}

input[type="range"] {
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 50%; /* Specific width is required for Firefox. */
  background: #9a905d; /* Otherwise white in Chrome */
  height: 4px;
  border-radius: 10px;
}

input[type="range"]:focus {
  outline: none;
}

input[type="range"]::-ms-track {
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: 1px solid #000000;
  height: 16px;
  width: 16px;
  border-radius: 12px;
  background: #333333;
  cursor: pointer;
  margin-top: 0px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; /* Add cool effects to your sliders! */
}

input[type="range"]::-webkit-slider-runnable-track {
  background-color: transparent;
}

footer {
  position: sticky;
  bottom: 0;
  width: 100%;
  border: 1px solid rgba(51, 51, 51, 0.3);
  background-color: #181624cd;
}

.principal > div {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
