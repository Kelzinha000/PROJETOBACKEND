    import { DataTypes } from "sequelize";
    import conn from "../config/conn.js";

    const Usuario = conn.define(
    "usuarios",
    {
        email: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        passworld: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    },
    {
        tableName: "usuarios",
    }
    );

    export default Usuario; 