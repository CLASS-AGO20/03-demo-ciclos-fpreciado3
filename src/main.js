export default class App {

    sumarParesFor() {
        let suma = 0;

        for(let b = 0; b<=20; b = b + 2){
            suma = suma + b;
        }

        return suma;
    }
}

let app = new App();
