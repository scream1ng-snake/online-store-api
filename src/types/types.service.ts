import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTypeDto } from './dto/create-type.dto';
import { Type } from './schemas/types.model';

@Injectable()
export class TypesService {
  constructor(@InjectModel(Type) private typeRepository: typeof Type) {}

  async create(dto: CreateTypeDto) {
    return await this.typeRepository.create(dto);
  }

  async getAll() {
    return await this.typeRepository.findAndCountAll({
      attributes: ["id", "name"]
    });
  }
}
