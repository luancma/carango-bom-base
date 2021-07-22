
export default class BaseService {

  // BASE_API_URL = 'https://carango-bom-api.herokuapp.com/';
  BASE_API_URL = 'http://localhost:8080';
  BASE_URL = '';

  constructor(url) {
    this.BASE_URL = `${this.BASE_API_URL}/${url}`
  }

  async makeRequest(endpoint, method = 'GET', object = null) {
    return await fetch(endpoint, {
      method,
      headers: {
        "Content-Type": "application/json"
      },
      body: object ? JSON.stringify(object) : null,
    }).then(r => r.json());
  }

  async cadastrar(object) {
    return await this.makeRequest(this.BASE_URL, 'POST', object);
  }

  async alterar(id, object) {
    const url = `${this.BASE_URL}/${id}`
    return await this.makeRequest(url, 'PUT', object);
  }

  async consultar(id) {
    return await this.makeRequest(`${this.BASE_URL}/${id}}`);
  }

  async listar() {
    return await this.makeRequest(`${this.BASE_URL}`);
  }

  async excluir(id) {
    return await this.makeRequest(`${this.BASE_URL}/${id}}`, 'DELETE');
  }
}
