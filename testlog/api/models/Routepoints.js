/**
* Routepoints.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    idroutepoint : { type: 'integer' },

    latitude : { type: 'float' },

    longitude : { type: 'float' },

    altitude : { type: 'float' },

    speed : { type: 'float' },

    datetimecollected : { type: 'datetime' },

    type : { type: 'string' },

    idhikinglog : { type: 'integer' }
  }
};

