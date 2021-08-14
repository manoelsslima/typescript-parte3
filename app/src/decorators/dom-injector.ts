export function domInjector(seletor: string) {
    // propertyKey mostra a propriedade onde o decorator foi adicionado
    // pode ser métodos ou atributos
    // é aplicado na hora que o javascript tá criando a classe
    return function(target: any, propertyKey: string){
        console.log(`Modificando prototype ${target.constructor.name} e adicionando
        getter para a propriedade ${propertyKey}`);

        // cria um getter - sempre que acessar a propriedade, retorno o elemento do DOM
        const getter = function() {
            const elemento = document.querySelector(seletor);
            console.log(`buscando elemento do DOM com seletor ${seletor} para injetar em ${propertyKey}`);
            return elemento;
        }

        // substitui a propriedade original da classe por um getter
        Object.defineProperty(
            target,
            propertyKey,
            { get: getter }
        )
    }
}