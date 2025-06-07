import AnalizadorListener from "./generated/AnalizadorListener.js";

export class CustomAnalizadorListener extends AnalizadorListener {
    enterPrograma(ctx) {
        console.log('Iniciando programa : ${ctx.identificador().getText()}');
    }

    enterInstruccion(ctx) {
        if (ctx.asignacion()) {
            console.log("↳ Instrucción: Asignación");
        } else if (ctx.excepcion()) {
            console.log("↳ Instrucción: Manejo de Excepción");
        } else if (ctx.bloque()) {
            console.log("↳ Instrucción: Bloque");
        } else if (ctx.getText().startsWith("imprimir")) {
            console.log("↳ Instrucción: Imprimir");
        }
    }

    enterExcepcion(ctx) {
        const errorVar = ctx.identificador().getText();
        console.log('→ Procesar bloque con captura de error : ${errorVar}');
    }

    enterAsignacion(ctx) {
        const variable = ctx.identificador().getText();
        console.log('→ Asignación a variable: ${variable}');
    }

    enterExpresion(ctx) {
        console.log("→ Evaluando expresión");
    }

    enterImprimir(ctx) {
        console.log("→ Ejecutando 'imprimir'");
    }
}