/**
 * FileController
 *
 * @description :: Server-side logic for managing files
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	upload: function  (req, res) {
		if(req.method === 'GET')
			return res.json({'status':'GET not allowed'});						
			//	Call to /upload via GET is error

		var uploadFile = req.file('uploadFile');
		console.log(uploadFile);
        var filename = req.file('uploadFile')._files[0].stream.filename;

	    //uploadFile.upload({dirname:'../../assets/images'},function onUploadComplete (err, files) {				
        //uploadFile.upload({dirname:'../../assets',function onUploadComplete (err, files){
        
        console.log(filename);
                           
        uploadFile.upload({dirname:'../../assets', saveAs: function(_newFileStream,cb){ cb(null, filename); }},function onUploadComplete (err, files){                   
	    //	Files will be uploaded to // .tmp/uploads
	    																		
	    	if (err) return res.serverError(err);								
	    	//	IF ERROR Return and send 500 error with error

	    	console.log(files);
	    	res.json({status:200,file:files});
	    });
	}
};

