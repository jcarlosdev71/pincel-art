import axios from "axios";

const baseUrl = "https://localhost:7044";

class UserServices{
  async getUser(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
  }
}
