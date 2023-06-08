import { MigrationInterface, QueryRunner, TableColumn, Table, TableForeignKey } from "typeorm"

export class  $npmConfigName1686071377397 implements MigrationInterface {

    private Driver_table = new Table({
        name: 'drivers_info_tb',
        columns: [
            {
                name: 'id',
                type: 'INTEGER',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
            },
            {
                name: 'first_Name',
                type: 'varchar',
                length: '255',
                isNullable: false,
            },
            {
                name: 'last_Name',
                type: 'varchar',
                length: '255',
                isNullable: false,
            },
            {
                name: 'DOB',
                type: 'varchar',
                length: '255',
                isNullable: false,
            },
            {
                name: 'health_status',
                type: 'varchar',
                length: '255',
                isNullable: false,
            },
            {
                name: 'address',
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
                name: 'country',
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
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
        referencedTableName: 'users_tb',
    });

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(this.Driver_table);

        await queryRunner.createForeignKey('drivers_info_tb',this.foreignKey);
       
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.Driver_table);
    }

}
