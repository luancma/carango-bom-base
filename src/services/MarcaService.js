import settings from '../config/settings.js';

const jsonHeaders = {
  'Content-Type': 'application/json',
};

const MarcaService = {
  cadastrar(marca) {
    return fetch(`${settings.baseUrl}/marcas`, {
      method: 'POST',
      headers: jsonHeaders,
      body: JSON.stringify(marca)
    }).then(r => r.json());
  },

  alterar(marca) {
    return fetch(`${settings.baseUrl}/marcas/${marca.id}`, {
      method: 'PUT',
      headers: jsonHeaders,
      body: JSON.stringify(marca)
    }).then(r => r.json());
  },

  consultar(id) {
    return fetch(`${settings.baseUrl}/marcas/${id}`).then(r => r.json());
  },

  listar() {
    return fetch(`${settings.baseUrl}/marcas`).then(r => r.json());
  },

  excluir(marca) {
    return fetch(`${settings.baseUrl}/marcas/${marca.id}`, {
      method: 'DELETE',
    })
      .then(r => r.json());
  }
};

export default MarcaService;