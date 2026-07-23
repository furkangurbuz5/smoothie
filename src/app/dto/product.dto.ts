import { Product } from '../model/product.model';

export interface ProductResponse {
  products: ProductDto[];
  total: number;
  skip: number;
  limit: number;
}

interface ProductDto {
  id: number;
  title: string;
  description: string;
  category: 'beauty';
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  thumbnail: string;
  images: string[];
}

export function mapProductDtoToProductModel(productDto: ProductDto): Product {
  return {
    id: productDto.id,
    title: productDto.title,
    description: productDto.description,
    category: productDto.category,
    price: productDto.price,
    discountPercentage: productDto.discountPercentage,
    rating: productDto.rating,
  };
}
