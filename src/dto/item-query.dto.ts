import { ApiProperty } from '@nestjs/swagger';

export default class ItemQueryDto {
  @ApiProperty()
  limit: string;

  @ApiProperty()
  page: string;
}
