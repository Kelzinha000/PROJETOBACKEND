    import { DataTypes } from "sequelize";
    import conn from "../config/conn.js";

    // fazer relacionamento de tabelas- Importar tabela
    import Usuario  from "./usarioModel.js"; 

    const Perfil = conn.define(
    "perfis",
    {
        nome: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        bio: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    },
    { tableName: "perfil" }
    );

    // associação 1:1
    Usuario.hasOne(Perfil)
    Perfil.belongsTo(Usuario)

    export default Perfil;
