import swaggerJsdoc from 'swagger-jsdoc';
import { PORT } from '../config.js';
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Kessia API',
            version: '1.0.0',
            description: 'API para administrar Kessia',
            contact: {
                name: 'Mozzi'
            },
            servers: [{
                    url: `http://localhost:${PORT}/`,
                    description: 'Local server'
                }]
        }
    },
    apis: ['./**/*.routes.ts']
};
const specs = swaggerJsdoc(options);
export default specs;
//# sourceMappingURL=swagger.js.map