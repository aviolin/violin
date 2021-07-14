<template>
  <header class="navbar">
    <div class="navbar__left">
      <span class="navbar__left-text">
        NOW PLAYING <i>ADAGIO FROM SONATA #1</i> BY J.S. BACH
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
}
</script>