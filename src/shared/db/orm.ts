import { MikroORM } from "@mikro-orm/core";
import { SqlHighlighter } from "@mikro-orm/sql-highlighter";


export const orm = await MikroORM.init({
    entities: ['dist/**/*.entity.js'],
    entitiesTs: ['src/**/*.entity.ts'],
    dbName: 'sistema_ventas_dsw',
    type: 'mysql',
    clientUrl: 'mysql://admin:root@localhost:3306/sistema_ventas_dsw',
    highlighter: new SqlHighlighter(),
    debug: true,
    /* schemaGenerator: {
        disableForeignKeys: true,
        createForeignKeyConstraints: true,
        ignoreSchema: []
    } */
})


export const syncSchema = async() => {
    const generator = orm.getSchemaGenerator();
    await generator.updateSchema();
}