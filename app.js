const express = require(`express`);
const app = express();
const path= require(`path`);
const port = 3300;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname,"/views/home.html"))
});

app.get("/ofertas", (req,res) => {
    res.sendFile(path.join(__dirname, "/views/ofertas.html"));
});
app.get("/tiendas-oficiales", (req,res) => {
    res.sendFile(path.join(__dirname, "/views/tiendas-oficiales.html"));
});
app.get("/vender", (req,res) => {
    res.sendFile(path.join(__dirname, "/views/vender.html"));
});

app.get("/ayuda", (req,res) => {
    res.sendFile(path.join(__dirname, "/views/ayuda.html"));
});

app.get("/registro", (req,res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"));
});
app.post("/registro", (req,res) => {
    console.log (req.body);
    res.redirect("/");
});
app.get("/ingresar", (req,res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"));
});

app.post("/ingresar", (req,res) => {
    console.log (req.body);
    res.redirect("/");
});

app.get("/Mi-compra", (req,res) => {
    res.sendFile(path.join(__dirname, "/views/Mi-compra.html"));
});
app.use(express.static(`public`))

app.listen(port, console.log(`sever running in http://localhost:${port}`));
