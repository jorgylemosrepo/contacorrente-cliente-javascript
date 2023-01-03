class ContaBancaria {
    public _agencia: any = null || undefined;
    public _cliente: any = null || undefined;
    public _saldo: any = null || undefined;

    get Values () {
        return [this._agencia, this._saldo]
        // return `\n Agencia: ${this._agencia}\n Cliente: ${this._cliente}\n Saldo: ${this._saldo}\n`
    }

    set Values(keys) {
        const [agencia, saldo] = keys
        this._agencia = agencia
        this._saldo = saldo
    }
}

class Cliente extends ContaBancaria {
    private _cpf: any = null || undefined;
    private _nome: any = null || undefined;

    constructor (){
        super()
        const contaBancaria = new ContaBancaria()
        contaBancaria.Values
    }

    JSONInfo(){
        const obj = [
            {
                "Nome": this._nome,
                "Cpf": this._cpf,

                "Conta Bancaria": {
                    "Agencia": this._agencia,
                    "Saldo": this._saldo
                }
            }
        ]
        return JSON.stringify(obj, null, 4)
    }

    get Info(){
        return [this._cpf, this._nome]
        // return `\n Cpf: ${this._cpf}\n Nome: ${this._nome}\n`
    }

    set Info(keys){
        const [cpf, nome] = keys;

        this._nome = nome

        if(cpf.length < 11 || cpf.length > 11){
            console.log(`O CPF do cliente ${this._cliente} está errado.`)
        } else {
            this._cpf = cpf
        }
    }

}


const cliente = new Cliente();
const cliente2 = new Cliente();

cliente.Values = ['010', '100']
cliente.Info = ['00000000000', 'Jorge']

cliente2.Values = ['014', '200']
cliente2.Info = ['99999999999', 'Alice']


console.log(cliente.JSONInfo(), cliente2.JSONInfo())

// Output

/*
[LOG]: "O CPF do cliente Alice está errado." 
[LOG]: "[
    {
        "Nome": "Jorge",
        "Cpf": "00000000000",
        "Conta Bancaria": {
            "Agencia": "010",
            "Saldo": "100"
        }
    }
]",  "[
    {
        "Nome": "Alice",
        "Conta Bancaria": {
            "Agencia": "014",
            "Saldo": "200"
        }
    }
]"
*/
