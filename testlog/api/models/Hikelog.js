/**
* Hikelog.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    idhikinglog : { type: 'integer' },

    iduserprofile : { type: 'integer' },

    starttime : { type: 'datetime' },

    finishtime : { type: 'datetime' },

    datecreated : { type: 'datetime' },

    pushtocloud : { type: 'boolean' },

    collectioninterval : { type: 'integer' },

    dateupdated : { type: 'datetime' },

    title : { type: 'string' },

    notes : { type: 'text' }
  }
};

