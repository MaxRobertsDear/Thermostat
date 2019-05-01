"use strict";

class Thermostat {
  constructor() {
    const DEFAULT_TEMP = 20;
    const MINIMUM_TEMP = 10;
    //PSM is shorthand for 'power saving mode'
    const MAXIMUM_TEMP_PSMON = 25;
    const MAXIMUM_TEMP_PSMOFF = 32;
    

    this.temp = DEFAULT_TEMP;
    this.minTemp = MINIMUM_TEMP;
    this.maxTempPSMOn = MAXIMUM_TEMP_PSMON;
    this.maxTempPSMOff = MAXIMUM_TEMP_PSMOFF;
    this.power_saving_mode = true;
  }
  getCurrentTemp() {
    return this.temp;
  }
  getMinimumTemp() {
    return this.minTemp;
  }
  getMaximumTempPSMOn() {
    return this.maxTempPSMOn;
  }
  getMaximumTempPSMOff() {
    return this.maxTempPSMOff;
  }
  up() {
    if (this.power_saving_mode === true && this.temp < this.maxTempPSMOn) {
      this.temp++;
    } else if (this.power_saving_mode === false && this.temp < this.maxTempPSMOff) {
      this.temp++;
    } else { throw new Error('Maximum temperature reached.');
  }
  }
  down() {
    if (this.temp > this.minTemp) {
      this.temp--;
    } else { throw new Error('Minimum temperature reached.');
    }
  }
  reset() {
    this.temp = 20;
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