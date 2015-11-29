/**
* Weatherreading.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    idweathereading : { type: 'integer' },

    type : { type: 'string' },

    temperature : { type: 'float' },

    humidity : { type: 'float' },

    barometricpressure : { type: 'float' },

    description : { type: 'string' },

    windspeed : { type: 'float' },

    datetimecollected : { type: 'datetime' },

    winddirection : { type: 'float' },

    idroutepoint : { type: 'integer' },

    idhikinglog : { type: 'integer' }
  }
};

