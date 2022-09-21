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
  // public async createProduct(data: Product): Promise<Product> {
  //   return axios
  //     .post("http://localhost:8080/products/newProduct", data)
  //     .then((resp) => resp.data)
  //     .catch((e) => {
  //       console.warn(e);
  //     });
  // }
  // public async updateProduct(data: Product): Promise<Product> {
  //   return axios
  //     .put("http://localhost:8080/products/{:id}", data)
  //     .then((resp) => resp.data)
  //     .catch((e) => {
  //       console.warn(e);
  //     });
  // }
  // public async deleteProduct(): Promise<Product> {
  //   return axios
  //     .delete("http://localhost:8080/products/[:id]")
  //     .then((resp) => resp.data)
  //     .catch((e) => {
  //       console.warn(e);
  //     });
  // }
}


export const productService = new ProductService();
