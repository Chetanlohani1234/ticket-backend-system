const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');

// Connection URI
const DB = "mongodb+srv://root:MongoDb%40123!@cluster0.8ujyaqs.mongodb.net/Ticketing"
mongoose.connect(DB, {
  useNewUrlParser: true,
  //useCreateIndex: true,
  useUnifiedTopology: true,
  //useFindAndModify: false
}).then(() => {
  console.log("Connection successful");
}).catch((err) => console.log("No connection"));

app.use(cors({
    origin:'*'
}));

const post_route = require('./routes/postRoute');
const user_route = require('./routes/userRoute');
app.use('/api',post_route);
app.use('/api',user_route);


app.listen(8000,function(){
    console.log('server is running');
})