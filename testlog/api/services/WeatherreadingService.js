module.exports = {
    findWeatherReadings: function(hikeId){
         Weatherreading.find({idhikinglog:hikeId}).exec(function(err,data){
            if(err){
                return err;
            }else{
                return data;
            }     
        }); 
    }
};