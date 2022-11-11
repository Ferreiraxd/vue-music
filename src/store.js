import Vue from 'vue'
import Vuex from 'vuex'
import trackService from '@/services/track'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tracks: [],
    track: {
    },
    cancion: new Audio()
  },

  mutations: {
    setCanciones(state, payload){
      state.tracks = payload;
    },
    setTrack(state, payload){
      state.track = payload;
    },
    setCancion(state, payload){
      state.cancion.setAttribute("src", payload);
      state.cancion.pause();
      console.log("paso por aquí");
      state.cancion.currentTime = 0;
      state.cancion.play();
    },
    setVolume(state, payload){
      state.cancion.volume = payload;
    },
    pauseSong(state){
      state.cancion.pause()
    },
    playSong(state){
      state.cancion.play()
    },
    stopSong(state){
      state.cancion.currentTime = 0;
      state.cancion.pause()
    }
  },

  actions: {
    getTrackById(context, payload){
      return trackService.getById(payload.id).
      then(()=>{
        context.commit('setTrack', res)
        return res;
      });
    },
    changeSongSource(context, payload){
      context.commit('setCancion', payload);
    },
    async searchTracks(context, payload){
      await trackService.search(payload).then((res) => {
        console.log(res);
        context.commit('setCanciones', res.data.tracks.items);
      });
    },
    changeSongVolume(context, payload){
      context.commit('setVolume', payload);
    },
    pauseCurrentSong(context){
      context.commit('pauseSong');
    },
    playCurrentSong(context){
      context.commit('playSong');
    },
    stopCurrentSong(context){
      context.commit('stopSong');
    }
  }
});

export default store;
