
import { VBotClient } from './vbot-sdk'

export default {
    install: (app, options) => {
        let client = null;

        app.config.globalProperties.$initVBotClient = async (tokenUser) => {
            if (!client) {
                client = await VBotClient(tokenUser);
            }
            return client;
        };

        app.config.globalProperties.$getVBotClient = () => client;
    }
};