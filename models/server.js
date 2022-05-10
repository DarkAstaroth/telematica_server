const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../db/config");

class Server {
  constructor() {
    this.app = express();
    this.port = 8080;
    this.paths = {
      alumno: "/api/alumno",
      asignaturas: "/api/asignatura",
      notas: "/api/nota",
    };

    // conectar a la base de datos
    this.conectarDB();
    
    // Middlewares
    this.middlewares();

    //routas
    this.routes()
  }

  async conectarDB() {
    await dbConnection();
  }

  middlewares() {
    this.app.use(cors());
    // hacer parce con el body
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.paths.alumno, require("../routes/alumno"));
    this.app.use(this.paths.asignaturas, require("../routes/asignturas"));
    this.app.use(this.paths.notas, require("../routes/notas"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en ${this.port}`);
    });
  }
}

module.exports = Server;
