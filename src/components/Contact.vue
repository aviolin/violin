<template>
  <main>
    <section class="hero">
      <h1 data-splitting class="hero__title">
        <span class="line">CONTACT ME</span>
        <span class="line">(ARLO ADAMS)</span>
      </h1>
      <div class="hero__img-container">
        <figure class="hero__img">
          <img src="../assets/arlo-1.png" alt="Arlo Adams playing violin." />
        </figure>
      </div>
    </section>
    <section class="content">
      <article class="content__text">
        <p>Please feel free to contact me through the form below or at my email address arlo.s.adams@gmail.com if you are interested in violin lessons, or are looking to hire a violinist/group for a performance. I will get back to you as soon as I can!</p>
      </article>
    </section>
    <section class="contact">
      <!-- <h2 data-splitting class="subheading">Contact</h2> -->
      <form class="contact__form">
        <div class="form-row">
          <input name="name" id="name" type="text" autocomplete="off" required />
          <label for="name">Your name</label>
        </div>
        <div class="form-row">
          <input name="email" id="email" type="text" autocomplete="off" required />
          <label for="email">Your email</label>
        </div>
        <div class="form-row">
          <textarea name="message" id="message" autocomplete="off" required></textarea>
          <label for="message">Your message</label>
        </div>
        <div class="form-row">
          <button>SEND ></button>
        </div>
      </form>
    </section>
    <Footer />
  </main>
</template>

<script>
import Footer from './Footer';
import Splitting from 'splitting';

export default {
  name: "Contact",
  components: {
    Footer
  },
  mounted() {
    Splitting();
  }
}
</script>