// // vbot-plugin.js
// import { VBotClient } from './vbot-sdk'  // Đảm bảo đường dẫn này chính xác

// export default {
//     install: (app, options) => {
//         let client = null;

//         app.config.globalProperties.$initVBotClient = async (tokenUser) => {
//             if (!client) {
//                 client = await VBotClient(tokenUser);
//             }
//             return client;
//         };

//         app.config.globalProperties.$getVBotClient = () => client;
//     }
// };


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