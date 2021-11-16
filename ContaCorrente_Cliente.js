class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    cliente;
    _saldo = 0;


    saldo() {
        let _saldo = this._saldo;
        console.log(`📊 Seu saldo atual é de R$ ${_saldo}!`);
    }

    sacar(valor) {
        if (valor <= this._saldo) {
            console.log(`💳 Saldo antigo: R$ ${this._saldo}\n`);

            this._saldo -= valor;
            console.log(`_____________________________\n|💰 Saque feito com Sucesso!|\n|___________________________|\n\n💲 Valor sacado: R$ ${valor} \n💳 Valor atual no saldo: R$ ${this._saldo}`);
        } else {
            console.log(`⚠️ Valor indisponivel para saque. \n💳 Você possui R$ ${this._saldo}`);//⚠
        }
        return valor;
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        console.log(`🛅 Valor de R$ ${valor} depositado com sucesso!`)
        this._saldo += valor;

    }
    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        console.log(`🏦 Valor R$ ${valorSacado} transferido com sucesso!`)
    }
}

const cliente = new Cliente();
cliente.nome = 'Jorge';
cliente.cpf = 1234578;

const cliente1 = new Cliente();
cliente1.nome = 'Alice';
cliente1.cpf = 333334444;

const contaCJorge = new ContaCorrente();
contaCJorge._saldo = 0;
contaCJorge.agencia = 1001;
contaCJorge.cliente = cliente;

const contaCAlice = new ContaCorrente();
contaCAlice._saldo = 0;
contaCAlice.agencia = 1002;
contaCAlice.cliente = cliente1;

contaCJorge.saldo()

contaCJorge.depositar(100)
contaCJorge.sacar(50)
contaCJorge.transferir(50, contaCAlice)
contaCAlice.saldo()
