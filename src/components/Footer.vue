<template>
  <footer class="footer fade-on-page-leave">
    <div class="marquees full-bleed">
      <Marquee direction="right">
        <span class="marquee__item">Fort Collins Symphony</span>
        <span class="marquee__item">Nebula Ensemble</span>
        <span class="marquee__item">Sphere Ensemble</span>
        <span class="marquee__item">Wild Beautiful Orchestra</span>
      </Marquee>
      <Marquee direction="left">
        <span class="marquee__item">Nexus String Quartet</span>
        <span class="marquee__item">A Lyric Ensemble</span>
        <span class="marquee__item">Boulder Chamber Orchestra</span>
        <span class="marquee__item">Greeley Philharmonic</span>
      </Marquee>
    </div>
    <div class="offset__links" data-splitting>
      <router-link to="/" class="offset__link"><span class="offset__link-inner">HOME</span></router-link>
      <router-link to="/students" class="offset__link"><span class="offset__link-inner">STUDENTS</span></router-link>
      <router-link to="/contact" class="offset__link"><span class="offset__link-inner">CONTACT</span></router-link>
    </div>
    <div class="footer__info">
      <span class="footer__email"><a href="mailto:arlo.s.adams@gmail.com">arlo.s.adams@gmail.com</a></span>
      <span class="footer__copyright">&copy; Copyright 2021, Arlo Adams</span>
    </div>
  </footer>
</template>

<script>
import Marquee from './Marquee.vue';

export default {
  name: "Footer",
  components: {
    Marquee
  },
  data() {
    return {
      observer: null,
    }
  },
  mounted() {
    let options = {
      root: document.querySelector('#root'),
      rootMargin: '0px',
      threshold: 0.0
    }
    
    this.observer = new IntersectionObserver(this.observerCallback, options);
    this.observer.observe(document.querySelector('.offset__links'));
  },
  methods: {
    observerCallback(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".offset__link").forEach(ele => {
            ele.classList.add("animate-in");
          });
        } else {
          document.querySelectorAll(".offset__link").forEach(ele => {
            ele.classList.remove("animate-in");
          });
        } 
      });
    }
  }
}
</script>
