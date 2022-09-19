import axios from "axios";
import { Product } from "./types/product.type";

export class ProductService {
  public async getAllproduct(): Promise<Product[]> {
    return axios
      .get("http://localhost:8080/products")
      .then((resp) => resp.data)
      .catch((e) => {
        console.warn(e);
      });
  }
  public async createProduct(data: Product): Promise<Product> {
    return axios
      .post("http://localhost:8080/products/newProduct", data)
      .then((resp) => resp.data)
      .catch((e) => {
        console.warn(e);
      });
  }
}
export const productService = new ProductService();
