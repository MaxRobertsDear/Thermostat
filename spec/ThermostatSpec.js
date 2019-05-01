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
    this.power_saving_mode = false;
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
    // thermostat.reset();
    currentTemp = thermostat.getCurrentTemp();
    //assert
    expect(currentTemp).toBe(20)
  });
});


//     player.play(song);
//     expect(player.currentlyPlayingSong).toEqual(song);

//     //demonstrates use of custom matcher
//     expect(player).toBePlaying(song);
//   });

//   describe("when song has been paused", function() {
//     beforeEach(function() {
//       player.play(song);
//       player.pause();
//     });

//     it("should indicate that the song is currently paused", function() {
//       expect(player.isPlaying).toBeFalsy();

//       // demonstrates use of 'not' with a custom matcher
//       expect(player).not.toBePlaying(song);
//     });

//     it("should be possible to resume", function() {
//       player.resume();
//       expect(player.isPlaying).toBeTruthy();
//       expect(player.currentlyPlayingSong).toEqual(song);
//     });
//   });

//   // demonstrates use of spies to intercept and test method calls
//   it("tells the current song if the user has made it a favorite", function() {
//     spyOn(song, 'persistFavoriteStatus');

//     player.play(song);
//     player.makeFavorite();

//     expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
//   });

//   //demonstrates use of expected exceptions
//   describe("#resume", function() {
//     it("should throw an exception if song is already playing", function() {
//       player.play(song);

//       expect(function() {
//         player.resume();
//       }).toThrowError("song is already playing");
//     });
//   });
// });
