const {insert,listAll} = require('../services/Books');

const create = async (req,res)=>{

    const data ={
        title : req.body?.title,
        author : req.body?.author,
        publisher : req.body?.publisher,
        pageNumber : req.body?.pageNumber,
        price : req.body?.price,
        discount : req.body?.discount,
        netPrice : req.body?.netPrice,
        admin : req.body?.admin,
    }

    insert(data)
    .then((response)=>{
        res.status(201).json({message: 'Sucess',data : response});
    }).catch((error)=>{
        res.status(500).json({message: 'Error',error});
    })
} 

const list = async (req,res)=>{

    listAll()
    .then((response)=>{
        res.status(201).json({message: 'Sucess',result : response});
    }).catch((error)=>{
        res.status(500).json({message: 'Error',error});
    })
}

module.exports=({
    create,
    list,
})