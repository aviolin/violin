<template>
  <header class="navbar">
    <div class="navbar__left">
      <span class="navbar__left-text">
        <template v-if="getCurTrack">
          {{ getCurTrack }} 
          <button class="navbar__button" @click="stopAudio" style="display: inline">STOP</button>
        </template>
        <template v-else>
          <router-link class="unstyled__link" to="/">ARLO ADAMS, VIOLINIST</router-link>
        </template>
      </span>
    </div>
    <nav class="navbar__right">
      <router-link to="/" class="navbar__link large-screen-only">HOME</router-link>
      <router-link to="/students" class="navbar__link large-screen-only">STUDENTS</router-link>
      <router-link to="/contact" class="navbar__link large-screen-only">CONTACT</router-link>
      <button class="navbar__button menu-btn" @click="$emit('toggleMenu')">{{ isMenuOpen ? 'CLOSE' : 'MENU' }}</button>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    isMenuOpen: Boolean
  },
  emits: {
    toggleMenu: null
  },
  inject: ['playlistController'],
  computed: {
    getCurTrack() {
      if (!this.playlistController.value || !this.playlistController.value.isPlaying) return null;

      let text = "NOW PLAYING ";
      const name = this.playlistController.value.getCurTrackData().name;
      const composer = this.playlistController.value.getCurTrackData().composer;
      
      return text + name + " by " + composer;
    }
  },
  methods: {
    stopAudio() {
      this.playlistController.value.stop();
    }
  }
}
</script>