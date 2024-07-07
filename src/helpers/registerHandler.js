import RegistryHandler from "./registryHandler";

export default class RegisterHandler{
    constructor() {
        const registry = new RegistryHandler().readRegistry();
    }
}