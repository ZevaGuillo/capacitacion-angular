export interface Product {
  id: string;
  productName: string;
  material: string;
  precio: string;
  productImage: string;
  userImage: string;
  username: string;
  createdAt: Date;
}

export interface ProductResponse {
  data: Product[];
}
