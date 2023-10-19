import { Controller, Get, Query, Param } from '@nestjs/common';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

import ItemDto from 'src/dto/item.dto';
import { ItemsService } from './items.service';
import TurkpazarRuErrorDto from 'src/dto/turkpazar-error.dto';

@ApiTags('api_turkpazar_v1_catalog_items')
@Controller('/api/turkpazar/v1/catalog/items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @ApiResponse({ status: 200, type: [ItemDto] })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @Get()
  findAll(@Query() query) {
    return this.itemsService.findAll(query);
  }

  @ApiResponse({ status: 200, type: ItemDto })
  @ApiResponse({ status: 404, type: TurkpazarRuErrorDto })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemsService.findOne(+id);
  }
}
