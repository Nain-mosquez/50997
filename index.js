import AnalizadorLexer from "./generated/AnalizadorLexer.js";
import AnalizadorParser from "./generated/AnalizadorParser.js";
import { CustomAnalizadorListener } from "./CustomAnalizadorListener.js";
import { CustomAnalizadorVisitor } from "./CustomAnalizadorVisitor.js";
import antlr4, { CharStreams, CommonTokenStream, ParseTreeWalker } from "antlr4";
import readline from 'readline';
import fs from 'fs';

async function main() {
    let input;

    // Intento leer la entrada desde el archivo input - en forma sincrona.
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        // Si no es posible leer el archivo, solicitar la entrada del usuario por teclado
        input = await leerCadena(); // Simula lectura síncrona
        console.log(input);
    }

    // Proceso la entrada con el analizador e imprimo el arbol de analisis en formato texto
    let inputStream = CharStreams.fromString(input);
    let lexer = new AnalizadorLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new AnalizadorParser(tokenStream);
    let tree = parser.programa();
    
    // Verifico si se produjeron errores
    if (parser.syntaxErrorsCount > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
    } 
    else {
        console.log("\nEntrada válida.");
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`Árbol de derivación: ${cadena_tree}`);
    
        // Utilizo un listener y un walker para recorrer el arbol e indicar cada vez que reconoce una sentencia (stat)
        //const listener = new CustomAnalizadorListener();
        // ParseTreeWalker.DEFAULT.walk(listener, tree);

        // Utilizo un visitor para visitar los nodos que me interesan de mi arbol
        const visitor = new CustomAnalizadorVisitor();
        visitor.visit(tree);   
    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

// Ejecuta la función principal
main();
