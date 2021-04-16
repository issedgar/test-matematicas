module.exports = {
    /**
     * Suma de dos numeros
     * @example
     * n1 = 1, n2 = 3 => resultado 4
     * @param {*} n1 Numero uno de la suma
     * @param {*} n2 Numero dos de la suma
     * @returns 
     * number
     */
    suma: function(n1, n2) {
        return (this.esNumero(n1, n2) ? (n1 + n2) : this.mensajeError());
    },
    resta: function(n1, n2) {
        return (this.esNumero(n1, n2) ? (n1 - n2) : this.mensajeError());
    },
    multiplicacion: function(n1, n2) {
        return (this.esNumero(n1, n2) ? (n1 * n2) : this.mensajeError());
    },
    division: function(n1, n2) {
        return (this.esNumero(n1, n2) ? (n1 / n2) : this.mensajeError());
    },
    mensajeError: function() {
        console.log('Uno de los valores no es numerico');
    },
    esNumero: function(n1, n2) {
        if ( typeof n1 !== 'number' || typeof n2 !== 'number' ) {
            return false;
        }
        return true;
    }
}
