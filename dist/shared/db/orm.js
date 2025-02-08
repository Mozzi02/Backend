import { MikroORM } from "@mikro-orm/core";
import { SqlHighlighter } from "@mikro-orm/sql-highlighter";
import dotenv from 'dotenv';
const ENV = process.env.NODE_ENV || "development";
dotenv.config({ path: `.env.${ENV}` });
export const orm = await MikroORM.init({
    entities: ['dist/**/*.entity.js'],
    entitiesTs: ['src/**/*.entity.ts'],
    dbName: process.env.DB_NAME,
    type: 'mysql',
    clientUrl: process.env.DB_URL,
    highlighter: new SqlHighlighter(),
    debug: true,
    schemaGenerator: {
        disableForeignKeys: true,
        createForeignKeyConstraints: true,
        ignoreSchema: []
    }
});
export const syncSchema = async () => {
    const generator = orm.getSchemaGenerator();
    await generator.updateSchema();
};
//# sourceMappingURL=orm.js.map