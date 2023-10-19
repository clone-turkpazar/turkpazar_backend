import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CategoriesService } from './categories.service';
import CategoryDto from '../../../../../../dto/category.dto';
import CategoryAndItemDto from 'src/dto/category-and-items.dto';

@ApiTags('api_turkpazar_v1_catalog_categories')
@Controller('/api/turkpazar/v1/catalog/categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @ApiResponse({ status: 200, type: [CategoryDto] })
  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @ApiResponse({ status: 200, type: [CategoryAndItemDto] })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @Get(':id')
  findOne(@Param('id') id: string, @Query() query) {
    return this.categoriesService.findOne(+id, query);
  }
}
