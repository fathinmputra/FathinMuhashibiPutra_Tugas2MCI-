const userService = require('../services/userService');

const getAllUser = async (req, res) => {
    userService.getAllUser()
    .then((users) => {
        if(!users){
            // set content type
            res.status(404).send({
                status : 'error',
                message : 'Data user tidak ditemukan',
                data : {}
        });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data user berhasil ditemukan',
                data : users    
            });
        }
    })
    .catch((err) => {
        res.status(500).send({
            status : 'error',
            message : err.message,
            data : {}
        });
    })
}

const createUser= async(req, res) => {
    try {
        const { user_name, email, password} = req.body;
        await userService.createUser(user_name, email, password);
        res.status(201).send({
            status : 'success',
            message : 'Data user berhasil ditambahkan',
            data : ''
        });
    }
    catch(err) {
        res.status(500).send({
            status : 'error',
            message : err.message,
            data : {}
        });
    }
}

const deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        await userService.deleteUser(id);
        res.status(200).send({
            status : 'success',
        });
    }
    catch(err) {
        res.status(500).send({
            status : 'error',
            message : err.message,
            data : {}
        }); 
    }
}

const updateUser = async (req, res) => {
    try {
        const {id} = req.params;
        const {user_name, email, password} = req.body;
        await userService.updateUser(id, user_name, email, password);
        res.status(200).send({
            status : 'success',
            message : 'Data user berhasil diupdate',
            data : ''
        });
    }
    catch(err) {
        res.status(500).send({
            status : 'error',
            message : err.message,
            data : {}
        });
    }
}

module.exports = { 
    getAllUser,
    createUser,
    deleteUser,
    updateUser
}
