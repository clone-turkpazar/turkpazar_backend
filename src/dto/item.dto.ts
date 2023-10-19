import { ApiProperty } from '@nestjs/swagger';

class ItemCatDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  name_en: string;

  @ApiProperty()
  name_tk: string;

  @ApiProperty()
  keywords: null | string;

  @ApiProperty()
  icon: string;
}

class ItemSubCatDto {
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

  @ApiProperty()
  items_cat: ItemCatDto;
}

class ItemImageDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  link: string;

  @ApiProperty()
  small: string;

  @ApiProperty()
  min: string;
}

export default class ItemDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  cat: number;

  @ApiProperty()
  subcat: ItemSubCatDto;

  @ApiProperty()
  pkg_x: number;

  @ApiProperty()
  pkg_y: number;

  @ApiProperty()
  pkg_z: number;

  @ApiProperty()
  pkg_w: number;

  @ApiProperty()
  destination: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  count: number;

  @ApiProperty()
  images: ItemImageDto[];

  @ApiProperty()
  vid: string;

  @ApiProperty()
  fullConvertedPrice: number;

  @ApiProperty()
  show: boolean;
}
