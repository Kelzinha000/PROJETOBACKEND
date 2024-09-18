import express,{response} from "express";
import conn from "./config/conn.js";

const PORT = 3333;
// models
import Usuario from "./models/usarioModel.js";
import Perfil from "./models/perfilModel.js";
import Postagem from "./models/postagemModel.js";
import Comentario from "./models/comentariosModel.js";

const app = express();

app.get("/", (request, response) => {
  response.send("Olá, mundo!");
});

conn
  .sync(/*{force:true} */)//-> apaga tabela e cria novamente, usado para corrigir algum erro na tabela, como alguma palavra escrita errada
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log(err));
