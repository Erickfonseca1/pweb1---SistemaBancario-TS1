

let clientes = new Clientes()
clientes.listar

const cli3 = new Cliente('Erick', '88', 13);
const cli5 = new Cliente('Sergio', '25', 14);
const cli4 = new Cliente('Rita', '67', 15);
clientes.inserir(cli3)
clientes.inserir(cli4)
clientes.inserir(cli5)
clientes.listar();

clientes.pesquisar('88')
clientes.remover('25');

clientes.listar();
