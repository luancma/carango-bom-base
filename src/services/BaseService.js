
export default class BaseService {

  // BASE_API_URL = 'https://carango-bom-api.herokuapp.com/';
  BASE_API_URL = 'https://backend-acelera.herokuapp.com';
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

  async create(object) {
    return await this.makeRequest(this.BASE_URL, 'POST', object);
  }

  async update(id, object) {
    console.log(object)
    const url = `${this.BASE_URL}/${id}`
    return await this.makeRequest(url, 'PUT', object);
  }

  async findById(id) {
    return await this.makeRequest(`${this.BASE_URL}/${id}`);
  }

  async findAll(page, size = 10, paged = true) {
    if (paged) {
      return await this.makeRequest(`${this.BASE_URL}?page=${page}&size=${size}`);
    }
    return await this.makeRequest(`${this.BASE_URL}`)
  }

  async remove(id) {
    return await this.makeRequest(`${this.BASE_URL}/${id}`, 'DELETE');
  }
}
