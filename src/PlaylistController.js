import { Howl, Howler } from 'howler';
import { trackData } from './data';

export default class PlaylistController {
  constructor() {
    this.isPlaying = false;
    this.curTrack = 0;
    this.curHowl = null;
    this.trackData = trackData;
    console.log("Playlist initiated");
  }

  play(track) {
    if (!this.trackData[track].file) {
      console.log("No track");
      return;
    }

    this.stop();

    this.curHowl = new Howl({
      src: this.trackData[track].file,
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

  getCurTrackData() {
    return this.trackData[this.curTrack];
  }
}