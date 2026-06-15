import { Controller, Get, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { SearchProductsDto } from './dto/search-products.dto';
import type { ProductsResponse } from './product.interface';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(@Query() query: SearchProductsDto): ProductsResponse {
    return this.productsService.findAll(query);
  }
}
