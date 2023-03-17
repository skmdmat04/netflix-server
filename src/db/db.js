const mongoose=require('mongoose')
const dotenv=require('dotenv');
dotenv.config();
const user=process.env.USER;
const pass=process.env.PASSWORD;
mongoose.connect(`mongodb+srv://${user}:${pass}@cluster0.qrfhvno.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>console.log("connected with database"))
.catch(e=>console.log({'error':e},user,pass))