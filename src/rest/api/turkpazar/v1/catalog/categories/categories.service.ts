import { Injectable, HttpException } from '@nestjs/common';
import CategoryAndItemsQueryDto from 'src/dto/category-and-items-query.dto';

import FetchCatalogCategory from 'src/utils/turkpazar-ru/rest/api/catalog/category/FetchCatalogCategory';

@Injectable()
export class CategoriesService {
  async findAll() {
    const result = await FetchCatalogCategory.get();
    throw new HttpException(result.data, result.statusCode);
  }

  async findOne(id: number, query: CategoryAndItemsQueryDto) {
    const result = await FetchCatalogCategory.getById(id, query);
    throw new HttpException(result.data, result.statusCode);
  }
}
