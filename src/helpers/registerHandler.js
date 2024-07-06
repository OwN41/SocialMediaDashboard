import RegistryHandler from "./registryHandler";

export default class RegisterHandler{
    constructor() {
        const registryHandler = new RegistryHandler();
        const registry = registryHandler.readRegistry();
    }

}