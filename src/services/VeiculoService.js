import settings from '../config/settings.dev.js';

const VeiculoService = {
  listar() {
    return fetch(`${settings.baseUrl}/veiculos`)
      .then(r => r.json());
  },

  excluir(veiculo) {
    return /*fetch(`${settings.baseUrl}/veiculos/${veiculo.id}`, {
      method: 'DELETE',
    })
      .then(r => r.json());*/
  }

};

export default VeiculoService;