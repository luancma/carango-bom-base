export default class BaseService {
  BASE_API_URL = process.env.REACT_APP_LOCAL_BASE_API_URL;
  BASE_URL = "";

  constructor(url) {
    this.BASE_URL = `${this.BASE_API_URL}/${url}`;
  }

  async makeRequest(endpoint, method = "GET", object = null) {
    return await fetch(endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: object ? JSON.stringify(object) : null,
    }).then(r => {
      try {
        return r.json();
      } catch (error) {
        console.error(error);
      }
    });
  }

  async create(object) {
    return await this.makeRequest(this.BASE_URL, "POST", object);
  }

  async update(id, object) {
    const url = `${this.BASE_URL}/${id}`;
    return await this.makeRequest(url, "PUT", object);
  }

  async findById(id) {
    return await this.makeRequest(`${this.BASE_URL}/${id}`);
  }

  async findAllPaged(page, size = 10) {
    return await this.makeRequest(
      `${this.BASE_URL}/paged?page=${page}&size=${size}`,
    );
  }

  async findAll() {
    return await this.makeRequest(`${this.BASE_URL}`);
  }

  async remove(id) {
    return await this.makeRequest(`${this.BASE_URL}/${id}`, "DELETE");
  }
}
