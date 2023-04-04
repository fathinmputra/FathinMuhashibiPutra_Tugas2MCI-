const userService = require('../services/userService');

const getAllUser = async (req, res) => {
    userService.getAllUser()
    .then((users) => {
        if(!users){
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

module.exports = { 
    getAllUser
}
