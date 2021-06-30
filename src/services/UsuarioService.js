import settings from '../config/settings.js';

const jsonHeaders = {
  'Content-Type': 'application/json',
};

const UsuarioService = {

  cadastrar(usuario) {
    return fetch(`${settings.baseUrl}/usuarios`, {
      method: 'POST',
      headers: jsonHeaders,
      body: JSON.stringify(usuario)
    }).then(r => r.json());
  },

  alterar(usuario) {
    return fetch(`${settings.baseUrl}/usuarios/${usuario.id}`, {
      method: 'PUT',
      headers: jsonHeaders,
      body: JSON.stringify(usuario)
    }).then(r => r.json());
  },

  consultar(id) {
    return fetch(`${settings.baseUrl}/usuarios/${id}`).then(r => r.json());
  },

  listar() {
    return [{nome: 'Gustavo', id: '999'}];
    
    /*fetch(`${settings.baseUrl}/usuarios`)
      .then(r => r.json());*/
  },

  excluir(usuario) {
    return fetch(`${settings.baseUrl}/usuarios/${usuario.id}`, {
      method: 'DELETE',
    });
  }

};

export default UsuarioService;