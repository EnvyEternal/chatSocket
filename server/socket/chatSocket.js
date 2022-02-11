const {Messages} = require('../db/models')



module.exports.chatSocket = (message, id) => {
  try{
    const {body} = req;
        const createMesg = await Messages.create(body);
        if(createMesg){

        }
  }
  catch(e){
    console.log(e)
  }
}
