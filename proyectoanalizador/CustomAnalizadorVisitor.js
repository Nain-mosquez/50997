import AnalizadorVisitor from "./generated/AnalizadorVisitor.js";
export class CustomAnalizadorVisitor extends AnalizadorVisitor {
    constructor() {
        super();
        this.variables= {};
    }
    visitPrograma(ctx) {
        const nombrePrograma = ctx.identificador().getText();
        console.log(`Visitando programa: ${nombrePrograma}`);
        return this.visitChildren(ctx);
    }

    visitInstruccion(ctx) {
        if (ctx.asignacion()) {
            return this.visit(ctx.asignacion());
        } else if (ctx.excepcion()) {
            return this.visit(ctx.excepcion());
        } else if (ctx.bloque()) {
            return this.visit(ctx.bloque());
        } else if (ctx.getText().startsWith("imprimir")) {
            const expr = this.visit(ctx.expresion());
            console.log(`imprimir: ${expr}`);
            return expr;
        }
    }

    visitAsignacion(ctx) {
        const id = ctx.identificador().getText(); // por ejemplo: nombre
        const valor = this.visit(ctx.expresion()); // por ejemplo: "Juan"
        const limpio = valor.replace(/^"|"$/g, ''); // quita comillas si son cadenas
        this.variables[id] = limpio; // guarda la variable
        console.log(`Asignando: ${id} = ${limpio}`);
        return null;
    }

    visitExcepcion(ctx) {
        console.log("🛡️ Procesando bloque con manejo de error");
        try {
            this.visit(ctx.bloque(0)); // bloque principal
        } catch (e) {
            const varError = ctx.identificador().getText();
            console.log(`Capturado error en ${varError}: ${e}`);
            this.visit(ctx.bloque(1)); // bloque manejarError
        }
    }

    visitBloque(ctx) {
        return ctx.instruccion().map(instr => this.visit(instr));
    }

    visitExpresion(ctx) {
        const terminos = ctx.termino().map(t => this.visit(t));
        return terminos.join("");
    }

    visitTermino(ctx) {
        if (ctx.numero()) return ctx.getText();
        if (ctx.CADENA()) return ctx.getText().replace(/^"|"$/g, ''); // sin comillas
        if (ctx.identificador()) {
            const nombre = ctx.getText();
            if (this.variables.hasOwnProperty(nombre)) {
                return this.variables[nombre];
            } else {
                throw `Variable no definida: ${nombre}`;
            }
        }
        if (ctx.expresion()) return this.visit(ctx.expresion());
        return '';
    }
}