<template>
  <!-- <div id="cursor"></div> -->
  <main>
    <section class="hero">
      <h1 data-splitting class="hero__title">
        <span class="line">ARLO ADAMS IS A</span>
        <span class="line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VIOLINIST,</span>
        <span class="line">INSTRUCTOR</span>
        <span class="line">&nbsp;&nbsp;&nbsp;&nbsp;& PERFORMER</span>
      </h1>
      <div class="hero__img-container">
        <figure class="hero__img">
          <img src="../assets/arlo-1.png" alt="Arlo Adams playing violin." />
        </figure>
      </div>
    </section>
    <Playlist />
    <section class="content">
      <article class="content__text">
        <h2 data-splitting class="subheading">Biography</h2>
        <p>Arlo Adams is a classically trained violinist, performing as a soloist, chamber musician, and orchestral player in Denver and throughout the Colorado area. Along with performing in the Fort Collins Symphony, he has performed with the Greeley Philharmonic, Boulder Chamber Orchestra, and many Colorado based chamber groups including the Lyric Ensemble, Playground Ensemble, Sphere Ensemble, Con Brio Trio, and ARTsemble.</p>
        <p>Mr. Adams began his studies in Flagstaff Arizona at the age of 9 under the Suzuki method. From there, he moved to the Tucson area to study with Professor Mark Rush at the University of Arizona for two years before coming to Colorado to continue his studies at the University of Denver, where he received a Bachelor's of Music in Violin Performance, and a Performance Certificate.</p>
        <p>During his studies, he became very interested in modern music, and since then has premiered orchestral works by Shafer Mahoney and Glenn Stallcop, the chamber work Deux pas de Deux for violin and piano by Charles Zoll, winner of the 2013 “Rapido!” composition contest, and was the violin soloist with the Lamont Symphony Orchestra in the premier performance of Sarah Perske's Therese's Elevator.        </p>
        <p>In addition to classical music, Mr. Adams enjoys other genres including pop and jazz, and performing with a looper to create unique music. He also performs in musical theatre pits around the country, and as a session violinist in recording studios.</p>
        <p>He has held a studio of ~15 students in the Denver area since 2014, and works with Manifest String Studio and City Strings to bring the joy and excitement of music to kids and adults alike throughout Denver. When he is not performing or teaching, he is likely enjoying what Colorado has to offer and building small electronics projects.</p>
      </article>
    </section>
    <Footer />
  </main>
</template>

<script>
import Footer from './Footer.vue';
import Playlist from './Playlist.vue';

export default {
  name: "home",
  components: {
    Footer,
    Playlist
  }
}
</script>
