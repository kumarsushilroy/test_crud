const authModel = require("../Models/authModel");


// create User.................
const createUser = async (req,res)=>{
    try {
        const {name, lastname, email, mobile, project} = req.body;
        if(!name || !lastname || !email || !mobile || !project){
            return res.status(401).send({
                success:false,
                msg:'all fields required !'
            })
        }


        const user = new authModel({name, lastname, email, mobile, project });
        const newUser = await user.save();
        return res.status(201).send({
            success:true,
            msg:'Register successfully !',
            newUser
        });
    } catch (error) {
        console.log(error);
        res.status(404).send({
            success:false,
            msg:'something went wrong !',
            error
        })
    }
};


// Get User.........
const getUser = async (req,res)=>{

    try {
    //   const {email} = req.body;
    //     const user = await authModel.findOne({email:email})
    //     if(!user){
    //        return res.status(401).send({
    //         success:true,
    //         msg:'data not found !'
    //        })
    //     }

        const getUser = await authModel.find({});
        return res.status(201).send({
            success:true,
            msg:'all users found !',
            getUser
        });

    } catch (error) {
        console.log(error);
        return res.status(404).send({
            success:false,
            msg:'something wrong !',
            error
        })
    }
};

// getSingleUser 
const getSingle = async (req,res)=>{

    try {
        const id = req.params.id;
        const singleUser = await authModel.findById(id);
        return res.status(401).send({
            success:true,
            msg:'got single user !',
            singleUser
        });

    } catch (error) {
        console.log(error);
        return res.status(404).send({
            success:false,
            msg:'something went wrong !',
            error
        })
    }
};


// update user
const userUpdate = async (req,res)=>{
    try {
        const id = req.params.id;
        const updateUser = await authModel.findByIdAndUpdate({_id:id}, req.body, {new:true});
        return res.status(201).send({
            success:true,
            msg:'user updated !',
            updateUser
        });

    } catch (error) {
        console.log(error);
        return res.status(404).send({
            success:false,
            msg:'something went wrong !',
            error
        })
    }
};

// delete user 
const deleteUser = async (req,res)=>{
    try {
        const id = req.params.id;
        const userDelete = await authModel.findByIdAndDelete(id);
        return res.status(201).send({
            success:true,
            msg:'user deleted !',
            userDelete
        });

    } catch (error) {
        console.log(error);
        return res.status(404).send({
            success:false,
            msg:'something went wrong !',
            error
        })
    }
}

module.exports = {createUser, getUser, getSingle, userUpdate, deleteUser};