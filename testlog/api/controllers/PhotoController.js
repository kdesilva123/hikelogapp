/**
 * PhotoController
 *
 * @description :: Server-side logic for managing photos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `PhotoController.create()`
   */
  create: function (req, res) {
    var params = req.params.all();    
    
  Photo.create({
      idphoto:params.idphoto,
      latitude:params.latitude,
      longitude:params.longitude,
      description:params.description,
      path:params.path,
      idhikinglog:params.idhikinglog,  
      thumbnailpath:params.thumbnailpath,    
      tags:params.tags,
      uploadpath:params.uploadpath
      }).exec(function createCB(err,created){
          created.save(function (err){
              return res.json(err);
          });
      });
  },


  /**
   * `PhotoController.find()`
   */
   find: function (req, res) {
    var id = req.param('idhikinglog');
    Photo.find({idhikinglog:id}).exec(function(err,data){
       if(err){
           res.send(400);
       }else{
           res.send(data);
       }     
    });  
  }
};

