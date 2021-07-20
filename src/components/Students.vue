<template>
  <main>
    <div class="navbar-background"></div>
    <section class="hero">
      <h1 data-splitting class="hero__title">
        <span class="line">ARLO ADAMS'</span>
        <span class="line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PRIVATE</span>
        <span class="line">VIOLIN STUDIO</span>
        <span class="line">&nbsp;&nbsp;&nbsp;&nbsp;IN DENVER</span>
      </h1>
      <div class="hero__img-container">
        <figure class="hero__img">
          <img src="../assets/arlo-1.png" alt="Arlo Adams playing violin." />
        </figure>
      </div>
    </section>
    <section class="testimonial full-bleed fade-on-page-leave">
      <div class="no-overflow">
        <p>"The world's GREATEST violin teacher!"</p>
      </div><div class="no-overflow">
        <p class="sub">( at least that's what my students say )</p>
      </div>
    </section>
    <section class="content">
      <div class="content__img-container">
        <figure class="content__img">
          <img src="../assets/arlo-2.webp" alt="Arlo Adams headshot." />
        </figure>
      </div>
      <article class="content__text">
        <h2 data-splitting class="subheading">My violin studio</h2>
        <p>I have held a small Suzuki violin studio in the Denver area since 2014, where I teach violinists of all levels—from complete beginner to advanced—the joys of playing music. As a former Suzuki student myself, I find that the Suzuki method and its ideologies have great success with students, and I generally use the Suzuki method with my students. That said, I am not afraid to supplement my students' learning with other resources and pedagogical tools! We live in the 21st century, and there are so many resources available for budding violinists that it would be a shame not to use what's out there.</p>
        <p>In addition to my private violin studio, I also teach group violin classes with City Strings to bring music to underprivileged kids around Denver. Regardless of the situation, I love to bring the joy and excitement of music to both kids and adults!</p>
        <p>My violin lessons are 30, 45, or 60 minutes long, and I am happy to teach both in-home lessons or online. If you are not sure what length of lesson you need, or have any other questions regarding my violin studio, please feel free to ask! </p>
      </article>
    </section>
    <Footer />
  </main>
</template>

<script>
import Footer from './Footer.vue';
import Splitting from 'splitting';

export default {
  name: "Students",
  components: {
    Footer,
  },
  mounted() {
    Splitting();
  }
}
</script>