import {Router} from "express";
import { SettingsController } from "./controllers/SettingsControlller";
import { UsersController } from "./controllers/UsersController";
import { MessagesController } from "./controllers/MessagesController";

const routes = Router();

const settingsController = new SettingsController(); 
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUsername);
routes.put("/settings/:username", settingsController.update);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);


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

export {routes};