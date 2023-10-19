import { Injectable, HttpException } from '@nestjs/common';

import FetchCatalogCategory from 'src/utils/turkpazar-ru/rest/api/catalog/category/FetchCatalogCategory';

@Injectable()
export class CategoriesService {
  async findAll() {
    const result = await FetchCatalogCategory.get();
    throw new HttpException(result.data, result.statusCode);
  }

  async findOne(id: number) {
    const result = await FetchCatalogCategory.getById(id);
    throw new HttpException(result.data, result.statusCode);
  }
}
