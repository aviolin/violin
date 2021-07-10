<template>
  <header class="navbar">
    <div class="navbar__left">
      <span class="navbar__left-text">
        NOW PLAYING <i>ADAGIO FROM SONATA #1</i> BY J.S. BACH
      </span>
    </div>
    <nav class="navbar__right">
      <a href="index.html" class="navbar__link selected large-screen-only">HOME</a>
      <a href="students.html" class="navbar__link large-screen-only">STUDENTS</a>
      <a href="#" class="navbar__link large-screen-only">CONTACT</a>
      <button class="navbar__button menu-btn" @click="$emit('toggleMenu')">MENU</button>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  emits: {
    toggleMenu: null
  },
}
</script>