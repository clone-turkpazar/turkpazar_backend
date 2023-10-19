import { Module } from '@nestjs/common';

import { ItemsModule } from './rest/api/turkpazar/v1/catalog/items/items.module';

@Module({
  imports: [ItemsModule],
})
export class AppModule {}
