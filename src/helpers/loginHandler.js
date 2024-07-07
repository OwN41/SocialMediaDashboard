import RegistryHandler from "./registryHandler";

export default class LoginHandler{
    constructor() {
        const registryHandler = new RegistryHandler();
        this._registryHandler = registryHandler
    }

    _registryHandler;

    /**
     * Checks if the login credentials exist in the registry
     * @param {string} email Given email
     * @param {string} password Given password
     */
    async isCredentialsValid(email, password){
        let valid = false;
        const registry = await this._registryHandler.readRegistry();
        
        registry.forEach((user) => {
            if (user.email == email && user.password == password) {
                valid = true;
            }
        });

        return valid;
    }
}