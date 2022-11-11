const trackMixin = {
  methods: {
    selectTrack() {
      if (this.track.preview_url) {
        //this.$emit("select", this.track.id);
        //this.$bus.$emit("set-track", this.track);
        this.$store.commit('setTrack', this.track);
        this.$store.dispatch('changeSongSource', this.track.preview_url);
      } else {
        return;
      }
    },
    setVolume(volume){
      this.$store.dispatch('changeSongVolume', volume);
    }
  }
}

export default trackMixin;
