const {insert,login} = require('../services/Users');
const  {passwordToHash,generateAccessToken} = require('../utils/helper/Token');

const create = async (req,res)=>{

    req.body.password = passwordToHash(req.body?.password);
    const data ={
        name : req.body?.name,
        email : req.body?.email,
        password : req.body?.password,
    }

    insert(data)
    .then((response)=>{
        res.status(201).json({message: 'Created',data : response});
    }).catch((error)=>{
        res.status(500).json({message: 'Error',error});
    })
} 

const loginUser = async (req,res)=>{

    req.body.password = passwordToHash(req.body?.password);
    
    login(req.body)
    .then((user)=>{
        if(!user) return res.status(404).json({message : 'User not found.'});

        const userId = user._id;
        const access_token = generateAccessToken({id:userId});

        res.status(200).json({message: 'Sucess',user : user, token: access_token });
    }).catch((error)=>{
        res.status(500).json({message: 'Error',error});
    })
}

module.exports=({
    create,
    loginUser,

})