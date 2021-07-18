<template>
  <div class="menu" id="menu">
    <div class="menu__container">
      <div class="offset__links">
        <router-link to="/" class="offset__link"><span class="offset__link-inner">HOME</span></router-link>
        <router-link to="/students" class="offset__link"><span class="offset__link-inner">STUDENTS</span></router-link>
        <router-link to="/contact" class="offset__link"><span class="offset__link-inner">CONTACT</span></router-link>
      </div>
      <Playlist />
    </div>
  </div>
</template>

<script>
import Playlist from './Playlist.vue';

export default {
  name: "Menu",
  components: {
    Playlist
  },
}
</script>