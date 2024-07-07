
export default class RegistryHandler{
    constructor(){}

    /**
     * Reads the registry.json file and returns it
     */
    async readRegistry() {
        let registry = undefined;
        await fetch("http://localhost:5173/src/helpers/registry.json")
        .then((res) => res.json())
        .then((json) => {
            registry = json;
        });


        return registry
    }

    /**
     * 
     */
    writeRegistry() {
        
    }
}
