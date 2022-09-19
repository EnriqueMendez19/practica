import axios from "axios";
import { User } from "./types/user.type";

export class UserService {
  public async getAllUser(): Promise<User[]> {
    return axios
      .get("http://localhost:8080/users/allusers")
      .then((resp) => resp.data)
      .catch((e) => {
        console.warn(e);
      });
  }

  public async createUser(data: User): Promise<User> {
    return axios
      .post("http://localhost:8080/users/newUser", data)
      .then((resp) => resp.data)
      .catch((e) => {
        console.warn(e);
      });
  }
  
}

export const userService = new UserService();
