<template>
  <div>
    <transition name="move">
      <notificacion
        v-if="showNotification"
        :notificationType="notificationType"
        :results="tracks.length"
      />
    </transition>
    <loader v-if="isLoading" />
    <section v-else class="section">
      <div class="container ajustado">
        <input
          v-model="searchQuery"
          type="text"
          class="input rehecho"
          placeholder="buscar canciones"
          @keyup.enter="search"
        />
        <search-songs @buscar-cancion="search" class="search-button">
          <p>Buscar</p>
        </search-songs>
      </div>
      <div class="container overflowed">
        <div class="columns is-multiline">
          <div
            v-for="track in tracks"
            :key="track.id"
            class="column is-one-quarter"
          >
            <Track
              :track="track"
              v-blur="track.preview_url"
              :class="{ 'is-active': track.id === selectedTrack }"
              @select="setSelectedTrack"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Track from "@/components/layout/Track.vue";
import trackService from "@/services/track";
import Loader from "@/components/shared/Loader";
import Notificacion from "@/components/shared/Notificacion.vue";
import SearchSongs from "@/components/shared/SearchSongs.vue";
import { mapActions, mapState } from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Search",
  components: {
    Track,
    Loader,
    Notificacion,
    SearchSongs,
  },
  data() {
    return {
      searchQuery: "",
      msg: "Hola mundo desde Vue!",
      isLoading: false,
      selectedTrack: "",
      showNotification: false,
      notificationType: "",
    };
  },
  computed: {
    ...mapState(["tracks", "track"]),
    searchMessage() {
      return `Encontrados ${this.tracks.length}`;
      //{{ track.name }} - {{ track.artists.map((artist) => artist.name) }}
    },
  },
  watch: {
    showNotification() {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false;
        }, 3000);
      }
    },
  },
  methods: {
    ...mapActions(["searchTracks"]),
    async search() {
      if (this.searchQuery === "") {
        return;
      }
      this.isLoading = true;
      await this.$store.dispatch("searchTracks", this.searchQuery).then(() => {
        if (this.tracks.length === 0) {
          this.notificationType = "wrong";
        } else {
          this.notificationType = "madeit";
        }
        this.showNotification = true;
        this.isLoading = false;
      });
    },
    setSelectedTrack(id) {
      this.selectedTrack = id;
    },
  },
};
</script>

<style>
.is-active {
  -webkit-box-shadow: 5px 5px 15px 5px #000000;
  box-shadow: 5px 5px 15px 5px #000000;
}

#app {
  background-color: #181624;
  height: 100vh;
}

.input.rehecho {
  background: transparent;
  background-color: transparent;
  border-radius: 15px;
  color: #ffffffb6;
  border: 1px solid rgba(51, 51, 51, 0.3);
  width: 35%;
}

.input.rehecho::placeholder {
  color: #363636;
}

.input.rehecho:focus {
  border: 0.5px solid rgba(51, 51, 51, 0.7);
  box-shadow: unset;
}

.container.ajustado {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
}

.search-button {
  max-width: 20%;
}

.section {
  background-color: #181624;
  min-height: 87vh;
  padding-top: 2rem;
}

.is-one-quarter {
  display: flex;
}
</style>
