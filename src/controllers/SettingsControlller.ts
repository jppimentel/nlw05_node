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
}

export {SettingsController};