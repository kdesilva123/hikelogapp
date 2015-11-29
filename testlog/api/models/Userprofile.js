/**
* Userprofile.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    iduserprofile : { type: 'integer' },

    username : { type: 'string' },

    password : { type: 'string' },

    datecreated : { type: 'datetime' },

    dateupdated : { type: 'datetime' },

    firstname : { type: 'string' },

    lastname : { type: 'string' },

    emailaddress : { type: 'string' }
  }
};

