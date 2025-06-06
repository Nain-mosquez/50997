grammar Analizador;

// Reglas del parser (sintácticas)
programa     : 'programa' identificador LLAVE_IZQ instruccion* LLAVE_DER ;
instruccion  : asignacion
             | excepcion
             | bloque
             | 'imprimir' expresion PUNTOYCOMA ;

asignacion   : identificador IGUAL expresion PUNTOYCOMA ;

excepcion    : 'procesar' bloque 'manejarError' PAR_IZQ identificador PAR_DER bloque ;

bloque       : LLAVE_IZQ instruccion* LLAVE_DER ;

expresion    : termino ( '+' termino )* ;

termino      : numero
             | identificador
             | CADENA
             | PAR_IZQ expresion PAR_DER ;

// Reglas del lexer (léxicas)
identificador : LETRA (LETRA | DIGITO)* ;
numero        : DIGITO+ ;
CADENA        : '"' (~["\r\n])* '"' ;

LETRA         : [a-zA-Z] ;
DIGITO        : [0-9] ;

LLAVE_IZQ     : '{' ;
LLAVE_DER     : '}' ;
PAR_IZQ       : '(' ;
PAR_DER       : ')' ;
IGUAL         : '=' ;
PUNTOYCOMA    : ';' ;

ESPACIOS      : [ \t\r\n]+ -> skip ; // Ignorar espacios y saltos de línea

