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

        if(inicio > fin) {
            let t = inicio;
            inicio = fin;
            fin = t;
        }

        for(let c = inicio; c<=fin; c++) {
            if(c%2 !== 0) {
                impar = impar + 1;
            }
        }

        return impar;
    }

    sumarParesWhile() {
        let c = 1;
        let suma = 0;

        while(c <= 20) {

            if(c%2 == 0) {
                suma = suma + c;  
            }

            c = c + 1;
        }

        return suma;
    }

    contarImparesWhile(inicio, fin) {

        let d = inicio;
        let impar = 0;

        while(d <= fin) {

            if(d%2 !== 0) {
                impar = impar + 1;
            }

            d++;
        }

        return impar;
    }

    sumarParesDo() {
        let e = 1;
        let suma = 0;

        do {
            if(e%2 == 0) {
                suma = suma + e;
            }

            e++;
        } while(e <= 20);

        return suma;
    }

    contarImparesDo(inicio, fin) {
        let f = inicio;
        let impar = 0;

        do {
            if(f%2 !== 0) {
                impar = impar + 1;
            }

            f++;
        } while(f <= fin);

        return impar;
    }
}

let app = new App();

//Prueba de la función sumarParesFor()
console.log(app.sumarParesFor());
//Prueba de la función contarImparesFor()
console.log(app.contarImparesFor(2,12));
console.log(app.contarImparesFor(12,5));
//Prueba de la función sumarParesWhile()
console.log(app.sumarParesWhile());
//Prueba de la función contarImparesWhile()
console.log(app.contarImparesWhile(2,18));
//Prueba de la función sumarParesDo()
console.log(app.sumarParesDo());
//Prueba de la función contarImparesDo()
console.log(app.contarImparesWhile(3,17));