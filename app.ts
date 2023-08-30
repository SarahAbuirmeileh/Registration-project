import  express  from "express";
import 'reflect-metadata';
import dataSource from "./db/datasource.js";
import UserRouter from './routes/user.js'

const app = express();
const PORT = 3000;

app.use(express.json())
app.listen(PORT, ()=>{
    console.log(`The app is listening on port ${PORT}`);
})

dataSource.initialize()

app.use('/user',UserRouter)

app.use((req, res) => {
    res.status(404).send("Wrong URL :(");
})
