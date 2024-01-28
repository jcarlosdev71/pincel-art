import axios from "axios";

const baseUrl = "https://localhost:7222/api";
const registerUrl = `${baseUrl}/account/register`;

export interface RegisterUserRequest{
  name : string
  lastName: string
  password: string
  confirmPassword: string
  dni : string
  email : string
}

export interface RegisterUserResponse {
  id : string
  name : string
  lastName: string
  password: string
  confirmPassword: string
  dni : string
  email : string
}

class accountService{

  async register(user: RegisterUserRequest): Promise<RegisterUserResponse> {
//register = async(user: RegisterUserRequest): Promise<RegisterUserResponse> => (await axios.post<RegisterUserResponse>(baseUrl, user)).data
    const response = await axios.post<RegisterUserResponse>(registerUrl,user);
    return response.data;

  }
}

  export default new accountService();

