const express = require("express")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      preflightContinue: false,
      optionsSuccessStatus: 200,
    })
  );

app.get("/",(req,res)=>{
    console.log("connected");
})

// port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});


app.use("/",require("./route"))