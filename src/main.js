export default class App {

    sumarParesFor() {
        let suma = 0;

        for(let b = 0; b<=20; b = b + 2){
            suma = suma + b;
        }

        return suma;
    }

    contarImparesFor(inicio, fin) {
        let impar = 0;
    }
}

let app = new App();

console.log(app.sumarParesFor());
