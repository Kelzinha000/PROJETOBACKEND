    import { DataTypes } from "sequelize";
    import conn from "../config/conn.js";

    import Perfil from "./perfilModel.js";
    import Postagem from "./postagemModel.js";

    const Comentario = conn.define(
    "comentarios",
    {
        comentario: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    },
    { tableName: "comentarios" }
    );

    // associação N:M
    Perfil.belongsToMany(Postagem,{through:'comentarios'})
    Postagem.belongsToMany(Perfil,{through:'comentarios'})

    // throug -> necessidade de criar uma tabela associativa 

    export default Comentario;
