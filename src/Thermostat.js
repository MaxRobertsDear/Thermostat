"use strict";

class Thermostat {
  constructor() {
    const DEFAULT_TEMP = 20;
    const MINIMUM_TEMP = 10;

    this.temp = DEFAULT_TEMP;
    this.minTemp = MINIMUM_TEMP;
  }
  getCurrentTemp() {
    return this.temp;
  }
  getMinimumTemp() {
    return this.minTemp;
  }
  up() {
    this.temp++;
  }
  down() {
    if (this.temp > this.minTemp) {
      this.temp--;
    } else { throw new Error('Minimum temperature reached.');
    }
  }
};

// Player.prototype.play = function(song) {
//   this.currentlyPlayingSong = song;
//   this.isPlaying = true;
// };

// Player.prototype.pause = function() {
//   this.isPlaying = false;
// };

// Player.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }

//   this.isPlaying = true;
// };

// Player.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };