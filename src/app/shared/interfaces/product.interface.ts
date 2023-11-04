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

// {
//   "productName": "string",
//   "material": "string",
//   "precio": "string",
//   "productImage": "string",
//   "userImage": "string",
//   "username": "string",
//   "createdAt": "Date"
// }
// usar tulizte types pra products sin id
export interface ProductRequest extends Omit<Product, "id">{}
