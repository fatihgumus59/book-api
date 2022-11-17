const {insert,modify,listAll,getById,remove} = require('../services/Books');

const create = async (req,res)=>{

    const data ={
        title : req.body?.title,
        author : req.body?.author,
        publisher : req.body?.publisher,
        pageNumber : req.body?.pageNumber,
        price : req.body?.price,
        discount : req.body?.discount,
        netPrice : parseFloat(Number( req.body?.price) - Number(req.body?.discount ? req.body?.discount : 0)),
        admin : req.user?.id,
    }

    insert(data)
    .then((response)=>{
        res.status(201).json({message: 'Created',data : response});
    }).catch((error)=>{
        res.status(500).json({message: 'Error',error});
    })
} 

const list = async (req,res)=>{

    listAll()
    .then((response)=>{
        res.status(200).json({message: 'Sucess',result : response});
    }).catch((error)=>{
        res.status(500).json({message: 'Error',error});
    })
}

const userList = async (req,res)=>{

    listAll({admin : req.user?.id,})
    .then((response)=>{
        res.status(200).json({message: 'Sucess',result : response});
    }).catch((error)=>{
        res.status(500).json({message: 'Error',error});
    })
}

const getBook = async (req,res)=>{

    getById(req.params?.id)
    .then((response)=>{
        if(!response) return res.status(400).json({message: 'ID not found'});
        res.status(200).json({message: 'Sucess',book : response});
    }).catch((error)=>{
        res.status(500).json({message: 'Error',error});
    })
}

const update = async (req,res)=>{

    if(!req.params?.id){
        return res.status(400).json({message:'ID not defined.'})
    }
    
    modify(req.params.id,req.body)
    .then((response)=>{
        res.status(200).json({message: 'Updated',data: response});
    }).catch((err)=>{
        return res.status(500).json({message:err});
    })
   
}

const removeBook = async (req,res)=>{

    if(!req.params?.id){
        return res.status(400).json({message:'ID not defined.'})
    }
    
    remove(req.params.id)
    .then(()=>{
        res.status(200).json({message: 'Deleted'});
    }).catch((err)=>{
        return res.status(500).json({message:err});
    })
   
}

module.exports=({
    create,
    list,
    userList,
    getBook,
    update,
    removeBook,
})