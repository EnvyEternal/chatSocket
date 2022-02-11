const {Messages} = require('../db/models')

module.exports.createMsg = async (req, res)=>{
    try{ 
        const {body} = req;
        const createMesg = await Messages.create(body);
        if(createMesg){
      return res.status(201).send(createMesg)
    }
    }
    catch(e){
        console.log(e)
    }
}