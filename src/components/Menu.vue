<template>
  <div class="menu" id="menu">
    <header class="menu__header">
      <div>ARLO ADAMS, VIOLINIST</div>
      <button class="navbar__button menu-btn" @click="$emit('toggleMenu')">CLOSE</button>
    </header>
    <div class="menu__links">
      <a href="index.html" class="menu__link"><span class="menu__link-inner">HOME</span></a>
      <a href="students.html" class="menu__link selected"><span class="menu__link-inner">STUDENTS</span></a>
      <a href="contact.html" class="menu__link"><span class="menu__link-inner">CONTACT</span></a>
    </div>
    <Playlist />
    <footer class="menu__footer">
      <div>arlo.s.adams@gmail.com</div>
      <div>&copy; Copyright 2021, Arlo Adams</div>
    </footer>
  </div>
</template>

<script>
import Playlist from './Playlist.vue';

export default {
  name: "Menu",
  emits: {
    toggleMenu: null
  },
  components: {
    Playlist
  }
}
</script>