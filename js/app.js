//Ejercicio Cajero
//Escribe un programa que cree un objeto CUENTA con las siguientes propiedades:
//una propieda titular con el valor "Alex"
//una propiedad saldo, teniendo como valor inical 0
//un metodo ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parametro
//un metodo extraer() que permita retirar la cantidad pasada como parametro
//un metodo consultar() que retorne la informacion del estado de la cuenta


class Cuenta {
    constructor(titular,) {
        this.titular = titular,
            this.saldo = 0;
    }

    ingresar(monto) {
        
        this.saldo = this.saldo + monto;
    }
    extraer(monto) {
        if (this.saldo >= monto) {
            this.saldo -= monto;
        } else {
            console.log("no se puede");
        }
               
    }
    consultar() {
            
        console.log(`Tu saldo actual es ${this.saldo}`);
        
       
    }
}
const usuarioBanco = new Cuenta("Alex");

usuarioBanco.ingresar(300);

usuarioBanco.extraer(200);

console.log(usuarioBanco.consultar());