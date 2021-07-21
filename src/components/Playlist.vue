<template>
  <section class="playlist">
    <div class="playlist__container">
      <!-- <h2 data-splitting class="subheading">Playlist</h2> -->
      <template v-for="track in trackData" :key="track.id">
        <template v-if="isPlayingTrack(track.id)">
          <button class="playlist__item" @click="stop">
            <div class="playlist__bar-container" @click.stop="seek">
              <span class="playlist__bar" v-bind:style="barStyles"></span>
            </div>
            <div class="playlist__row">
              <div class="playlist__item-title">{{ track.id + 1 }}. {{ track.name }} - {{ remainingTime }}</div>
              <span class="playlist__item-button">STOP</span>
            </div>
            <div class="playlist__row">
              <div class="playlist__item-sub">{{ track.composer }}</div> 
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
              <div class="playlist__item-sub">{{ track.composer }}</div> 
            </div>
          </button>
        </template>
      </template>
    </div>
  </section>
</template>

<script>
import { trackData } from '../data';

const numToTime = (num) => {
  const minutes = ~~(num/60);
  let seconds = ~~(num % 60);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return minutes + ":" + seconds;
}

export default {
  name: "Playlist",
  data() {
    return {
      trackData,
      barStyles: {
        width: "0%"
      },
      elapsedTime: "",
      remainingTime: "",
    }
  },
  inject: ['playlistController'],
  created() {
    this.animateBar();
  },
  methods: {
    play(track) {
      this.playlistController.value.play(track);
    },
    stop() {
      this.playlistController.value.stop();
    },
    seek(e) {
      const clickPosX = e.clientX - e.target.offsetParent.offsetLeft;
      const targetWidth = e.target.offsetWidth;
      const seekPercent = clickPosX / targetWidth;
      this.playlistController.value.seek(seekPercent);
    },
    isPlayingTrack(track) {
      return this.playlistController.value.isPlaying && this.playlistController.value.curTrack === track;
    },
    animateBar() {
      if (this.playlistController.value.isPlaying) {
        this.elapsedTime = this.playlistController.value.curHowl.seek();
        const remaining = this.playlistController.value.curHowl.duration() - this.elapsedTime;
        this.remainingTime = numToTime(remaining);
        if (this.playlistController.value.curHowl.state() === "loading") {
          this.remainingTime = "Loading...";
        }
        this.barStyles.width = (this.elapsedTime / this.playlistController.value.curHowl.duration()) * 100 + "%";
      }
      window.requestAnimationFrame(this.animateBar);
    },

  },
}
</script>