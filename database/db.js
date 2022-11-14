const mongoose = require('mongoose');

const db = mongoose.connection;

db.once('open',()=>{
    console.log('db bağlantısı başarılı.');
});

const connectDB = async ()=>{
    await mongoose.connect(`${process.env.MONGO_URL}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('DB Success');
    });
}

module.exports ={
    connectDB,
}