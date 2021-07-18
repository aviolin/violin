import { Howl, Howler } from 'howler';
import redViolinAudio from './assets/audio/redviolin.mp3';

export default class PlaylistController {
  constructor() {
    this.isPlaying = false;
    this.curTrack = 0;
    this.tracks = [redViolinAudio];
    this.curHowl = null;

    console.log("Playlist initiated");
  }

  play(track) {
    if (!this.tracks[track]) {
      console.log("No track");
      return;
    }

    this.stop();

    this.curHowl = new Howl({
      src: this.tracks[track],
      onend: () => {
        this.stop();
      }
    });

    this.curHowl.play();
    this.curTrack = track;
    this.isPlaying = true;
  }

  stop() {
    if (!this.curHowl) return;
    this.curHowl.stop();
    this.isPlaying = false;
  }
}