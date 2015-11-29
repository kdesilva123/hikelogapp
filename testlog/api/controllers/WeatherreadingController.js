/**
 * WeatherreadingController
 *
 * @description :: Server-side logic for managing weatherreadings
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `WeatherreadingController.create()`
   */
  create: function (req, res) {
    var params = req.params.all();
         
    Weatherreading.create({
      idweathereading:params.idweathereading,
      type:params.type,
      temperature:params.temperature,
      humidity:params.humidity,
      barometricpressure:params.barometricpressure,
      description:params.description,  
      windspeed:params.windspeed,    
      datetimecollected:params.datetimecollected,
      winddirection:params.winddirection,
      idroutepoint:params.idroutepoint,
      idhikinglog:params.idhikinglog,
      }).exec(function createCB(err,created){
          created.save(function (err){
              return res.json(err);
          });
      });
  },


  /**
   * `WeatherreadingController.find()`
   */
  find: function (req, res) {
    var id = req.param('idhikinglog');
    Weatherreading.find({idhikinglog:id}).exec(function(err,data){
       if(err){
           res.send(400);
       }else{
           res.send(data);
       }     
    });  
  }
};

