module.exports = {
    findPhotos: function(hikeId){
         Photo.find({idhikinglog:hikeId}).exec(function(err,data){
            if(err){
                return err;
            }else{
                return data;
            }     
        }); 
    }
};