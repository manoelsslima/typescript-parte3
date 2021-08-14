export function domInjector(seletor: string) {
    // propertyKey mostra a propriedade onde o decorator foi adicionado
    // pode ser métodos ou atributos
    // é aplicado na hora que o javascript tá criando a classe
    // o decorator de método tem o parâmetro: descriptor
    return function(target: any, propertyKey: string){
        console.log(`Modificando prototype ${target.constructor.name} e adicionando
        getter para a propriedade ${propertyKey}`);

        let elemento: HTMLElement;

        // cria um getter na propriedade
        const getter = function() { // quando acessar a propriedade, retorna o elemento do DOM
            if (!elemento) { // cache decorator copy - evita buscar o elemento novamente
                elemento = <HTMLElement>document.querySelector(seletor);
                console.log(`buscando elemento do DOM com seletor ${seletor} para injetar em ${propertyKey}`);
            }
            return elemento;
        }

        // substitui, no prototype (definição da classe), a propriedade original por um getter
        Object.defineProperty(
            target,
            propertyKey,
            { get: getter } // cria uma propriedade get chamando o método getter
        )
    }
}