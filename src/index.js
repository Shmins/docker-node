const express = require("express");
const moment = require("moment")

const app = express();
const port = 4200;
//importante
app.disable("x-powered-by");
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

//Rotas da api
app.use("/", (req, res)=>{
    res.send("Hello word!!")
})

app.listen(port, () => {
  console.log(`Server running in: http://localhost:${port}\nTime on server: ${moment().format("DD/MM/YYYY HH:mm")}`);
});
