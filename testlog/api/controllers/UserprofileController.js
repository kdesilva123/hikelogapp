/**
 * UserprofileController
 *
 * @description :: Server-side logic for managing userprofiles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
  /**
   * `UserprofileController.create()`
   */
  create: function (req, res) {
    
    var params = req.params.all();
    
    Userprofile.create({
        iduserprofile:params.iduserprofile,
        username:params.username,
        password:params.password,
        datecreated:params.datecreated,
        dateupdated:params.dateupdated,
        firstname:params.firstname,
        lastname:params.lastname,
        emailaddress:params.emailaddress
        }).exec(function createCB(err,created){
           created.save(function (err){
              return res.json(err);
           });
        });
  },


  /**
   * `UserprofileController.find()`
   */
  find: function (req, res) {
    var id = req.param('iduserprofile');
    Userprofile.find({iduserprofile:id}).exec(function(err,data){
       if(err){
           res.send(400);
       }else{
           res.send(data);
       }     
    });  
  }
};

