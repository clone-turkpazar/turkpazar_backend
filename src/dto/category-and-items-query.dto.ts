import { ApiProperty } from '@nestjs/swagger';

export default class CategoryAndItemsQueryDto {
  @ApiProperty()
  limit: string;

  @ApiProperty()
  page: string;
}
