import { MigrationInterface, QueryRunner, TableColumn, Table, TableForeignKey } from "typeorm"

export class  $npmConfigName1686074077728 implements MigrationInterface {

    private Car_table = new Table({
        name: 'cars_info_tb',
        columns: [
            {
                name: 'id',
                type: 'INTEGER',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
            },
            {
                name: 'car_Name',
                type: 'varchar',
                length: '255',
                isNullable: false,
            },
            {
                name: 'plate_Number',
                type: 'varchar',
                length: '255',
                isNullable: false,
            },
            {
                name: 'car_color',
                type: 'varchar',
                length: '255',
                isNullable: false,
            },
            {
                name: 'date_purchase',
                type: 'varchar',
                length: '255',
                isNullable: false,
            },
            {
                name: 'engine_number',
                type: 'varchar',
                length: '255',
                isNullable: false,
            },
            {
                name: 'state',
                type: 'varchar',
                length: '255',
                isNullable: false,
            },
            {
                name: 'image_link',
                type: 'varchar',
                length: '255',
                isNullable: false,
            },
            {
                name: 'created_at',
                type: 'timestamp',
                isNullable: false,
                default: 'now()',
            },
            {
                name: 'updated_at',
                type: 'timestamp',
                isNullable: false,
                default: 'now()',
            }],
    });

    private foreignKey = new TableForeignKey({
        columnNames: ['user_driver_id'],
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
        referencedTableName: 'drivers_info_tb',
    });

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(this.Car_table);

        await queryRunner.createForeignKey('cars_info_tb',this.foreignKey);
       
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.Car_table);
    }

}
