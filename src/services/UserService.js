const API_URL = "https://acelera-api-group4.herokuapp.com/";

class UserService {
  static getUsers(page, size) {
    return fetch(`${API_URL}/users?page=${page}&size=${size}`).then(r =>
      r.json(),
    );
  }
  static deleteUserById(id) {
    return fetch(`${API_URL}/users/${id}`, { method: "DELETE" }).then(r =>
      r.json(),
    );
  }
}

export default UserService;
