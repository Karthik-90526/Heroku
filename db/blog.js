const mongoose=require("mongoose");
//mongoose.connect('mongodb://localhost/my_database');
mongoose.connect('mongodb+srv://Kumar_123:Karthik123@kumar.fhnzp.mongodb.net/Kumar?retryWrites=true&w=majority');
/*
mongoose.connect(
  `mongodb+srv://Kumar_123:Karthik123@kumar.fhnzp.mongodb.net/Kumar?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);*/
const schema = new mongoose.Schema({
    
    displayName:String,
    email:String,
});
const Blog =mongoose.model('apps',schema);
module.exports=Blog;
