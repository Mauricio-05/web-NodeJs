const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();

//Settings
app.set("port", 3000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Middlewares
app.use(morgan("dev"));
app.use(require("./routes/routes"));

//Static files
app.use(express.static(path.join(__dirname, "public")));

//Listening server
app.listen(app.get("port"), () => {
  console.log(`Servidor en el puerto ${app.get("port")}`);
});
