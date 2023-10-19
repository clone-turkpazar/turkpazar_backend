import { ApiProperty } from '@nestjs/swagger';

class CatalogCategorySubCat {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  keywords: null | string;

  @ApiProperty()
  icon: null | string;

  @ApiProperty()
  parent: number;
}

export default class CategoryDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  name_en: string;

  @ApiProperty()
  name_tk: string;

  @ApiProperty()
  img: null | string;

  @ApiProperty({
    type: [CatalogCategorySubCat],
  })
  subcats: [CatalogCategorySubCat];
}
