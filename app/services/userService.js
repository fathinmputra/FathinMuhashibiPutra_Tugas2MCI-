const userRepository = require ('../repositories/userRepository');

const getAllUser = async () => {
    try{
        const users = await userRepository.getAllUser();
        res.json(users);  
    }
    catch(err){
        return err;
    }
}

module.exports = {  
    getAllUser  
}

