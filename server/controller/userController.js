const {User} = require('../db/models')

module.exports.userCreate = async (req, res) =>{
    try{
        const {body} = req;
        console.log(body)
        const createUser = await User.create(body)
        if(createUser){
            console.log('Ok');
            return res.status(201).send(createUser);
        }
    }
    catch(e){
        console.log(e)
    }
}

