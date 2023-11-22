
//Define a classe do herói
class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ""
    }

    //Método para verificar o tipo de ataque
    verificaAtaque(tipo){
        let ataque = ""
        switch (tipo) {
            case "mago":
                ataque = "magia"
                break;
            case "guerreiro":
                ataque = "espada"
                break;
            case "monge":
                ataque = "artes marciais"
                break;
            case "ninja":
            ataque = "shuriken"
            break;

            default:
                break;
        }
        return ataque
    }

    //Método que faz a concatenação da variável tipo e do método verificarAtaque() junto à mensagem
    atacar(){
        console.log(`O ${this.tipo} atacou usando ${this.verificaAtaque(this.tipo)}`)
    }
}

//Instanciando um novo objeto da classe heroi
let novoHeroi = new Heroi("Allyson", 34, "monge")

//Chamando o método atacar
novoHeroi.atacar()