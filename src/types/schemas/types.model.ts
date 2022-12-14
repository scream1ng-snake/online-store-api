import { BelongsToMany, HasMany, Model } from "sequelize-typescript";
import { Column, DataType, Table } from "sequelize-typescript";
import { Brand } from "src/brands/schemas/brand.model";
import { Device } from "src/devices/schemas/device.model";
import { TypeBrand } from "./typeBrand.model";

interface TypeCreationAttrs {
  name: string
}

@Table({tableName: "types", createdAt: false, updatedAt: false})
export class Type extends Model<Type, TypeCreationAttrs> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({type: DataType.STRING, unique: true, allowNull: true})
  name: string;

  @HasMany(() => Device)
  devices: Device[];

  @BelongsToMany(() => Brand, () => TypeBrand)
  brands: Brand[]
}