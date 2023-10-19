import { Injectable, HttpException } from '@nestjs/common';

import FetchCatalogItem from 'src/utils/turkpazar-ru/rest/api/catalog/item';
import FetchCatalogItems from 'src/utils/turkpazar-ru/rest/api/catalog/items';

@Injectable()
export class ItemsService {
  async findAll(query: any) {
    const result = await FetchCatalogItems.get(query);
    throw new HttpException(result.data, result.statusCode);
  }

  async findOne(id: number) {
    const result = await FetchCatalogItem.getById(id);
    throw new HttpException(result.data, result.statusCode);
  }
}
