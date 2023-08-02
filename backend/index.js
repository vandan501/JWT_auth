require('dotenv').config();
const PORT=5011||process.env.PORT;

const app=require('./app');



app.listen(PORT,()=>{
    console.log(`server is listning on PORT: http://localhost:${PORT}`);
})