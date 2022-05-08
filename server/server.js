require("dotenv").config();
const cors = require("cors");
const express = require("express");
const routes = require("./routes");
const dbInitialSetup = require("./dbInitialSetup");
const APP_PORT = process.env.APP_PORT || 8888;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

routes(app);

//dbInitialSetup(); // Crea tablas e inserta datos de prueba.

app.listen(APP_PORT, () =>
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}!\n`),
);
