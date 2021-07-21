import { Howl, Howler } from 'howler';
import { trackData } from './data';

export default class PlaylistController {
  constructor() {
    this.isPlaying = false;
    this.curTrack = 0;
    this.curHowl = null;
    this.trackData = trackData;
    /* console.log("Playlist initiated"); */
  }

  play(track) {
    if (!this.trackData[track].file) {
      console.log("No track");
      return;
    }

    console.log("Playing sound...");

    this.stop();

    if(Howler.ctx && Howler.ctx.state && Howler.ctx.state == "suspended") {
      Howler.ctx.resume().then(function() {
        console.log("AudioContext resumed!");
        this.curHowl = new Howl({
          src: this.trackData[track].file,
          onload: () => {
            console.log("Loaded");
          },
          onloaderror: (id, err) => {
            console.log("Load error: ", err);
          },
          onplay: () => {
            console.log("Playing");
            if(Howler.ctx && Howler.ctx.state && Howler.ctx.state == "suspended") {
              Howler.ctx.resume()
              console.log("Resumed");
            }
          },
          onplayerror: (id, err) => {
            console.log("Play error: ", err);
          },
          onend: () => {
            this.stop();
            this.playNext();
          }
        });
    
        this.curHowl.play();
        this.curTrack = track;
        this.isPlaying = true;
    
        console.log("Played sound!");
      });
    } else {
      this.curHowl = new Howl({
        src: this.trackData[track].file,
        onload: () => {
          console.log("Loaded");
        },
        onloaderror: (id, err) => {
          console.log("Load error: ", err);
        },
        onplay: () => {
          console.log("Playing");
          console.log(Howler.ctx);
          if(Howler.ctx && Howler.ctx.state && Howler.ctx.state == "suspended") {
            Howler.ctx.resume()
            console.log("Resumed");
          }
        },
        onplayerror: (id, err) => {
          console.log("Play error: ", err);
        },
        onend: () => {
          this.stop();
          this.playNext();
        }
      });
  
      this.curHowl.play();
      this.curTrack = track;
      this.isPlaying = true;
  
      console.log("Played sound!");
    }

    
  }

  stop() {
    if (!this.curHowl) return;
    this.curHowl.stop();
    this.isPlaying = false;
  }

  pause() {
    if (!this.curHowl) return;
    this.curHowl.pause();
  }

  // pos: Float (0 - 1)
  seek(pos) {
    if (!this.curHowl) return;
    if (pos < 0 || pos > 1) pos = 0;
    this.curHowl.seek(this.curHowl.duration() * pos);
  }

  playNext() {
    const totalTracks = this.trackData.length;
    if (this.curTrack < totalTracks - 1) {
      setTimeout(() => {
        this.play(this.curTrack + 1);
      }, 3000)
    } else {
      setTimeout(() => {
        this.play(0);
      }, 3000)
    }
  }

  getCurTrackData() {
    return this.trackData[this.curTrack];
  }
}