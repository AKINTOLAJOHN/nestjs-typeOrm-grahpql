import { MigrationInterface, QueryRunner, TableColumn, Table } from "typeorm"

export class  $npmConfigName1686070836021 implements MigrationInterface {

    private Auth_table = new Table({
        name: 'users_tb',
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
                name: 'pass_word',
                type: 'varchar',
                length: '255',
                isNullable: false,
            },
            {
                name: 'email',
                type: 'varchar',
                length: '255',
                isNullable: false,
            },
            {
                name: 'resetPasswordToken',
                type: 'varchar',
                length: '255',
                isNullable: false,
            },
            {
                name: 'resetPasswordExpires',
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

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(this.Auth_table);
       
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.Auth_table);
    }

}
