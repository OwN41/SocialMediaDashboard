export default class RegistryHandler{
    constructor(){}    

    readRegistry() {
        fetch("http://localhost:5173/src/helpers/registry.json")
        .then((res) => res.json())
        .then((json) => {
            return json;
        });    
    }

    writeRegistry() {

    }
}
