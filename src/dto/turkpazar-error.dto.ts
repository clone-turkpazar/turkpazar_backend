import { ApiProperty } from '@nestjs/swagger';

export default class TurkpazarRuErrorDto {
  @ApiProperty()
  message: number;

  @ApiProperty()
  errors: string[];
}
