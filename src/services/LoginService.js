const API_URL = process.env.REACT_APP_LOCAL_BASE_API_URL;

class LoginService {
  static async login(payload) {
    return fetch(`${API_URL}/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error("Verifique os dados informados");
      })
      .catch(error => {
        throw new Error(error);
      })
  }
}

export default LoginService;
