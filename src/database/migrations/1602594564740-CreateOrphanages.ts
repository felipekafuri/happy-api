import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateOrphanages1602594564740 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: "orphanages",
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
            name: "name",
            type: "varchar"
          },
          {
            name: "opening_hours",
            type: "varchar"
          },
          {
            name: "latitude",
            type: "decimal",
            scale: 10,
            precision: 2,
          },
          {
            name: "longitude",
            type: "decimal",
            scale: 10,
            precision: 2,
          },
          {
            name: "about",
            type: "text"
          },
          {
            name: "instructions",
            type: "text"
          },
          {
            name: "open_on_weekends",
            type: "boolean",
            default: false
          },
        ]
      }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orphanages')
  }

}
