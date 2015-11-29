/**
* Photo.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    idphoto : { type: 'integer' },

    latitude : { type: 'float' },

    longitude : { type: 'float' },

    description : { type: 'string' },

    path : { type: 'string' },

    idhikinglog : { type: 'integer' },

    thumbnailpath : { type: 'string' },

    tags : { type: 'string' },
      
    uploadpath : { type: 'string'} 
  }
};

