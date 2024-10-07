const paragraph: string = "Urania. Qué nombre. A la gente le gusta, le parece sonoro, original, raro. A ella también, aunque le evoca sólo cosas tristes. Todo le evoca cosas tristes, ahora que ha vuelto. Pero ¿cuándo no, desde que se fue de esta ciudad, a la que creía no volvería nunca? ¿Y cómo era posible que alguien se llamara así en una familia de dominicanos católicos, que adoraban a la Virgen del Rosario y a la Virgen de Altagracia? Su padre le contó que su madre era quien escogió su nombre. Urania: la Musa de la astronomía. Nadie se atrevió a contradecirla. A él le parecía bien, se lo dijo como si la elección del nombre hubiera sido cosa de poca importancia. En aquellos días no había problemas en la casa. Las cosas cambiaron después, claro. Cambiaron tanto.";

//devuelve true si searchTerm se encuentra en fullText
function isTextInPara(fullText: string, searchTerm: string): boolean {
    return fullText.toLowerCase().includes(searchTerm.toLowerCase());
}
const result = isTextInPara(paragraph, "Urania");
//completar la funcion para que devuelva la cantidad de veces que searchTerm aparece dentro de fullText
let cuenta: number = 0;
function howManyTextInPara(fullText: string, searchTerm: string): number {

    while (fullText.toLowerCase().includes(searchTerm.toLowerCase())) {
        cuenta = cuenta + 1;
    };

    return cuenta;

};
let busqueda = howManyTextInPara(paragraph, "que");
console.log(busqueda);






//-------------------------------------------------
function contarPalabra(parrafo: string, palabra: string): number {
    // Creamos una expresión regular para buscar todas las ocurrencias de la palabra, sin importar mayúsculas/minúsculas
    const regex = new RegExp(palabra, 'g');
    const coincidencias = parrafo.match(regex);
    let contador: number = 0
    // Si hay coincidencias, devuelve la cantidad; si no, devuelve 0
    if (coincidencias != null) {
        contador = coincidencias.length;
    }
    return contador;
}

/******
function howManyTextInPara(fullText: string, searchTerm: string): number {
    const    = fullText.toLowerCase();
    const lowerSearchTerm = searchTerm.toLowerCase();

    // Dividimos el texto en un array usando el término de búsqueda como separador
    const parts = lowerFullText.split(lowerSearchTerm);

    // La cantidad de veces que aparece searchTerm es el tamaño del array menos 1
    // (porque se divide en partes y la última parte no contiene el término).
    return parts.length - 1;
}

let busqueda = howManyTextInPara(paragraph, "que");
console.log(busqueda);
 */


