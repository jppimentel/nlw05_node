import {Request, Response} from "express";
import {SettingsService} from "../services/SettingsService";

class SettingsController {
    /**
     * Tipode de parâmetros
     * Routes Params => Parametros de rotas
     * http://localhost:3333/settings/1
     * Query Params => Filtros e buscas
     * http://localhost:3333/settings/1?ssearch=algumacoisa
     * Body Params => {}
     */
    
    async create(request: Request, response: Response ){
        const {chat, username} = request.body;

        const settingsService = new SettingsService();

        try {
            const settings = await settingsService.create({chat, username});
        
            return response.json(settings);
        } catch(err) {
            return response.status(400).json({
                message: err.message
            });
        }
        
    }

    async findByUsername(request: Request, response: Response ) {
        const { username } = request.params;
        const settingsService = new SettingsService();
        const settings = await settingsService.findByUsername(username);
        return response.json(settings);

    }


    async update(request: Request, response: Response ) {
        const { username } = request.params;
        const { chat } = request.body;

        const settingsService = new SettingsService();
        
        const settings = await settingsService.update(username, chat);
        return response.json(settings);

    }
}

export {SettingsController};