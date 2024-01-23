import mongoose from 'mongoose';

const Connection = async (username = 'usercode', password = 'codeforinterview') => {
    const URL = `mongodb+srv://chetan11:Chetan11@cluster0.i3lteiy.mongodb.net/google-docs`;

    try {
        mongoose.set('strictQuery', false); // Add this line
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
};

export default Connection;
