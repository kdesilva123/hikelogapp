/**
 * RoutepointsController
 *
 * @description :: Server-side logic for managing routepoints
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `RoutepointsController.create()`
   */
   create: function (req, res) {
    var params = req.params.all();
         
    Routepoints.create({
      idroutepoint:params.idroutepoint,
      latitude:params.latitude,
      longitude:params.longitude,
      altitude:params.altitude,
      speed:params.speed,
      datetimecollected:params.datetimecollected,  
      type:params.type,    
      idhikinglog:params.idhikinglog  
      }).exec(function createCB(err,created){
          created.save(function (err){
              return res.json(err);
          });
      });
  },


  /**
   * `RoutepointsController.find()`
   */
   find: function (req, res) {
    var id = req.param('idhikinglog');
    Routepoints.find({idhikinglog:id}).exec(function(err,data){
       if(err){
           res.send(400);
       }else{
           res.send(data);
       }     
    });  
  }
};

