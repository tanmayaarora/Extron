const Users = require('./user.model.js');
const bcrypt = require('bcryptjs');

const getAllusers = async(req,res) => {
    try {
        let users = await Users.find();
        if(users) {
            res.status(200).send(users);
        }
    }
    catch(err) {
        res.status(500).send(err);
    }
}
const getSpecificuser = async(req,res) => {
    try {
        let user = await Users.findOne({username:req.params.id});
        if(user) {
            res.status(200).send(user);
        }
    }
    catch(err) {
        res.status(500).send(err);
    }
}
const createUser = async(req,res) => {
    const userdata = req.body;
    try {
        let user = new Users(userdata);
        let result = user.save();
        if(result) {
            res.status(200).send("User is added");
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}
const updateUser = async (request,response) => {
    try {
        let user = await Users.findOne({_id: request.params.id});
        if (!user)
        response.send("ID does not exist");
        let updatedUser = {
            username: request.body.username,
            email: request.body.email,
            password:bcrypt.hashSync(request.body.password,10)
        };
        let result = await Users.updateOne({_id: request.params.id}, updatedUser);
        if(result)
        response.send({sucess: true, user: {id: request.params.id, } });
    } catch (error) {
        response.status(400).send({ success: false, message: error.message });
    }
}
const deleteUser = async (req,res) => {
    console.log("ID = " + req.params.id)
    try {
        let result = await Users.deleteOne({ _id: req.params.id })
        if(result)
        res.status(200).json({ success: true, id: req.params.id });
    }
    catch (error) { 
        console.log(error);
    }
}

exports.getAllusers = getAllusers;
exports.getSpecificuser = getSpecificuser;
exports.createUser = createUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;