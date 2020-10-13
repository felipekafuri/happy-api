import { query } from "express";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateImages1602598624500 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'images',
      columns:[
        {
          name: "id",
          type: "integer",
          isUnique: true,
          isGenerated: true,
          isPrimary: true,
          generationStrategy: "increment",
        },
        {
          name: "path",
          type:"varchar"
        },
        {
          name: "orphanage_id",
          type: "integer"
        }
      ],
      foreignKeys: [
        { 
          name: "ImageOrphanages",
          columnNames: ["orphanage_id"],
          referencedTableName: "orphanages",
          referencedColumnNames: ['id'],
          onUpdate:'CASCADE',
          onDelete:'CASCADE'
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('images')
  }

}
