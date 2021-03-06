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
    } else { throw new Error('Maximum temperature reached.');}
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
  PSMOn() {
    this.power_saving_mode = true;
  }
  PSMOff() {
    this.power_saving_mode = false;
  }
  energyUsage() {
    if (this.temp < 18) { 
      return "low-usage";
    } else if (this.temp < 25) {
      return "medium-usage"
    } else { return "high-usage";}
  }
};

