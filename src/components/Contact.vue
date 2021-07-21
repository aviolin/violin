<template>
  <main>
    <div class="navbar-background"></div>
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
        <div class="no-overflow">
          <p>Please feel free to contact me through the form below or at my email address arlo.s.adams@gmail.com if you are interested in violin lessons, or if you are looking to hire a violinist or ensemble for a performance. I will get back to you as soon as I can!</p>
        </div>
      </article>
    </section>
    <section class="no-overflow contact">
      <form class="contact__form" @submit.prevent="sendEmail">
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
          <button>{{ emailState }}</button>
        </div>
      </form>
    </section>
    <Footer />
  </main>
</template>

<script>
import Footer from './Footer';
import Splitting from 'splitting';
import emailjs from 'emailjs-com';

export default {
  name: "Contact",
  components: {
    Footer
  },
  data() {
    return {
      emailState: "SEND >"
    }
  },
  mounted() {
    Splitting();
  },
  methods: {
    sendEmail(e) {
      this.emailState = "Sending...";
      emailjs.sendForm(process.env.VUE_APP_EMAIL_SERVICE_ID, process.env.VUE_APP_EMAIL_TEMPLATE_ID, e.target, process.env.VUE_APP_EMAIL_USER_ID)
        .then((result) => {
            this.emailState = "Email sent!"
        }, (error) => {
            this.emailState = "Error :( Please try again."
        });
    }
  }
}
</script>