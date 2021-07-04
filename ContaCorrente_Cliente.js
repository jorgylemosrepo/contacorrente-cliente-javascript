class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    //Atributos publicos
    agencia;
    cliente;
    //Atributos privados
    _saldo = 0;

    sacar(valor){
        if(valor <= this._saldo){
            console.log(`💳 Saldo antigo: R$ ${this._saldo}\n`);
            
            this._saldo -= valor;
            console.log(`_____________________________\n|💰 Saque feito com Sucesso!|\n|___________________________|\n\n💲 Valor sacado: R$ ${valor} \n💳 Valor atual no saldo: R$ ${this._saldo}`);
        
        }else{
            console.log(`⚠️ Valor indisponivel para saque. \n💳 Você possui R$ ${this._saldo}`);//⚠
    }
}
depositar(valor){
    if(valor <= 0)
    {
        return;
    } 
    this._saldo += valor;           
}
    transferir(valor, conta)
    {
       const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        console.log(`Valor: R$ ${valorSacado} transferido com sucesso!`)
    }

}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 111333666;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 333777999;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo._saldo = 0;
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;



const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

contaCorrenteRicardo.depositar(500);
//contaCorrenteRicardo.sacar(150);
contaCorrenteRicardo.transferir(200, conta2)

console.log(conta2)
