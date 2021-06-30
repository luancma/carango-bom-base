export default class Veiculo {
  constructor(id, marca, marcaId, modelo, ano, valor) {
    this.id = id;
    this.marca = marca || "";
    this.marcaId = marcaId;
    this.modelo = modelo || "";
    this.ano = ano;
    this.valor = valor;
  }
  static vazio() {
    return new Veiculo("", "", "", "", "", "");
  }
}
