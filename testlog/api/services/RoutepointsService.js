module.exports = {
    findRoutepoints: function(hikeId){
         Routepoints.find({idhikinglog:hikeId}).exec(function(err,data){
            if(err){
                return err;
            }else{
                return data;
            }     
        }); 
    }
};