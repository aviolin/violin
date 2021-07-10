<template>
  <footer class="footer">
    <div class="marquees full-bleed">
      <div class="marquee">
        <div class="marquee__inner right" aria-hidden="true">
          <span class="marquee__inner-container">
            <span class="marquee__item">Fort Collins Symphony</span>
            <span class="marquee__item">Nebula Ensemble</span>
            <span class="marquee__item">Sphere Ensemble</span>
            <span class="marquee__item">Wild Beautiful Orchestra</span>
          </span>
          <span class="marquee__inner-container">
            <span class="marquee__item">Fort Collins Symphony</span>
            <span class="marquee__item">Nebula Ensemble</span>
            <span class="marquee__item">Sphere Ensemble</span>
            <span class="marquee__item">Wild Beautiful Orchestra</span>
          </span>
          <span class="marquee__inner-container">
            <span class="marquee__item">Fort Collins Symphony</span>
            <span class="marquee__item">Nebula Ensemble</span>
            <span class="marquee__item">Sphere Ensemble</span>
            <span class="marquee__item">Wild Beautiful Orchestra</span>
          </span>
          <span class="marquee__inner-container">
            <span class="marquee__item">Fort Collins Symphony</span>
            <span class="marquee__item">Nebula Ensemble</span>
            <span class="marquee__item">Sphere Ensemble</span>
            <span class="marquee__item">Wild Beautiful Orchestra</span>
          </span>
        </div>
      </div>
      <div class="marquee">
        <div class="marquee__inner left" aria-hidden="true">
          <span class="marquee__inner-container">
            <span class="marquee__item">Nexus String Quartet</span>
            <span class="marquee__item">A Lyric Ensemble</span>
            <span class="marquee__item">Boulder Chamber Orchestra</span>
            <span class="marquee__item">Greeley Philharmonic</span>
          </span>
          <span class="marquee__inner-container">
            <span class="marquee__item">Nexus String Quartet</span>
            <span class="marquee__item">A Lyric Ensemble</span>
            <span class="marquee__item">Boulder Chamber Orchestra</span>
            <span class="marquee__item">Greeley Philharmonic</span>
          </span>
          <span class="marquee__inner-container">
            <span class="marquee__item">Nexus String Quartet</span>
            <span class="marquee__item">A Lyric Ensemble</span>
            <span class="marquee__item">Boulder Chamber Orchestra</span>
            <span class="marquee__item">Greeley Philharmonic</span>
          </span>
          <span class="marquee__inner-container">
            <span class="marquee__item">Nexus String Quartet</span>
            <span class="marquee__item">A Lyric Ensemble</span>
            <span class="marquee__item">Boulder Chamber Orchestra</span>
            <span class="marquee__item">Greeley Philharmonic</span>
          </span>
        </div>
      </div>
    </div>
    <div class="footer__links" data-splitting>
      <a href="index.html" class="footer__link"><span class="footer__link-inner">HOME ></span></a>
      <a href="students.html" class="footer__link"><span class="footer__link-inner">STUDENTS ></span></a>
      <a href="#" class="footer__link"><span class="footer__link-inner">CONTACT ></span></a>
    </div>
    <div class="footer__info">
      <span class="footer__email">arlo.s.adams@gmail.com</span>
      <span class="footer__copyright">&copy; Copyright 2021, Arlo Adams</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
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
    this.observer.observe(document.querySelector('.footer__links'));
  },
  methods: {
    observerCallback(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".footer__link").forEach(ele => {
            ele.classList.add("animate-in");
          });
        } else {
          document.querySelectorAll(".footer__link").forEach(ele => {
            ele.classList.remove("animate-in");
          });
        } 
      });
    }
  }
}
</script>
