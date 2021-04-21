import express from "express";

import "./database";
import {routes} from './routes';

const app = express();

/**
 * GET = buscas
 * POST = criação
 * PUT = alteração
 * DELETE = Deletar
 * PATCH = Alterar informação específica
 */

// app.get("/", (request, response) => {
//     return response.json({
//         message: "Olá NLW 05"
//     }); 
// })

// app.post("/", (request, response) => {
//     return response.json({
//         message: "Usuário salvo com sucesso"
//     })
// })
app.use(express.json());
app.use(routes);

app.listen(3333, ()=> console.log("Server is running on port 3333"));

