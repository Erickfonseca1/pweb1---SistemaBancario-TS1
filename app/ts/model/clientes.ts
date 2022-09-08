class Clientes {

  private clientes: Array<Cliente>;

  constructor() {
    this.clientes = new Array<Cliente>();
    const cli1 = new Cliente('João', '10', 111);
    const cli2 = new Cliente('Maria', '11', 222);
    this.clientes.push(cli1, cli2);
  }

  inserir(cliente: Cliente): void {
    this.clientes.push(cliente)
  }

  remover(cpf: string): void {
    const clienteARemover = this.pesquisar(cpf);
    if(clienteARemover) {
      const indiceCliente = this.clientes.indexOf(clienteARemover);
      if (indiceCliente > -1) {
        this.clientes.splice(indiceCliente, 1);
      }
    }
  }

  listar(): Array<Cliente> {
    return this.clientes
  }

  pesquisar(cpf: string): Cliente {
    return this.clientes.find(
      Cliente => Cliente.cpf === cpf
    );
  }
}