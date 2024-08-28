import { response } from "express";
import Tarefa from "../models/tarefaModel.js";

// export const getAll = async (request, response) => {
//   try {
//     const tarefas = await Tarefa.findAll();
//     response.status(200).json(tarefas);
//   } catch (error) {
//     response.status(500).json({ message: "Erro ao listar tarefas" });
//   }
// };

// tarefas?page=2&limit=10
export const getAll = async (request, response) => {
  const page = parseInt(request.query.page) || 1;
  const limit = parseInt(request.query.limit) || 10;
  const offset = (page - 1) * limit 
  try {
    const tarefas = await Tarefa.findAndCountAll({
      limit,
      offset, 
    });
    // console.log(page,limit, offset)
    // console.log(tarefas);
    const totalPaginas = Math.ceil(tarefas.count/limit );
    response.status(200).json({
      totalTarefas: tarefas.count,
      totalPaginas,
      paginaAtual: page, 
      itemsPorPagina: limit, 
      proximaPagina: totalPaginas === 0 ? null :`http://localhost:3333/tarefas?page=${page+1}`,
      tarefas: tarefas.rows
    });
  } catch (error) {
    response.status(500).json({ message: "Erro ao buscar tarefas" });
  }
};
export const create = async (request, response) => {
  const { tarefa, descricao } = request.body;
  const status = "pendente";
  if (!tarefa) {
    response.status(404).json({ err: "A tarefa é obrigatória" });
  }
  if (!descricao) {
    response.status(404).json({ err: "A descrição é obrigatória" });
  }
  const novaTarefa = {
    tarefa,
    descricao,
    status,
  };
  try {
    // criar cadastro
    await Tarefa.create(novaTarefa);
    response.status(201).json({ message: "Tarefa Cadastrada" });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Erro ao cadastrar tarefa" });
  }
};

export const getTarefa = async(request, response)=>{
  const {id} = request.params
  try{
  const tarefaId = await Tarefa.findByPk(id)
  response.status(200).json(tarefaId)

  }catch(error){
       response.status(404).json({err:"Erro ao buscar tarefa por id"})
  }
}