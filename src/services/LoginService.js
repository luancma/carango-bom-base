import StorageService from "./StorageService";

const API_URL = "https://backend-acelera.herokuapp.com";

class LoginService {
  static async login(payload) {
    fetch(`${API_URL}/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(response => response.json())
      .then(({ token }) => StorageService.save("token", token));
  }
}

export default LoginService;
