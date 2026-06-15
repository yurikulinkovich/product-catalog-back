export interface Product {
  id: string;
  name: string;
  brand: string;
  sku: string;
  description: string;
  price: number;
  originalPrice?: number;
  currency: string;
  rating: number;
  reviewCount: number;
  availability: 'in_stock' | 'out_of_stock' | 'limited';
  imageUrl: string;
  category: string;
  subcategory: string;
  tags: string[];
  createdAt: string;
}

export interface ProductsResponse {
  items: Product[];
  total: number;
  page: number;
  limit: number;
}
