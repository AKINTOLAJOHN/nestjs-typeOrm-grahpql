import { DataSource, DataSourceOptions } from 'typeorm'
import { $npmConfigName1686070836021 } from './../migrations/1686070836021-$npm_config_name'
import { $npmConfigName1686071377397 } from './../migrations/1686071377397-$npm_config_name'
import { $npmConfigName1686074077728 } from './../migrations/1686074077728-$npm_config_name'
import { ConfigService } from '@nestjs/config';

export const dataSourceOptions : DataSourceOptions = {

    type : 'mysql', 

    host : 'localhost',

    username: 'jay',

    port : 3306,

    password: 'jay@1040',

    database: 'task',

    synchronize: false,

    entities : [__dirname + "/entities/*.entity.ts"],

    migrations : [],

    migrationsTableName : 'migrations'
    
}


const dataSource = new DataSource(dataSourceOptions)

export default dataSource