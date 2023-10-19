import { Module } from '@nestjs/common';

import { ItemsModule } from './rest/api/turkpazar/v1/catalog/items/items.module';
import { CategoriesModule } from './rest/api/turkpazar/v1/catalog/categories/categories.module';

@Module({
  imports: [ItemsModule, CategoriesModule],
})
export class AppModule {}
