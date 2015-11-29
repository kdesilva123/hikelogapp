/**
 * HikelogController
 *
 * @description :: Server-side logic for managing hikelogs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  /**
   * `HikelogController.create()`
   */
 create: function(req, res) {
    var params = req.params.all();
         
    Hikelog.create({
      idhikinglog:params.idhikinglog,
      iduserprofile:params.iduserprofile,
      starttime:params.starttime,
      finishtime:params.finishtime,
      datecreated:params.datecreated,
      pushtocloud:params.pushtocloud,  
      collectioninterval:params.collectioninterval,    
      dateupdated:params.dateupdated,   
      title:params.title,   
      notes:params.notes    
      }).exec(function createCB(err,created){
          created.save(function(err){
              return res.json(err);
          });
      });
  },


  /**
   * `Hike.find()`
   */
  find: function (req, res) {
    var id = req.param('idhikinglog');
    Hikelog.find({idhikinglog:id}).exec(function(err,data){
       if(err){
           res.send(400);
       }else{
           res.send(data);
       }     
    });  
  },

  share: function(req, res){
      var hikeid = req.param('idhikinglog');
      var friendemailaddress = req.param('emailaddress');
      
      res.view({hike:hikeid,email:friendemailaddress});
  
  }    
      
};

