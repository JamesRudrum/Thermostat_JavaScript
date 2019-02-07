'use strict';

describe ('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has a starting temp of 20', function(){
    expect(thermostat.temperature()).toEqual(20);
  });

  it('can raise temperature', function(){
    thermostat.up(10);
    expect(thermostat.temperature()).toEqual(30);
  });

  it('can lower temperature', function(){
    thermostat.down(10);
    expect(thermostat.temperature()).toEqual(10);
  });

  it('cannot be set lower than ten', function(){
    thermostat.down(15);
    expect(thermostat.temperature()).toEqual(10);
  });

});
