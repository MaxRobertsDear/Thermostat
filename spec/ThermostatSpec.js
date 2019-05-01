"use strict";

describe("Thermostat", () => {

  var thermostat;
  
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should start at 20 degrees", () => {
    //arrange
    let currentTemp;
    //act
    currentTemp = thermostat.getCurrentTemp();
    //assert
    expect(currentTemp).toBe(20);
  });

  it('increases in temperature with up()', () => {
    //arrange
    let currentTemp;
    //act
    thermostat.up();
    currentTemp = thermostat.getCurrentTemp();
    //assert
    expect(currentTemp).toBe(21);
  });

  it('decreases in temperature with down()', () => {
    //arrange
    let currentTemp;
    //act 
    thermostat.down();
    currentTemp = thermostat.getCurrentTemp();
    //assert
    expect(currentTemp).toBe(19);
  });

  it('has a minimum temperature of 10 degrees', () => {
    //arrange
    let minTemp;
    //act
    minTemp = thermostat.getMinimumTemp();
    //assert
    expect(minTemp).toBe(10);
  });

  it('has a maximum temperature of 25 degrees when power saving mode (PSM) is on', () => {
    //arrange
    let maxTempPSMOn;
    //act
    this.power_saving_mode = true;
    maxTempPSMOn = thermostat.getMaximumTempPSMOn();
    //assert
    expect(maxTempPSMOn).toBe(25);
  });

  it('has a maximum temperature of 32 degrees when power saving mode (PSM) is off', () => {
    //arrange
    let maxTempPSMOff;
    //act
    maxTempPSMOff = thermostat.getMaximumTempPSMOff();
    //assert
    expect(maxTempPSMOff).toBe(32);
  });
  
  it('is in power saving mode by default', () => {
    //arrange
    let maxTempPSMOn;
    //act
    maxTempPSMOn = thermostat.getMaximumTempPSMOn();
    //assert
    expect(maxTempPSMOn).toBe(25);
  });

  it('has a reset function that sets the temperature to 20 degrees', () => {
    //arrange
    let currentTemp;
    //act
    thermostat.up();
    thermostat.reset();
    currentTemp = thermostat.getCurrentTemp();
    //assert
    expect(currentTemp).toBe(20)
  });

  it('shows low-usage when temperature is <18 degrees', () => {
    //arrange
    let energyUsage;
    //act
    thermostat.down();
    thermostat.down();
    thermostat.down();
    energyUsage = thermostat.energyUsage();
    //assert
    expect(energyUsage).toBe("low-usage");
  });

  it('shows medium-usage when temperature is <25 degrees but greater than 18 degrees', () => {
    //arrange
    let energyUsage;
    //act
    energyUsage = thermostat.energyUsage();
    //assert
    expect(energyUsage).toBe("medium-usage");
  });

  it('shows high-usage when temperature is >25 degrees', () => {
    //arrange
    let energyUsage;
    //act
    thermostat.power_saving_mode = false;
    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    thermostat.up()
    energyUsage = thermostat.energyUsage();
    //assert
    expect(energyUsage).toBe("high-usage");
  });
});
