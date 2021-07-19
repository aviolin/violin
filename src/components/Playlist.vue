<template>
  <section class="playlist">
    <div class="playlist__container">
      <!-- <h2 data-splitting class="subheading">Playlist</h2> -->
      <template v-for="track in trackData" :key="track.id">
        <template v-if="isPlayingTrack(track.id)">
          <button class="playlist__item" @click="stop">
            <span class="playlist__bar" v-bind:style="barStyles"></span>
            <div class="playlist__row">
              <div class="playlist__item-title">{{ track.id + 1 }}. {{ track.name }}</div>
              <span class="playlist__item-button">STOP</span>
            </div>
            <div class="playlist__row">
              <div class="playlist__item-sub">{{ track.subtitle }}</div> 
            </div>
          </button>
        </template>
        <template v-else>
          <button class="playlist__item" @click="play(track.id)">
            <div class="playlist__row">
              <div class="playlist__item-title">{{ track.id + 1 }}. {{ track.name }}</div>
              <span class="playlist__item-button">PLAY</span>
            </div>
            <div class="playlist__row">
              <div class="playlist__item-sub">{{ track.subtitle }}</div> 
            </div>
          </button>
        </template>
      </template>
    </div>
  </section>
</template>

<script>
const trackData = [
  {
    id: 0,
    name: "Bach: Sonata #1 for Solo Violin",
    subtitle: "1st movement, Adagio"
  },
  {
    id: 1,
    name: "Puts: Arches",
    subtitle: "1st movement, Adagio"
  },
  {
    id: 2,
    name: "Sibelius: Violin Concerto",
    subtitle: "1st movement, Adagio"
  },
  {
    id: 3,
    name: "Bach: Sonata #1 for Solo Violin",
    subtitle: "1st movement, Adagio"
  },
  {
    id: 4,
    name: "Puts: Arches",
    subtitle: "1st movement, Adagio"
  },
  {
    id: 5,
    name: "Bach: Sonata #1 for Solo Violin",
    subtitle: "1st movement, Adagio"
  },
]

export default {
  name: "Playlist",
  data() {
    return {
      trackData,
      barStyles: {
        width: "300px"
      }
    }
  },
  inject: ['number', 'playlistController'],
  methods: {
    play(track) {
      this.playlistController.value.play(track);
      this.animateBar();
    },
    stop() {
      this.playlistController.value.stop();
    },
    isPlayingTrack(track) {
      return this.playlistController.value.isPlaying && this.playlistController.value.curTrack === track;
    },
    animateBar() {
      this.barStyles.width = (this.playlistController.value.curHowl.seek() / this.playlistController.value.curHowl.duration()) * 100 + "%";
      if (this.playlistController.value.isPlaying) {
        window.requestAnimationFrame(this.animateBar);
      }
    }
  },
}
</script>