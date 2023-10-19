import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param } from '@nestjs/common';

import { CategoriesService } from './categories.service';
import CategoryDto from '../../../../../../dto/category.dto';
import CategoryAndItemDto from 'src/dto/category-and-item.dto';

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
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(+id);
  }
}
