export default class App {

    sumarParesFor() {
        let suma = 0;

        for(let b = 0; b<=20; b = b + 1){
            if(b%2 == 0) {
                suma = suma + b;
            }
        }

        return suma;
    }

    contarImparesFor(inicio, fin) {
        let impar = 0;

        for(let c = inicio; c<=fin; c + 1) {
            if(c%2 !== 0) {
                impar = impar + 1;
            }
        }
    }
}

let app = new App();

console.log(app.sumarParesFor());
