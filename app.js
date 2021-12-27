const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();

const publicPath = path.join(__dirname, "./public");

app.use(express.static(publicPath));

app.get("/", (req, res)=> res.sendFile(path.join(__dirname, "./views/home.html")));
app.get("/prueba", (req, res)=> res.sendFile(path.join(__dirname, "./views/prueba.html")));
// app.listen(3001, () => console.log("Servidor corriendo en el puerto 3001"));

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});