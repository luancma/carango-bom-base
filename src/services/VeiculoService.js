import settings from "../config/settings.js";

const jsonHeaders = {
  "Content-Type": "application/json",
};

const VeiculoService = {
  cadastrar(veiculo) {
    return fetch(`${settings.baseUrl}/veiculos`, {
      method: "POST",
      headers: jsonHeaders,
      body: JSON.stringify(veiculo),
    }).then((r) => r.json());
  },

  alterar(veiculo) {
    return fetch(`${settings.baseUrl}/veiculos/${veiculo.id}`, {
      method: "PUT",
      headers: jsonHeaders,
      body: JSON.stringify(veiculo),
    }).then((r) => r.json());
  },

  consultar(id) {
    return fetch(`${settings.baseUrl}/veiculos/${id}`).then((r) => r.json());
  },

  listar() {
    return fetch(`${settings.baseUrl}/veiculos`).then((r) => r.json());
  },

  excluir(veiculo) {
    return fetch(`${settings.baseUrl}/veiculos/${veiculo.id}`, {
      method: "DELETE",
    });
  },
};

export default VeiculoService;
