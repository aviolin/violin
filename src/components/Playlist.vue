<template>
  <section class="playlist">
    <div class="playlist__container">
      <!-- <h2 data-splitting class="subheading">Playlist</h2> -->
      <div v-for="track in trackData" :key="track.id" class="playlist__item">
        <div class="playlist__row">
          <div class="playlist__item-title">{{ track.id + 1 }}. {{ track.name }}</div>
          <button v-if="isPlayingTrack(track.id)" class="playlist__item-button" @click="stop">STOP</button>
          <button v-else class="playlist__item-button" @click="play(track.id)">PLAY</button>
        </div>
        <div class="playlist__row">
          <div class="playlist__item-sub">{{ track.subtitle }}</div> 
        </div>
      </div>
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
      trackData
    }
  },
  inject: ['number', 'playlistController'],
  methods: {
    play(track) {
      this.playlistController.value.play(track);
    },
    stop() {
      this.playlistController.value.stop();
    },
    isPlayingTrack(track) {
      return this.playlistController.value.isPlaying && this.playlistController.value.curTrack === track;
    }
  }
}
</script>