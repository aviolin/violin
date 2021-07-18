<template>
    <transition name="fade">
      <Menu v-if="isMenuOpen" @toggle-menu="toggleMenu" />
    </transition>
    <Navbar @toggle-menu="toggleMenu" :isMenuOpen="isMenuOpen"/>
  <router-view v-slot="{ Component }">
    <transition 
      name="page-transition" 
      :duration="1200" 
      mode="out-in"
    >
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import { computed } from 'vue';
import Menu from './components/Menu.vue';
import Navbar from './components/Navbar.vue';

import PlaylistController from './PlaylistController';

export default {
  name: 'App',
  components: {
    Menu,
    Navbar,
  },
  data() {
    return {
      isMenuOpen: false,
      playlistController: null
    }
  },
  mounted() {
    this.playlistController = new PlaylistController();
  },
  methods: {
    toggleMenu(b = null) {
      const body = document.querySelector('body');
      if (b !== null) {
        if (b === "open") {
          this.isMenuOpen = true;
          body.classList.add('hide-overflow-y');
        } else if (b === "close") {
          this.isMenuOpen = false;
          body.classList.remove('hide-overflow-y');
        }
        return;
      }

      this.isMenuOpen = !this.isMenuOpen;
      body.classList.toggle('hide-overflow-y');
    }
  },
  provide() {
    return {
      number: 10,
      playlistController: computed(() => this.playlistController)
    }
  },
  watch: {
    '$route' () {
      this.toggleMenu('close');
    }
  }
}
</script>
