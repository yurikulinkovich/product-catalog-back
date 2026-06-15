import { Injectable } from '@nestjs/common';
import { Product, ProductsResponse } from './product.interface';
import { SearchProductsDto } from './dto/search-products.dto';
import { MOCK_PRODUCTS } from './mock/products.mock';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = MOCK_PRODUCTS;

  findAll(dto: SearchProductsDto): ProductsResponse {
    const page = Math.max(1, Number(dto.page) || 1);
    const limit = Math.min(96, Math.max(1, Number(dto.limit) || 24));
    const search = dto.search?.trim().toLowerCase() ?? '';

    const filtered = search
      ? this.products.filter((p) =>
          p.name.toLowerCase().includes(search) ||
          p.brand.toLowerCase().includes(search) ||
          p.sku.toLowerCase().includes(search) ||
          p.description.toLowerCase().includes(search) ||
          p.tags.some((tag) => tag.toLowerCase().includes(search)),
        )
      : this.products;

    const total = filtered.length;
    const items = filtered.slice((page - 1) * limit, page * limit);

    return { items, total, page, limit };
  }
}
