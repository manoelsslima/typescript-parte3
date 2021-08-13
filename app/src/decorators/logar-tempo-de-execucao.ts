export function logarTempoDeExecucao(emSegundos: boolean = false) {
    // descriptor dá acesso ao método original anotado
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: Array<any>) {
            let divisor = 1;
            let unidade = 'milisegundos';
            if (emSegundos) {
                divisor = 1000;
                unidade = 'segundos;'
            }
            const t1 = performance.now();
            // apply - permite passar o contexto e um array de parâmetros
            // this -> será a classe que chama o método original
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2-t1)/divisor} ${unidade}`);
            return retorno;
        };
        return descriptor;
    }
}