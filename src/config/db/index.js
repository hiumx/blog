import mongoose from 'mongoose';

async function connect() { 
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/f8_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true 
        });
        console.log('<<<< Connect successfully >>>>');
    } catch (e) {
        console.log(e);
        console.log('Connect failure!');
    }
}

export { connect };