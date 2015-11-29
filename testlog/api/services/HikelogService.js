module.exports = {

    findHikelog: function(hikeId){
        
            Hikelog.find({idhikinglog:hikeId}).exec(function(err,data){
            if(err){
                console.log("ERR");
                return err;
            }else{
                console.log("DATA RETURNED");
                //console.log(data[0].title);
                console.log(data);
                return data;
            }     
        }); 
    }
};