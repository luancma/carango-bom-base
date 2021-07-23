import StorageService from "./StorageService";

const API_URL = "https://backend-acelera.herokuapp.com";

class LoginService {
  static async login(payload) {
    const response = await fetch(`${API_URL}/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error(`Erro: ${response.status}`);
    }
    const { token } = await response.json();
    StorageService.save("token", token);
  }
}

export default LoginService;
