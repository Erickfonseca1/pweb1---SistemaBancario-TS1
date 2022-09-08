class Clientes {
    constructor() {
        this.clientes = new Array();
        const cli1 = new Cliente('joao', '10', 111);
        const cli2 = new Cliente('maria', '11', 222);
        this.clientes.push(cli1, cli2);
    }

    inserir(cliente) {
        this.clientes.push(cliente);
    }

    remover(cpf) {
        const clienteARemover = this.pesquisar(cpf);
        if (clienteARemover) {
            const indiceCliente = this.clientes.indexOf(clienteARemover);
            if (indiceCliente > -1) {
                this.clientes.splice(indiceCliente, 1);
            }
        };
    }

    pesquisar(cpf) {
        return this.clientes.find(Cliente => Cliente.cpf === cpf)
    }

    listar() {
        return this.clientes
    }
}