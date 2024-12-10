import mongoose from 'mongoose';

const connectedDB = async () => {

    mongoose.connection.on('connected',() => {
        console.log("DB Connected");
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/ecom-app`)

}
export default connectedDB;