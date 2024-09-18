    import { DataTypes } from "sequelize";
    import conn from "../config/conn.js";

    import Perfil from "./perfilModel.js";

    const Postagem = conn.define(
    "postagens",
    {
        titulo: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        descricao: {
        type: DataTypes.TEXT,
        allowNull: false,
        },
    },
    { tableName: "postagens" }
    );

    // associações 1:N
    Perfil.hasMany(Postagem);
    Postagem.belongsTo(Perfil);

    export default Postagem;
