import { MikroORM } from "@mikro-orm/core";
import { SqlHighlighter } from "@mikro-orm/sql-highlighter";
import { createPool } from 'mysql2/promise';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "../../config";

export const orm = await MikroORM.init({
    entities: ['dist/**/*.entity.js'],
    entitiesTs: ['src/**/*.entity.ts'],
    dbName: 'sistema_ventas_dsw',
    type: 'mysql',
    clientUrl: 'mysql://root:root@localhost:3306/sistema_ventas_dsw',
    highlighter: new SqlHighlighter(),
    debug: true,
    schemaGenerator: {
        disableForeignKeys: true,
        createForeignKeyConstraints: true,
        ignoreSchema: []
    }
})


export const syncSchema = async() => {
    const generator = orm.getSchemaGenerator();
    await generator.updateSchema();
}