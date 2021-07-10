<template>
  <section class="playlist">
    <h2 data-splitting class="subheading">Playlist</h2>
    <!-- <div class="marquee small">
      <div class="marquee__inner left" aria-hidden="true">
        <span class="marquee__inner-container">
          <span class="marquee__item">now playing ADAGIO FROM SONATA #1 by J.S. BACH</span>
        </span>
        <span class="marquee__inner-container">
          <span class="marquee__item">now playing ADAGIO FROM SONATA #1 by J.S. BACH</span>
        </span>
        <span class="marquee__inner-container">
          <span class="marquee__item">now playing ADAGIO FROM SONATA #1 by J.S. BACH</span>
        </span>
        <span class="marquee__inner-container">
          <span class="marquee__item">now playing ADAGIO FROM SONATA #1 by J.S. BACH</span>
        </span>
      </div>
    </div> -->
    <div class="playlist__item">
      <div class="playlist__row">
        <div class="playlist__item-title">1. Bach: Sonata #1 for Solo Violin</div>
        <button class="playlist__item-button">PLAY</button>
      </div>
      <div class="playlist__row">
        <div class="playlist__item-sub">1st movement, Adagio</div> 
      </div>
    </div>
    <div class="playlist__item">
      <div class="playlist__row">
        <div class="playlist__item-title">2. Puts: Arches</div>
        <button class="playlist__item-button">PLAY</button>
      </div>
      <div class="playlist__row">
        <div class="playlist__item-sub">&nbsp;</div> 
      </div>
    </div>
    <div class="playlist__item">
      <div class="playlist__row">
        <div class="playlist__item-title">3. Sibelius: Violin Concerto</div>
        <button class="playlist__item-button">PLAY</button>
      </div>
      <div class="playlist__row">
        <div class="playlist__item-sub">1st movement, Allegro</div> 
      </div>
    </div>
    <div class="playlist__item">
      <div class="playlist__row">
        <div class="playlist__item-title">4. Bach: Sonata #1 for Solo Violin</div>
        <button class="playlist__item-button">PLAY</button>
      </div>
      <div class="playlist__row">
        <div class="playlist__item-sub">1st movement, Adagio</div> 
      </div>
    </div>
    <div class="playlist__item">
      <div class="playlist__row">
        <div class="playlist__item-title">5. Puts: Arches</div>
        <button class="playlist__item-button">PLAY</button>
      </div>
      <div class="playlist__row">
        <div class="playlist__item-sub">&nbsp;</div> 
      </div>
    </div>
    <div class="playlist__item">
      <div class="playlist__row">
        <div class="playlist__item-title">6. Sibelius: Violin Concerto</div>
        <button class="playlist__item-button">PLAY</button>
      </div>
      <div class="playlist__row">
        <div class="playlist__item-sub">1st movement, Allegro</div> 
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Playlist",
}
</script>