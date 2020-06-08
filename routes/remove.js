const Thing = require("../models/thing");


exports.remove = (req,res,next) => {
    Thing.findOne({_id: req.params.id}).then(
        (thing) => {
            fs.unlink('images/'+ filename, () => {
                Thing.deleteOne({_id: req.params.id}).then(
                    () => {
                        res.status(200).json({
                            message:"Deleted successfully!"
                        })
                    
                }).catch(
                    (error) =>{
                        res.status(400).json({
                            error:error
                        });
                    }
                );
            });
        }
    );  
};
