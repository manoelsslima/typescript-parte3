export function logarTempoDeExecucao() {
    return function (target, property, descriptor) {
        return descriptor;
    };
}
