<template>
  <Menu v-if="isMenuOpen" @toggle-menu="toggleMenu" />
  <Navbar @toggle-menu="toggleMenu" />
  <Home />
</template>

<script>
import Home from './components/Home.vue';
import Menu from './components/Menu.vue';
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Home,
    Menu,
    Navbar,
  },
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
}
</script>
