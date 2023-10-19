import { ApiProperty } from '@nestjs/swagger';

import ItemDto from './item.dto';
import CategoryDto from './category.dto';

export default class CategoryAndItemsDto {
  @ApiProperty()
  category: CategoryDto;

  @ApiProperty({ type: [ItemDto] })
  items: [ItemDto];

  @ApiProperty()
  count: number;
}
