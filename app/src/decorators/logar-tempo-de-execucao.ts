export function logarTempoDeExecucao() {
    return function(
        target: any,
        property: string,
        descriptor: PropertyDescriptor
    ) {
        return descriptor;
    }
}