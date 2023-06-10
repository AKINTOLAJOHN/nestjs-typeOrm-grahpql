import { DataSource, DataSourceOptions } from 'typeorm'
import { $npmConfigName1686070836021 } from './../migrations/1686070836021-$npm_config_name'
import { $npmConfigName1686071377397 } from './../migrations/1686071377397-$npm_config_name'
import { $npmConfigName1686074077728 } from './../migrations/1686074077728-$npm_config_name'
import { ConfigService } from '@nestjs/config';
import { Auth } from './entities/auth.entity';
import { CarDetail } from './entities/car_detail.entity';
import { DriverDetail } from './entities/driver_detail.entity';

export const dataSourceOptions : DataSourceOptions = {

    type : 'mysql', 

    host : 'localhost',

    username: 'john',

    port : 3306,

    password: 'jay@1040',

    database: 'task',

    synchronize: true,
    
    entities : [Auth,CarDetail,DriverDetail],

    migrations : [$npmConfigName1686070836021,$npmConfigName1686071377397,$npmConfigName1686074077728],

    migrationsTableName : 'migrations',
    
}

const dataSource = new DataSource(dataSourceOptions)

export default dataSource