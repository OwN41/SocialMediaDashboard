
export default class RegistryHandler{
    constructor(){}    

    readRegistry() {
        let temp  = [];
        fetch("http://localhost:5173/src/helpers/registry.json")
        .then((res) => res.json())
        .then((json) => {
            temp = json
            return json;
        });    
    }

    writeRegistry() {
        
    }
}
