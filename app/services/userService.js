const userRepository = require ('../repositories/userRepository');

const getAllUser = async () => {
    try{
        const users = await userRepository.getAllUser();
        return users;  
    }
    catch(err){
        return err;
    }
}

const createUser = async (user_name, email, password) => {
    try{
        const user = await userRepository.createUser(user_name, email, password);
        return user;
    }
    catch(err){
        return err;
    }
}

const deleteUser = async (id) => {
    try{
        const user = await userRepository.deleteUser(id);
        return user;
    }
    catch(err){
        return err;
    }
}

const updateUser = async (id, user_name, email, password) => {  
    try{
        const user = await userRepository.updateUser(id, user_name, email, password);
        return user;
    }
    catch(err){
        return err;
    }
}


module.exports = {  
    getAllUser,
    createUser,
    deleteUser,
    updateUser
}

